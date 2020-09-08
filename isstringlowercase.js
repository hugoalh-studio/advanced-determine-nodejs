/*==================
[NodeJS] Advanced Determine - Is String Lower Case
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @description Determine item is type of lowercase string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item) {
	if (isString(item) != true) {
		return false;
	}
	return (
		item === item.toLowerCase()
	);
}
module.exports = isStringLowerCase;
