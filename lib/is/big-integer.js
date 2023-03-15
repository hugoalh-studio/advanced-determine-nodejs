import { BigIntegerItemFilter } from "../item-filter/big-integer.js";
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item with the filter of type of big integer.
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
 * @param {string} [param1.type] Type of the big integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item, {
	even,
	exclusiveMaximum,
	exclusiveMinimum,
	maximum,
	minimum,
	negative,
	odd,
	positive,
	prime,
	safe,
	type,
	unsafe,
	...aliases
} = {}) {
	return new BigIntegerItemFilter({
		even,
		exclusiveMaximum,
		exclusiveMinimum,
		maximum,
		minimum,
		negative,
		odd,
		positive,
		prime,
		safe,
		type,
		unsafe,
		...aliases
	}).test(item);
}
export {
	isBigInteger
};
