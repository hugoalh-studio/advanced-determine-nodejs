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
	}
	return (
		item === item.toUpperCase()
	);
}
module.exports = isStringUpperCase;
