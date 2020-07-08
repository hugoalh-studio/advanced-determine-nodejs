/*==================
[NodeJS] Advanced Determine - Is String Upper Case
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isString = require("./isstring.js");
/**
 * @function isStringUpperCase
 * @param {string} item
 * @returns {boolean}
 */
function isStringUpperCase(item) {
	if (isString(item) == false) {
		return internalService.customTypeError(`Invalid type of "item"! Require type of string.`);
	};
	const bin = item.toUpperCase();
	if (item !== bin) {
		return false;
	};
	return true;
};
module.exports = isStringUpperCase;
