/*==================
[NodeJS] Advanced Determine - Is String Lower Case
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isString = require("./isstring.js");
/**
 * @function isStringLowerCase
 * @param {string} item
 * @returns {boolean}
 */
function isStringLowerCase(item) {
	if (isString(item) == false) {
		return internalService.customTypeError(`Invalid type of "item"! Require type of string.`);
	};
	const bin = item.toLowerCase();
	if (item !== bin) {
		return false;
	};
	return true;
};
module.exports = isStringLowerCase;
