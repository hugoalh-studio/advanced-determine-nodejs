/**
 * @function isBigIntegerPositive
 * @alias isBigIntPst
 * @deprecated Replaced by `isBigInteger`.
 * @description Determine item is type of positive big integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPositive(item) {
	return (typeof item === "bigint" && item >= 0n);
};
module.exports = isBigIntegerPositive;
