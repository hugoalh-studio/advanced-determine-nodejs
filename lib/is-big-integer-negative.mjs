/**
 * @function isBigIntegerNegative
 * @alias isBigIntNgt
 * @description Determine item is type of negative big integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerNegative(item) {
	return (typeof item === "bigint" && item < 0n);
};
export default isBigIntegerNegative;
