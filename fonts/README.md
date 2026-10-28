# Three-dimensional label fonts

The WebGL renderer loads `public/fonts/font-atlas.png` and `font-def.json`.
The original Roboto and Computer Modern source atlases and metrics in this
directory remain unchanged. Chinese label glyphs are generated from
[Noto Sans SC Regular, release Sans2.004](https://github.com/notofonts/noto-cjk/blob/Sans2.004/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf).
Its copyright notice and SIL Open Font License are distributed in
[`public/fonts/NotoSansSC-OFL.txt`](../public/fonts/NotoSansSC-OFL.txt), including in static exports.

## Regenerating the label atlas

1. Update the `model.*` entries in `src/llm/i18n/messages.ts` for both languages.
2. Download the upstream font linked above to a local path outside the repository.
   The full source font is only needed for generation and is not shipped to browsers.
3. Run these commands from the repository root:

   ```sh
   node .yarn/releases/yarn-4.1.0.cjs font:labels /path/to/NotoSansSC-Regular.otf
   node .yarn/releases/yarn-4.1.0.cjs typecheck
   ```

The generator verifies the source SHA-256:
`faa6c9df652116dde789d351359f3d7e5d2285a2b2a1f04a2d7244df706d5ea9`.
It derives the additional characters from all `model.*` messages, checks for
missing source glyphs, and generates a 36 px MSDF subset with distance range 4.
The subset occupies a separate region in the combined atlas. Its glyph metrics
are aligned to the original regular face's baseline; existing Latin and math
pixels, advances, offsets, kerning, and line heights are preserved.

Commit both generated files together. The packed format uses 12 16-bit values
per glyph: IDs and BMP code points are unsigned, while offsets and kerning are
signed. Characters outside the BMP require a format change. Additional label
characters outside Noto Sans SC's coverage require a suitable source font.

`create-font-atlas.jsm` is the legacy generator for the original Latin/math
assets. If those source assets are intentionally regenerated, run `font:labels`
afterward to restore the Chinese subset in the public atlas.

After regenerating, check the labels in both languages at desktop and narrow
widths, including camera zoom and label overlap.
