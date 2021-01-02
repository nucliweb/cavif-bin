# cavif-bin

cavif bin-wrapper that makes it seamlessly available as a local dependency

## About AVIF

<img src="https://github.com/nucliweb/cavif-bin/blob/main/assets/AV1.svg?raw=true" align="right"
     alt="AVIF logo" width="180" height="100">

[AVIF] offers significant compression gains vs. JPEG and WebP, with a recent Netflix study showing 50% savings vs. standard JPEG and > 60% savings on 4:4:4 content


## Install

```bash
npm install cavif-bin
```

## Usage

```js
const {execFile} = require('child_process');
const cavif = require('cavif-bin');

execFile(cavif, ['input.png', '-o', 'output.avif'], err => {
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
