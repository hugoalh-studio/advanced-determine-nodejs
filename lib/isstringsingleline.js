/*==================
[NodeJS] Advanced Determine - Is String Single Line
	Language:
		NodeJS/10.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item, option) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/gu) === -1);
};
module.exports = isStringSingleLine;
