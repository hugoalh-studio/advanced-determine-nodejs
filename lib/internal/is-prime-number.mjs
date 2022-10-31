/**
 * @private
 * @function bigIntegerSquareRoot
 * @param {bigint} n
 * @returns {bigint}
 * @note From https://stackoverflow.com/a/53684036.
 */
 function bigIntegerSquareRoot(n) {
	let x0 = 1n;
	while (true) {
		let x1 = (n / x0 + x0) >> 1n;
		if (
			x0 === x1 ||
			x0 === x1 - 1n
		) {
			return x0;
		}
		x0 = x1;
	}
}
/**
 * @private
 * @function isPrimeNumber
 * @param {bigint|number} item
 * @returns {boolean}
 */
function isPrimeNumber(item) {
	let itemRaw = (typeof item === "bigint") ? item : BigInt(item);
	if (
		itemRaw === 2n ||
		itemRaw === 3n ||
		itemRaw === 5n ||
		itemRaw === 7n
	) {
		return true;
	}
	if (
		itemRaw < 2n ||
		itemRaw % 2n === 0n ||
		itemRaw % 3n === 0n ||
		itemRaw % 5n === 0n ||
		itemRaw % 7n === 0n
	) {
		return false;
	}
	for (let divisor = 3n; divisor <= bigIntegerSquareRoot(itemRaw) + 1n; divisor += 2n) {
		if (itemRaw % divisor === 0n) {
			return false;
		}
	}
	return true;
}
export default isPrimeNumber;
