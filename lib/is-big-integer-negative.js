const isBigInteger = require("./is-big-integer.js");
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
