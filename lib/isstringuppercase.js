/*==================
[NodeJS] Advanced Determine - Is String Upper Case
	Language:
		NodeJS/10.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @alias isStrUC
 * @description Determine item is type of upper case string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.trim=false] Trim carriage return, linefeed, tab, and whitespace before counting length.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item, option) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item === item.toUpperCase());
};
module.exports = isStringUpperCase;
