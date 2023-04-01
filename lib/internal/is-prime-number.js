/**
 * @access private
 * @function bigIntegerSquareRoot
 * @param {bigint} n
 * @param {bigint} [x0=1n]
 * @returns {bigint}
 * @note From https://stackoverflow.com/a/53684036.
 */
function bigIntegerSquareRoot(n, x0 = 1n) {
	let x1 = (n / x0 + x0) >> 1n;
	if (
		x0 === x1 ||
		x0 === x1 - 1n
	) {
		return x0;
	}
	return bigIntegerSquareRoot(n, x1);
}
/**
 * @function isPrimeNumber
 * @param {bigint | number} item
 * @returns {boolean}
 */
function isPrimeNumber(item) {
	let itemResolve = (typeof item === "bigint") ? item : BigInt(item);
	if (
		itemResolve === 2n ||
		itemResolve === 3n ||
		itemResolve === 5n ||
		itemResolve === 7n
	) {
		return true;
	}
	if (
		itemResolve < 2n ||
		itemResolve % 2n === 0n ||
		itemResolve % 3n === 0n ||
		itemResolve % 5n === 0n ||
		itemResolve % 7n === 0n
	) {
		return false;
	}
	for (let divisor = 3n; divisor <= bigIntegerSquareRoot(itemResolve) + 1n; divisor += 2n) {
		if (itemResolve % divisor === 0n) {
			return false;
		}
	}
	return true;
}
export {
	isPrimeNumber
};
