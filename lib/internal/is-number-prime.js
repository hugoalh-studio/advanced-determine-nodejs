/**
 * @private
 * @function isNumberPrime
 * @param {(bigint|number)} item
 * @returns {boolean}
 */
function isNumberPrime(item) {
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
	for (let index = 3n; index < item / 4n; index += 2n) {
		if (item % index === 0n) {
			return false;
		};
	};
	return true;
};
module.exports = isNumberPrime;
