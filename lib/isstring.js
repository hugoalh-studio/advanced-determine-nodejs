/*==================
[NodeJS] Advanced Determine - Is String
	Language:
		NodeJS/10.13.0
==================*/
const isObjectPair = require("./isobjectpair.js");
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowMultipleLine=true] Allow multiple line.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	let runtime = {
		allowMultipleLine: true,
		allowWhitespace: true
	};
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Determine - Is String)`);
	};
	if (typeof option.allowMultipleLine !== "undefined") {
		if (typeof option.allowMultipleLine !== "boolean") {
			throw new TypeError(`Argument "option.allowMultipleLine" must be type of boolean! ([NodeJS] Advanced Determine - Is String)`);
		};
		runtime.allowMultipleLine = option.allowMultipleLine;
	};
	if (typeof option.allowWhitespace !== "undefined") {
		if (typeof option.allowWhitespace !== "boolean") {
			throw new TypeError(`Argument "option.allowWhitespace" must be type of boolean! ([NodeJS] Advanced Determine - Is String)`);
		};
		runtime.allowWhitespace = option.allowWhitespace;
	};
	if (typeof item !== "string") {
		return false;
	};
	if (runtime.allowMultipleLine === false) {
		item = item.replace(/[\n\r]/gu, "");
	};
	if (runtime.allowWhitespace === false) {
		item = item.replace(/[\s\t]/gu, "");
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isString;
