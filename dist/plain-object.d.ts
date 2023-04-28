interface PlainObjectItemFilterOptionsBase {
    /**
     * @property entriesConfigurable
     * @description Whether contain configurable entries in the plain object.
     * @default undefined
     */
    entriesConfigurable?: boolean;
    /**
     * @property entriesCountMaximum
     * @description Maximum entries count of the plain object.
     * @default Infinity
     */
    entriesCountMaximum: number;
    /**
     * @property entriesMinimum
     * @description Minimum entries count of the plain object.
     * @default 1
     */
    entriesCountMinimum: number;
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
}
interface PlainObjectItemFilterOptions extends Partial<PlainObjectItemFilterOptionsBase> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty plain object.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property entriesCount
     * @description Entries of the plain object.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property strict
     * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
     * @default false
     */
    strict?: boolean;
    /** @alias entriesConfigurable */ configurableEntries?: boolean;
    /** @alias entriesCountMaximum */ entriesCountMax?: number;
    /** @alias entriesCountMaximum */ maximumEntries?: number;
    /** @alias entriesCountMaximum */ maxEntries?: number;
    /** @alias entriesCountMinimum */ entriesCountMin?: number;
    /** @alias entriesCountMinimum */ minimumEntries?: number;
    /** @alias entriesCountMinimum */ minEntries?: number;
    /** @alias entriesEnumerable */ enumerableEntries?: boolean;
    /** @alias entriesGetter */ getterEntries?: boolean;
    /** @alias entriesSetter */ setterEntries?: boolean;
    /** @alias entriesWritable */ writableEntries?: boolean;
    /** @alias keysSymbol */ symbolKeys?: boolean;
    /**
     * @alias entriesCount
     * @deprecated Replaced by property `entriesCount`.
     */
    entries?: number;
    /**
     * @alias entriesCountMaximum
     * @deprecated Replaced by property `entriesCountMaximum`.
     */
    entriesMaximum?: number;
    /**
     * @alias entriesCountMaximum
     * @deprecated Replaced by property `entriesCountMaximum`.
     */
    entriesMax?: number;
    /**
     * @alias entriesCountMinimum
     * @deprecated Replaced by property `entriesCountMinimum`.
     */
    entriesMinimum?: number;
    /**
     * @alias entriesCountMinimum
     * @deprecated Replaced by property `entriesCountMinimum`.
     */
    entriesMin?: number;
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
     * @param {PlainObjectItemFilter | PlainObjectItemFilterOptions} [options] Options.
    */
    constructor(options?: PlainObjectItemFilter | PlainObjectItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {PlainObjectItemFilter}
     */
    get clone(): PlainObjectItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {PlainObjectItemFilterOptionsBase}
     */
    get status(): PlainObjectItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty plain object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method entriesConfigurable
     * @description Whether contain configurable entries in the plain object.
     * @param {boolean} [value]
     * @returns {this}
     */
    entriesConfigurable(value?: boolean): this;
    /**
     * @method entriesCount
     * @description Entries count of the plain object.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value: number): this;
    /**
     * @method entriesCountMaximum
     * @description Maximum entries count of the plain object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value: number): this;
    /**
     * @method entriesCountMinimum
     * @description Minimum entries count of the plain object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value: number): this;
    /**
     * @method entriesEnumerable
     * @description Whether contain enumerable entries in the plain object.
     * @param {boolean} [value]
     * @returns {this}
     */
    entriesEnumerable(value?: boolean): this;
    /**
     * @method entriesGetter
     * @description Whether contain getter entries in the plain object.
     * @param {boolean} [value]
     * @returns {this}
     */
    entriesGetter(value?: boolean): this;
    /**
     * @method entriesSetter
     * @description Whether contain setter entries in the plain object.
     * @param {boolean} [value]
     * @returns {this}
     */
    entriesSetter(value?: boolean): this;
    /**
     * @method entriesWritable
     * @description Whether contain writable entries in the plain object.
     * @param {boolean} [value]
     * @returns {this}
     */
    entriesWritable(value?: boolean): this;
    /**
     * @method keysSymbol
     * @description Whether contain symbols in the plain object keys.
     * @param {boolean} [value]
     * @returns {this}
     */
    keysSymbol(value?: boolean): this;
    /**
     * @method strict
     * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value?: boolean): this;
    /** @alias entriesConfigurable */ configurableEntries: (value?: boolean) => this;
    /** @alias entriesCountMaximum */ entriesCountMax: (value: number) => this;
    /** @alias entriesCountMaximum */ maximumEntries: (value: number) => this;
    /** @alias entriesCountMaximum */ maxEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ entriesCountMin: (value: number) => this;
    /** @alias entriesCountMinimum */ minimumEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ minEntries: (value: number) => this;
    /** @alias entriesEnumerable */ enumerableEntries: (value?: boolean) => this;
    /** @alias entriesGetter */ getterEntries: (value?: boolean) => this;
    /** @alias entriesSetter */ setterEntries: (value?: boolean) => this;
    /** @alias entriesWritable */ writableEntries: (value?: boolean) => this;
    /** @alias keysSymbol */ symbolKeys: (value?: boolean) => this;
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
export { isPlainObject, isPlainObject as isObjectPlain, PlainObjectItemFilter, PlainObjectItemFilter as ObjectPlainItemFilter, type PlainObjectItemFilterOptions, type PlainObjectItemFilterOptions as ObjectPlainItemFilterOptions, type PlainObjectItemFilterOptionsBase, type PlainObjectItemFilterOptionsBase as ObjectPlainItemFilterOptionsBase };
//# sourceMappingURL=plain-object.d.ts.map