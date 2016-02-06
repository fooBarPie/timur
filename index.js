#! /usr/bin/env node

const args = process.argv.slice(2);

console.log(args[0]);

module.exports = function(width, height) {
	return width * height;
}
