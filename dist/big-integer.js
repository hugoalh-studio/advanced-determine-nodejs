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
var _BigIntegerItemFilter_ieee754, _BigIntegerItemFilter_maximum, _BigIntegerItemFilter_maximumExclusive, _BigIntegerItemFilter_minimum, _BigIntegerItemFilter_minimumExclusive, _BigIntegerItemFilter_parity, _BigIntegerItemFilter_primality, _BigIntegerItemFilter_sign;
import { enumResolve, IEEE754Enum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum } from "./internal/enum.js";
import { integralNumericTypeRange } from "./internal/numeric.js";
import { isBigIntegerEven, isBigIntegerNegative, isBigIntegerOdd, isBigIntegerPositive, isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {BigIntegerItemFilter | BigIntegerItemFilterOptions} [options] Options.
     */
    constructor(options) {
        _BigIntegerItemFilter_ieee754.set(this, "any");
        _BigIntegerItemFilter_maximum.set(this, void 0);
        _BigIntegerItemFilter_maximumExclusive.set(this, false);
        _BigIntegerItemFilter_minimum.set(this, void 0);
        _BigIntegerItemFilter_minimumExclusive.set(this, false);
        _BigIntegerItemFilter_parity.set(this, "any");
        _BigIntegerItemFilter_primality.set(this, "any");
        _BigIntegerItemFilter_sign.set(this, "any");
        /** @alias maximum */ this.max = this.maximum;
        /** @alias maximumExclusive */ this.exclusiveMax = this.maximumExclusive;
        /** @alias maximumExclusive */ this.exclusiveMaximum = this.maximumExclusive;
        /** @alias maximumExclusive */ this.maxExclusive = this.maximumExclusive;
        /** @alias minimum */ this.min = this.minimum;
        /** @alias minimumExclusive */ this.exclusiveMin = this.minimumExclusive;
        /** @alias minimumExclusive */ this.exclusiveMinimum = this.minimumExclusive;
        /** @alias minimumExclusive */ this.minExclusive = this.minimumExclusive;
        if (options instanceof BigIntegerItemFilter) {
            __classPrivateFieldSet(this, _BigIntegerItemFilter_ieee754, __classPrivateFieldGet(options, _BigIntegerItemFilter_ieee754, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_maximum, __classPrivateFieldGet(options, _BigIntegerItemFilter_maximum, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_maximumExclusive, __classPrivateFieldGet(options, _BigIntegerItemFilter_maximumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_minimum, __classPrivateFieldGet(options, _BigIntegerItemFilter_minimum, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_minimumExclusive, __classPrivateFieldGet(options, _BigIntegerItemFilter_minimumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_parity, __classPrivateFieldGet(options, _BigIntegerItemFilter_parity, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_primality, __classPrivateFieldGet(options, _BigIntegerItemFilter_primality, "f"), "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_sign, __classPrivateFieldGet(options, _BigIntegerItemFilter_sign, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.integralNumericType ?? (options.integralNumericType = options.type);
            options.maximum ?? (options.maximum = options.max);
            options.maximumExclusive ?? (options.maximumExclusive = options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax);
            options.minimum ?? (options.minimum = options.min);
            options.minimumExclusive ?? (options.minimumExclusive = options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin);
            options.negative ?? (options.negative = options.ngt ?? options.nega);
            options.positive ?? (options.positive = options.pst ?? options.posi);
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
    get clone() {
        return new BigIntegerItemFilter(this);
    }
    /**
     * @method status
     * @description Status of this filter.
     * @returns {BigIntegerItemFilterOptionsBase}
     */
    get status() {
        return {
            ieee754: __classPrivateFieldGet(this, _BigIntegerItemFilter_ieee754, "f"),
            maximum: __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f"),
            maximumExclusive: __classPrivateFieldGet(this, _BigIntegerItemFilter_maximumExclusive, "f"),
            minimum: __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f"),
            minimumExclusive: __classPrivateFieldGet(this, _BigIntegerItemFilter_minimumExclusive, "f"),
            parity: __classPrivateFieldGet(this, _BigIntegerItemFilter_parity, "f"),
            primality: __classPrivateFieldGet(this, _BigIntegerItemFilter_primality, "f"),
            sign: __classPrivateFieldGet(this, _BigIntegerItemFilter_sign, "f")
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
        let valueResolve = enumResolve(IEEE754Enum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`ieee754\` must be match either of these values: "${Object.keys(IEEE754Enum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_ieee754, valueResolve, "f");
        return this;
    }
    /**
     * @method integralNumericType
     * @description Integral numeric type of the big integer.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value) {
        var _a, _b;
        _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _BigIntegerItemFilter_minimum, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _BigIntegerItemFilter_maximum, _c, "f"); } }).value] = integralNumericTypeRange(value);
        __classPrivateFieldSet(this, _BigIntegerItemFilter_maximumExclusive, false, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_minimumExclusive, false, "f");
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
            if (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") === "bigint" && !(__classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") <= value)) {
                throw new RangeError(`Filter argument \`maximum\` must be a big integer which is >= ${__classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`maximum\` must be type of big integer or undefined!`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_maximum, value, "f");
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
        __classPrivateFieldSet(this, _BigIntegerItemFilter_maximumExclusive, value, "f");
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
            if (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") === "bigint" && !(value <= __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f"))) {
                throw new RangeError(`Filter argument \`minimum\` must be a big integer which is <= ${__classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`minimum\` must be type of big integer or undefined!`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_minimum, value, "f");
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
        __classPrivateFieldSet(this, _BigIntegerItemFilter_minimumExclusive, value, "f");
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
        let valueResolve = enumResolve(MathematicsParityEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`parity\` must be match either of these values: "${Object.keys(MathematicsParityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_parity, valueResolve, "f");
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
        let valueResolve = enumResolve(MathematicsPrimalityEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`primality\` must be match either of these values: "${Object.keys(MathematicsPrimalityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_primality, valueResolve, "f");
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
        let valueResolve = enumResolve(MathematicsSignEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`sign\` must be match either of these values: "${Object.keys(MathematicsSignEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_sign, valueResolve, "f");
        return this;
    }
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
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_ieee754, "f") === "safe" && !isBigIntegerSafe(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_ieee754, "f") === "unsafe" && isBigIntegerSafe(item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntegerItemFilter_maximumExclusive, "f") && !(item < __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntegerItemFilter_maximumExclusive, "f") && !(item <= __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntegerItemFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") < item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntegerItemFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") <= item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_parity, "f") === "even" && !isBigIntegerEven(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_parity, "f") === "odd" && !isBigIntegerOdd(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_primality, "f") === "composite" && isBigIntegerPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_primality, "f") === "prime" && !isBigIntegerPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_sign, "f") === "negative" && !isBigIntegerNegative(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_sign, "f") === "positive" && !isBigIntegerPositive(item))) {
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
_BigIntegerItemFilter_ieee754 = new WeakMap(), _BigIntegerItemFilter_maximum = new WeakMap(), _BigIntegerItemFilter_maximumExclusive = new WeakMap(), _BigIntegerItemFilter_minimum = new WeakMap(), _BigIntegerItemFilter_minimumExclusive = new WeakMap(), _BigIntegerItemFilter_parity = new WeakMap(), _BigIntegerItemFilter_primality = new WeakMap(), _BigIntegerItemFilter_sign = new WeakMap();
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
