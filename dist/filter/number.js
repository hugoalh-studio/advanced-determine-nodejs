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
var _NumberFilter_finiteness, _NumberFilter_ieee754, _NumberFilter_maximum, _NumberFilter_maximumExclusive, _NumberFilter_minimum, _NumberFilter_minimumExclusive, _NumberFilter_numericType, _NumberFilter_parity, _NumberFilter_primality, _NumberFilter_sign;
import { isNumberEven, isNumberFloat, isNumberNegative, isNumberOdd, isNumberPositive, isNumberPrime, isNumberSafe } from "../number.js";
import { enumResolver, IEEE754Enum, MathematicsFinitenessEnum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, NumericTypeEnum } from "../internal/enum.js";
import { integralNumericTypeRange } from "../internal/numeric.js";
/**
 * @class NumberFilter
 * @description Filter for number.
 */
class NumberFilter {
    /**
     * @constructor
     * @description Initialize the number filter.
     * @param {NumberFilter | NumberFilterOptions} [options] Options.
     */
    constructor(options) {
        _NumberFilter_finiteness.set(this, "any");
        _NumberFilter_ieee754.set(this, "any");
        _NumberFilter_maximum.set(this, void 0);
        _NumberFilter_maximumExclusive.set(this, false);
        _NumberFilter_minimum.set(this, void 0);
        _NumberFilter_minimumExclusive.set(this, false);
        _NumberFilter_numericType.set(this, "any");
        _NumberFilter_parity.set(this, "any");
        _NumberFilter_primality.set(this, "any");
        _NumberFilter_sign.set(this, "any");
        /** @alias maximum */ this.max = this.maximum;
        /** @alias maximumExclusive */ this.exclusiveMax = this.maximumExclusive;
        /** @alias maximumExclusive */ this.exclusiveMaximum = this.maximumExclusive;
        /** @alias maximumExclusive */ this.maxExclusive = this.maximumExclusive;
        /** @alias minimum */ this.min = this.minimum;
        /** @alias minimumExclusive */ this.exclusiveMin = this.minimumExclusive;
        /** @alias minimumExclusive */ this.exclusiveMinimum = this.minimumExclusive;
        /** @alias minimumExclusive */ this.minExclusive = this.minimumExclusive;
        if (options instanceof NumberFilter) {
            __classPrivateFieldSet(this, _NumberFilter_finiteness, __classPrivateFieldGet(options, _NumberFilter_finiteness, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_ieee754, __classPrivateFieldGet(options, _NumberFilter_ieee754, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_maximum, __classPrivateFieldGet(options, _NumberFilter_maximum, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_maximumExclusive, __classPrivateFieldGet(options, _NumberFilter_maximumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_minimum, __classPrivateFieldGet(options, _NumberFilter_minimum, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_minimumExclusive, __classPrivateFieldGet(options, _NumberFilter_minimumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_numericType, __classPrivateFieldGet(options, _NumberFilter_numericType, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_parity, __classPrivateFieldGet(options, _NumberFilter_parity, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_primality, __classPrivateFieldGet(options, _NumberFilter_primality, "f"), "f");
            __classPrivateFieldSet(this, _NumberFilter_sign, __classPrivateFieldGet(options, _NumberFilter_sign, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.maximum ?? (options.maximum = options.max);
            options.maximumExclusive ?? (options.maximumExclusive = options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax);
            options.minimum ?? (options.minimum = options.min);
            options.minimumExclusive ?? (options.minimumExclusive = options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin);
            for (let option of ["finiteness", "ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "numericType", "parity", "primality", "sign", "integralNumericType"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this number filter for reuse.
     * @returns {NumberFilter} Another instance of this number filter.
     */
    get clone() {
        return new NumberFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this number filter.
     * @returns {NumberFilterStatus} Status of this number filter.
     */
    get status() {
        return {
            finiteness: __classPrivateFieldGet(this, _NumberFilter_finiteness, "f"),
            ieee754: __classPrivateFieldGet(this, _NumberFilter_ieee754, "f"),
            maximum: __classPrivateFieldGet(this, _NumberFilter_maximum, "f"),
            maximumExclusive: __classPrivateFieldGet(this, _NumberFilter_maximumExclusive, "f"),
            minimum: __classPrivateFieldGet(this, _NumberFilter_minimum, "f"),
            minimumExclusive: __classPrivateFieldGet(this, _NumberFilter_minimumExclusive, "f"),
            numericType: __classPrivateFieldGet(this, _NumberFilter_numericType, "f"),
            parity: __classPrivateFieldGet(this, _NumberFilter_parity, "f"),
            primality: __classPrivateFieldGet(this, _NumberFilter_primality, "f"),
            sign: __classPrivateFieldGet(this, _NumberFilter_sign, "f")
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
            throw new RangeError(`Filter argument \`finiteness\` must be either of these values: "${Object.keys(MathematicsFinitenessEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_finiteness, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`ieee754\` must be either of these values: "${Object.keys(IEEE754Enum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_ieee754, valueResolve, "f");
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
        __classPrivateFieldSet(this, _NumberFilter_maximum, Number(intrMax), "f");
        __classPrivateFieldSet(this, _NumberFilter_minimum, Number(intrMin), "f");
        __classPrivateFieldSet(this, _NumberFilter_maximumExclusive, false, "f");
        __classPrivateFieldSet(this, _NumberFilter_minimumExclusive, false, "f");
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
            if (typeof __classPrivateFieldGet(this, _NumberFilter_minimum, "f") === "number" && !(__classPrivateFieldGet(this, _NumberFilter_minimum, "f") <= value)) {
                throw new RangeError(`Filter argument \`maximum\` must be a number which is >= ${__classPrivateFieldGet(this, _NumberFilter_minimum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`maximum\` must be type of number or undefined!`);
        }
        __classPrivateFieldSet(this, _NumberFilter_maximum, value, "f");
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
        __classPrivateFieldSet(this, _NumberFilter_maximumExclusive, value, "f");
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
            if (typeof __classPrivateFieldGet(this, _NumberFilter_maximum, "f") === "number" && !(value <= __classPrivateFieldGet(this, _NumberFilter_maximum, "f"))) {
                throw new RangeError(`Filter argument \`minimum\` must be a number which is <= ${__classPrivateFieldGet(this, _NumberFilter_maximum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`minimum\` must be type of number or undefined!`);
        }
        __classPrivateFieldSet(this, _NumberFilter_minimum, value, "f");
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
        __classPrivateFieldSet(this, _NumberFilter_minimumExclusive, value, "f");
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
            throw new RangeError(`Filter argument \`numericType\` must be either of these values: "${Object.keys(NumericTypeEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_numericType, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`parity\` must be either of these values: "${Object.keys(MathematicsParityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_parity, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`primality\` must be either of these values: "${Object.keys(MathematicsPrimalityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_primality, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`sign\` must be either of these values: "${Object.keys(MathematicsSignEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _NumberFilter_sign, valueResolve, "f");
        return this;
    }
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
     * @description Determine item with the configured number filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "number" ||
            Number.isNaN(item) ||
            (__classPrivateFieldGet(this, _NumberFilter_finiteness, "f") === "finite" && !Number.isFinite(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_finiteness, "f") === "infinite" && Number.isFinite(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_ieee754, "f") === "safe" && !isNumberSafe(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_ieee754, "f") === "unsafe" && isNumberSafe(item)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_maximum, "f") === "number" && __classPrivateFieldGet(this, _NumberFilter_maximumExclusive, "f") && !(item < __classPrivateFieldGet(this, _NumberFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_maximum, "f") === "number" && !__classPrivateFieldGet(this, _NumberFilter_maximumExclusive, "f") && !(item <= __classPrivateFieldGet(this, _NumberFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_minimum, "f") === "number" && __classPrivateFieldGet(this, _NumberFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _NumberFilter_minimum, "f") < item)) ||
            (typeof __classPrivateFieldGet(this, _NumberFilter_minimum, "f") === "number" && !__classPrivateFieldGet(this, _NumberFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _NumberFilter_minimum, "f") <= item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_numericType, "f") === "float" && !isNumberFloat(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_numericType, "f") === "integer" && !Number.isInteger(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_parity, "f") === "even" && !isNumberEven(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_parity, "f") === "odd" && !isNumberOdd(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_primality, "f") === "composite" && isNumberPrime(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_primality, "f") === "prime" && !isNumberPrime(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_sign, "f") === "negative" && !isNumberNegative(item)) ||
            (__classPrivateFieldGet(this, _NumberFilter_sign, "f") === "positive" && !isNumberPositive(item))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the number filter.
     * @param {unknown} item Item that need to determine.
     * @param {NumberFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_NumberFilter_finiteness = new WeakMap(), _NumberFilter_ieee754 = new WeakMap(), _NumberFilter_maximum = new WeakMap(), _NumberFilter_maximumExclusive = new WeakMap(), _NumberFilter_minimum = new WeakMap(), _NumberFilter_minimumExclusive = new WeakMap(), _NumberFilter_numericType = new WeakMap(), _NumberFilter_parity = new WeakMap(), _NumberFilter_primality = new WeakMap(), _NumberFilter_sign = new WeakMap();
/**
 * @function filterNumber
 * @description Determine item with the number filter.
 * @param {unknown} item Item that need to determine.
 * @param {NumberFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
function filterNumber(item, options = {}) {
    return new NumberFilter(options).test(item);
}
export { filterNumber, NumberFilter };
