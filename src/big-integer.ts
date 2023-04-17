import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
interface BigIntegerItemFilterOptions {
	/**
	 * @property even
	 * @description Whether an even big integer.
	 * @default undefined
	 */
	even?: boolean;
	/**
	 * @property maximum
	 * @description Maximum of the big integer.
	 * @default undefined
	 */
	maximum?: bigint;
	/**
	 * @property maximumExclusive
	 * @description Whether to exclusive maximum of the big integer.
	 * @default false
	 */
	maximumExclusive?: boolean;
	/**
	 * @property minimum
	 * @description Minimum of the big integer.
	 * @default undefined
	 */
	minimum?: bigint;
	/**
	 * @property minimumExclusive
	 * @description Whether to exclusive minimum of the big integer.
	 * @default false
	 */
	minimumExclusive?: boolean;
	/**
	 * @property negative
	 * @description Whether a negative big integer.
	 * @default undefined
	 */
	negative?: boolean;
	/**
	 * @property odd
	 * @description Whether an odd big integer.
	 * @default undefined
	 */
	odd?: boolean;
	/**
	 * @property positive
	 * @description Whether a positive big integer.
	 * @default undefined
	 */
	positive?: boolean;
	/**
	 * @property prime
	 * @description Whether a prime big integer.
	 * @default undefined
	 */
	prime?: boolean;
	/**
	 * @property safe
	 * @description Whether an IEEE-754 big integer.
	 * @default undefined
	 */
	safe?: boolean;
	/**
	 * @property type
	 * @description Type of the big integer.
	 * @default undefined
	 */
	type?: string;
	/**
	 * @property unsafe
	 * @description Whether not an IEEE-754 big integer.
	 * @default undefined
	 */
	unsafe?: boolean;
	/** @alias maximum */max?: bigint;
	/** @alias maximumExclusive */exclusiveMax?: boolean;
	/** @alias maximumExclusive */exclusiveMaximum?: boolean;
	/** @alias maximumExclusive */maxExclusive?: boolean;
	/** @alias minimum */min?: bigint;
	/** @alias minimumExclusive */exclusiveMin?: boolean;
	/** @alias minimumExclusive */exclusiveMinimum?: boolean;
	/** @alias minimumExclusive */minExclusive?: boolean;
	/** @alias negative */nega?: boolean;
	/** @alias negative */ngt?: boolean;
	/** @alias positive */posi?: boolean;
	/** @alias positive */pst?: boolean;
}
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
	#even?: boolean;
	#maximum?: bigint;
	#maximumExclusive: boolean;
	#minimum?: bigint;
	#minimumExclusive: boolean;
	#negative?: boolean;
	#odd?: boolean;
	#positive?: boolean;
	#prime?: boolean;
	#safe?: boolean;
	#unsafe?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of big integer to determine item.
	 * @param {BigIntegerItemFilterOptions} [options={}] Options.
	 */
	constructor(options: BigIntegerItemFilterOptions = {}) {
		let {
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
		} = options;
		maximum ??= aliases.max;
		maximumExclusive ??= aliases.maxExclusive ?? aliases.exclusiveMaximum ?? aliases.exclusiveMax ?? false;
		minimum ??= aliases.min;
		minimumExclusive ??= aliases.minExclusive ?? aliases.exclusiveMinimum ?? aliases.exclusiveMin ?? false;
		negative ??= aliases.ngt ?? aliases.nega;
		positive ??= aliases.pst ?? aliases.posi;
		if (typeof even !== "boolean" && typeof even !== "undefined") {
			throw new TypeError(`Argument \`options.even\` must be type of boolean or undefined!`);
		}
		if (typeof maximum !== "bigint" && typeof maximum !== "undefined") {
			throw new TypeError(`Argument \`options.maximum\` must be type of big integer or undefined!`);
		}
		if (typeof maximumExclusive !== "boolean") {
			throw new TypeError(`Argument \`options.maximumExclusive\` must be type of boolean!`);
		}
		if (!(typeof minimum === "bigint" && ((typeof maximum === "bigint") ? (minimum <= maximum) : true)) && typeof minimum !== "undefined") {
			throw new TypeError(`Argument \`options.minimum\` must be type of big integer${typeof maximum === "bigint" ? ` and <= ${maximum}n,` : ""} or undefined!`);
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
			[this.#minimum, this.#maximum] = integralNumericTypeRange(type);
		} else if (typeof type === "undefined") {
			this.#maximumExclusive = maximumExclusive;
			this.#minimumExclusive = minimumExclusive;
			this.#maximum = maximum;
			this.#minimum = minimum;
		} else {
			throw new TypeError(`Argument \`options.type\` must be type of string or undefined!`);
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
	test(item: unknown): boolean {
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
	 * @param {BigIntegerItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: BigIntegerItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isBigInteger
 * @description Determine item with the filter of type of big integer.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntegerItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item: unknown, options: BigIntegerItemFilterOptions = {}): boolean {
	return new BigIntegerItemFilter(options).test(item);
}
export {
	BigIntegerItemFilter,
	BigIntegerItemFilter as BigIntItemFilter,
	isBigInteger,
	isBigInteger as isBigInt,
	type BigIntegerItemFilterOptions,
	type BigIntegerItemFilterOptions as BigIntItemFilterOptions
};
