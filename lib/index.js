'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/nucliweb/cavif-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}osx/cavif`, 'darwin')
	.src(`${url}linux/x64/cavif`, 'linux', 'x64')
	.src(`${url}win/x64/cavif.exe`, 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cavif.exe' : 'cavif');
