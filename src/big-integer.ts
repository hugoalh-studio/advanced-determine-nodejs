import { enumResolve, IEEE754Enum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType } from "./internal/enum.js";
import { integralNumericTypeRange } from "./internal/numeric.js";
import { isBigIntegerEven, isBigIntegerNegative, isBigIntegerOdd, isBigIntegerPositive, isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
interface BigIntegerItemFilterOptionsBase {
	/**
	 * @property ieee754
	 * @description IEEE-754 safe mode of the big integer.
	 * @default "any"
	 */
	ieee754: IEEE754EnumValuesType;
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
	maximumExclusive: boolean;
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
	minimumExclusive: boolean;
	/**
	 * @property parity
	 * @description Parity of the big integer.
	 * @default "any"
	 */
	parity: MathematicsParityEnumValuesType;
	/**
	 * @property primality
	 * @description Primality of the big integer.
	 * @default "any"
	 */
	primality: MathematicsPrimalityEnumValuesType;
	/**
	 * @property sign
	 * @description Sign of the big integer.
	 * @default "any"
	 */
	sign: MathematicsSignEnumValuesType;
}
interface BigIntegerItemFilterOptions extends Partial<Omit<BigIntegerItemFilterOptionsBase, "ieee754" | "parity" | "primality" | "sign">> {
	/**
	 * @property ieee754
	 * @description IEEE-754 mode of the big integer.
	 * @default "any"
	 */
	ieee754?: IEEE754EnumKeysType;
	/**
	 * @property integralNumericType
	 * @description Integral numeric type of the big integer.
	 * @default undefined
	 */
	integralNumericType?: IntegralNumericTypeEnumKeysType;
	/**
	 * @property parity
	 * @description Parity of the big integer.
	 * @default "any"
	 */
	parity?: MathematicsParityEnumKeysType;
	/**
	 * @property primality
	 * @description Primality of the big integer.
	 * @default "any"
	 */
	primality?: MathematicsPrimalityEnumKeysType;
	/**
	 * @property sign
	 * @description Sign of the big integer.
	 * @default "any"
	 */
	sign?: MathematicsSignEnumKeysType;
	/** @alias maximum */max?: bigint;
	/** @alias maximumExclusive */exclusiveMax?: boolean;
	/** @alias maximumExclusive */exclusiveMaximum?: boolean;
	/** @alias maximumExclusive */maxExclusive?: boolean;
	/** @alias minimum */min?: bigint;
	/** @alias minimumExclusive */exclusiveMin?: boolean;
	/** @alias minimumExclusive */exclusiveMinimum?: boolean;
	/** @alias minimumExclusive */minExclusive?: boolean;
	/**
	 * @property even
	 * @description Whether an even big integer.
	 * @default undefined
	 * @deprecated Replaced by property `parity` with value `"even"`.
	 */
	even?: boolean;
	/**
	 * @property negative
	 * @description Whether a negative big integer.
	 * @default undefined
	 * @deprecated Replaced by property `sign` with value `"negative"`.
	 */
	negative?: boolean;
	/**
	 * @property odd
	 * @description Whether an odd big integer.
	 * @default undefined
	 * @deprecated Replaced by property `parity` with value `"odd"`.
	 */
	odd?: boolean;
	/**
	 * @property positive
	 * @description Whether a positive big integer.
	 * @default undefined
	 * @deprecated Replaced by property `sign` with value `"positive"`.
	 */
	positive?: boolean;
	/**
	 * @property prime
	 * @description Whether a prime big integer.
	 * @default undefined
	 * @deprecated Replaced by property `primality`.
	 */
	prime?: boolean;
	/**
	 * @property safe
	 * @description Whether an IEEE-754 safe big integer.
	 * @default undefined
	 * @deprecated Replaced by property `ieee754` with value `"safe"`.
	 */
	safe?: boolean;
	/**
	 * @property unsafe
	 * @description Whether not an IEEE-754 safe big integer.
	 * @default undefined
	 * @deprecated Replaced by property `ieee754` with value `"unsafe"`.
	 */
	unsafe?: boolean;
	/**
	 * @alias negative
	 * @deprecated Replaced by property `sign` with value `"negative"`.
	 */
	nega?: boolean;
	/**
	 * @alias negative
	 * @deprecated Replaced by property `sign` with value `"negative"`.
	 */
	ngt?: boolean;
	/**
	 * @alias positive
	 * @deprecated Replaced by property `sign` with value `"positive"`.
	 */
	posi?: boolean;
	/**
	 * @alias positive
	 * @deprecated Replaced by property `sign` with value `"positive"`.
	 */
	pst?: boolean;
	/**
	 * @alias integralNumericType
	 * @deprecated Replaced by property `integralNumericType`.
	 */
	type?: IntegralNumericTypeEnumKeysType;
}
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
	#ieee754: IEEE754EnumValuesType = "any";
	#maximum?: bigint;
	#maximumExclusive = false;
	#minimum?: bigint;
	#minimumExclusive = false;
	#parity: MathematicsParityEnumValuesType = "any";
	#primality: MathematicsPrimalityEnumValuesType = "any";
	#sign: MathematicsSignEnumValuesType = "any";
	/**
	 * @constructor
	 * @description Initialize the filter of type of big integer to determine item.
	 * @param {BigIntegerItemFilter | BigIntegerItemFilterOptions} [options] Options.
	 */
	constructor(options?: BigIntegerItemFilter | BigIntegerItemFilterOptions) {
		if (options instanceof BigIntegerItemFilter) {
			this.#ieee754 = options.#ieee754;
			this.#maximum = options.#maximum;
			this.#maximumExclusive = options.#maximumExclusive;
			this.#minimum = options.#minimum;
			this.#minimumExclusive = options.#minimumExclusive;
			this.#parity = options.#parity;
			this.#primality = options.#primality;
			this.#sign = options.#sign;
		} else if (typeof options !== "undefined") {
			options.integralNumericType ??= options.type;
			options.maximum ??= options.max;
			options.maximumExclusive ??= options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax;
			options.minimum ??= options.min;
			options.minimumExclusive ??= options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin;
			options.negative ??= options.ngt ?? options.nega;
			options.positive ??= options.pst ?? options.posi;
			for (let option of ["even", "negative", "odd", "positive", "safe", "unsafe"]) {
				if (options[option] === true) {
					this[option]();
				}
			}
			if (options.prime === false) {
				this.composite();
			}
			if (options.prime === true) {
				this.prime();
			}
			for (let option of ["ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "parity", "primality", "sign", "integralNumericType"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {BigIntegerItemFilter}
	 */
	get clone(): BigIntegerItemFilter {
		return new BigIntegerItemFilter(this);
	}
	/**
	 * @method status
	 * @description Status of this filter.
	 * @returns {BigIntegerItemFilterOptionsBase}
	 */
	get status(): BigIntegerItemFilterOptionsBase {
		return {
			ieee754: this.#ieee754,
			maximum: this.#maximum,
			maximumExclusive: this.#maximumExclusive,
			minimum: this.#minimum,
			minimumExclusive: this.#minimumExclusive,
			parity: this.#parity,
			primality: this.#primality,
			sign: this.#sign
		};
	}
	/**
	 * @method ieee754
	 * @description IEEE-754 safe mode of the big integer.
	 * @param {IEEE754EnumKeysType} value
	 * @returns {this}
	 */
	ieee754(value: IEEE754EnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`ieee754\` must be type of string!`);
		}
		let valueResolve: IEEE754EnumValuesType | undefined = enumResolve<IEEE754EnumKeysType, IEEE754EnumValuesType>(IEEE754Enum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`ieee754\` must be match either of these values: "${Object.keys(IEEE754Enum).sort().join("\", \"")}"`);
		}
		this.#ieee754 = valueResolve;
		return this;
	}
	/**
	 * @method integralNumericType
	 * @description Integral numeric type of the big integer.
	 * @param {IntegralNumericTypeEnumKeysType} value
	 * @returns {this}
	 */
	integralNumericType(value: IntegralNumericTypeEnumKeysType): this {
		[this.#minimum, this.#maximum] = integralNumericTypeRange(value);
		this.#maximumExclusive = false;
		this.#minimumExclusive = false;
		return this;
	}
	/**
	 * @method maximum
	 * @description Maximum of the big integer.
	 * @param {bigint} [value]
	 * @returns {this}
	 */
	maximum(value?: bigint): this {
		if (typeof value === "bigint") {
			if (typeof this.#minimum === "bigint" && !(this.#minimum <= value)) {
				throw new RangeError(`Filter argument \`maximum\` must be a big integer which is >= ${this.#minimum}!`);
			}
		} else if (typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`maximum\` must be type of big integer or undefined!`);
		}
		this.#maximum = value;
		return this;
	}
	/**
	 * @method maximumExclusive
	 * @description Whether to exclusive maximum of the big integer.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	maximumExclusive(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`maximumExclusive\` must be type of boolean!`);
		}
		this.#maximumExclusive = value;
		return this;
	}
	/**
	 * @method minimum
	 * @description Minimum of the big integer.
	 * @param {bigint} [value]
	 * @returns {this}
	 */
	minimum(value?: bigint): this {
		if (typeof value === "bigint") {
			if (typeof this.#maximum === "bigint" && !(value <= this.#maximum)) {
				throw new RangeError(`Filter argument \`minimum\` must be a big integer which is <= ${this.#maximum}!`);
			}
		} else if (typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`minimum\` must be type of big integer or undefined!`);
		}
		this.#minimum = value;
		return this;
	}
	/**
	 * @method minimumExclusive
	 * @description Whether to exclusive minimum of the big integer.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	minimumExclusive(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`minimumExclusive\` must be type of boolean!`);
		}
		this.#minimumExclusive = value;
		return this;
	}
	/**
	 * @method parity
	 * @description Parity of the big integer.
	 * @param {MathematicsParityEnumKeysType} value
	 * @returns {this}
	 */
	parity(value: MathematicsParityEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`parity\` must be type of string!`);
		}
		let valueResolve: MathematicsParityEnumValuesType | undefined = enumResolve<MathematicsParityEnumKeysType, MathematicsParityEnumValuesType>(MathematicsParityEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`parity\` must be match either of these values: "${Object.keys(MathematicsParityEnum).sort().join("\", \"")}"`);
		}
		this.#parity = valueResolve;
		return this;
	}
	/**
	 * @method primality
	 * @description Primality of the big integer.
	 * @param {MathematicsPrimalityEnumKeysType} value
	 * @returns {this}
	 */
	primality(value: MathematicsPrimalityEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`primality\` must be type of string!`);
		}
		let valueResolve: MathematicsPrimalityEnumValuesType | undefined = enumResolve<MathematicsPrimalityEnumKeysType, MathematicsPrimalityEnumValuesType>(MathematicsPrimalityEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`primality\` must be match either of these values: "${Object.keys(MathematicsPrimalityEnum).sort().join("\", \"")}"`);
		}
		this.#primality = valueResolve;
		return this;
	}
	/**
	 * @method sign
	 * @description Sign of the big integer.
	 * @param {MathematicsSignEnumKeysType} value
	 * @returns {this}
	 */
	sign(value: MathematicsSignEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`sign\` must be type of string!`);
		}
		let valueResolve: MathematicsSignEnumValuesType | undefined = enumResolve<MathematicsSignEnumKeysType, MathematicsSignEnumValuesType>(MathematicsSignEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`sign\` must be match either of these values: "${Object.keys(MathematicsSignEnum).sort().join("\", \"")}"`);
		}
		this.#sign = valueResolve;
		return this;
	}
	/** @alias maximum */max = this.maximum;
	/** @alias maximumExclusive */exclusiveMax = this.maximumExclusive;
	/** @alias maximumExclusive */exclusiveMaximum = this.maximumExclusive;
	/** @alias maximumExclusive */maxExclusive = this.maximumExclusive;
	/** @alias minimum */min = this.minimum;
	/** @alias minimumExclusive */exclusiveMin = this.minimumExclusive;
	/** @alias minimumExclusive */exclusiveMinimum = this.minimumExclusive;
	/** @alias minimumExclusive */minExclusive = this.minimumExclusive;
	/**
	 * @method composite
	 * @description Set to allow a composite big integer.
	 * @returns {this}
	 */
	composite() {
		return this.primality("composite");
	}
	/**
	 * @method even
	 * @description Set to allow an even big integer.
	 * @returns {this}
	 */
	even() {
		return this.parity("even");
	}
	/**
	 * @method negative
	 * @description Set to allow a negative big integer.
	 * @returns {this}
	 */
	negative() {
		return this.sign("negative");
	}
	/**
	 * @method odd
	 * @description Set to allow an odd big integer.
	 * @returns {this}
	 */
	odd() {
		return this.parity("odd");
	}
	/**
	 * @method positive
	 * @description Set to allow a positive big integer.
	 * @returns {this}
	 */
	positive() {
		return this.sign("positive");
	}
	/**
	 * @method prime
	 * @description Set to allow a prime big integer.
	 * @returns {this}
	 */
	prime() {
		return this.primality("prime");
	}
	/**
	 * @method safe
	 * @description Set to allow an IEEE-754 safe big integer.
	 * @returns {this}
	 */
	safe() {
		return this.ieee754("safe");
	}
	/**
	 * @method unsafe
	 * @description Set to allow an IEEE-754 unsafe big integer.
	 * @returns {this}
	 */
	unsafe() {
		return this.ieee754("unsafe");
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
			(this.#ieee754 === "safe" && !isBigIntegerSafe(item)) ||
			(this.#ieee754 === "unsafe" && isBigIntegerSafe(item)) ||
			(typeof this.#maximum === "bigint" && this.#maximumExclusive && !(item < this.#maximum)) ||
			(typeof this.#maximum === "bigint" && !this.#maximumExclusive && !(item <= this.#maximum)) ||
			(typeof this.#minimum === "bigint" && this.#minimumExclusive && !(this.#minimum < item)) ||
			(typeof this.#minimum === "bigint" && !this.#minimumExclusive && !(this.#minimum <= item)) ||
			(this.#parity === "even" && !isBigIntegerEven(item)) ||
			(this.#parity === "odd" && !isBigIntegerOdd(item)) ||
			(this.#primality === "composite" && isBigIntegerPrime(item)) ||
			(this.#primality === "prime" && !isBigIntegerPrime(item)) ||
			(this.#sign === "negative" && !isBigIntegerNegative(item)) ||
			(this.#sign === "positive" && !isBigIntegerPositive(item))
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
	type BigIntegerItemFilterOptions as BigIntItemFilterOptions,
	type BigIntegerItemFilterOptionsBase,
	type BigIntegerItemFilterOptionsBase as BigIntItemFilterOptionsBase
};
