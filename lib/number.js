import undefinish from "@hugoalh/undefinish";
import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isNumberPrime, isNumberSafe } from "./native/number.js";
/**
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
class NumberItemFilter {
	#even;
	#finite;
	#float;
	#infinite;
	#integer;
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
	 * @description Initialize the filter of type of number to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.even] Whether an even number.
	 * @param {boolean} [param0.finite] Whether a finite number.
	 * @param {boolean} [param0.float] Whether a float number.
	 * @param {boolean} [param0.infinite] Whether an infinite number.
	 * @param {boolean} [param0.integer] Whether an integer number.
	 * @param {number} [param0.maximum] Maximum of the number.
	 * @param {boolean} [param0.maximumExclusive=false] Whether to exclusive maximum of the number.
	 * @param {number} [param0.minimum] Minimum of the number.
	 * @param {boolean} [param0.minimumExclusive=false] Whether to exclusive minimum of the number.
	 * @param {boolean} [param0.negative] Whether a negative number.
	 * @param {boolean} [param0.odd] Whether an odd number.
	 * @param {boolean} [param0.positive] Whether a positive number.
	 * @param {boolean} [param0.prime] Whether a prime number.
	 * @param {boolean} [param0.safe] Whether an IEEE-754 number.
	 * @param {string} [param0.type] Type of the integer.
	 * @param {boolean} [param0.unsafe] Whether not an IEEE-754 number.
	 */
	constructor({
		even,
		finite,
		float,
		infinite,
		integer,
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
		float = undefinish(float, aliases.flt);
		integer = undefinish(integer, aliases.int);
		maximum = undefinish(maximum, aliases.max);
		maximumExclusive = undefinish(maximumExclusive, aliases.maxExclusive, aliases.exclusiveMaximum, aliases.exclusiveMax, false);
		minimum = undefinish(minimum, aliases.min);
		minimumExclusive = undefinish(minimumExclusive, aliases.minExclusive, aliases.exclusiveMinimum, aliases.exclusiveMin, false);
		negative = undefinish(negative, aliases.ngt, aliases.nega);
		positive = undefinish(positive, aliases.pst, aliases.posi);
		if (typeof even !== "boolean" && typeof even !== "undefined") {
			throw new TypeError(`Filter argument \`even\` must be type of boolean or undefined!`);
		}
		if (typeof finite !== "boolean" && typeof finite !== "undefined") {
			throw new TypeError(`Filter argument \`finite\` must be type of boolean or undefined!`);
		}
		if (typeof float !== "boolean" && typeof float !== "undefined") {
			throw new TypeError(`Filter argument \`float\` must be type of boolean or undefined!`);
		}
		if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
			throw new TypeError(`Filter argument \`infinite\` must be type of boolean or undefined!`);
		}
		if (typeof integer !== "boolean" && typeof integer !== "undefined") {
			throw new TypeError(`Filter argument \`integer\` must be type of boolean or undefined!`);
		}
		if (!(typeof maximum === "number" && !Number.isNaN(maximum)) && typeof maximum !== "undefined") {
			throw new TypeError(`Filter argument \`maximum\` must be type of number or undefined!`);
		}
		if (typeof maximumExclusive !== "boolean") {
			throw new TypeError(`Filter argument \`maximumExclusive\` must be type of boolean!`);
		}
		if (typeof minimum === "number" && !Number.isNaN(minimum)) {
			if (typeof maximum === "number" && !(minimum <= maximum)) {
				throw new RangeError(`Filter argument \`minimum\` must be a number <= ${maximum}!`);
			}
		} else if (typeof minimum !== "undefined") {
			throw new TypeError(`Filter argument \`minimum\` must be type of number or undefined!`);
		}
		if (typeof minimumExclusive !== "boolean") {
			throw new TypeError(`Filter argument \`minimumExclusive\` must be type of boolean!`);
		}
		if (typeof negative !== "boolean" && typeof negative !== "undefined") {
			throw new TypeError(`Filter argument \`negative\` must be type of boolean or undefined!`);
		}
		if (typeof odd !== "boolean" && typeof odd !== "undefined") {
			throw new TypeError(`Filter argument \`odd\` must be type of boolean or undefined!`);
		}
		if (typeof positive !== "boolean" && typeof positive !== "undefined") {
			throw new TypeError(`Filter argument \`positive\` must be type of boolean or undefined!`);
		}
		if (typeof prime !== "boolean" && typeof prime !== "undefined") {
			throw new TypeError(`Filter argument \`prime\` must be type of boolean or undefined!`);
		}
		if (typeof safe !== "boolean" && typeof safe !== "undefined") {
			throw new TypeError(`Filter argument \`safe\` must be type of boolean or undefined!`);
		}
		if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
			throw new TypeError(`Filter argument \`unsafe\` must be type of boolean or undefined!`);
		}
		if (typeof type === "string") {
			this.#maximumExclusive = false;
			this.#minimumExclusive = false;
			this.#float = undefined;
			this.#integer = true;
			let [intrMinimum, intrMaximum] = integralNumericTypeRange(type);
			this.#maximum = Number(intrMaximum);
			this.#minimum = Number(intrMinimum);
		} else if (typeof type === "undefined") {
			this.#maximumExclusive = maximumExclusive;
			this.#minimumExclusive = minimumExclusive;
			this.#float = float;
			this.#integer = integer;
			this.#maximum = maximum;
			this.#minimum = minimum;
		} else {
			throw new TypeError(`Filter argument \`type\` must be type of string or undefined!`);
		}
		this.#even = even;
		this.#finite = finite;
		this.#infinite = infinite;
		this.#negative = negative;
		this.#odd = odd;
		this.#positive = positive;
		this.#prime = prime;
		this.#safe = safe;
		this.#unsafe = unsafe;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of number.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		let itemIsFinite = Number.isFinite(item);
		let itemIsInteger = Number.isInteger(item);
		if (
			typeof item !== "number" ||
			Number.isNaN(item) ||
			(this.#even === false && itemIsInteger && item % 2 === 0) ||
			(this.#even === true && (
				!itemIsInteger ||
				item % 2 !== 0
			)) ||
			(typeof this.#maximum === "number" && this.#maximumExclusive && this.#maximum <= item) ||
			(typeof this.#maximum === "number" && !this.#maximumExclusive && this.#maximum < item) ||
			(typeof this.#minimum === "number" && this.#minimumExclusive && item <= this.#minimum) ||
			(typeof this.#minimum === "number" && !this.#minimumExclusive && item < this.#minimum) ||
			((
				this.#finite === true ||
				this.#infinite === false
			) && !itemIsFinite) ||
			((
				this.#infinite === true ||
				this.#finite === false
			) && itemIsFinite) ||
			((
				this.#float === true ||
				this.#integer === false
			) && itemIsInteger) ||
			((
				this.#integer === true ||
				this.#float === false
			) && !itemIsInteger) ||
			((
				this.#negative === true ||
				this.#positive === false
			) && item >= 0) ||
			((
				this.#positive === true ||
				this.#negative === false
			) && item < 0) ||
			(this.#odd === false && itemIsInteger && item % 2 !== 0) ||
			(this.#odd === true && (
				!itemIsInteger ||
				item % 2 === 0
			)) ||
			(this.#prime === false && itemIsInteger && isNumberPrime(item)) ||
			(this.#prime === true && (
				!itemIsInteger ||
				!isNumberPrime(item)
			)) ||
			((
				this.#safe === true ||
				this.#unsafe === false
			) && !isNumberSafe(item)) ||
			((
				this.#unsafe === true ||
				this.#safe === false
			) && isNumberSafe(item))
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of number.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.even] Whether an even number.
	 * @param {boolean} [param1.finite] Whether a finite number.
	 * @param {boolean} [param1.float] Whether a float number.
	 * @param {boolean} [param1.infinite] Whether an infinite number.
	 * @param {boolean} [param1.integer] Whether an integer number.
	 * @param {number} [param1.maximum] Maximum of the number.
	 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the number.
	 * @param {number} [param1.minimum] Minimum of the number.
	 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the number.
	 * @param {boolean} [param1.negative] Whether a negative number.
	 * @param {boolean} [param1.odd] Whether an odd number.
	 * @param {boolean} [param1.positive] Whether a positive number.
	 * @param {boolean} [param1.prime] Whether a prime number.
	 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
	 * @param {string} [param1.type] Type of the integer.
	 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		even,
		finite,
		float,
		infinite,
		integer,
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
			finite,
			float,
			infinite,
			integer,
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
 * @function isNumber
 * @description Determine item with the filter of type of number.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even number.
 * @param {boolean} [param1.finite] Whether a finite number.
 * @param {boolean} [param1.float] Whether a float number.
 * @param {boolean} [param1.infinite] Whether an infinite number.
 * @param {boolean} [param1.integer] Whether an integer number.
 * @param {number} [param1.maximum] Maximum of the number.
 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the number.
 * @param {number} [param1.minimum] Minimum of the number.
 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.negative] Whether a negative number.
 * @param {boolean} [param1.odd] Whether an odd number.
 * @param {boolean} [param1.positive] Whether a positive number.
 * @param {boolean} [param1.prime] Whether a prime number.
 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
 * @param {string} [param1.type] Type of the integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
function isNumber(item, {
	even,
	finite,
	float,
	infinite,
	integer,
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
	return new NumberItemFilter({
		even,
		finite,
		float,
		infinite,
		integer,
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
	isNumber,
	NumberItemFilter
};
