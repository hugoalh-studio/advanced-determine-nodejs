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
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item) {
	if (isString(item) != true) {
		return false;
	};
	const bin = item.toLowerCase();
	if (item !== bin) {
		return false;
	};
	return true;
};
module.exports = isStringLowerCase;
