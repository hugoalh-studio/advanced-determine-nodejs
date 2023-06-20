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
var _a, _JSONFilter_entriesCountMaximum, _JSONFilter_entriesCountMinimum, _JSONFilter_keysPattern, _JSONFilter_rootType;
import { ArrayFilter } from "./array.js";
import { ObjectFilter } from "./object.js";
import { enumResolver, JSONRootTypeEnum } from "../internal/enum.js";
const jsonArrayFilter = new ArrayFilter().allowEmpty().strict();
const jsonObjectFilter = new ObjectFilter().allowEmpty().plain();
const jsonLegalKeysPatternRegExp = /^[$_A-Za-z][$\d_A-Za-z]*$/u;
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
 * @class JSONFilter
 * @description Filter for JSON.
 */
class JSONFilter {
    /**
     * @constructor
     * @description Initialize the JSON filter.
     * @param {JSONFilter | JSONFilterOptions} [options] Options.
     */
    constructor(options) {
        _JSONFilter_entriesCountMaximum.set(this, Infinity);
        _JSONFilter_entriesCountMinimum.set(this, 1);
        _JSONFilter_keysPattern.set(this, void 0);
        _JSONFilter_rootType.set(this, "any");
        /** @alias entriesCountMaximum */ this.entriesCountMax = this.entriesCountMaximum;
        /** @alias entriesCountMaximum */ this.maxEntries = this.entriesCountMaximum;
        /** @alias entriesCountMaximum */ this.maximumEntries = this.entriesCountMaximum;
        /** @alias entriesCountMinimum */ this.entriesCountMin = this.entriesCountMinimum;
        /** @alias entriesCountMinimum */ this.minEntries = this.entriesCountMinimum;
        /** @alias entriesCountMinimum */ this.minimumEntries = this.entriesCountMinimum;
        /** @alias strictKeys */ this.keysStrict = this.strictKeys;
        /** @alias testStringify */ this.stringifiedTest = this.testStringify;
        /** @alias testStringify */ this.stringifyTest = this.testStringify;
        /** @alias testStringify */ this.testStringified = this.testStringify;
        if (options instanceof JSONFilter) {
            __classPrivateFieldSet(this, _JSONFilter_entriesCountMaximum, __classPrivateFieldGet(options, _JSONFilter_entriesCountMaximum, "f"), "f");
            __classPrivateFieldSet(this, _JSONFilter_entriesCountMinimum, __classPrivateFieldGet(options, _JSONFilter_entriesCountMinimum, "f"), "f");
            __classPrivateFieldSet(this, _JSONFilter_keysPattern, __classPrivateFieldGet(options, _JSONFilter_keysPattern, "f"), "f");
            __classPrivateFieldSet(this, _JSONFilter_rootType, __classPrivateFieldGet(options, _JSONFilter_rootType, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.entriesCountMaximum ?? (options.entriesCountMaximum = options.entriesCountMax ?? options.maximumEntries ?? options.maxEntries);
            options.entriesCountMinimum ?? (options.entriesCountMinimum = options.entriesCountMin ?? options.minimumEntries ?? options.minEntries);
            options.strictKeys ?? (options.strictKeys = options.keysStrict ?? false);
            for (let option of ["entriesCountMaximum", "entriesCountMinimum", "keysPattern", "rootType", "strictKeys", "allowEmpty", "entriesCount", "strict"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this JSON filter for reuse.
     * @returns {JSONFilter} Another instance of this JSON filter.
     */
    get clone() {
        return new JSONFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this JSON filter.
     * @returns {JSONFilterStatus} Status of this JSON filter.
     */
    get status() {
        return {
            entriesCountMaximum: __classPrivateFieldGet(this, _JSONFilter_entriesCountMaximum, "f"),
            entriesCountMinimum: __classPrivateFieldGet(this, _JSONFilter_entriesCountMinimum, "f"),
            keysPattern: __classPrivateFieldGet(this, _JSONFilter_keysPattern, "f"),
            rootType: __classPrivateFieldGet(this, _JSONFilter_rootType, "f")
        };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty JSON.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_entriesCountMinimum, value ? 0 : 1, "f");
        return this;
    }
    /**
     * @method entriesCount
     * @description Entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCount\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter argument \`entriesCount\` must be a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_entriesCountMaximum, value, "f");
        __classPrivateFieldSet(this, _JSONFilter_entriesCountMinimum, value, "f");
        return this;
    }
    /**
     * @method entriesCountMaximum
     * @description Maximum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _JSONFilter_entriesCountMinimum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _JSONFilter_entriesCountMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_entriesCountMaximum, value, "f");
        return this;
    }
    /**
     * @method entriesCountMinimum
     * @description Minimum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _JSONFilter_entriesCountMaximum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _JSONFilter_entriesCountMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_entriesCountMinimum, value, "f");
        return this;
    }
    /**
     * @method keysPattern
     * @description Whether a pattern matchable JSON keys.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    keysPattern(value) {
        if (!(value instanceof RegExp) && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`keysPattern\` must be instance of regular expression, or type of undefined!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_keysPattern, value, "f");
        return this;
    }
    /**
     * @method rootType
     * @description Root type of the JSON.
     * @param {JSONRootTypeEnumKeysType} value
     * @returns {this}
     */
    rootType(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`rootType\` must be type of string!`);
        }
        let valueResolve = enumResolver(JSONRootTypeEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`rootType\` must be either of these values: "${Object.keys(JSONRootTypeEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _JSONFilter_rootType, valueResolve, "f");
        return this;
    }
    /**
     * @method strict
     * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`strict\` must be type of boolean!`);
        }
        if (value) {
            __classPrivateFieldSet(this, _JSONFilter_keysPattern, jsonLegalKeysPatternRegExp, "f");
            __classPrivateFieldSet(this, _JSONFilter_rootType, "object", "f");
        }
        else {
            __classPrivateFieldSet(this, _JSONFilter_keysPattern, undefined, "f");
            __classPrivateFieldSet(this, _JSONFilter_rootType, "any", "f");
        }
        return this;
    }
    /**
     * @method strictKeys
     * @description Whether to determine no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strictKeys(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`strictKeys\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _JSONFilter_keysPattern, value ? jsonLegalKeysPatternRegExp : undefined, "f");
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        let itemEntriesCount = Object.entries(item).length;
        if (!isJSONInternal(item, __classPrivateFieldGet(this, _JSONFilter_keysPattern, "f")) ||
            (__classPrivateFieldGet(this, _JSONFilter_rootType, "f") === "array" && !Array.isArray(item)) ||
            (__classPrivateFieldGet(this, _JSONFilter_rootType, "f") === "object" && Array.isArray(item)) ||
            __classPrivateFieldGet(this, _JSONFilter_entriesCountMaximum, "f") < itemEntriesCount ||
            itemEntriesCount < __classPrivateFieldGet(this, _JSONFilter_entriesCountMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @method testStringify
     * @description Determine stringify item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    testStringify(item) {
        if (typeof item !== "string") {
            return false;
        }
        let itemParse;
        try {
            itemParse = JSON.parse(item);
        }
        catch {
            return false;
        }
        return this.test(itemParse);
    }
    /**
     * @static test
     * @description Determine item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
    /**
     * @static testStringify
     * @description Determine stringify item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static testStringify(item, options = {}) {
        return new this(options).testStringify(item);
    }
}
_a = JSONFilter, _JSONFilter_entriesCountMaximum = new WeakMap(), _JSONFilter_entriesCountMinimum = new WeakMap(), _JSONFilter_keysPattern = new WeakMap(), _JSONFilter_rootType = new WeakMap();
/** @alias testStringify */ JSONFilter.stringifiedTest = _a.testStringify;
/** @alias testStringify */ JSONFilter.stringifyTest = _a.testStringify;
/** @alias testStringify */ JSONFilter.testStringified = _a.testStringify;
/**
 * @function filterJSON
 * @description Determine item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterJSON(item, options = {}) {
    return new JSONFilter(options).test(item);
}
/**
 * @function filterStringifyJSON
 * @description Determine stringify item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterStringifyJSON(item, options = {}) {
    return new JSONFilter(options).testStringify(item);
}
export { filterJSON, filterStringifyJSON, filterStringifyJSON as filterJSONStringified, filterStringifyJSON as filterJSONStringify, filterStringifyJSON as filterStringifiedJSON, JSONFilter };
