import undefinish from "@hugoalh/undefinish";
import { checkNumber, checkNumberWithMaximum } from "./internal/check-item.js";
import { integerTypesRange } from "./internal/integer-types-range.js";
import { isPrimeNumber } from "./internal/is-prime-number.js";
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
			throw new TypeError(`Argument \`even\` must be type of boolean or undefined!`);
		}
		if (typeof finite !== "boolean" && typeof finite !== "undefined") {
			throw new TypeError(`Argument \`finite\` must be type of boolean or undefined!`);
		}
		if (typeof float !== "boolean" && typeof float !== "undefined") {
			throw new TypeError(`Argument \`float\` must be type of boolean or undefined!`);
		}
		if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
			throw new TypeError(`Argument \`infinite\` must be type of boolean or undefined!`);
		}
		if (typeof integer !== "boolean" && typeof integer !== "undefined") {
			throw new TypeError(`Argument \`integer\` must be type of boolean or undefined!`);
		}
		if (!checkNumber(maximum) && typeof maximum !== "undefined") {
			throw new TypeError(`Argument \`maximum\` must be type of number or undefined!`);
		}
		if (typeof maximumExclusive !== "boolean") {
			throw new TypeError(`Argument \`maximumExclusive\` must be type of boolean!`);
		}
		if (!checkNumberWithMaximum(minimum, undefinish(maximum, Infinity)) && typeof minimum !== "undefined") {
			throw new TypeError(`Argument \`minimum\` must be type of number${typeof maximum === "number" ? ` and <= ${maximum},` : ""} or undefined!`);
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
			this.#float = undefined;
			this.#integer = true;
			let [itrMinimum, itrMaximum] = integerTypesRange(type);
			this.#maximum = Number(itrMaximum);
			this.#minimum = Number(itrMinimum);
		} else if (typeof type === "undefined") {
			this.#maximumExclusive = maximumExclusive;
			this.#minimumExclusive = minimumExclusive;
			this.#float = float;
			this.#integer = integer;
			this.#maximum = maximum;
			this.#minimum = minimum;
		} else {
			throw new TypeError(`Argument \`type\` must be type of string or undefined!`);
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
		let itemIsSafeInteger = Number.isSafeInteger(item);
		if (
			typeof item !== "number" ||
			Number.isNaN(item) ||
			(this.#even === false && itemIsSafeInteger && item % 2 === 0) ||
			(this.#even === true && (
				!itemIsSafeInteger ||
				item % 2 !== 0
			)) ||
			(this.#maximum === "number" && this.#maximumExclusive && this.#maximum <= item) ||
			(this.#maximum === "number" && !this.#maximumExclusive && this.#maximum < item) ||
			(this.#minimum === "number" && this.#minimumExclusive && item <= this.#minimum) ||
			(this.#minimum === "number" && !this.#minimumExclusive && item < this.#minimum) ||
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
			(this.#odd === false && itemIsSafeInteger && item % 2 !== 0) ||
			(this.#odd === true && (
				!itemIsSafeInteger ||
				item % 2 === 0
			)) ||
			(this.#prime === false && itemIsSafeInteger && isPrimeNumber(item)) ||
			(this.#prime === true && (
				!itemIsSafeInteger ||
				!isPrimeNumber(item)
			)) ||
			(
				(
					this.#safe === true ||
					this.#unsafe === false
				) && (
					item < Number.MIN_SAFE_INTEGER ||
					item > Number.MAX_SAFE_INTEGER
				)
			) ||
			((
				this.#unsafe === true ||
				this.#safe === false
			) && item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER)
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
