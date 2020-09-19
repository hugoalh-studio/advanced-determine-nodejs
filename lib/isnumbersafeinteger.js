/*==================
[NodeJS] Advanced Determine - Is Number Safe Integer
	Language:
		NodeJS 14
==================*/
const isNumberInteger = require("./isnumberinteger.js");
/**
 * @function isNumberSafeInteger
 * @alias isNumSInt
 * @description Determine item is type of safe integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeInteger(item) {
	return (
		isNumberInteger(item) === true && Number.isSafeInteger(item) === true
	);
};
module.exports = isNumberSafeInteger;
