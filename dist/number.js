import { enumResolver, IEEE754Enum, MathematicsFinitenessEnum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, NumericTypeEnum } from "./internal/enum.js";
import { integralNumericTypeRange } from "./internal/numeric.js";
import { isNumberEven, isNumberFloat, isNumberNegative, isNumberOdd, isNumberPositive, isNumberPrime, isNumberSafe } from "./native/number.js";
/**
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
class NumberItemFilter {
    #finiteness = "any";
    #ieee754 = "any";
    #maximum;
    #maximumExclusive = false;
    #minimum;
    #minimumExclusive = false;
    #numericType = "any";
    #parity = "any";
    #primality = "any";
    #sign = "any";
    /**
     * @constructor
     * @description Initialize the filter of type of number to determine item.
     * @param {NumberItemFilter | NumberItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof NumberItemFilter) {
            this.#finiteness = options.#finiteness;
            this.#ieee754 = options.#ieee754;
            this.#maximum = options.#maximum;
            this.#maximumExclusive = options.#maximumExclusive;
            this.#minimum = options.#minimum;
            this.#minimumExclusive = options.#minimumExclusive;
            this.#numericType = options.#numericType;
            this.#parity = options.#parity;
            this.#primality = options.#primality;
            this.#sign = options.#sign;
        }
        else if (typeof options !== "undefined") {
            options.maximum ??= options.max;
            options.maximumExclusive ??= options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax;
            options.minimum ??= options.min;
            options.minimumExclusive ??= options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin;
            for (let option of ["finiteness", "ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "numericType", "parity", "primality", "sign", "integralNumericType"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {NumberItemFilter} Another instance of this filter.
     */
    get clone() {
        return new NumberItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {NumberItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            finiteness: this.#finiteness,
            ieee754: this.#ieee754,
            maximum: this.#maximum,
            maximumExclusive: this.#maximumExclusive,
            minimum: this.#minimum,
            minimumExclusive: this.#minimumExclusive,
            numericType: this.#numericType,
            parity: this.#parity,
            primality: this.#primality,
            sign: this.#sign
        };
    }
    /**
     * @method finiteness
     * @description Finiteness of the number.
     * @param {MathematicsFinitenessEnumKeysType} value
     * @returns {this}
     */
    finiteness(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`finiteness\` must be type of string!`);
        }
        let valueResolve = enumResolver(MathematicsFinitenessEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`finiteness\` must be match either of these values: "${Object.keys(MathematicsFinitenessEnum).sort().join("\", \"")}"`);
        }
        this.#finiteness = valueResolve;
        return this;
    }
    /**
     * @method ieee754
     * @description IEEE-754 safe mode of the number.
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
     * @description Integral numeric type of the number.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value) {
        let [intrMin, intrMax] = integralNumericTypeRange(value);
        this.#maximum = Number(intrMax);
        this.#minimum = Number(intrMin);
        this.#maximumExclusive = false;
        this.#minimumExclusive = false;
        return this;
    }
    /**
     * @method maximum
     * @description Maximum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    maximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            if (typeof this.#minimum === "number" && !(this.#minimum <= value)) {
                throw new RangeError(`Filter argument \`maximum\` must be a number which is >= ${this.#minimum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`maximum\` must be type of number or undefined!`);
        }
        this.#maximum = value;
        return this;
    }
    /**
     * @method maximumExclusive
     * @description Whether to exclusive maximum of the number.
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
     * @description Minimum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    minimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            if (typeof this.#maximum === "number" && !(value <= this.#maximum)) {
                throw new RangeError(`Filter argument \`minimum\` must be a number which is <= ${this.#maximum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`minimum\` must be type of number or undefined!`);
        }
        this.#minimum = value;
        return this;
    }
    /**
     * @method minimumExclusive
     * @description Whether to exclusive minimum of the number.
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
     * @method numericType
     * @description Numeric type of the number.
     * @param {NumericTypeEnumKeysType} value
     * @returns {this}
     */
    numericType(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`numericType\` must be type of string!`);
        }
        let valueResolve = enumResolver(NumericTypeEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`numericType\` must be match either of these values: "${Object.keys(NumericTypeEnum).sort().join("\", \"")}"`);
        }
        this.#numericType = valueResolve;
        return this;
    }
    /**
     * @method parity
     * @description Parity of the number.
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
     * @description Primality of the number.
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
     * @description Sign of the number.
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
     * @description Set to allow a composite number.
     * @returns {this}
     */
    composite() {
        return this.primality("composite");
    }
    /**
     * @method even
     * @description Set to allow an even number.
     * @returns {this}
     */
    even() {
        return this.parity("even");
    }
    /**
     * @method finite
     * @description Set to allow a finite number.
     * @returns {this}
     */
    finite() {
        return this.finiteness("finite");
    }
    /**
     * @method float
     * @description Set to allow a float number.
     * @returns {this}
     */
    float() {
        return this.numericType("float");
    }
    /**
     * @method infinite
     * @description Set to allow an infinite number.
     * @returns {this}
     */
    infinite() {
        return this.finiteness("infinite");
    }
    /**
     * @method integer
     * @description Set to allow an integer number.
     * @returns {this}
     */
    integer() {
        return this.numericType("float");
    }
    /**
     * @method negative
     * @description Set to allow a negative number.
     * @returns {this}
     */
    negative() {
        return this.sign("negative");
    }
    /**
     * @method odd
     * @description Set to allow an odd number.
     * @returns {this}
     */
    odd() {
        return this.parity("odd");
    }
    /**
     * @method positive
     * @description Set to allow a positive number.
     * @returns {this}
     */
    positive() {
        return this.sign("positive");
    }
    /**
     * @method prime
     * @description Set to allow a prime number.
     * @returns {this}
     */
    prime() {
        return this.primality("prime");
    }
    /**
     * @method safe
     * @description Set to allow an IEEE-754 safe number.
     * @returns {this}
     */
    safe() {
        return this.ieee754("safe");
    }
    /**
     * @method unsafe
     * @description Set to allow an IEEE-754 unsafe number.
     * @returns {this}
     */
    unsafe() {
        return this.ieee754("unsafe");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "number" ||
            Number.isNaN(item) ||
            (this.#finiteness === "finite" && !Number.isFinite(item)) ||
            (this.#finiteness === "infinite" && Number.isFinite(item)) ||
            (this.#ieee754 === "safe" && !isNumberSafe(item)) ||
            (this.#ieee754 === "unsafe" && isNumberSafe(item)) ||
            (typeof this.#maximum === "number" && this.#maximumExclusive && !(item < this.#maximum)) ||
            (typeof this.#maximum === "number" && !this.#maximumExclusive && !(item <= this.#maximum)) ||
            (typeof this.#minimum === "number" && this.#minimumExclusive && !(this.#minimum < item)) ||
            (typeof this.#minimum === "number" && !this.#minimumExclusive && !(this.#minimum <= item)) ||
            (this.#numericType === "float" && !isNumberFloat(item)) ||
            (this.#numericType === "integer" && !Number.isInteger(item)) ||
            (this.#parity === "even" && !isNumberEven(item)) ||
            (this.#parity === "odd" && !isNumberOdd(item)) ||
            (this.#primality === "composite" && isNumberPrime(item)) ||
            (this.#primality === "prime" && !isNumberPrime(item)) ||
            (this.#sign === "negative" && !isNumberNegative(item)) ||
            (this.#sign === "positive" && !isNumberPositive(item))) {
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
    static test(item, options = {}) {
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
function isNumber(item, options = {}) {
    return new NumberItemFilter(options).test(item);
}
export { isNumber, NumberItemFilter };
