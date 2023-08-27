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
var _BigIntFilter_status;
import { isBigIntEven, isBigIntNegative, isBigIntOdd, isBigIntPositive, isBigIntPrime, isBigIntSafe } from "../bigint.js";
import { enumResolver, IEEE754Enum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum } from "../internal/enum.js";
import { integralNumericTypeRange } from "../internal/numeric.js";
/**
 * Filter for big integer.
 */
export class BigIntFilter {
    /**
     * Initialize the big integer filter.
     * @param {BigIntFilter | BigIntFilterOptions} [options] Options.
     */
    constructor(options) {
        _BigIntFilter_status.set(this, {
            ieee754: "any",
            maximum: undefined,
            maximumExclusive: false,
            minimum: undefined,
            minimumExclusive: false,
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
        if (options instanceof BigIntFilter) {
            __classPrivateFieldSet(this, _BigIntFilter_status, { ...__classPrivateFieldGet(options, _BigIntFilter_status, "f") }, "f");
        }
        else if (typeof options !== "undefined") {
            options.maximum ?? (options.maximum = options.max);
            options.maximumExclusive ?? (options.maximumExclusive = options.maxExclusive ?? options.exclusiveMaximum ?? options.exclusiveMax);
            options.minimum ?? (options.minimum = options.min);
            options.minimumExclusive ?? (options.minimumExclusive = options.minExclusive ?? options.exclusiveMinimum ?? options.exclusiveMin);
            for (const option of ["ieee754", "maximum", "maximumExclusive", "minimum", "minimumExclusive", "parity", "primality", "sign", "integralNumericType"]) {
                //@ts-ignore Handle by it's method.
                if (typeof options[option] !== "undefined") {
                    //@ts-ignore Handle by it's method.
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * Clone this big integer filter for reuse.
     * @returns {BigIntFilter} Another instance of this big integer filter.
     */
    get clone() {
        return new BigIntFilter(this);
    }
    /**
     * Get the status of this big integer filter.
     * @returns {BigIntFilterStatus} Status of this big integer filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _BigIntFilter_status, "f") };
    }
    /**
     * IEEE-754 safe mode of the big integer.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value) {
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").ieee754 = enumResolver(IEEE754Enum, value, "Filter status `ieee754`");
        return this;
    }
    /**
     * Integral numeric type of the big integer.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value) {
        [__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum, __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum] = integralNumericTypeRange(value);
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximumExclusive = false;
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimumExclusive = false;
        return this;
    }
    /**
     * Maximum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    maximum(value) {
        if (typeof value === "bigint") {
            if (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum === "bigint" && !(__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum <= value)) {
                throw new RangeError(`Filter status \`maximum\` must be a bigint which is >= ${__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter status \`maximum\` must be a bigint or undefined!`);
        }
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum = value;
        return this;
    }
    /**
     * Whether to exclusive maximum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`maximumExclusive\` must be a boolean!`);
        }
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximumExclusive = value;
        return this;
    }
    /**
     * Minimum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    minimum(value) {
        if (typeof value === "bigint") {
            if (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum === "bigint" && !(value <= __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum)) {
                throw new RangeError(`Filter status \`minimum\` must be a bigint which is <= ${__classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum}!`);
            }
        }
        else if (typeof value !== "undefined") {
            throw new TypeError(`Filter status \`minimum\` must be a bigint or undefined!`);
        }
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum = value;
        return this;
    }
    /**
     * Whether to exclusive minimum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`minimumExclusive\` must be a boolean!`);
        }
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimumExclusive = value;
        return this;
    }
    /**
     * Parity of the big integer.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value) {
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").parity = enumResolver(MathematicsParityEnum, value, "Filter status `parity`");
        return this;
    }
    /**
     * Primality of the big integer.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value) {
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").primality = enumResolver(MathematicsPrimalityEnum, value, "Filter status `primality`");
        return this;
    }
    /**
     * Sign of the big integer.
     * @param {MathematicsSignEnumKeysType} value
     * @returns {this}
     */
    sign(value) {
        __classPrivateFieldGet(this, _BigIntFilter_status, "f").sign = enumResolver(MathematicsSignEnum, value, "Filter status `sign`");
        return this;
    }
    /**
     * Set to allow a composite big integer.
     * @returns {this}
     */
    composite() {
        return this.primality("composite");
    }
    /**
     * Set to allow an even big integer.
     * @returns {this}
     */
    even() {
        return this.parity("even");
    }
    /**
     * Set to allow a negative big integer.
     * @returns {this}
     */
    negative() {
        return this.sign("negative");
    }
    /**
     * Set to allow an odd big integer.
     * @returns {this}
     */
    odd() {
        return this.parity("odd");
    }
    /**
     * Set to allow a positive big integer.
     * @returns {this}
     */
    positive() {
        return this.sign("positive");
    }
    /**
     * Set to allow a prime big integer.
     * @returns {this}
     */
    prime() {
        return this.primality("prime");
    }
    /**
     * Set to allow an IEEE-754 safe big integer.
     * @returns {this}
     */
    safe() {
        return this.ieee754("safe");
    }
    /**
     * Set to allow an IEEE-754 unsafe big integer.
     * @returns {this}
     */
    unsafe() {
        return this.ieee754("unsafe");
    }
    /**
     * Determine item with the configured big integer filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "bigint" ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").ieee754 === "safe" && !isBigIntSafe(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").ieee754 === "unsafe" && isBigIntSafe(item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum === "bigint" && __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximumExclusive && !(item < __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum === "bigint" && !__classPrivateFieldGet(this, _BigIntFilter_status, "f").maximumExclusive && !(item <= __classPrivateFieldGet(this, _BigIntFilter_status, "f").maximum)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum === "bigint" && __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimumExclusive && !(__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum < item)) ||
            (typeof __classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum === "bigint" && !__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimumExclusive && !(__classPrivateFieldGet(this, _BigIntFilter_status, "f").minimum <= item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").parity === "even" && !isBigIntEven(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").parity === "odd" && !isBigIntOdd(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").primality === "composite" && isBigIntPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").primality === "prime" && !isBigIntPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").sign === "negative" && !isBigIntNegative(item)) ||
            (__classPrivateFieldGet(this, _BigIntFilter_status, "f").sign === "positive" && !isBigIntPositive(item))) {
            return false;
        }
        return true;
    }
    /**
     * Determine item with the big integer filter.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_BigIntFilter_status = new WeakMap();
export { BigIntFilter as BigIntegerFilter };
/**
 * Determine item with the big integer filter.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterBigInt(item, options = {}) {
    return new BigIntFilter(options).test(item);
}
export { filterBigInt as filterBigInteger };
