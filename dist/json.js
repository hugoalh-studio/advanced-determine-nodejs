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
var _a, _JSONItemFilter_entriesCountMaximum, _JSONItemFilter_entriesCountMinimum, _JSONItemFilter_keysPattern, _JSONItemFilter_rootType;
import { ArrayItemFilter } from "./array.js";
import { enumResolve, JSONRootTypeEnum } from "./internal/enum.js";
import { PlainObjectItemFilter } from "./plain-object.js";
const jsonArrayFilter = new ArrayItemFilter().allowEmpty().strict();
const jsonObjectFilter = new PlainObjectItemFilter().allowEmpty().strict();
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
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
class JSONItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {JSONItemFilter | JSONItemFilterOptions} [options] Options.
     */
    constructor(options) {
        _JSONItemFilter_entriesCountMaximum.set(this, Infinity);
        _JSONItemFilter_entriesCountMinimum.set(this, 1);
        _JSONItemFilter_keysPattern.set(this, void 0);
        _JSONItemFilter_rootType.set(this, "any");
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
        if (options instanceof JSONItemFilter) {
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMaximum, __classPrivateFieldGet(options, _JSONItemFilter_entriesCountMaximum, "f"), "f");
            __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, __classPrivateFieldGet(options, _JSONItemFilter_entriesCountMinimum, "f"), "f");
            __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, __classPrivateFieldGet(options, _JSONItemFilter_keysPattern, "f"), "f");
            __classPrivateFieldSet(this, _JSONItemFilter_rootType, __classPrivateFieldGet(options, _JSONItemFilter_rootType, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.entriesCount ?? (options.entriesCount = options.entries);
            options.entriesCountMaximum ?? (options.entriesCountMaximum = options.entriesCountMax ?? options.entriesMaximum ?? options.entriesMax ?? options.maximumEntries ?? options.maxEntries);
            options.entriesCountMinimum ?? (options.entriesCountMinimum = options.entriesCountMin ?? options.entriesMinimum ?? options.entriesMin ?? options.minimumEntries ?? options.minEntries);
            options.strictKeys ?? (options.strictKeys = options.keysStrict ?? false);
            if (options.arrayRoot === false) {
                this.rootType("object");
            }
            if (options.arrayRoot === true) {
                this.rootType("array");
            }
            for (let option of ["entriesCountMaximum", "entriesCountMinimum", "keysPattern", "rootType", "strictKeys", "allowEmpty", "entriesCount", "strict"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {JSONItemFilter} Another instance of this filter.
     */
    get clone() {
        return new JSONItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {JSONItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            entriesCountMaximum: __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMaximum, "f"),
            entriesCountMinimum: __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMinimum, "f"),
            keysPattern: __classPrivateFieldGet(this, _JSONItemFilter_keysPattern, "f"),
            rootType: __classPrivateFieldGet(this, _JSONItemFilter_rootType, "f")
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
        __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, value ? 0 : 1, "f");
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
        __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMaximum, value, "f");
        __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, value, "f");
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
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMinimum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _JSONItemFilter_entriesCountMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMaximum, value, "f");
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
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMaximum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _JSONItemFilter_entriesCountMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _JSONItemFilter_entriesCountMinimum, value, "f");
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
        __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, value, "f");
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
        let valueResolve = enumResolve(JSONRootTypeEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`rootType\` must be match either of these values: "${Object.keys(JSONRootTypeEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _JSONItemFilter_rootType, valueResolve, "f");
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
            __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, jsonLegalKeysPatternRegExp, "f");
            __classPrivateFieldSet(this, _JSONItemFilter_rootType, "object", "f");
        }
        else {
            __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, undefined, "f");
            __classPrivateFieldSet(this, _JSONItemFilter_rootType, "any", "f");
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
        __classPrivateFieldSet(this, _JSONItemFilter_keysPattern, value ? jsonLegalKeysPatternRegExp : undefined, "f");
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        let itemEntriesCount = Object.entries(item).length;
        if (!isJSONInternal(item, __classPrivateFieldGet(this, _JSONItemFilter_keysPattern, "f")) ||
            (__classPrivateFieldGet(this, _JSONItemFilter_rootType, "f") === "array" && !Array.isArray(item)) ||
            (__classPrivateFieldGet(this, _JSONItemFilter_rootType, "f") === "object" && Array.isArray(item)) ||
            __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMaximum, "f") < itemEntriesCount ||
            itemEntriesCount < __classPrivateFieldGet(this, _JSONItemFilter_entriesCountMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @method testStringify
     * @description Determine item with the configured filter of type of stringify JSON.
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
     * @description Determine item with the filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
    /**
     * @static testStringify
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static testStringify(item, options = {}) {
        return new this(options).testStringify(item);
    }
}
_a = JSONItemFilter, _JSONItemFilter_entriesCountMaximum = new WeakMap(), _JSONItemFilter_entriesCountMinimum = new WeakMap(), _JSONItemFilter_keysPattern = new WeakMap(), _JSONItemFilter_rootType = new WeakMap();
/** @alias testStringify */ JSONItemFilter.stringifiedTest = _a.testStringify;
/** @alias testStringify */ JSONItemFilter.stringifyTest = _a.testStringify;
/** @alias testStringify */ JSONItemFilter.testStringified = _a.testStringify;
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
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item, options = {}) {
    return new JSONItemFilter(options).testStringify(item);
}
export { isJSON, isStringifyJSON, isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, JSONItemFilter };
