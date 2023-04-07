interface PlainObjectItemFilterOptions {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty plain object.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property entriesConfigurable
     * @description Whether contain configurable entries in the plain object.
     * @default undefined
     */
    entriesConfigurable?: boolean;
    /**
     * @property entriesCount
     * @description Entries of the plain object.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property entriesCountMaximum
     * @description Maximum entries of the plain object.
     * @default Infinity
     */
    entriesCountMaximum?: number;
    /**
     * @property entriesCountMinimum
     * @description Minimum entries of the plain object.
     * @default 1
     */
    entriesCountMinimum?: number;
    /**
     * @property entriesEnumerable
     * @description Whether contain enumerable entries in the plain object.
     * @default undefined
     */
    entriesEnumerable?: boolean;
    /**
     * @property entriesGetter
     * @description Whether contain getter entries in the plain object.
     * @default undefined
     */
    entriesGetter?: boolean;
    /**
     * @property entriesSetter
     * @description Whether contain setter entries in the plain object.
     * @default undefined
     */
    entriesSetter?: boolean;
    /**
     * @property entriesWritable
     * @description Whether contain writable entries in the plain object.
     * @default undefined
     */
    entriesWritable?: boolean;
    /**
     * @property keysSymbol
     * @description Whether contain symbols in the plain object keys.
     * @default undefined
     */
    keysSymbol?: boolean;
    /**
     * @property strict
     * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
     * @default false
     */
    strict?: boolean;
    /** @alias entriesConfigurable */ configurableEntries?: boolean;
    /** @alias entriesCount */ entries?: number;
    /** @alias entriesCountMaximum */ entriesMaximum?: number;
    /** @alias entriesCountMaximum */ entriesCountMax?: number;
    /** @alias entriesCountMaximum */ entriesMax?: number;
    /** @alias entriesCountMaximum */ maximumEntries?: number;
    /** @alias entriesCountMaximum */ maxEntries?: number;
    /** @alias entriesCountMinimum */ entriesMinimum?: number;
    /** @alias entriesCountMinimum */ entriesCountMin?: number;
    /** @alias entriesCountMinimum */ entriesMin?: number;
    /** @alias entriesCountMinimum */ minimumEntries?: number;
    /** @alias entriesCountMinimum */ minEntries?: number;
    /** @alias entriesEnumerable */ enumerableEntries?: boolean;
    /** @alias entriesGetter */ getterEntries?: boolean;
    /** @alias entriesSetter */ setterEntries?: boolean;
    /** @alias entriesWritable */ writableEntries?: boolean;
    /** @alias keysSymbol */ symbolKeys?: boolean;
}
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
declare class PlainObjectItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {PlainObjectItemFilterOptions} [options={}] Options.
    */
    constructor(options?: PlainObjectItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @param {PlainObjectItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: PlainObjectItemFilterOptions): boolean;
}
/**
 * @function isPlainObject
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {PlainObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isPlainObject(item: unknown, options?: PlainObjectItemFilterOptions): boolean;
export { isPlainObject, isPlainObject as isObjectPlain, PlainObjectItemFilter, PlainObjectItemFilter as ObjectPlainItemFilter, type PlainObjectItemFilterOptions, type PlainObjectItemFilterOptions as ObjectPlainItemFilterOptions };
//# sourceMappingURL=plain-object.d.ts.map