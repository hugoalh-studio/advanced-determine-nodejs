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
var _JSONItemFilter_arrayRoot, _JSONItemFilter_entriesCountMaximum, _JSONItemFilter_entriesCountMinimum, _JSONItemFilter_keysPattern;
import { ArrayItemFilter } from "./array.js";
import { PlainObjectItemFilter } from "./plain-object.js";
const jsonArrayFilter = new ArrayItemFilter({ strict: true });
const jsonObjectFilter = new PlainObjectItemFilter({ strict: true });
const jsonLegalKeysPatternRegExp = /^[$_a-z][$\d_a-z]*$/u;
/**
 * @access private
 * @function isJSONValue
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONValue(item, keysPattern) {
    return (typeof item === "boolean" ||
        isJSONInternal(item, keysPattern) ||
        item === null ||
        (typeof item === "number" && !Number.isNaN(item)) ||
        typeof item === "string");
}
/**
 * @access private
 * @function isJSONInternal
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONInternal(item, keysPattern) {
    if (jsonArrayFilter.test(item)) {
        for (let itemElement of item) {
            if (!isJSONValue(itemElement, keysPattern)) {
                return false;
            }
        }
        return true;
    }
    if (jsonObjectFilter.test(item)) {
        try {
            JSON.stringify(item);
        }
        catch {
            return false;
        }
        for (let itemKey of Object.keys(item)) {
            if ((keysPattern instanceof RegExp && !keysPattern.test(itemKey)) ||
                !isJSONValue(item[itemKey], keysPattern)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
/**
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
class JSONItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {JSONItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _JSONItemFilter_arrayRoot.set(this, void 0);
        _JSONItemFilter_entriesCountMaximum.set(this, void 0);
        _JSONItemFilter_entriesCountMinimum.set(this, void 0);
        _JSONItemFilter_keysPattern.set(this, void 0);
        let { allowEmpty = false, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict = false, strictKeys, ...aliases } = options;
        entriesCount ?? (entriesCount = aliases.entries);
        entriesCountMaximum ?? (entriesCountMaximum = aliases.entriesMaximum ?? aliases.entriesCountMax ?? aliases.entriesMax ?? aliases.maximumEntries ?? aliases.maxEntries ?? Infinity);
        entriesCountMinimum ?? (entriesCountMinimum = aliases.entriesMinimum ?? aliases.entriesCountMin ?? aliases.entriesMin ?? aliases.minimumEntries ?? aliases.minEntries ?? 1);
        strictKeys ?? (strictKeys = aliases.keysStrict ?? false);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
        }
        if (typeof arrayRoot !== "boolean" && typeof arrayRoot !== "undefined") {
            throw new TypeError(`Argument \`options.arrayRoot\` must be type of boolean or undefined!`);
        }
        if (typeof entriesCount === "number" && !Number.isNaN(entriesCount)) {
            if (!(Number.isSafeInteger(entriesCount) && entriesCount >= 0)) {
                throw new RangeError(`Argument \`options.entriesCount\` must be a number which is integer, positive, and safe!`);
            }
        }
        else if (typeof entriesCount !== "undefined") {
            throw new TypeError(`Argument \`options.entriesCount\` must be type of number or undefined!`);
        }
        if (!(typeof entriesCountMaximum === "number" && !Number.isNaN(entriesCountMaximum))) {
            throw new TypeError(`Argument \`options.entriesCountMaximum\` must be type of number!`);
        }
        if (entriesCountMaximum !== Infinity && !(Number.isSafeInteger(entriesCountMaximum) && entriesCountMaximum >= 0)) {
            throw new RangeError(`Argument \`options.entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
        }
        if (!(typeof entriesCountMinimum === "number" && !Number.isNaN(entriesCountMinimum))) {
            throw new TypeError(`Argument \`options.entriesCountMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(entriesCountMinimum) && entriesCountMinimum >= 0 && entriesCountMinimum <= entriesCountMaximum)) {
            throw new RangeError(`Argument \`options.entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${entriesCountMaximum}!`);
        }
        if (!(keysPattern instanceof RegExp) && typeof keysPattern !== "undefined") {
            throw new TypeError(`Argument \`options.keysPattern\` must be instance of regular expression, or type of undefined!`);
        }
        if (typeof strict !== "boolean") {
            throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
        }
        if (typeof strictKeys !== "boolean") {
            throw new TypeError(`Argument \`options.strictKeys\` must be type of boolean!`);
        }
        if (typeof entriesCount === "number") {
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMaximum, entriesCount, "f");
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, entriesCount, "f");
        }
        else {
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMaximum, entriesCountMaximum, "f");
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, allowEmpty ? 0 : entriesCountMinimum, "f");
        }
        __classPrivateFieldSet(this, _JSONItemFilter_arrayRoot, strict ? false : arrayRoot, "f");
        __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, (strict || strictKeys) ? jsonLegalKeysPatternRegExp : keysPattern, "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        let itemEntriesLength = Object.entries(item).length;
        if (!isJSONInternal(item, __classPrivateFieldGet(this, _JSONItemFilter_keysPattern, "f")) ||
            (__classPrivateFieldGet(this, _JSONItemFilter_arrayRoot, "f") === false && Array.isArray(item)) ||
            (__classPrivateFieldGet(this, _JSONItemFilter_arrayRoot, "f") === true && !Array.isArray(item)) ||
            __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMaximum, "f") < itemEntriesLength ||
            itemEntriesLength < __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_JSONItemFilter_arrayRoot = new WeakMap(), _JSONItemFilter_entriesCountMaximum = new WeakMap(), _JSONItemFilter_entriesCountMinimum = new WeakMap(), _JSONItemFilter_keysPattern = new WeakMap();
/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isJSON(item, options = {}) {
    return new JSONItemFilter(options).test(item);
}
export { isJSON, JSONItemFilter };
