/*==================
[NodeJS] Advanced Determine - Is String Upper Case
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @description Determine item is type of uppercase string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item) {
	if (isString(item) != true) {
		return false;
	};
	const bin = item.toUpperCase();
	if (item !== bin) {
		return false;
	};
	return true;
};
module.exports = isStringUpperCase;
