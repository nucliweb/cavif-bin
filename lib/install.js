'use strict';
const log = require('logalot');
const bin = require('.');

bin.run(['--version']).then(() => {
	log.success('cavif pre-build test passed successfully');
}).catch(error => {
	log.warn(error.message);
	log.warn('cavif pre-build test failed');
});
