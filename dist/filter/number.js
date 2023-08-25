var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _NumberFilter_status;
import { enumResolver, IEEE754Enum, MathematicsFinitenessEnum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, NumericTypeEnum } from "../internal/enum.js";
import { integralNumericTypeRange } from "../internal/numeric.js";
import { isNumberEven, isNumberFloat, isNumberNegative, isNumberOdd, isNumberPositive, isNumberPrime, isNumberSafe } from "../number.js";
/**
 * Filter for number.
 */
export class NumberFilter {
    /**
     * Initialize the number filter.
     * @param {NumberFilter | NumberFilterOptions} [options] Options.
     */
    constructor(options) {
        _NumberFilter_status.set(this, {
            finiteness: "any",
            ieee754: "any",
            maximum: undefined,
            maximumExclusive: false,
            minimum: undefined,
            minimumExclusive: false,
            numericType: "any",
            parity: "any",
            primality: "any",
            sign: "any"
        });
        /** @alias maximum */ this.max = this.maximum;
        /** @alias maximumExclusive */ this.exclusiveMax = this.maximumExclusive;
        /** @alias maximumExclusive */ this.exclusiveMaximum = this.maximumExclusive;
        /** @alias maximumExclusive */ this.maxExclusive = this.maximumExclusive;
        /** @alias minimum */ this.min = this.minimum;
        /** @alias minimumExclusive */ this.exclusiveMin = this.minimumExclusive;
        /** @alias minimumExclusive */ this.exclusiveMinimum = this.minimumExclusive;
        /** @alias minimumExclusive */ this.minExclusive = this.minimumExclusive;
        if (options instanceof NumberFilter) {
            __classPrivateFieldSet(this, _NumberFilter_status, { ...__classPrivateFieldGet(options, _NumberFilter_status, "f") }, "f");
        }
        else if (typeof options !== "undefined") {
            options.maximum ?? (options.maximum = options.max);
            options.maximumExclusive ?? (options.maximumExclusive = options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax);
            options.minimum ?? (options.minimum = options.min);
            options.minimumExclusive ?? (options.minimumExclusive = options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin);
            for (const option of ["finiteness", "ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "numericType", "parity", "primality", "sign", "integralNumericType"]) {
                //@ts-ignore Handle by it's method.
                if (typeof options[option] !== "undefined") {
                    //@ts-ignore Handle by it's method.
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * Clone this number filter for reuse.
     * @returns {NumberFilter} Another instance of this number filter.
     */
    get clone() {
        return new NumberFilter(this);
    }
    /**
     * Get the status of this number filter.
     * @returns {NumberFilterStatus} Status of this number filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _NumberFilter_status, "f") };
    }
    /**
     * Finiteness of the number.
     * @param {MathematicsFinitenessEnumKeysType} value
     * @returns {this}
     */
    finiteness(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").finiteness = enumResolver(MathematicsFinitenessEnum, value, "Filter status `finiteness`");
        return this;
    }
    /**
     * IEEE-754 safe mode of the number.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").ieee754 = enumResolver(IEEE754Enum, value, "Filter status `ieee754`");
        return this;
    }
    /**
     * Integral numeric type of the number.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value) {
        const [intrMinimum, intrMaximum] = integralNumericTypeRange(value);
        __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum = Number(intrMaximum);
        __classPrivateFieldGet(this, _NumberFilter_status, "f").minimum = Number(intrMinimum);
        __classPrivateFieldGet(this, _NumberFilter_status, "f").maximumExclusive = false;
        __classPrivateFieldGet(this, _NumberFilter_status, "f").minimumExclusive = false;
        return this;
    }
    /**
     * Maximum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    maximum(value) {
        if (typeof value === "number" && !Number.isNaN(value)) {
            if (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").minimum === "number" && !(__classPrivateFieldGet(this, _NumberFilter_status, "f").minimum <= value)) {
                throw new RangeError(`Filter status \`maximum\` must be a number which is >= ${__classPrivateFieldGet(this, _NumberFilter_status, "f").minimum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter status \`maximum\` must be type of number or undefined!`);
        }
        __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum = value;
        return this;
    }
    /**
     * Whether to exclusive maximum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`maximumExclusive\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _NumberFilter_status, "f").maximumExclusive = value;
        return this;
    }
    /**
     * Minimum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    minimum(value) {
        if (typeof value === "number" && !Number.isNaN(value)) {
            if (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum === "number" && !(value <= __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum)) {
                throw new RangeError(`Filter status \`minimum\` must be a number which is <= ${__classPrivateFieldGet(this, _NumberFilter_status, "f").maximum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter status \`minimum\` must be type of number or undefined!`);
        }
        __classPrivateFieldGet(this, _NumberFilter_status, "f").minimum = value;
        return this;
    }
    /**
     * Whether to exclusive minimum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`minimumExclusive\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _NumberFilter_status, "f").minimumExclusive = value;
        return this;
    }
    /**
     * Numeric type of the number.
     * @param {NumericTypeEnumKeysType} value
     * @returns {this}
     */
    numericType(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").numericType = enumResolver(NumericTypeEnum, value, "Filter status `numericType`");
        return this;
    }
    /**
     * Parity of the number.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").parity = enumResolver(MathematicsParityEnum, value, "Filter status `parity`");
        return this;
    }
    /**
     * Primality of the number.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").primality = enumResolver(MathematicsPrimalityEnum, value, "Filter status `primality`");
        return this;
    }
    /**
     * Sign of the number.
     * @param {MathematicsSignEnumKeysType} value
     * @returns {this}
     */
    sign(value) {
        __classPrivateFieldGet(this, _NumberFilter_status, "f").sign = enumResolver(MathematicsSignEnum, value, "Filter status `sign`");
        return this;
    }
    /**
     * Set to allow a composite number.
     * @returns {this}
     */
    composite() {
        return this.primality("composite");
    }
    /**
     * Set to allow an even number.
     * @returns {this}
     */
    even() {
        return this.parity("even");
    }
    /**
     * Set to allow a finite number.
     * @returns {this}
     */
    finite() {
        return this.finiteness("finite");
    }
    /**
     * Set to allow a float number.
     * @returns {this}
     */
    float() {
        return this.numericType("float");
    }
    /**
     * Set to allow an infinite number.
     * @returns {this}
     */
    infinite() {
        return this.finiteness("infinite");
    }
    /**
     * Set to allow an integer number.
     * @returns {this}
     */
    integer() {
        return this.numericType("float");
    }
    /**
     * Set to allow a negative number.
     * @returns {this}
     */
    negative() {
        return this.sign("negative");
    }
    /**
     * Set to allow an odd number.
     * @returns {this}
     */
    odd() {
        return this.parity("odd");
    }
    /**
     * Set to allow a positive number.
     * @returns {this}
     */
    positive() {
        return this.sign("positive");
    }
    /**
     * Set to allow a prime number.
     * @returns {this}
     */
    prime() {
        return this.primality("prime");
    }
    /**
     * Set to allow an IEEE-754 safe number.
     * @returns {this}
     */
    safe() {
        return this.ieee754("safe");
    }
    /**
     * Set to allow an IEEE-754 unsafe number.
     * @returns {this}
     */
    unsafe() {
        return this.ieee754("unsafe");
    }
    /**
     * Determine item with the configured number filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "number" ||
            Number.isNaN(item) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").finiteness === "finite" && !Number.isFinite(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").finiteness === "infinite" && Number.isFinite(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").ieee754 === "safe" && !isNumberSafe(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").ieee754 === "unsafe" && isNumberSafe(item)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum === "number" && __classPrivateFieldGet(this, _NumberFilter_status, "f").maximumExclusive && !(item < __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum === "number" && !__classPrivateFieldGet(this, _NumberFilter_status, "f").maximumExclusive && !(item <= __classPrivateFieldGet(this, _NumberFilter_status, "f").maximum)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").minimum === "number" && __classPrivateFieldGet(this, _NumberFilter_status, "f").minimumExclusive && !(__classPrivateFieldGet(this, _NumberFilter_status, "f").minimum < item)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_status, "f").minimum === "number" && !__classPrivateFieldGet(this, _NumberFilter_status, "f").minimumExclusive && !(__classPrivateFieldGet(this, _NumberFilter_status, "f").minimum <= item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").numericType === "float" && !isNumberFloat(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").numericType === "integer" && !Number.isInteger(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").parity === "even" && !isNumberEven(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").parity === "odd" && !isNumberOdd(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").primality === "composite" && isNumberPrime(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").primality === "prime" && !isNumberPrime(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").sign === "negative" && !isNumberNegative(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_status, "f").sign === "positive" && !isNumberPositive(item))) {
            return false;
        }
        return true;
    }
    /**
     * Determine item with the number filter.
     * @param {unknown} item Item that need to determine.
     * @param {NumberFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_NumberFilter_status = new WeakMap();
/**
 * Determine item with the number filter.
 * @param {unknown} item Item that need to determine.
 * @param {NumberFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
export function filterNumber(item, options = {}) {
    return new NumberFilter(options).test(item);
}
