'use strict';
const path = require('path');
const test = require('ava');
const execa = require('execa');
const tempy = require('tempy');
const binCheck = require('bin-check');
const compareSize = require('compare-size');
const cavif = require('..');

test('return path to binary and verify that it is working', async t => {
	t.true(await binCheck(cavif, ['--version']));
});

test('minify and convert a PNG to AVIF', async t => {
	const temporary = tempy.directory();
	const src = path.join(__dirname, 'fixtures/test.png');
	const dest = path.join(temporary, 'test-png.avif');
	const args = [
		src,
		'-o',
		dest
	];

	await execa(cavif, args);
	const result = await compareSize(src, dest);

	t.true(result[dest] < result[src]);
});

test('minify and convert a JPG to AVIF', async t => {
	const temporary = tempy.directory();
	const src = path.join(__dirname, 'fixtures/test.jpg');
	const dest = path.join(temporary, 'test-jpg.avif');
	const args = [
		'--quality=74',
		src,
		'-o',
		dest
	];

	await execa(cavif, args);
	const result = await compareSize(src, dest);
	console.log(result[src])
	console.log(result[dest])

	t.true(result[dest] < result[src]);
});
