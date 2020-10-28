/*==================
[NodeJS] Advanced Determine - Is Big Integer Positive
	Language:
		NodeJS/10.13.0
==================*/
const isBigInteger = require("./isbiginteger.js");
/**
 * @function isBigIntegerPositive
 * @alias isBigIntPst
 * @description Determine item is type of positive big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPositive(item) {
	return (isBigInteger(item) === true && item >= 0n);
};
module.exports = isBigIntegerPositive;
