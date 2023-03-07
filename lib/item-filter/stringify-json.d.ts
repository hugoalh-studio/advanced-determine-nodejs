export default StringifyJSONItemFilter;
/**
 * @class StringifyJSONItemFilter
 * @alias JSONStringifiedItemFilter
 * @alias JSONStringifyItemFilter
 * @alias StringifiedJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 */
declare class StringifyJSONItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
     * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
     * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
     * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the stringify JSON.
     * @param {number} [param1.minimumEntries=1] Minimum entries of the stringify JSON.
     * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
     * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, arrayRoot, keysPattern, maximumEntries, minimumEntries, strict, strictKeys, ...aliases }?: {
        allowEmpty?: boolean;
        arrayRoot?: boolean;
        keysPattern?: RegExp;
        maximumEntries?: number;
        minimumEntries?: number;
        strict?: boolean;
        strictKeys?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of stringify JSON to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty stringify JSON.
     * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the stringify JSON.
     * @param {RegExp} [param0.keysPattern] Whether a pattern matchable stringify JSON keys.
     * @param {number} [param0.maximumEntries=Infinity] Maximum entries of the stringify JSON.
     * @param {number} [param0.minimumEntries=1] Minimum entries of the stringify JSON.
     * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
     * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
     */
    constructor({ allowEmpty, arrayRoot, keysPattern, maximumEntries, minimumEntries, strict, strictKeys, ...aliases }?: {
        allowEmpty?: boolean;
        arrayRoot?: boolean;
        keysPattern?: RegExp;
        maximumEntries?: number;
        minimumEntries?: number;
        strict?: boolean;
        strictKeys?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=stringify-json.d.ts.map