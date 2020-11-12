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
 * @param {boolean} [option.trim=false] Trim carriage return, linefeed, tab, and whitespace before counting length.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	let runtime = {
		trim: false
	};
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Determine - Is String)`);
	};
	if (typeof option.trim !== "undefined") {
		if (typeof option.trim !== "boolean") {
			throw new TypeError(`Argument "option.trimWhitespace" must be type of boolean! ([NodeJS] Advanced Determine - Is String)`);
		};
		runtime.trim = option.trim;
	};
	if (typeof item !== "string") {
		return false;
	};
	if (runtime.trim === false) {
		item = item.replace(/[\n\r\s\t]/gu, "");
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isString;
