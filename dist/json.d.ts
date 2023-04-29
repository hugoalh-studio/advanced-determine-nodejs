interface JSONItemFilterOptions {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty JSON.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property arrayRoot
     * @description Whether type of array as the root of the JSON.
     * @default undefined
     */
    arrayRoot?: boolean;
    /**
     * @property entriesCount
     * @description Entries of the JSON.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property entriesCountMaximum
     * @description Maximum entries of the JSON.
     * @default Infinity
     */
    entriesCountMaximum?: number;
    /**
     * @property entriesCountMinimum
     * @description Minimum entries of the JSON.
     * @default 1
     */
    entriesCountMinimum?: number;
    /**
     * @property keysPattern
     * @description Whether a pattern matchable JSON keys.
     * @default undefined
     */
    keysPattern?: RegExp;
    /**
     * @property strict
     * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @default false
     */
    strict?: boolean;
    /**
     * @property strictKeys
     * @description Whether to determine no illegal namespace characters in the JSON keys.
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
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
declare class JSONItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of JSON to determine item.
     * @param {JSONItemFilterOptions} [options={}] Options.
     */
    constructor(options?: JSONItemFilterOptions);
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
    /**
     * @static test
     * @description Determine item with the filter of type of JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: JSONItemFilterOptions): boolean;
    /**
     * @static testStringify
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static testStringify(item: unknown, options?: JSONItemFilterOptions): boolean;
    /** @alias testStringify */ static stringifiedTest: typeof JSONItemFilter.testStringify;
    /** @alias testStringify */ static stringifyTest: typeof JSONItemFilter.testStringify;
    /** @alias testStringify */ static testStringified: typeof JSONItemFilter.testStringify;
}
/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isJSON(item: unknown, options?: JSONItemFilterOptions): boolean;
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isStringifyJSON(item: unknown, options?: JSONItemFilterOptions): boolean;
export { isJSON, isStringifyJSON, isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, JSONItemFilter, type JSONItemFilterOptions };
//# sourceMappingURL=json.d.ts.map