const isPrimeNumber = require("./is-prime-number.js");
/**
 * @private
 * @function $isNumber
 * @description Determine item is type of number or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even number.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the number.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.finite] Whether a finite number.
 * @param {boolean} [param1.float] Whether a float number.
 * @param {boolean} [param1.infinite] Whether an infinite number.
 * @param {boolean} [param1.integer] Whether an integer number.
 * @param {number} [param1.maximum=Infinity] Maximum of the number.
 * @param {number} [param1.minimum=-Infinity] Minimum of the number.
 * @param {boolean} [param1.negative] Whether a negative number.
 * @param {boolean} [param1.odd] Whether an odd number.
 * @param {boolean} [param1.positive] Whether a positive number.
 * @param {boolean} [param1.prime] Whether a prime number.
 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
 * @returns {item is number} Determine result.
 */
function $isNumber(item, {
	even,
	exclusiveMaximum = false,
	exclusiveMinimum = false,
	finite,
	float,
	infinite,
	integer,
	maximum = Infinity,
	minimum = -Infinity,
	negative,
	odd,
	positive,
	prime,
	safe,
	unsafe
} = {}) {
	let itemIsFinite = Number.isFinite(item);
	let itemIsInteger = Number.isInteger(item);
	let itemIsSafeInteger = Number.isSafeInteger(item);
	if (
		typeof item !== "number" ||
		Number.isNaN(item) ||
		(even === false && itemIsSafeInteger && item % 2 === 0) ||
		(even === true && (
			!itemIsSafeInteger ||
			item % 2 !== 0
		)) ||
		(exclusiveMaximum && maximum <= item) ||
		(!exclusiveMaximum && maximum < item) ||
		(exclusiveMinimum && item <= minimum) ||
		(!exclusiveMinimum && item < minimum) ||
		((
			finite === true ||
			infinite === false
		) && !itemIsFinite) ||
		((
			infinite === true ||
			finite === false
		) && itemIsFinite) ||
		((
			float === true ||
			integer === false
		) && itemIsInteger) ||
		((
			integer === true ||
			float === false
		) && !itemIsInteger) ||
		((
			negative === true ||
			positive === false
		) && item >= 0) ||
		((
			positive === true ||
			negative === false
		) && item < 0) ||
		(odd === false && itemIsSafeInteger && item % 2 !== 0) ||
		(odd === true && (
			!itemIsSafeInteger ||
			item % 2 === 0
		)) ||
		(prime === false && itemIsSafeInteger && isPrimeNumber(item)) ||
		(prime === true && (
			!itemIsSafeInteger ||
			!isPrimeNumber(item)
		)) ||
		((
			safe === true ||
			unsafe === false
		) && (
			item < Number.MIN_SAFE_INTEGER ||
			item > Number.MAX_SAFE_INTEGER
		)) ||
		((
			unsafe === true ||
			safe === false
		) && item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER)
	) {
		return false;
	}
	return true;
}
module.exports = $isNumber;
