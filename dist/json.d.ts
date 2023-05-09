import { type JSONRootTypeEnumKeysType, type JSONRootTypeEnumValuesType } from "./internal/enum.js";
interface JSONItemFilterOptionsBase {
    /**
     * @property entriesCountMaximum
     * @description Maximum entries count of the JSON.
     * @default Infinity
     */
    entriesCountMaximum: number;
    /**
     * @property entriesCountMinimum
     * @description Minimum entries count of the JSON.
     * @default 1
     */
    entriesCountMinimum: number;
    /**
     * @property keysPattern
     * @description Whether a pattern matchable JSON keys.
     * @default undefined
     */
    keysPattern?: RegExp;
    /**
     * @property rootType
     * @description Root type of the JSON.
     * @default "any"
     */
    rootType: JSONRootTypeEnumValuesType;
}
interface JSONItemFilterOptions extends Partial<Omit<JSONItemFilterOptionsBase, "rootType">> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty JSON.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property entriesCount
     * @description Entries count of the JSON.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property rootType
     * @description Root type of the JSON.
     * @default "any"
     */
    rootType?: JSONRootTypeEnumKeysType;
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
    /** @alias entriesCountMaximum */ entriesCountMax?: number;
    /** @alias entriesCountMaximum */ maxEntries?: number;
    /** @alias entriesCountMaximum */ maximumEntries?: number;
    /** @alias entriesCountMinimum */ entriesCountMin?: number;
    /** @alias entriesCountMinimum */ minEntries?: number;
    /** @alias entriesCountMinimum */ minimumEntries?: number;
    /** @alias strictKeys */ keysStrict?: boolean;
    /**
     * @property arrayRoot
     * @description Whether type of array as the root of the JSON.
     * @default undefined
     * @deprecated Replaced by property `rootType`.
     */
    arrayRoot?: boolean;
    /**
     * @alias entries
     * @deprecated Replaced by property `entriesCount`.
     */
    entries?: number;
    /**
     * @alias entriesMax
     * @deprecated Replaced by property `entriesCountMaximum`.
     */
    entriesMax?: number;
    /**
     * @alias entriesMax
     * @deprecated Replaced by property `entriesCountMaximum`.
     */
    entriesMaximum?: number;
    /**
     * @alias entriesMin
     * @deprecated Replaced by property `entriesCountMinimum`.
     */
    entriesMin?: number;
    /**
     * @alias entriesMin
     * @deprecated Replaced by property `entriesCountMinimum`.
     */
    entriesMinimum?: number;
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
     * @param {JSONItemFilter | JSONItemFilterOptions} [options] Options.
     */
    constructor(options?: JSONItemFilter | JSONItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {JSONItemFilter} Another instance of this filter.
     */
    get clone(): JSONItemFilter;
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {JSONItemFilterOptionsBase} Status of this filter.
     */
    get status(): JSONItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty JSON.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method entriesCount
     * @description Entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value: number): this;
    /**
     * @method entriesCountMaximum
     * @description Maximum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value: number): this;
    /**
     * @method entriesCountMinimum
     * @description Minimum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value: number): this;
    /**
     * @method keysPattern
     * @description Whether a pattern matchable JSON keys.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    keysPattern(value?: RegExp | undefined): this;
    /**
     * @method rootType
     * @description Root type of the JSON.
     * @param {JSONRootTypeEnumKeysType} value
     * @returns {this}
     */
    rootType(value: JSONRootTypeEnumKeysType): this;
    /**
     * @method strict
     * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value?: boolean): this;
    /**
     * @method strictKeys
     * @description Whether to determine no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strictKeys(value?: boolean): this;
    /** @alias entriesCountMaximum */ entriesCountMax: (value: number) => this;
    /** @alias entriesCountMaximum */ maxEntries: (value: number) => this;
    /** @alias entriesCountMaximum */ maximumEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ entriesCountMin: (value: number) => this;
    /** @alias entriesCountMinimum */ minEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ minimumEntries: (value: number) => this;
    /** @alias strictKeys */ keysStrict: (value?: boolean) => this;
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
export { isJSON, isStringifyJSON, isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, JSONItemFilter, type JSONItemFilterOptions, type JSONItemFilterOptionsBase };
//# sourceMappingURL=json.d.ts.map