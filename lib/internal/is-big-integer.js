const isPrimeNumber = require("./is-prime-number.js");
const maximumSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
const minimumSafeInteger = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @private
 * @function $isBigInteger
 * @description Determine item is type of big integer or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even big integer.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the big integer.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the big integer.
 * @param {bigint} [param1.maximum=Infinity] Maximum of the big integer.
 * @param {bigint} [param1.minimum=-Infinity] Minimum of the big integer.
 * @param {boolean} [param1.negative] Whether a negative big integer.
 * @param {boolean} [param1.odd] Whether an odd big integer.
 * @param {boolean} [param1.positive] Whether a positive big integer.
 * @param {boolean} [param1.prime] Whether a prime big integer.
 * @param {boolean} [param1.safe] Whether an IEEE-754 big integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
 * @returns {item is bigint} Determine result.
 */
function $isBigInteger(item, {
	even,
	exclusiveMaximum = false,
	exclusiveMinimum = false,
	maximum = Infinity,
	minimum = -Infinity,
	negative,
	odd,
	positive,
	prime,
	safe,
	unsafe
} = {}) {
	if (
		typeof item !== "bigint" ||
		(even === false && item % 2n === 0n) ||
		(even === true && item % 2n !== 0n) ||
		(exclusiveMaximum && maximum <= item) ||
		(!exclusiveMaximum && maximum < item) ||
		(exclusiveMinimum && item <= minimum) ||
		(!exclusiveMinimum && item < minimum) ||
		((
			negative === true ||
			positive === false
		) && item >= 0n) ||
		((
			positive === true ||
			negative === false
		) && item < 0n) ||
		(odd === false && item % 2n !== 0n) ||
		(odd === true && item % 2n === 0n) ||
		(prime === false && isPrimeNumber(item)) ||
		(prime === true && !isPrimeNumber(item)) ||
		((
			safe === true ||
			unsafe === false
		) && (
			maximumSafeInteger < item ||
			item < minimumSafeInteger
		)) ||
		((
			unsafe === true ||
			safe === false
		) && minimumSafeInteger <= item && item <= maximumSafeInteger)
	) {
		return false;
	}
	return true;
}
module.exports = $isBigInteger;
