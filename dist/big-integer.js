var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BigIntegerItemFilter_even, _BigIntegerItemFilter_maximum, _BigIntegerItemFilter_maximumExclusive, _BigIntegerItemFilter_minimum, _BigIntegerItemFilter_minimumExclusive, _BigIntegerItemFilter_negative, _BigIntegerItemFilter_odd, _BigIntegerItemFilter_positive, _BigIntegerItemFilter_prime, _BigIntegerItemFilter_safe, _BigIntegerItemFilter_unsafe;
import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isBigIntegerPrime, isBigIntegerSafe } from "./native/big-integer.js";
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
class BigIntegerItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {BigIntegerItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        var _a, _b;
        _BigIntegerItemFilter_even.set(this, void 0);
        _BigIntegerItemFilter_maximum.set(this, void 0);
        _BigIntegerItemFilter_maximumExclusive.set(this, void 0);
        _BigIntegerItemFilter_minimum.set(this, void 0);
        _BigIntegerItemFilter_minimumExclusive.set(this, void 0);
        _BigIntegerItemFilter_negative.set(this, void 0);
        _BigIntegerItemFilter_odd.set(this, void 0);
        _BigIntegerItemFilter_positive.set(this, void 0);
        _BigIntegerItemFilter_prime.set(this, void 0);
        _BigIntegerItemFilter_safe.set(this, void 0);
        _BigIntegerItemFilter_unsafe.set(this, void 0);
        let { even, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases } = options;
        maximum ?? (maximum = aliases.max);
        maximumExclusive ?? (maximumExclusive = aliases.maxExclusive ?? aliases.exclusiveMaximum ?? aliases.exclusiveMax ?? false);
        minimum ?? (minimum = aliases.min);
        minimumExclusive ?? (minimumExclusive = aliases.minExclusive ?? aliases.exclusiveMinimum ?? aliases.exclusiveMin ?? false);
        negative ?? (negative = aliases.ngt ?? aliases.nega);
        positive ?? (positive = aliases.pst ?? aliases.posi);
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
            __classPrivateFieldSet(this, _BigIntegerItemFilter_maximumExclusive, false, "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_minimumExclusive, false, "f");
            _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _BigIntegerItemFilter_minimum, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _BigIntegerItemFilter_maximum, _c, "f"); } }).value] = integralNumericTypeRange(type);
        }
        else if (typeof type === "undefined") {
            __classPrivateFieldSet(this, _BigIntegerItemFilter_maximumExclusive, maximumExclusive, "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_minimumExclusive, minimumExclusive, "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_maximum, maximum, "f");
            __classPrivateFieldSet(this, _BigIntegerItemFilter_minimum, minimum, "f");
        }
        else {
            throw new TypeError(`Argument \`options.type\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _BigIntegerItemFilter_even, even, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_negative, negative, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_odd, odd, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_positive, positive, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_prime, prime, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_safe, safe, "f");
        __classPrivateFieldSet(this, _BigIntegerItemFilter_unsafe, unsafe, "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "bigint" ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_even, "f") === false && item % 2n === 0n) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_even, "f") === true && item % 2n !== 0n) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntegerItemFilter_maximumExclusive, "f") && __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") <= item) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntegerItemFilter_maximumExclusive, "f") && __classPrivateFieldGet(this, _BigIntegerItemFilter_maximum, "f") < item) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") === "bigint" && __classPrivateFieldGet(this, _BigIntegerItemFilter_minimumExclusive, "f") && item <= __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f")) ||
            (typeof __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f") === "bigint" && !__classPrivateFieldGet(this, _BigIntegerItemFilter_minimumExclusive, "f") && item < __classPrivateFieldGet(this, _BigIntegerItemFilter_minimum, "f")) ||
            ((__classPrivateFieldGet(this, _BigIntegerItemFilter_negative, "f") === true ||
                __classPrivateFieldGet(this, _BigIntegerItemFilter_positive, "f") === false) && item >= 0n) ||
            ((__classPrivateFieldGet(this, _BigIntegerItemFilter_positive, "f") === true ||
                __classPrivateFieldGet(this, _BigIntegerItemFilter_negative, "f") === false) && item < 0n) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_odd, "f") === false && item % 2n !== 0n) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_odd, "f") === true && item % 2n === 0n) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_prime, "f") === false && isBigIntegerPrime(item)) ||
            (__classPrivateFieldGet(this, _BigIntegerItemFilter_prime, "f") === true && !isBigIntegerPrime(item)) ||
            ((__classPrivateFieldGet(this, _BigIntegerItemFilter_safe, "f") === true ||
                __classPrivateFieldGet(this, _BigIntegerItemFilter_unsafe, "f") === false) && !isBigIntegerSafe(item)) ||
            ((__classPrivateFieldGet(this, _BigIntegerItemFilter_unsafe, "f") === true ||
                __classPrivateFieldGet(this, _BigIntegerItemFilter_safe, "f") === false) && isBigIntegerSafe(item))) {
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
_BigIntegerItemFilter_even = new WeakMap(), _BigIntegerItemFilter_maximum = new WeakMap(), _BigIntegerItemFilter_maximumExclusive = new WeakMap(), _BigIntegerItemFilter_minimum = new WeakMap(), _BigIntegerItemFilter_minimumExclusive = new WeakMap(), _BigIntegerItemFilter_negative = new WeakMap(), _BigIntegerItemFilter_odd = new WeakMap(), _BigIntegerItemFilter_positive = new WeakMap(), _BigIntegerItemFilter_prime = new WeakMap(), _BigIntegerItemFilter_safe = new WeakMap(), _BigIntegerItemFilter_unsafe = new WeakMap();
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
