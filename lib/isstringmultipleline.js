/*==================
[NodeJS] Advanced Determine - Is String Multiple Line
	Language:
		NodeJS/10.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @description Determine item is type of multiple line string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.trim=false] Trim carriage return, linefeed, tab, and whitespace before counting length.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item, option) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/gu) !== -1);
};
module.exports = isStringMultipleLine;
