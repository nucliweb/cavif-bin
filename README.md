# cavif-bin

cavif bin-wrapper that makes it seamlessly available as a local dependency

## About AVIF

<img src="https://github.com/nucliweb/cavif-bin/blob/main/assets/AV1.svg?raw=true" align="right"
     alt="AVIF logo" width="180" height="100">

[AVIF] offers significant compression gains vs. JPEG and WebP, with a recent Netflix study showing 50% savings vs. standard JPEG and > 60% savings on 4:4:4 content

## Underhood

`cavif-bin` use [cavif](https://github.com/kornelski/cavif-rs) **v0.6.4** with [BSD 3-Clause License](https://github.com/kornelski/cavif-rs/blob/main/LICENSE) and Copyright (c) 2020, [Kornel](https://github.com/kornelski), as a AVIF coder.

### Encoder options

| Option | Description |
| ------ | ----------- |
| --quality=n | Quality from 1 (worst) to 100 (best), the default value is 80. The numbers have different meaning than JPEG's quality scale. Beware when comparing codecs. |
| --speed=n | Encoding speed between 1 (best, but slowest) and 10 (fastest, but a blurry mess), the default value is 1. Encoding of AVIF is pretty slow, so you need either a) beefy multicore machine b) avoid large images c) patience. |
| --overwrite | Replace files if there's .avif already. By default existing files are left untouched. |
-o path | Write output to this path instead of samefile.avif. If multiple input files are specified, it's interpreted as a directory. |
| --quiet | Don't print anything during conversion. |
| --premultiplied-alpha | Warning: currently incompatible with libavif. Improves compression of transparent images by clearing RGB of fully transparent pixels and lowering quality of semi-transparent colors. |
| --dirty-alpha | Don't change RGB values of transparent pixels. By default irrelevant color of transparent pixels is cleared to avoid wasting space. |
| --color=rgb | encode using RGB color space instead of YCbCr color space. Makes color closer to lossless, but makes files larger. |
## Install

```bash
npm install cavif-bin
```

## Usage

```js
const {execFile} = require('child_process');
const cavif = require('cavif-bin');

execFile(cavif, ['input.png','--quality=74', '-o', 'output.avif'], err => {
  if (err) throw err;
  console.log('Image is converted!');
});
```

## CLI

You can install `cavif` globally.

```bash
npm install --global cavif-bin
```

And use it as a CLI command.

```bash
cavif --help
```

## AVIF browsers support

* Chrome Desktop 85+
* Firefox 63+ (with `media.av1.enabled` activated)
* Firefox for Android 64+ (with `media.av1.enabled` and `media.av1.use-dav1d` activated)
* Edge 18+ (with `AV1 Video Extension` installed)

## License

MIT © [nucliweb](https://github.com/nucliweb)

[AVIF]: https://aomediacodec.github.io/av1-avif/
