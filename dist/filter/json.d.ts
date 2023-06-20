import { type JSONRootTypeEnumKeysType, type JSONRootTypeEnumValuesType } from "../internal/enum.js";
interface JSONFilterStatus {
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
interface JSONFilterOptions extends Partial<Omit<JSONFilterStatus, "rootType">> {
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
}
/**
 * @class JSONFilter
 * @description Filter for JSON.
 */
declare class JSONFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the JSON filter.
     * @param {JSONFilter | JSONFilterOptions} [options] Options.
     */
    constructor(options?: JSONFilter | JSONFilterOptions);
    /**
     * @method clone
     * @description Clone this JSON filter for reuse.
     * @returns {JSONFilter} Another instance of this JSON filter.
     */
    get clone(): JSONFilter;
    /**
     * @method status
     * @description Get the status of this JSON filter.
     * @returns {JSONFilterStatus} Status of this JSON filter.
     */
    get status(): JSONFilterStatus;
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
     * @description Determine item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @method testStringify
     * @description Determine stringify item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    testStringify(item: unknown): boolean;
    /** @alias testStringify */ stringifiedTest: (item: unknown) => boolean;
    /** @alias testStringify */ stringifyTest: (item: unknown) => boolean;
    /** @alias testStringify */ testStringified: (item: unknown) => boolean;
    /**
     * @static test
     * @description Determine item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: JSONFilterOptions): boolean;
    /**
     * @static testStringify
     * @description Determine stringify item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static testStringify(item: unknown, options?: JSONFilterOptions): boolean;
    /** @alias testStringify */ static stringifiedTest: typeof JSONFilter.testStringify;
    /** @alias testStringify */ static stringifyTest: typeof JSONFilter.testStringify;
    /** @alias testStringify */ static testStringified: typeof JSONFilter.testStringify;
}
/**
 * @function filterJSON
 * @description Determine item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterJSON(item: unknown, options?: JSONFilterOptions): boolean;
/**
 * @function filterStringifyJSON
 * @description Determine stringify item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterStringifyJSON(item: unknown, options?: JSONFilterOptions): boolean;
export { filterJSON, filterStringifyJSON, filterStringifyJSON as filterJSONStringified, filterStringifyJSON as filterJSONStringify, filterStringifyJSON as filterStringifiedJSON, JSONFilter, type JSONFilterOptions, type JSONFilterStatus };
//# sourceMappingURL=json.d.ts.map