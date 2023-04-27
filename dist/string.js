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
var _StringItemFilter_ascii, _StringItemFilter_lengthMaximum, _StringItemFilter_lengthMinimum, _StringItemFilter_lowerCase, _StringItemFilter_multipleLine, _StringItemFilter_pattern, _StringItemFilter_preTrim, _StringItemFilter_singleLine, _StringItemFilter_upperCase;
import { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase } from "./native/string.js";
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
class StringItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of string to determine item.
     * @param {StringItemFilterOptions} [options={}] Options
     */
    constructor(options = {}) {
        _StringItemFilter_ascii.set(this, void 0);
        _StringItemFilter_lengthMaximum.set(this, void 0);
        _StringItemFilter_lengthMinimum.set(this, void 0);
        _StringItemFilter_lowerCase.set(this, void 0);
        _StringItemFilter_multipleLine.set(this, void 0);
        _StringItemFilter_pattern.set(this, void 0);
        _StringItemFilter_preTrim.set(this, void 0);
        _StringItemFilter_singleLine.set(this, void 0);
        _StringItemFilter_upperCase.set(this, void 0);
        let { allowEmpty = false, ascii, length, lengthMaximum, lengthMinimum, lowerCase, multipleLine, pattern, preTrim = false, singleLine, upperCase, ...aliases } = options;
        length ?? (length = aliases.characters);
        lengthMaximum ?? (lengthMaximum = aliases.lengthMax ?? aliases.charactersMaximum ?? aliases.charactersMax ?? aliases.maximumLength ?? aliases.maxLength ?? aliases.maximumCharacters ?? aliases.maxCharacters ?? Infinity);
        lengthMinimum ?? (lengthMinimum = aliases.lengthMin ?? aliases.charactersMinimum ?? aliases.charactersMin ?? aliases.minimumLength ?? aliases.minLength ?? aliases.minimumCharacters ?? aliases.minCharacters ?? 1);
        multipleLine ?? (multipleLine = aliases.multiLine ?? aliases.multiline);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        if (typeof ascii !== "boolean" && typeof ascii !== "undefined") {
            throw new TypeError(`Filter argument \`ascii\` must be type of boolean or undefined!`);
        }
        if (typeof length === "number" && !Number.isNaN(length)) {
            if (!(Number.isSafeInteger(length) && length >= 0)) {
                throw new RangeError(`Filter argument \`length\` must be a number which is integer, positive, and safe!`);
            }
        }
        else if (typeof length !== "undefined") {
            throw new TypeError(`Filter argument \`length\` must be type of number or undefined!`);
        }
        if (!(typeof lengthMaximum === "number" && !Number.isNaN(lengthMaximum))) {
            throw new TypeError(`Filter argument \`lengthMaximum\` must be type of number!`);
        }
        if (lengthMaximum !== Infinity && !(Number.isSafeInteger(lengthMaximum) && lengthMaximum >= 0)) {
            throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
        }
        if (!(typeof lengthMinimum === "number" && !Number.isNaN(lengthMinimum))) {
            throw new TypeError(`Filter argument \`lengthMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(lengthMinimum) && lengthMinimum >= 0 && lengthMinimum <= lengthMaximum)) {
            throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${lengthMaximum}!`);
        }
        if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
            throw new TypeError(`Filter argument \`lowerCase\` must be type of boolean or undefined!`);
        }
        if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
            throw new TypeError(`Filter argument \`multipleLine\` must be type of boolean or undefined!`);
        }
        if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
            throw new TypeError(`Filter argument \`pattern\` must be instance of regular expression, or type of undefined!`);
        }
        if (typeof preTrim !== "boolean") {
            throw new TypeError(`Filter argument \`preTrim\` must be type of boolean!`);
        }
        if (typeof singleLine !== "boolean" && typeof singleLine !== "undefined") {
            throw new TypeError(`Filter argument \`singleLine\` must be type of boolean or undefined!`);
        }
        if (typeof upperCase !== "boolean" && typeof upperCase !== "undefined") {
            throw new TypeError(`Filter argument \`upperCase\` must be type of boolean or undefined!`);
        }
        if (typeof length === "number") {
            __classPrivateFieldSet(this, _StringItemFilter_lengthMaximum, length, "f");
            __classPrivateFieldSet(this, _StringItemFilter_lengthMinimum, length, "f");
        }
        else {
            __classPrivateFieldSet(this, _StringItemFilter_lengthMaximum, lengthMaximum, "f");
            __classPrivateFieldSet(this, _StringItemFilter_lengthMinimum, allowEmpty ? 0 : lengthMinimum, "f");
        }
        __classPrivateFieldSet(this, _StringItemFilter_ascii, ascii, "f");
        __classPrivateFieldSet(this, _StringItemFilter_lowerCase, lowerCase, "f");
        __classPrivateFieldSet(this, _StringItemFilter_multipleLine, multipleLine, "f");
        __classPrivateFieldSet(this, _StringItemFilter_pattern, pattern, "f");
        __classPrivateFieldSet(this, _StringItemFilter_preTrim, preTrim, "f");
        __classPrivateFieldSet(this, _StringItemFilter_singleLine, singleLine, "f");
        __classPrivateFieldSet(this, _StringItemFilter_upperCase, upperCase, "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "string") {
            return false;
        }
        let itemRaw = __classPrivateFieldGet(this, _StringItemFilter_preTrim, "f") ? item.trim() : item;
        if ((__classPrivateFieldGet(this, _StringItemFilter_ascii, "f") === false && isStringASCII(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringItemFilter_ascii, "f") === true && !isStringASCII(itemRaw)) ||
            __classPrivateFieldGet(this, _StringItemFilter_lengthMaximum, "f") < itemRaw.length ||
            itemRaw.length < __classPrivateFieldGet(this, _StringItemFilter_lengthMinimum, "f") ||
            (__classPrivateFieldGet(this, _StringItemFilter_pattern, "f") instanceof RegExp && !__classPrivateFieldGet(this, _StringItemFilter_pattern, "f").test(itemRaw)) ||
            ((__classPrivateFieldGet(this, _StringItemFilter_lowerCase, "f") === true ||
                __classPrivateFieldGet(this, _StringItemFilter_upperCase, "f") === false) && !isStringLowerCase(itemRaw)) ||
            ((__classPrivateFieldGet(this, _StringItemFilter_upperCase, "f") === true ||
                __classPrivateFieldGet(this, _StringItemFilter_lowerCase, "f") === false) && !isStringUpperCase(itemRaw)) ||
            ((__classPrivateFieldGet(this, _StringItemFilter_multipleLine, "f") === true ||
                __classPrivateFieldGet(this, _StringItemFilter_singleLine, "f") === false) && !isStringMultipleLine(itemRaw)) ||
            ((__classPrivateFieldGet(this, _StringItemFilter_singleLine, "f") === true ||
                __classPrivateFieldGet(this, _StringItemFilter_multipleLine, "f") === false) && !isStringSingleLine(itemRaw))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @param {StringItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_StringItemFilter_ascii = new WeakMap(), _StringItemFilter_lengthMaximum = new WeakMap(), _StringItemFilter_lengthMinimum = new WeakMap(), _StringItemFilter_lowerCase = new WeakMap(), _StringItemFilter_multipleLine = new WeakMap(), _StringItemFilter_pattern = new WeakMap(), _StringItemFilter_preTrim = new WeakMap(), _StringItemFilter_singleLine = new WeakMap(), _StringItemFilter_upperCase = new WeakMap();
/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {StringItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isString(item, options = {}) {
    return new StringItemFilter(options).test(item);
}
export { isString, StringItemFilter };
