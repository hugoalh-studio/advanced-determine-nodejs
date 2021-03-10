/*==================
Advanced Determine - Is String
	Language:
		NodeJS/14.15.0
==================*/
const checkOption = require("./internal/checkoption.js");
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow carriage return, linefeed, tab, and whitespace in the string before counting it's length.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowWhitespace: true
	};
	if (typeof option.allowWhitespace !== "undefined") {
		if (typeof option.allowWhitespace !== "boolean") {
			throw new TypeError(`Argument "option.allowWhitespace" must be type of boolean! (Advanced Determine - Is String)`);
		};
		runtime.allowWhitespace = option.allowWhitespace;
	};
	if (typeof item !== "string") {
		return false;
	};
	if (runtime.allowWhitespace === false) {
		item = item.replace(/[\n\r\s\t]/gu, "");
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isString;
