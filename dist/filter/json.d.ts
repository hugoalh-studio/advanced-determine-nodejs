import { type JSONRootTypeEnumKeysType, type JSONRootTypeEnumValuesType } from "../internal/enum.js";
export interface JSONFilterStatus {
    /**
     * Maximum entries count of the JSON.
     * @default Infinity
     */
    entriesCountMaximum: number;
    /**
     * Minimum entries count of the JSON.
     * @default 1
     */
    entriesCountMinimum: number;
    /**
     * Whether a pattern matchable JSON keys.
     * @default undefined
     */
    keysPattern?: RegExp;
    /**
     * Root type of the JSON.
     * @default "any"
     */
    rootType: JSONRootTypeEnumValuesType;
}
export interface JSONFilterOptions extends Partial<Omit<JSONFilterStatus, "rootType">> {
    /**
     * Whether to allow an empty JSON.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Entries count of the JSON.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * Root type of the JSON.
     * @default "any"
     */
    rootType?: JSONRootTypeEnumKeysType;
    /**
     * Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @default false
     */
    strict?: boolean;
    /**
     * Whether to determine no illegal namespace characters in the JSON keys.
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
 * Filter for JSON.
 */
export declare class JSONFilter {
    #private;
    /**
     * Initialize the JSON filter.
     * @param {JSONFilter | JSONFilterOptions} [options] Options.
     */
    constructor(options?: JSONFilter | JSONFilterOptions);
    /**
     * Clone this JSON filter for reuse.
     * @returns {JSONFilter} Another instance of this JSON filter.
     */
    get clone(): JSONFilter;
    /**
     * Get the status of this JSON filter.
     * @returns {JSONFilterStatus} Status of this JSON filter.
     */
    get status(): JSONFilterStatus;
    /**
     * Whether to allow an empty JSON.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value: number): this;
    /**
     * Maximum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value: number): this;
    /**
     * Minimum entries count of the JSON.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value: number): this;
    /**
     * Whether a pattern matchable JSON keys.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    keysPattern(value?: RegExp | undefined): this;
    /**
     * Root type of the JSON.
     * @param {JSONRootTypeEnumKeysType} value
     * @returns {this}
     */
    rootType(value: JSONRootTypeEnumKeysType): this;
    /**
     * Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value?: boolean): this;
    /**
     * Whether to determine no illegal namespace characters in the JSON keys.
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
     * Determine item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine stringify item with the configured JSON filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    testStringify(item: unknown): boolean;
    /** @alias testStringify */ stringifiedTest: (item: unknown) => boolean;
    /** @alias testStringify */ stringifyTest: (item: unknown) => boolean;
    /** @alias testStringify */ testStringified: (item: unknown) => boolean;
    /**
     * Determine item with the JSON filter.
     * @param {unknown} item Item that need to determine.
     * @param {JSONFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: JSONFilterOptions): boolean;
    /**
     * Determine stringify item with the JSON filter.
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
 * Determine item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterJSON(item: unknown, options?: JSONFilterOptions): boolean;
/**
 * Determine stringify item with the JSON filter.
 * @param {unknown} item Item that need to determine.
 * @param {JSONFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterStringifyJSON(item: unknown, options?: JSONFilterOptions): boolean;
export { filterStringifyJSON as filterJSONStringified, filterStringifyJSON as filterJSONStringify, filterStringifyJSON as filterStringifiedJSON };
//# sourceMappingURL=json.d.ts.map