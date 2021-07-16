const isString = require("./is-string.js");
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/gu) === -1);
};
module.exports = isStringSingleLine;
