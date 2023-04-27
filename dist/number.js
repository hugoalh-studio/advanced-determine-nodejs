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
var _NumberItemFilter_even, _NumberItemFilter_finite, _NumberItemFilter_float, _NumberItemFilter_infinite, _NumberItemFilter_integer, _NumberItemFilter_maximum, _NumberItemFilter_maximumExclusive, _NumberItemFilter_minimum, _NumberItemFilter_minimumExclusive, _NumberItemFilter_negative, _NumberItemFilter_odd, _NumberItemFilter_positive, _NumberItemFilter_prime, _NumberItemFilter_safe, _NumberItemFilter_unsafe;
import { integralNumericTypeRange } from "./internal/integral-numeric-types.js";
import { isNumberPrime, isNumberSafe } from "./native/number.js";
/**
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
class NumberItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of number to determine item.
     * @param {NumberItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _NumberItemFilter_even.set(this, void 0);
        _NumberItemFilter_finite.set(this, void 0);
        _NumberItemFilter_float.set(this, void 0);
        _NumberItemFilter_infinite.set(this, void 0);
        _NumberItemFilter_integer.set(this, void 0);
        _NumberItemFilter_maximum.set(this, void 0);
        _NumberItemFilter_maximumExclusive.set(this, void 0);
        _NumberItemFilter_minimum.set(this, void 0);
        _NumberItemFilter_minimumExclusive.set(this, void 0);
        _NumberItemFilter_negative.set(this, void 0);
        _NumberItemFilter_odd.set(this, void 0);
        _NumberItemFilter_positive.set(this, void 0);
        _NumberItemFilter_prime.set(this, void 0);
        _NumberItemFilter_safe.set(this, void 0);
        _NumberItemFilter_unsafe.set(this, void 0);
        let { even, finite, float, infinite, integer, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases } = options;
        float ?? (float = aliases.flt);
        integer ?? (integer = aliases.int);
        maximum ?? (maximum = aliases.max);
        maximumExclusive ?? (maximumExclusive = aliases.maxExclusive ?? aliases.exclusiveMaximum ?? aliases.exclusiveMax ?? false);
        minimum ?? (minimum = aliases.min);
        minimumExclusive ?? (minimumExclusive = aliases.minExclusive ?? aliases.exclusiveMinimum ?? aliases.exclusiveMin ?? false);
        negative ?? (negative = aliases.ngt ?? aliases.nega);
        positive ?? (positive = aliases.pst ?? aliases.posi);
        if (typeof even !== "boolean" && typeof even !== "undefined") {
            throw new TypeError(`Filter argument \`even\` must be type of boolean or undefined!`);
        }
        if (typeof finite !== "boolean" && typeof finite !== "undefined") {
            throw new TypeError(`Filter argument \`finite\` must be type of boolean or undefined!`);
        }
        if (typeof float !== "boolean" && typeof float !== "undefined") {
            throw new TypeError(`Filter argument \`float\` must be type of boolean or undefined!`);
        }
        if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
            throw new TypeError(`Filter argument \`infinite\` must be type of boolean or undefined!`);
        }
        if (typeof integer !== "boolean" && typeof integer !== "undefined") {
            throw new TypeError(`Filter argument \`integer\` must be type of boolean or undefined!`);
        }
        if (!(typeof maximum === "number" && !Number.isNaN(maximum)) && typeof maximum !== "undefined") {
            throw new TypeError(`Filter argument \`maximum\` must be type of number or undefined!`);
        }
        if (typeof maximumExclusive !== "boolean") {
            throw new TypeError(`Filter argument \`maximumExclusive\` must be type of boolean!`);
        }
        if (typeof minimum === "number" && !Number.isNaN(minimum)) {
            if (typeof maximum === "number" && !(minimum <= maximum)) {
                throw new RangeError(`Filter argument \`minimum\` must be a number <= ${maximum}!`);
            }
        }
        else if (typeof minimum !== "undefined") {
            throw new TypeError(`Filter argument \`minimum\` must be type of number or undefined!`);
        }
        if (typeof minimumExclusive !== "boolean") {
            throw new TypeError(`Filter argument \`minimumExclusive\` must be type of boolean!`);
        }
        if (typeof negative !== "boolean" && typeof negative !== "undefined") {
            throw new TypeError(`Filter argument \`negative\` must be type of boolean or undefined!`);
        }
        if (typeof odd !== "boolean" && typeof odd !== "undefined") {
            throw new TypeError(`Filter argument \`odd\` must be type of boolean or undefined!`);
        }
        if (typeof positive !== "boolean" && typeof positive !== "undefined") {
            throw new TypeError(`Filter argument \`positive\` must be type of boolean or undefined!`);
        }
        if (typeof prime !== "boolean" && typeof prime !== "undefined") {
            throw new TypeError(`Filter argument \`prime\` must be type of boolean or undefined!`);
        }
        if (typeof safe !== "boolean" && typeof safe !== "undefined") {
            throw new TypeError(`Filter argument \`safe\` must be type of boolean or undefined!`);
        }
        if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
            throw new TypeError(`Filter argument \`unsafe\` must be type of boolean or undefined!`);
        }
        if (typeof type === "string") {
            __classPrivateFieldSet(this, _NumberItemFilter_maximumExclusive, false, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_minimumExclusive, false, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_float, undefined, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_integer, true, "f");
            let [intrMinimum, intrMaximum] = integralNumericTypeRange(type);
            __classPrivateFieldSet(this, _NumberItemFilter_maximum, Number(intrMaximum), "f");
            __classPrivateFieldSet(this, _NumberItemFilter_minimum, Number(intrMinimum), "f");
        }
        else if (typeof type === "undefined") {
            __classPrivateFieldSet(this, _NumberItemFilter_maximumExclusive, maximumExclusive, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_minimumExclusive, minimumExclusive, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_float, float, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_integer, integer, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_maximum, maximum, "f");
            __classPrivateFieldSet(this, _NumberItemFilter_minimum, minimum, "f");
        }
        else {
            throw new TypeError(`Filter argument \`type\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _NumberItemFilter_even, even, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_finite, finite, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_infinite, infinite, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_negative, negative, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_odd, odd, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_positive, positive, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_prime, prime, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_safe, safe, "f");
        __classPrivateFieldSet(this, _NumberItemFilter_unsafe, unsafe, "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        let itemIsFinite = Number.isFinite(item);
        let itemIsInteger = Number.isInteger(item);
        if (typeof item !== "number" ||
            Number.isNaN(item) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_even, "f") === false && itemIsInteger && item % 2 === 0) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_even, "f") === true && (!itemIsInteger ||
                item % 2 !== 0)) ||
            (typeof __classPrivateFieldGet(this, _NumberItemFilter_maximum, "f") === "number" && __classPrivateFieldGet(this, _NumberItemFilter_maximumExclusive, "f") && __classPrivateFieldGet(this, _NumberItemFilter_maximum, "f") <= item) ||
            (typeof __classPrivateFieldGet(this, _NumberItemFilter_maximum, "f") === "number" && !__classPrivateFieldGet(this, _NumberItemFilter_maximumExclusive, "f") && __classPrivateFieldGet(this, _NumberItemFilter_maximum, "f") < item) ||
            (typeof __classPrivateFieldGet(this, _NumberItemFilter_minimum, "f") === "number" && __classPrivateFieldGet(this, _NumberItemFilter_minimumExclusive, "f") && item <= __classPrivateFieldGet(this, _NumberItemFilter_minimum, "f")) ||
            (typeof __classPrivateFieldGet(this, _NumberItemFilter_minimum, "f") === "number" && !__classPrivateFieldGet(this, _NumberItemFilter_minimumExclusive, "f") && item < __classPrivateFieldGet(this, _NumberItemFilter_minimum, "f")) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_finite, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_infinite, "f") === false) && !itemIsFinite) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_infinite, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_finite, "f") === false) && itemIsFinite) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_float, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_integer, "f") === false) && itemIsInteger) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_integer, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_float, "f") === false) && !itemIsInteger) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_negative, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_positive, "f") === false) && item >= 0) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_positive, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_negative, "f") === false) && item < 0) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_odd, "f") === false && itemIsInteger && item % 2 !== 0) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_odd, "f") === true && (!itemIsInteger ||
                item % 2 === 0)) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_prime, "f") === false && itemIsInteger && isNumberPrime(item)) ||
            (__classPrivateFieldGet(this, _NumberItemFilter_prime, "f") === true && (!itemIsInteger ||
                !isNumberPrime(item))) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_safe, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_unsafe, "f") === false) && !isNumberSafe(item)) ||
            ((__classPrivateFieldGet(this, _NumberItemFilter_unsafe, "f") === true ||
                __classPrivateFieldGet(this, _NumberItemFilter_safe, "f") === false) && isNumberSafe(item))) {
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
_NumberItemFilter_even = new WeakMap(), _NumberItemFilter_finite = new WeakMap(), _NumberItemFilter_float = new WeakMap(), _NumberItemFilter_infinite = new WeakMap(), _NumberItemFilter_integer = new WeakMap(), _NumberItemFilter_maximum = new WeakMap(), _NumberItemFilter_maximumExclusive = new WeakMap(), _NumberItemFilter_minimum = new WeakMap(), _NumberItemFilter_minimumExclusive = new WeakMap(), _NumberItemFilter_negative = new WeakMap(), _NumberItemFilter_odd = new WeakMap(), _NumberItemFilter_positive = new WeakMap(), _NumberItemFilter_prime = new WeakMap(), _NumberItemFilter_safe = new WeakMap(), _NumberItemFilter_unsafe = new WeakMap();
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
