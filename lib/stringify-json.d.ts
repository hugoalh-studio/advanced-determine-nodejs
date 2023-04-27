/**
 * @function isStringifyJSON
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
export function isStringifyJSON(item: unknown, { allowEmpty, arrayRoot, entriesCount, entriesCountMaximum, entriesCountMinimum, keysPattern, strict, strictKeys, ...aliases }?: {
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
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
 */
export class StringifyJSONItemFilter {
    /**
     * @static test
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
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
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
     * @constructor
     * @description Initialize the filter of type of stringify JSON to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty stringify JSON.
     * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the stringify JSON.
     * @param {number} [param0.entriesCount] Entries of the stringify JSON.
     * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the stringify JSON.
     * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the stringify JSON.
     * @param {RegExp} [param0.keysPattern] Whether a pattern matchable stringify JSON keys.
     * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
     * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
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
     * @description Determine item with the configured filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    test(item: unknown): boolean;
    #private;
}
export { isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, StringifyJSONItemFilter as JSONStringifiedItemFilter, StringifyJSONItemFilter as JSONStringifyItemFilter, StringifyJSONItemFilter as StringifiedJSONItemFilter };
//# sourceMappingURL=stringify-json.d.ts.map