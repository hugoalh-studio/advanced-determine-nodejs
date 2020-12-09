/*==================
[NodeJS] Advanced Determine - Is Big Integer Negative
	Language:
		NodeJS/14.15.0
==================*/
const isBigInteger = require("./isbiginteger.js");
/**
 * @function isBigIntegerNegative
 * @alias isBigIntNgt
 * @description Determine item is type of negative big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerNegative(item) {
	return (isBigInteger(item) === true && item < 0n);
};
module.exports = isBigIntegerNegative;
