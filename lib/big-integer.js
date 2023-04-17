import undefinish from "@hugoalh/undefinish";
import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
	#even;
	#maximum;
	#maximumExclusive;
	#minimum;
	#minimumExclusive;
	#negative;
	#odd;
	#positive;
	#prime;
	#safe;
	#unsafe;
	/**
	 * @constructor
	 * @description Initialize the filter of type of big integer to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.even] Whether an even big integer.
	 * @param {bigint} [param0.maximum] Maximum of the big integer.
	 * @param {boolean} [param0.maximumExclusive=false] Whether to exclusive maximum of the big integer.
	 * @param {bigint} [param0.minimum] Minimum of the big integer.
	 * @param {boolean} [param0.minimumExclusive=false] Whether to exclusive minimum of the big integer.
	 * @param {boolean} [param0.negative] Whether a negative big integer.
	 * @param {boolean} [param0.odd] Whether an odd big integer.
	 * @param {boolean} [param0.positive] Whether a positive big integer.
	 * @param {boolean} [param0.prime] Whether a prime big integer.
	 * @param {boolean} [param0.safe] Whether an IEEE-754 big integer.
	 * @param {string} [param0.type] Type of the big integer.
	 * @param {boolean} [param0.unsafe] Whether not an IEEE-754 big integer.
	 */
	constructor({
		even,
		maximum,
		maximumExclusive,
		minimum,
		minimumExclusive,
		negative,
		odd,
		positive,
		prime,
		safe,
		type,
		unsafe,
		...aliases
	} = {}) {
		maximum = undefinish(maximum, aliases.max);
		maximumExclusive = undefinish(maximumExclusive, aliases.maxExclusive, aliases.exclusiveMaximum, aliases.exclusiveMax, false);
		minimum = undefinish(minimum, aliases.min);
		minimumExclusive = undefinish(minimumExclusive, aliases.minExclusive, aliases.exclusiveMinimum, aliases.exclusiveMin, false);
		negative = undefinish(negative, aliases.ngt, aliases.nega);
		positive = undefinish(positive, aliases.pst, aliases.posi);
		if (typeof even !== "boolean" && typeof even !== "undefined") {
			throw new TypeError(`Argument \`even\` must be type of boolean or undefined!`);
		}
		if (typeof maximum !== "bigint" && typeof maximum !== "undefined") {
			throw new TypeError(`Argument \`maximum\` must be type of big integer or undefined!`);
		}
		if (typeof maximumExclusive !== "boolean") {
			throw new TypeError(`Argument \`maximumExclusive\` must be type of boolean!`);
		}
		if (!(typeof minimum === "bigint" && ((typeof maximum === "bigint") ? (minimum <= maximum) : true)) && typeof minimum !== "undefined") {
			throw new TypeError(`Argument \`minimum\` must be type of big integer${typeof maximum === "bigint" ? ` and <= ${maximum}n,` : ""} or undefined!`);
		}
		if (typeof minimumExclusive !== "boolean") {
			throw new TypeError(`Argument \`minimumExclusive\` must be type of boolean!`);
		}
		if (typeof negative !== "boolean" && typeof negative !== "undefined") {
			throw new TypeError(`Argument \`negative\` must be type of boolean or undefined!`);
		}
		if (typeof odd !== "boolean" && typeof odd !== "undefined") {
			throw new TypeError(`Argument \`odd\` must be type of boolean or undefined!`);
		}
		if (typeof positive !== "boolean" && typeof positive !== "undefined") {
			throw new TypeError(`Argument \`positive\` must be type of boolean or undefined!`);
		}
		if (typeof prime !== "boolean" && typeof prime !== "undefined") {
			throw new TypeError(`Argument \`prime\` must be type of boolean or undefined!`);
		}
		if (typeof safe !== "boolean" && typeof safe !== "undefined") {
			throw new TypeError(`Argument \`safe\` must be type of boolean or undefined!`);
		}
		if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
			throw new TypeError(`Argument \`unsafe\` must be type of boolean or undefined!`);
		}
		if (typeof type === "string") {
			this.#maximumExclusive = false;
			this.#minimumExclusive = false;
			[this.#minimum, this.#maximum] = integralNumericTypeRange(type);
		} else if (typeof type === "undefined") {
			this.#maximumExclusive = maximumExclusive;
			this.#minimumExclusive = minimumExclusive;
			this.#maximum = maximum;
			this.#minimum = minimum;
		} else {
			throw new TypeError(`Argument \`type\` must be type of string or undefined!`);
		}
		this.#even = even;
		this.#negative = negative;
		this.#odd = odd;
		this.#positive = positive;
		this.#prime = prime;
		this.#safe = safe;
		this.#unsafe = unsafe;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of big integer.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			typeof item !== "bigint" ||
			(this.#even === false && item % 2n === 0n) ||
			(this.#even === true && item % 2n !== 0n) ||
			(typeof this.#maximum === "bigint" && this.#maximumExclusive && this.#maximum <= item) ||
			(typeof this.#maximum === "bigint" && !this.#maximumExclusive && this.#maximum < item) ||
			(typeof this.#minimum === "bigint" && this.#minimumExclusive && item <= this.#minimum) ||
			(typeof this.#minimum === "bigint" && !this.#minimumExclusive && item < this.#minimum) ||
			((
				this.#negative === true ||
				this.#positive === false
			) && item >= 0n) ||
			((
				this.#positive === true ||
				this.#negative === false
			) && item < 0n) ||
			(this.#odd === false && item % 2n !== 0n) ||
			(this.#odd === true && item % 2n === 0n) ||
			(this.#prime === false && isBigIntegerPrime(item)) ||
			(this.#prime === true && !isBigIntegerPrime(item)) ||
			((
				this.#safe === true ||
				this.#unsafe === false
			) && !isBigIntegerSafe(item)) ||
			((
				this.#unsafe === true ||
				this.#safe === false
			) && isBigIntegerSafe(item))
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of big integer.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.even] Whether an even big integer.
	 * @param {bigint} [param1.maximum] Maximum of the big integer.
	 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the big integer.
	 * @param {bigint} [param1.minimum] Minimum of the big integer.
	 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the big integer.
	 * @param {boolean} [param1.negative] Whether a negative big integer.
	 * @param {boolean} [param1.odd] Whether an odd big integer.
	 * @param {boolean} [param1.positive] Whether a positive big integer.
	 * @param {boolean} [param1.prime] Whether a prime big integer.
	 * @param {boolean} [param1.safe] Whether an IEEE-754 big integer.
	 * @param {string} [param1.type] Type of the big integer.
	 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		even,
		maximum,
		maximumExclusive,
		minimum,
		minimumExclusive,
		negative,
		odd,
		positive,
		prime,
		safe,
		type,
		unsafe,
		...aliases
	} = {}) {
		return new this({
			even,
			maximum,
			maximumExclusive,
			minimum,
			minimumExclusive,
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
}
/**
 * @function isBigInteger
 * @description Determine item with the filter of type of big integer.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even big integer.
 * @param {bigint} [param1.maximum] Maximum of the big integer.
 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the big integer.
 * @param {bigint} [param1.minimum] Minimum of the big integer.
 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the big integer.
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
	maximum,
	maximumExclusive,
	minimum,
	minimumExclusive,
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
		maximum,
		maximumExclusive,
		minimum,
		minimumExclusive,
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
	BigIntegerItemFilter,
	BigIntegerItemFilter as BigIntItemFilter,
	isBigInteger,
	isBigInteger as isBigInt
};
