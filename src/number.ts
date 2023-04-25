import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isNumberPrime, isNumberSafe } from "./native/number.js";
interface NumberItemFilterOptions {
	/**
	 * @property even
	 * @description Whether an even number.
	 * @default undefined
	 */
	even?: boolean;
	/**
	 * @property finite
	 * @description Whether a finite number.
	 * @default undefined
	 */
	finite?: boolean;
	/**
	 * @property float
	 * @description Whether a float number.
	 * @default undefined
	 */
	float?: boolean;
	/**
	 * @property infinite
	 * @description Whether an infinite number.
	 * @default undefined
	 */
	infinite?: boolean;
	/**
	 * @property integer
	 * @description Whether an integer number.
	 * @default undefined
	 */
	integer?: boolean;
	/**
	 * @property maximum
	 * @description Maximum of the number.
	 * @default undefined
	 */
	maximum?: number;
	/**
	 * @property maximumExclusive
	 * @description Whether to exclusive maximum of the number.
	 * @default false
	 */
	maximumExclusive?: boolean;
	/**
	 * @property minimum
	 * @description Minimum of the number.
	 * @default undefined
	 */
	minimum?: number;
	/**
	 * @property minimumExclusive
	 * @description Whether to exclusive minimum of the number.
	 * @default false
	 */
	minimumExclusive?: boolean;
	/**
	 * @property negative
	 * @description Whether a negative number.
	 * @default undefined
	 */
	negative?: boolean;
	/**
	 * @property odd
	 * @description Whether an odd number.
	 * @default undefined
	 */
	odd?: boolean;
	/**
	 * @property positive
	 * @description Whether a positive number.
	 * @default undefined
	 */
	positive?: boolean;
	/**
	 * @property prime
	 * @description Whether a prime number.
	 * @default undefined
	 */
	prime?: boolean;
	/**
	 * @property safe
	 * @description Whether an IEEE-754 number.
	 * @default undefined
	 */
	safe?: boolean;
	/**
	 * @property type
	 * @description Type of the integer.
	 * @default undefined
	 */
	type?: string;
	/**
	 * @property unsafe
	 * @description Whether not an IEEE-754 number.
	 * @default undefined
	 */
	unsafe?: boolean;
	/** @alias float */flt?: boolean;
	/** @alias integer */int?: boolean;
	/** @alias maximum */max?: number;
	/** @alias maximumExclusive */exclusiveMax?: boolean;
	/** @alias maximumExclusive */exclusiveMaximum?: boolean;
	/** @alias maximumExclusive */maxExclusive?: boolean;
	/** @alias minimum */min?: number;
	/** @alias minimumExclusive */exclusiveMin?: boolean;
	/** @alias minimumExclusive */exclusiveMinimum?: boolean;
	/** @alias minimumExclusive */minExclusive?: boolean;
	/** @alias negative */nega?: boolean;
	/** @alias negative */ngt?: boolean;
	/** @alias positive */posi?: boolean;
	/** @alias positive */pst?: boolean;
}
/**
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
class NumberItemFilter {
	#even?: boolean;
	#finite?: boolean;
	#float?: boolean;
	#infinite?: boolean;
	#integer?: boolean;
	#maximum?: number;
	#maximumExclusive: boolean;
	#minimum?: number;
	#minimumExclusive: boolean;
	#negative?: boolean;
	#odd?: boolean;
	#positive?: boolean;
	#prime?: boolean;
	#safe?: boolean;
	#unsafe?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of number to determine item.
	 * @param {NumberItemFilterOptions} [options={}] Options.
	 */
	constructor(options: NumberItemFilterOptions = {}) {
		let {
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
		} = options;
		float ??= aliases.flt;
		integer ??= aliases.int;
		maximum ??= aliases.max;
		maximumExclusive ??= aliases.maxExclusive ?? aliases.exclusiveMaximum ?? aliases.exclusiveMax ?? false;
		minimum ??= aliases.min;
		minimumExclusive ??= aliases.minExclusive ?? aliases.exclusiveMinimum ?? aliases.exclusiveMin ?? false;
		negative ??= aliases.ngt ?? aliases.nega;
		positive ??= aliases.pst ?? aliases.posi;
		if (typeof even !== "boolean" && typeof even !== "undefined") {
			throw new TypeError(`Argument \`options.even\` must be type of boolean or undefined!`);
		}
		if (typeof finite !== "boolean" && typeof finite !== "undefined") {
			throw new TypeError(`Argument \`options.finite\` must be type of boolean or undefined!`);
		}
		if (typeof float !== "boolean" && typeof float !== "undefined") {
			throw new TypeError(`Argument \`options.float\` must be type of boolean or undefined!`);
		}
		if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
			throw new TypeError(`Argument \`options.infinite\` must be type of boolean or undefined!`);
		}
		if (typeof integer !== "boolean" && typeof integer !== "undefined") {
			throw new TypeError(`Argument \`options.integer\` must be type of boolean or undefined!`);
		}
		if (!(typeof maximum === "number" && !Number.isNaN(maximum)) && typeof maximum !== "undefined") {
			throw new TypeError(`Argument \`options.maximum\` must be type of number or undefined!`);
		}
		if (typeof maximumExclusive !== "boolean") {
			throw new TypeError(`Argument \`options.maximumExclusive\` must be type of boolean!`);
		}
		if (typeof minimum === "number" && !Number.isNaN(minimum)) {
			if (typeof maximum === "number" && !(minimum <= maximum)) {
				throw new RangeError(`Argument \`options.minimum\` must be a number <= ${maximum}!`);
			}
		} else if (typeof minimum !== "undefined") {
			throw new TypeError(`Argument \`options.minimum\` must be type of number or undefined!`);
		}
		if (typeof minimumExclusive !== "boolean") {
			throw new TypeError(`Argument \`options.minimumExclusive\` must be type of boolean!`);
		}
		if (typeof negative !== "boolean" && typeof negative !== "undefined") {
			throw new TypeError(`Argument \`options.negative\` must be type of boolean or undefined!`);
		}
		if (typeof odd !== "boolean" && typeof odd !== "undefined") {
			throw new TypeError(`Argument \`options.odd\` must be type of boolean or undefined!`);
		}
		if (typeof positive !== "boolean" && typeof positive !== "undefined") {
			throw new TypeError(`Argument \`options.positive\` must be type of boolean or undefined!`);
		}
		if (typeof prime !== "boolean" && typeof prime !== "undefined") {
			throw new TypeError(`Argument \`options.prime\` must be type of boolean or undefined!`);
		}
		if (typeof safe !== "boolean" && typeof safe !== "undefined") {
			throw new TypeError(`Argument \`options.safe\` must be type of boolean or undefined!`);
		}
		if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
			throw new TypeError(`Argument \`options.unsafe\` must be type of boolean or undefined!`);
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
			throw new TypeError(`Argument \`options.type\` must be type of string or undefined!`);
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
	test(item: unknown): boolean {
		let itemIsFinite: boolean = Number.isFinite(item);
		let itemIsInteger: boolean = Number.isInteger(item);
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
	 * @param {NumberItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: NumberItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isNumber
 * @description Determine item with the filter of type of number.
 * @param {unknown} item Item that need to determine.
 * @param {NumberItemFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
function isNumber(item: unknown, options: NumberItemFilterOptions = {}): boolean {
	return new NumberItemFilter(options).test(item);
}
export {
	isNumber,
	NumberItemFilter,
	type NumberItemFilterOptions
};