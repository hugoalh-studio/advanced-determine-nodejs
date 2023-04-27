/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
 * @param {number} [param1.entriesCount] Entries of the JSON.
 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the JSON.
 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
 * @returns {boolean} Determine result.
 */
export function isJSON(item: unknown, { allowEmpty, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict, strictKeys, ...aliases }?: {
    allowEmpty?: boolean;
    arrayRoot?: boolean;
    entriesCount?: number;
    entriesCountMaximum?: number;
    entriesCountMinimum?: number;
    keysPattern?: RegExp;
    strict?: boolean;
    strictKeys?: boolean;
}): boolean;
/**
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
export class JSONItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
     * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
     * @param {number} [param1.entriesCount] Entries of the JSON.
     * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the JSON.
     * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the JSON.
     * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
     * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict, strictKeys, ...aliases }?: {
        allowEmpty?: boolean;
        arrayRoot?: boolean;
        entriesCount?: number;
        entriesCountMaximum?: number;
        entriesCountMinimum?: number;
        keysPattern?: RegExp;
        strict?: boolean;
        strictKeys?: boolean;
    }): boolean;
    /**
     * @static testStringify
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
     * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
     * @param {number} [param1.entriesCount] Entries of the stringify JSON.
     * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the stringify JSON.
     * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the stringify JSON.
     * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
     * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
     * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
     * @returns {boolean} Determine result.
     */
    static testStringify(item: unknown, { allowEmpty, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict, strictKeys, ...aliases }?: {
        allowEmpty?: boolean;
        arrayRoot?: boolean;
        entriesCount?: number;
        entriesCountMaximum?: number;
        entriesCountMinimum?: number;
        keysPattern?: RegExp;
        strict?: boolean;
        strictKeys?: boolean;
    }): boolean;
    /** @alias testStringify */ static stringifiedTest: typeof JSONItemFilter.testStringify;
    /** @alias testStringify */ static stringifyTest: typeof JSONItemFilter.testStringify;
    /** @alias testStringify */ static testStringified: typeof JSONItemFilter.testStringify;
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty JSON.
     * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the JSON.
     * @param {number} [param0.entriesCount] Entries of the JSON.
     * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the JSON.
     * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the JSON.
     * @param {RegExp} [param0.keysPattern] Whether a pattern matchable JSON keys.
     * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
     */
    constructor({ allowEmpty, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict, strictKeys, ...aliases }?: {
        allowEmpty?: boolean;
        arrayRoot?: boolean;
        entriesCount?: number;
        entriesCountMaximum?: number;
        entriesCountMinimum?: number;
        keysPattern?: RegExp;
        strict?: boolean;
        strictKeys?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @method testStringify
     * @description Determine item with the configured filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    testStringify(item: unknown): boolean;
    /** @alias testStringify */ stringifiedTest: (item: unknown) => boolean;
    /** @alias testStringify */ stringifyTest: (item: unknown) => boolean;
    /** @alias testStringify */ testStringified: (item: unknown) => boolean;
    #private;
}
//# sourceMappingURL=json.d.ts.map