/*==================
[NodeJS] Advanced Determine - Is String Lower Case
	Language:
		NodeJS/10.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.trim=false] Trim carriage return, linefeed, tab, and whitespace before counting length.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item, option) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item === item.toLowerCase());
};
module.exports = isStringLowerCase;
