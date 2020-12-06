/*==================
[NodeJS] Advanced Determine - Is String Single Line
	Language:
		NodeJS/12.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow carriage return, linefeed, tab, and whitespace in the string before counting it's length.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item, option) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/gu) === -1);
};
module.exports = isStringSingleLine;
