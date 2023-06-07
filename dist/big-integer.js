import { enumResolver, IEEE754Enum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum } from "./internal/enum.js";
import { integralNumericTypeRange } from "./internal/numeric.js";
import { isBigIntegerEven, isBigIntegerNegative, isBigIntegerOdd, isBigIntegerPositive, isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
    #ieee754 = "any";
    #maximum;
    #maximumExclusive = false;
    #minimum;
    #minimumExclusive = false;
    #parity = "any";
    #primality = "any";
    #sign = "any";
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {BigIntegerItemFilter | BigIntegerItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof BigIntegerItemFilter) {
            this.#ieee754 = options.#ieee754;
            this.#maximum = options.#maximum;
            this.#maximumExclusive = options.#maximumExclusive;
            this.#minimum = options.#minimum;
            this.#minimumExclusive = options.#minimumExclusive;
            this.#parity = options.#parity;
            this.#primality = options.#primality;
            this.#sign = options.#sign;
        }
        else if (typeof options !== "undefined") {
            options.maximum ??= options.max;
            options.maximumExclusive ??= options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax;
            options.minimum ??= options.min;
            options.minimumExclusive ??= options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin;
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
     * @returns {BigIntegerItemFilter} Another instance of this filter.
     */
    get clone() {
        return new BigIntegerItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {BigIntegerItemFilterOptionsBase} Status of this filter.
     */
    get status() {
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
    ieee754(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`ieee754\` must be type of string!`);
        }
        let valueResolve = enumResolver(IEEE754Enum, value);
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
    integralNumericType(value) {
        [this.#minimum, this.#maximum] = integralNumericTypeRange(value);
        this.#maximumExclusive = false;
        this.#minimumExclusive = false;
        return this;
    }
    /**
     * @method maximum
     * @description Maximum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    maximum(value) {
        if (typeof value === "bigint") {
            if (typeof this.#minimum === "bigint" && !(this.#minimum <= value)) {
                throw new RangeError(`Filter argument \`maximum\` must be a big integer which is >= ${this.#minimum}!`);
            }
        }
        else if (typeof value !== "undefined") {
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
    maximumExclusive(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`maximumExclusive\` must be type of boolean!`);
        }
        this.#maximumExclusive = value;
        return this;
    }
    /**
     * @method minimum
     * @description Minimum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    minimum(value) {
        if (typeof value === "bigint") {
            if (typeof this.#maximum === "bigint" && !(value <= this.#maximum)) {
                throw new RangeError(`Filter argument \`minimum\` must be a big integer which is <= ${this.#maximum}!`);
            }
        }
        else if (typeof value !== "undefined") {
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
    minimumExclusive(value = true) {
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
    parity(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`parity\` must be type of string!`);
        }
        let valueResolve = enumResolver(MathematicsParityEnum, value);
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
    primality(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`primality\` must be type of string!`);
        }
        let valueResolve = enumResolver(MathematicsPrimalityEnum, value);
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
    sign(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`sign\` must be type of string!`);
        }
        let valueResolve = enumResolver(MathematicsSignEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`sign\` must be match either of these values: "${Object.keys(MathematicsSignEnum).sort().join("\", \"")}"`);
        }
        this.#sign = valueResolve;
        return this;
    }
    /** @alias maximum */ max = this.maximum;
    /** @alias maximumExclusive */ exclusiveMax = this.maximumExclusive;
    /** @alias maximumExclusive */ exclusiveMaximum = this.maximumExclusive;
    /** @alias maximumExclusive */ maxExclusive = this.maximumExclusive;
    /** @alias minimum */ min = this.minimum;
    /** @alias minimumExclusive */ exclusiveMin = this.minimumExclusive;
    /** @alias minimumExclusive */ exclusiveMinimum = this.minimumExclusive;
    /** @alias minimumExclusive */ minExclusive = this.minimumExclusive;
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
    test(item) {
        if (typeof item !== "bigint" ||
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
            (this.#sign === "positive" && !isBigIntegerPositive(item))) {
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
    static test(item, options = {}) {
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
function isBigInteger(item, options = {}) {
    return new BigIntegerItemFilter(options).test(item);
}
export { BigIntegerItemFilter, BigIntegerItemFilter as BigIntItemFilter, isBigInteger, isBigInteger as isBigInt };
