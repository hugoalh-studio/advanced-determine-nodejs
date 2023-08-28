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
var _a, _JSONFilter_status;
import { ObjectFilter } from "./object.js";
import { enumResolver, JSONRootTypeEnum } from "../internal/enum.js";
const jsonObjectFilter = new ObjectFilter().allowEmpty().plain();
const jsonLegalKeysPatternRegExp = /^[$_A-Za-z][$\d_A-Za-z]*$/u;
/**
 * @access private
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONValue(item, keysPattern) {
    if (typeof item === "bigint" ||
        typeof item === "function" ||
        typeof item === "symbol" ||
        typeof item === "undefined") {
        return false;
    }
    if (typeof item === "boolean" ||
        typeof item === "string" ||
        item === null) {
        return true;
    }
    if (typeof item === "number") {
        return !Number.isNaN(item);
    }
    return isJSONObject(item, keysPattern);
}
/**
 * @access private
 * @param {object} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONObject(item, keysPattern) {
    if (Array.isArray(item)) {
        for (const itemElement of item) {
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
        for (const [key, value] of Object.entries(item)) {
            if ((keysPattern instanceof RegExp && !keysPattern.test(key)) ||
                !isJSONValue(value, keysPattern)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
/**
 * Filter for JSON.
 */
export class JSONFilter {
    /**
     * Initialize the JSON filter.
     * @param {JSONFilter | JSONFilterOptions} [options] Options.
     */
    constructor(options) {
        _JSONFilter_status.set(this, {
            entriesCountMaximum: Infinity,
            entriesCountMinimum: 1,
            keysPattern: undefined,
            rootType: "any"
        });
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
        if (options instanceof _a) {
            __classPrivateFieldSet(this, _JSONFilter_status, { ...__classPrivateFieldGet(options, _JSONFilter_status, "f") }, "f");
        }
        else if (typeof options !== "undefined") {
            options.entriesCountMaximum ?? (options.entriesCountMaximum = options.entriesCountMax ?? options.maximumEntries ?? options.maxEntries);
            options.entriesCountMinimum ?? (options.entriesCountMinimum = options.entriesCountMin ?? options.minimumEntries ?? options.minEntries);
            options.strictKeys ?? (options.strictKeys = options.keysStrict ?? false);
            for (const option of ["entriesCountMaximum", "entriesCountMinimum", "keysPattern", "rootType", "strictKeys", "allowEmpty", "entriesCount", "strict"]) {
                //@ts-ignore Handle by it's method.
                if (typeof options[option] !== "undefined") {
                    //@ts-ignore Handle by it's method.
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * Clone this JSON filter for reuse.
     * @returns {JSONFilter} Another instance of this JSON filter.
     */
    get clone() {
        return new _a(this);
    }
    /**
     * Get the status of this JSON filter.
     * @returns {JSONFilterStatus} Status of this JSON filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _JSONFilter_status, "f") };
    }
    /**
     * Whether to allow an empty JSON.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`allowEmpty\` is not a boolean!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * Entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`entriesCount\` is not a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter status \`entriesCount\` is not a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMaximum = value;
        __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum = value;
        return this;
    }
    /**
     * Maximum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`entriesCountMaximum\` is not a number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum)) {
            throw new RangeError(`Filter status \`entriesCountMaximum\` is not \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum}!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMaximum = value;
        return this;
    }
    /**
     * Minimum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`entriesCountMinimum\` is not a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMaximum)) {
            throw new RangeError(`Filter status \`entriesCountMinimum\` is not a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMaximum}!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum = value;
        return this;
    }
    /**
     * Whether a pattern matchable JSON keys.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    keysPattern(value) {
        if (!(value instanceof RegExp) && typeof value !== "undefined") {
            throw new TypeError(`Filter status \`keysPattern\` is not a RegExp or undefined!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").keysPattern = value;
        return this;
    }
    /**
     * Root type of the JSON.
     * @param {JSONRootTypeEnumKeysType} value
     * @returns {this}
     */
    rootType(value) {
        __classPrivateFieldGet(this, _JSONFilter_status, "f").rootType = enumResolver(JSONRootTypeEnum, value, "Filter status `rootType`");
        return this;
    }
    /**
     * Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`strict\` is not a boolean!`);
        }
        if (value) {
            __classPrivateFieldGet(this, _JSONFilter_status, "f").keysPattern = jsonLegalKeysPatternRegExp;
            __classPrivateFieldGet(this, _JSONFilter_status, "f").rootType = "object";
        }
        else {
            __classPrivateFieldGet(this, _JSONFilter_status, "f").keysPattern = undefined;
            __classPrivateFieldGet(this, _JSONFilter_status, "f").rootType = "any";
        }
        return this;
    }
    /**
     * Whether to determine no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strictKeys(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`strictKeys\` is not a boolean!`);
        }
        __classPrivateFieldGet(this, _JSONFilter_status, "f").keysPattern = value ? jsonLegalKeysPatternRegExp : undefined;
        return this;
    }
    /**
     * Determine item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        const itemType = typeof item;
        if (!isJSONValue(item, __classPrivateFieldGet(this, _JSONFilter_status, "f").keysPattern) ||
            (__classPrivateFieldGet(this, _JSONFilter_status, "f").rootType === "array" && !Array.isArray(item)) ||
            (__classPrivateFieldGet(this, _JSONFilter_status, "f").rootType === "literal" && itemType === "object" && item !== null) ||
            (__classPrivateFieldGet(this, _JSONFilter_status, "f").rootType === "object" && (item === null ||
                Array.isArray(item)))) {
            return false;
        }
        const itemEntriesCount = Object.entries(item).length;
        if (__classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMaximum < itemEntriesCount ||
            itemEntriesCount < __classPrivateFieldGet(this, _JSONFilter_status, "f").entriesCountMinimum) {
            return false;
        }
        return true;
    }
    /**
     * Determine stringify item with the configured JSON filter.
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
     * Determine item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
    /**
     * Determine stringify item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static testStringify(item, options = {}) {
        return new this(options).testStringify(item);
    }
}
_a = JSONFilter, _JSONFilter_status = new WeakMap();
/** @alias testStringify */ JSONFilter.stringifiedTest = _a.testStringify;
/** @alias testStringify */ JSONFilter.stringifyTest = _a.testStringify;
/** @alias testStringify */ JSONFilter.testStringified = _a.testStringify;
/**
 * Determine item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterJSON(item, options = {}) {
    return new JSONFilter(options).test(item);
}
/**
 * Determine stringify item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterStringifyJSON(item, options = {}) {
    return new JSONFilter(options).testStringify(item);
}
export { filterStringifyJSON as filterJSONStringified, filterStringifyJSON as filterJSONStringify, filterStringifyJSON as filterStringifiedJSON };
