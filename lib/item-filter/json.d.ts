export default JSONItemFilter;
/**
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
declare class JSONItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty JSON.
     * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the JSON.
     * @param {RegExp} [param0.keysPattern] Whether a pattern matchable JSON keys.
     * @param {number} [param0.maximumEntries=Infinity] Maximum entries of the JSON.
     * @param {number} [param0.minimumEntries=1] Minimum entries of the JSON.
     * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
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
     * @description Determine item with the configured filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=json.d.ts.map