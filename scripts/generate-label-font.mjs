import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Jimp from 'jimp';
import generateBMFont from 'msdf-bmfont-xml';

const require = createRequire(import.meta.url);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = process.argv[2];
assert.ok(sourcePath, 'Usage: yarn font:labels /path/to/NotoSansSC-Regular.otf (see fonts/README.md)');
const fontSource = readFileSync(resolve(sourcePath));
assert.equal(createHash('sha256').update(fontSource).digest('hex'),
    'faa6c9df652116dde789d351359f3d7e5d2285a2b2a1f04a2d7244df706d5ea9',
    'Expected Noto Sans SC Regular from the Sans2.004 release');

const work = mkdtempSync(join(tmpdir(), 'llm-viz-font-'));
try {
    execFileSync(process.execPath, [
        require.resolve('typescript/bin/tsc'),
        'src/llm/i18n/messages.ts', '--target', 'ES2022', '--module', 'commonjs',
        '--strict', '--skipLibCheck', '--outDir', work,
    ], { cwd: root, stdio: 'pipe' });
    const { dictionaries } = require(join(work, 'messages.js'));
    const names = ['Roboto-Regular', 'cmmi12', 'cmsy10', 'cmr12'];
    const faces = names.map(name => JSON.parse(readFileSync(join(root, 'fonts', `${name}.json`), 'utf8')));
    const regular = faces[0];
    const originalChars = new Set(regular.chars.map(char => char.char));
    const labelText = Object.values(dictionaries).flatMap(messages => Object.entries(messages)
        .filter(([key]) => key.startsWith('model.'))
        .map(([, value]) => value.replace(/\{[a-zA-Z][a-zA-Z0-9]*\}/g, '0123456789'))).join('');
    const charset = [...new Set(labelText)].filter(char => !originalChars.has(char)).sort();
    assert.ok(charset.length, 'No additional label glyphs to generate');
    assert.ok(charset.every(char => char.codePointAt(0) <= 0xffff), 'The packed atlas supports BMP characters only');

    const [textures, generated] = await new Promise((resolve, reject) => {
        generateBMFont(fontSource, {
            filename: join(work, 'labels'),
            outputType: 'json', fieldType: 'msdf', charset,
            fontSize: 36, distanceRange: 4, textureSize: [512, 512], roundDecimal: 0,
        }, (error, textures, font) => error ? reject(error) : resolve([textures, font]));
    });
    const subset = JSON.parse(generated.data);
    assert.equal(textures.length, 1, 'Label subset exceeds its atlas region; increase the atlas size');
    for (const char of charset) {
        assert.ok(subset.chars.some(glyph => glyph.char === char && glyph.index !== 0), `Missing source glyph: ${char}`);
    }

    // Preserve all original pixels and metrics. Only the new glyphs need baseline alignment.
    const original = await Jimp.read(join(root, 'fonts/font-atlas.png'));
    const chinese = await Jimp.read(textures[0].texture);
    const width = original.bitmap.width + chinese.bitmap.width;
    const height = Math.max(original.bitmap.height, chinese.bitmap.height);
    const atlas = new Jimp(width, height, 0x000000ff);
    atlas.blit(original, 0, 0).blit(chinese, original.bitmap.width, 0);
    regular.chars.push(...subset.chars.map(glyph => ({ ...glyph,
        x: glyph.x + original.bitmap.width,
        yoffset: glyph.yoffset + regular.common.base - subset.common.base,
    })));
    regular.info.charset.push(...charset);

    const packed = { pages: ['font-atlas.png'], faces: faces.map((face, index) => {
        const chars = new Int16Array(face.chars.flatMap(glyph => [
            glyph.id, glyph.index, glyph.char.codePointAt(0), glyph.x, glyph.y,
            glyph.width, glyph.height, glyph.xoffset, glyph.yoffset, glyph.xadvance, glyph.page, glyph.chnl,
        ]));
        const kernings = new Int16Array(face.kernings.filter(kern => kern.amount !== 0)
            .flatMap(kern => [kern.first, kern.second, kern.amount]));
        return {
            name: names[index], common: { ...face.common, scaleW: width, scaleH: height },
            info: { ...face.info, charset: face.info.charset.join('') },
            chars: Buffer.from(chars.buffer).toString('base64'),
            kernings: Buffer.from(kernings.buffer).toString('base64'),
        };
    }) };
    const png = await atlas.getBufferAsync(Jimp.MIME_PNG);
    writeFileSync(join(root, 'public/fonts/font-atlas.png'), png);
    writeFileSync(join(root, 'public/fonts/font-def.json'), JSON.stringify(packed));
    console.log(`Added ${charset.length} label glyphs; atlas ${width} × ${height}, ${png.length} bytes.`);
} finally {
    rmSync(work, { recursive: true, force: true });
}
