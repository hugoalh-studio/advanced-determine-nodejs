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
var _BigIntFilter_ieee754, _BigIntFilter_maximum, _BigIntFilter_maximumExclusive, _BigIntFilter_minimum, _BigIntFilter_minimumExclusive, _BigIntFilter_parity, _BigIntFilter_primality, _BigIntFilter_sign;
import { isBigIntEven, isBigIntNegative, isBigIntOdd, isBigIntPositive, isBigIntPrime, isBigIntSafe } from "../bigint.js";
import { enumResolver, IEEE754Enum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum } from "../internal/enum.js";
import { integralNumericTypeRange } from "../internal/numeric.js";
/**
 * @class BigIntFilter
 * @description Filter for big integer.
 */
class BigIntFilter {
    /**
     * @constructor
     * @description Initialize the big integer filter.
     * @param {BigIntFilter | BigIntFilterOptions} [options] Options.
     */
    constructor(options) {
        _BigIntFilter_ieee754.set(this, "any");
        _BigIntFilter_maximum.set(this, void 0);
        _BigIntFilter_maximumExclusive.set(this, false);
        _BigIntFilter_minimum.set(this, void 0);
        _BigIntFilter_minimumExclusive.set(this, false);
        _BigIntFilter_parity.set(this, "any");
        _BigIntFilter_primality.set(this, "any");
        _BigIntFilter_sign.set(this, "any");
        /** @alias maximum */ this.max = this.maximum;
        /** @alias maximumExclusive */ this.exclusiveMax = this.maximumExclusive;
        /** @alias maximumExclusive */ this.exclusiveMaximum = this.maximumExclusive;
        /** @alias maximumExclusive */ this.maxExclusive = this.maximumExclusive;
        /** @alias minimum */ this.min = this.minimum;
        /** @alias minimumExclusive */ this.exclusiveMin = this.minimumExclusive;
        /** @alias minimumExclusive */ this.exclusiveMinimum = this.minimumExclusive;
        /** @alias minimumExclusive */ this.minExclusive = this.minimumExclusive;
        if (options instanceof BigIntFilter) {
            __classPrivateFieldSet(this, _BigIntFilter_ieee754, __classPrivateFieldGet(options, _BigIntFilter_ieee754, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_maximum, __classPrivateFieldGet(options, _BigIntFilter_maximum, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_maximumExclusive, __classPrivateFieldGet(options, _BigIntFilter_maximumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_minimum, __classPrivateFieldGet(options, _BigIntFilter_minimum, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_minimumExclusive, __classPrivateFieldGet(options, _BigIntFilter_minimumExclusive, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_parity, __classPrivateFieldGet(options, _BigIntFilter_parity, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_primality, __classPrivateFieldGet(options, _BigIntFilter_primality, "f"), "f");
            __classPrivateFieldSet(this, _BigIntFilter_sign, __classPrivateFieldGet(options, _BigIntFilter_sign, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.maximum ?? (options.maximum = options.max);
            options.maximumExclusive ?? (options.maximumExclusive = options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax);
            options.minimum ?? (options.minimum = options.min);
            options.minimumExclusive ?? (options.minimumExclusive = options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin);
            for (let option of ["ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "parity", "primality", "sign", "integralNumericType"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this big integer filter for reuse.
     * @returns {BigIntFilter} Another instance of this big integer filter.
     */
    get clone() {
        return new BigIntFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this big integer filter.
     * @returns {BigIntFilterStatus} Status of this big integer filter.
     */
    get status() {
        return {
            ieee754: __classPrivateFieldGet(this, _BigIntFilter_ieee754, "f"),
            maximum: __classPrivateFieldGet(this, _BigIntFilter_maximum, "f"),
            maximumExclusive: __classPrivateFieldGet(this, _BigIntFilter_maximumExclusive, "f"),
            minimum: __classPrivateFieldGet(this, _BigIntFilter_minimum, "f"),
            minimumExclusive: __classPrivateFieldGet(this, _BigIntFilter_minimumExclusive, "f"),
            parity: __classPrivateFieldGet(this, _BigIntFilter_parity, "f"),
            primality: __classPrivateFieldGet(this, _BigIntFilter_primality, "f"),
            sign: __classPrivateFieldGet(this, _BigIntFilter_sign, "f")
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
            throw new RangeError(`Filter argument \`ieee754\` must be either of these values: "${Object.keys(IEEE754Enum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_ieee754, valueResolve, "f");
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
        _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _BigIntFilter_minimum, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _BigIntFilter_maximum, _c, "f"); } }).value] = integralNumericTypeRange(value);
        __classPrivateFieldSet(this, _BigIntFilter_maximumExclusive, false, "f");
        __classPrivateFieldSet(this, _BigIntFilter_minimumExclusive, false, "f");
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
            if (typeof __classPrivateFieldGet(this, _BigIntFilter_minimum, "f") === "bigint" && !(__classPrivateFieldGet(this, _BigIntFilter_minimum, "f") <= value)) {
                throw new RangeError(`Filter argument \`maximum\` must be a big integer which is >= ${__classPrivateFieldGet(this, _BigIntFilter_minimum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`maximum\` must be type of big integer or undefined!`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_maximum, value, "f");
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
        __classPrivateFieldSet(this, _BigIntFilter_maximumExclusive, value, "f");
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
            if (typeof __classPrivateFieldGet(this, _BigIntFilter_maximum, "f") === "bigint" && !(value <= __classPrivateFieldGet(this, _BigIntFilter_maximum, "f"))) {
                throw new RangeError(`Filter argument \`minimum\` must be a big integer which is <= ${__classPrivateFieldGet(this, _BigIntFilter_maximum, "f")}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`minimum\` must be type of big integer or undefined!`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_minimum, value, "f");
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
        __classPrivateFieldSet(this, _BigIntFilter_minimumExclusive, value, "f");
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
            throw new RangeError(`Filter argument \`parity\` must be either of these values: "${Object.keys(MathematicsParityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_parity, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`primality\` must be either of these values: "${Object.keys(MathematicsPrimalityEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_primality, valueResolve, "f");
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
            throw new RangeError(`Filter argument \`sign\` must be either of these values: "${Object.keys(MathematicsSignEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _BigIntFilter_sign, valueResolve, "f");
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
     * @description Determine item with the configured big integer filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "bigint" ||
            (__classPrivateFieldGet(this, _BigIntFilter_ieee754, "f") === "safe" && !isBigIntSafe(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_ieee754, "f") === "unsafe" && isBigIntSafe(item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_maximum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntFilter_maximumExclusive, "f") && !(item < __classPrivateFieldGet(this, _BigIntFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_maximum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntFilter_maximumExclusive, "f") && !(item <= __classPrivateFieldGet(this, _BigIntFilter_maximum, "f"))) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_minimum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _BigIntFilter_minimum, "f") < item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_minimum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntFilter_minimumExclusive, "f") && !(__classPrivateFieldGet(this, _BigIntFilter_minimum, "f") <= item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_parity, "f") === "even" && !isBigIntEven(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_parity, "f") === "odd" && !isBigIntOdd(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_primality, "f") === "composite" && isBigIntPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_primality, "f") === "prime" && !isBigIntPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_sign, "f") === "negative" && !isBigIntNegative(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_sign, "f") === "positive" && !isBigIntPositive(item))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the big integer filter.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_BigIntFilter_ieee754 = new WeakMap(), _BigIntFilter_maximum = new WeakMap(), _BigIntFilter_maximumExclusive = new WeakMap(), _BigIntFilter_minimum = new WeakMap(), _BigIntFilter_minimumExclusive = new WeakMap(), _BigIntFilter_parity = new WeakMap(), _BigIntFilter_primality = new WeakMap(), _BigIntFilter_sign = new WeakMap();
/**
 * @function filterBigInt
 * @description Determine item with the big integer filter.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterBigInt(item, options = {}) {
    return new BigIntFilter(options).test(item);
}
export { BigIntFilter, BigIntFilter as BigIntegerFilter, filterBigInt, filterBigInt as filterBigInteger };
