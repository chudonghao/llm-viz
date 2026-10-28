export interface ICharDef {
    id: number;
    index: number;
    char: string;
    x: number;
    y: number;
    width: number;
    height: number;
    xoffset: number;
    yoffset: number;
    xadvance: number;
    page: number;
    chnl: number;
}

export interface IFontCommonDef {
    lineHeight: number;
    base: number;
    scaleW: number;
    scaleH: number;
    pages: number;
    // assume multi-color msdf font
}

export function decodeFontFace(name: string, common: IFontCommonDef, chars: Int16Array, kernings: Int16Array) {
    const charMap = new Map<string, ICharDef>();
    const charCodeMap = new Map<number, ICharDef>();
    for (let offset = 0; offset < chars.length; offset += 12) {
        // IDs are unsigned BMP code points; offsets and kerning amounts stay signed.
        const char: ICharDef = {
            id: chars[offset] & 0xffff,
            index: chars[offset + 1] & 0xffff,
            char: String.fromCharCode(chars[offset + 2] & 0xffff),
            x: chars[offset + 3],
            y: chars[offset + 4],
            width: chars[offset + 5],
            height: chars[offset + 6],
            xoffset: chars[offset + 7],
            yoffset: chars[offset + 8],
            xadvance: chars[offset + 9],
            page: chars[offset + 10],
            chnl: chars[offset + 11],
        };
        charMap.set(char.char, char);
        charCodeMap.set(char.id, char);
    }

    const kernMap = new Map<string, number>();
    for (let offset = 0; offset < kernings.length; offset += 3) {
        const first = charCodeMap.get(kernings[offset] & 0xffff)!.char;
        const second = charCodeMap.get(kernings[offset + 1] & 0xffff)!.char;
        kernMap.set(`${first}${second}`, kernings[offset + 2]);
    }
    return { name, common, charMap, kernMap };
}

// Match the existing CSS text sizing.
export const scaleFudgeFactor = 1.04;

export function measureFontTextWidth(face: ReturnType<typeof decodeFontFace>, text: string, scale: number) {
    let x = 0;
    let prevCodePoint = '';
    for (const codePoint of text) {
        const charDef = face.charMap.get(codePoint);
        if (!charDef) continue;
        x += (face.kernMap.get(`${prevCodePoint}${codePoint}`) || 0) + charDef.xadvance;
        prevCodePoint = codePoint;
    }
    return x * scale / face.common.lineHeight * scaleFudgeFactor;
}
