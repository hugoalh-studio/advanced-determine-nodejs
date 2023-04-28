interface StringifyJSONItemFilterOptions {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty stringify JSON.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property arrayRoot
     * @description Whether type of array as the root of the stringify JSON.
     * @default undefined
     */
    arrayRoot?: boolean;
    /**
     * @property entriesCount
     * @description Entries of the stringify JSON.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property entriesCountMaximum
     * @description Maximum entries of the stringify JSON.
     * @default Infinity
     */
    entriesCountMaximum?: number;
    /**
     * @property entriesCountMinimum
     * @description Minimum entries of the stringify JSON.
     * @default 1
     */
    entriesCountMinimum?: number;
    /**
     * @property keysPattern
     * @description Whether a pattern matchable stringify JSON keys.
     * @default undefined
     */
    keysPattern?: RegExp;
    /**
     * @property strict
     * @description Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
     * @default false
     */
    strict?: boolean;
    /**
     * @property strictKeys
     * @description Whether to determine no illegal namespace characters in the stringify JSON keys.
     * @default false
     */
    strictKeys?: boolean;
    /** @alias entriesCount */ entries?: number;
    /** @alias entriesCountMaximum */ entriesCountMax?: number;
    /** @alias entriesCountMaximum */ entriesMax?: number;
    /** @alias entriesCountMaximum */ entriesMaximum?: number;
    /** @alias entriesCountMaximum */ maxEntries?: number;
    /** @alias entriesCountMaximum */ maximumEntries?: number;
    /** @alias entriesCountMinimum */ entriesCountMin?: number;
    /** @alias entriesCountMinimum */ entriesMin?: number;
    /** @alias entriesCountMinimum */ entriesMinimum?: number;
    /** @alias entriesCountMinimum */ minEntries?: number;
    /** @alias entriesCountMinimum */ minimumEntries?: number;
    /** @alias strictKeys */ keysStrict?: boolean;
}
/**
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
 */
declare class StringifyJSONItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of stringify JSON to determine item.
     * @param {StringifyJSONItemFilterOptions} [options={}] Options.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    constructor(options?: StringifyJSONItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {StringifyJSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    static test(item: unknown, options?: StringifyJSONItemFilterOptions): boolean;
}
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {StringifyJSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isStringifyJSON(item: unknown, options?: StringifyJSONItemFilterOptions): boolean;
export { isStringifyJSON, isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, StringifyJSONItemFilter, StringifyJSONItemFilter as JSONStringifiedItemFilter, StringifyJSONItemFilter as JSONStringifyItemFilter, StringifyJSONItemFilter as StringifiedJSONItemFilter, type StringifyJSONItemFilterOptions, type StringifyJSONItemFilterOptions as JSONStringifiedItemFilterOptions, type StringifyJSONItemFilterOptions as JSONStringifyItemFilterOptions, type StringifyJSONItemFilterOptions as StringifiedJSONItemFilterOptions };
//# sourceMappingURL=stringify-json.d.ts.map