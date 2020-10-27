/*==================
[NodeJS] Advanced Determine - Is Big Integer
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item is type of big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item) {
	return (typeof item === "bigint");
};
module.exports = isBigInteger;
