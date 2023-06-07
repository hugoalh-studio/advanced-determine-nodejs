import { ArrayItemFilter } from "./array.js";
import { enumResolver, JSONRootTypeEnum } from "./internal/enum.js";
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
    #entriesCountMaximum = Infinity;
    #entriesCountMinimum = 1;
    #keysPattern;
    #rootType = "any";
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {JSONItemFilter | JSONItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof JSONItemFilter) {
            this.#entriesCountMaximum = options.#entriesCountMaximum;
            this.#entriesCountMinimum = options.#entriesCountMinimum;
            this.#keysPattern = options.#keysPattern;
            this.#rootType = options.#rootType;
        }
        else if (typeof options !== "undefined") {
            options.entriesCountMaximum ??= options.entriesCountMax ?? options.maximumEntries ?? options.maxEntries;
            options.entriesCountMinimum ??= options.entriesCountMin ?? options.minimumEntries ?? options.minEntries;
            options.strictKeys ??= options.keysStrict ?? false;
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
            entriesCountMaximum: this.#entriesCountMaximum,
            entriesCountMinimum: this.#entriesCountMinimum,
            keysPattern: this.#keysPattern,
            rootType: this.#rootType
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
        this.#entriesCountMinimum = value ? 0 : 1;
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
        this.#entriesCountMaximum = value;
        this.#entriesCountMinimum = value;
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
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#entriesCountMinimum)) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#entriesCountMinimum}!`);
        }
        this.#entriesCountMaximum = value;
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
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#entriesCountMaximum)) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${this.#entriesCountMaximum}!`);
        }
        this.#entriesCountMinimum = value;
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
        this.#keysPattern = value;
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
            throw new RangeError(`Filter argument \`rootType\` must be match either of these values: "${Object.keys(JSONRootTypeEnum).sort().join("\", \"")}"`);
        }
        this.#rootType = valueResolve;
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
            this.#keysPattern = jsonLegalKeysPatternRegExp;
            this.#rootType = "object";
        }
        else {
            this.#keysPattern = undefined;
            this.#rootType = "any";
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
        this.#keysPattern = value ? jsonLegalKeysPatternRegExp : undefined;
        return this;
    }
    /** @alias entriesCountMaximum */ entriesCountMax = this.entriesCountMaximum;
    /** @alias entriesCountMaximum */ maxEntries = this.entriesCountMaximum;
    /** @alias entriesCountMaximum */ maximumEntries = this.entriesCountMaximum;
    /** @alias entriesCountMinimum */ entriesCountMin = this.entriesCountMinimum;
    /** @alias entriesCountMinimum */ minEntries = this.entriesCountMinimum;
    /** @alias entriesCountMinimum */ minimumEntries = this.entriesCountMinimum;
    /** @alias strictKeys */ keysStrict = this.strictKeys;
    /**
     * @method test
     * @description Determine item with the configured filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        let itemEntriesCount = Object.entries(item).length;
        if (!isJSONInternal(item, this.#keysPattern) ||
            (this.#rootType === "array" && !Array.isArray(item)) ||
            (this.#rootType === "object" && Array.isArray(item)) ||
            this.#entriesCountMaximum < itemEntriesCount ||
            itemEntriesCount < this.#entriesCountMinimum) {
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
    /** @alias testStringify */ stringifiedTest = this.testStringify;
    /** @alias testStringify */ stringifyTest = this.testStringify;
    /** @alias testStringify */ testStringified = this.testStringify;
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
    /** @alias testStringify */ static stringifiedTest = this.testStringify;
    /** @alias testStringify */ static stringifyTest = this.testStringify;
    /** @alias testStringify */ static testStringified = this.testStringify;
}
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
