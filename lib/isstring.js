/*==================
[NodeJS] Advanced Determine - Is String
	Language:
		NodeJS 14
==================*/
const isObjectPair = require("./isobjectpair.js");
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option) {
	let runtime = {
		allowWhitespace: true
	};
	if (isObjectPair(option) == true) {
		if (typeof option.allowWhitespace != "undefined") {
			if (typeof option.allowWhitespace != "boolean") {
				throw new TypeError(`Argument "option.allowWhitespace" must be type of boolean! ([NodeJS] Advanced Determine - Is String)`);
			};
			runtime.allowWhitespace = option.allowWhitespace;
		};
	};
	if (typeof item != "string") {
		return false;
	};
	if (runtime.allowWhitespace == false) {
		item = item.replace(/[\s\t\r\n]/gu, "");
	};
	return (
		(item.length > 0) ? true : null
	);
};
module.exports = isString;
