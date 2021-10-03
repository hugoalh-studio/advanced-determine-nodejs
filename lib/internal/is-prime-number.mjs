/**
 * @private
 * @function bigIntegerSquareRoot
 * @param {bigint} item
 * @param {bigint} [x0=1n]
 * @returns {bigint}
 * @borrows From https://stackoverflow.com/a/53684036; Newton iteration.
 */
function bigIntegerSquareRoot(item, x0 = 1n) {
	let x1 = (item / x0 + x0) >> 1n;
	if (
		x0 === x1 ||
		x0 === x1 - 1n
	) {
		return x0;
	};
	return bigIntegerSquareRoot(item, x1);
};
/**
 * @private
 * @function isPrimeNumber
 * @param {(bigint|number)} item
 * @returns {boolean}
 */
function isPrimeNumber(item) {
	if (typeof item === "number") {
		item = BigInt(item);
	};
	if (
		item === 2n ||
		item === 3n ||
		item === 5n ||
		item === 7n
	) {
		return true;
	};
	if (
		item < 2n ||
		item % 2n === 0n
	) {
		return false;
	};
	let divisorMaximum = bigIntegerSquareRoot(item) + 1n;
	for (let divisor = 3n; divisor <= divisorMaximum; divisor += 2n) {
		if (item % divisor === 0n) {
			return false;
		};
	};
	return true;
};
export default isPrimeNumber;
