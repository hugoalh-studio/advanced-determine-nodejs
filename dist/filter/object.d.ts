import { type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType } from "../internal/enum.js";
export interface ObjectFilterStatus {
    /**
     * Whether to allow `Array` object.
     * @default false
     */
    allowArray: boolean;
    /**
     * Whether to allow `null` object.
     * @default false
     */
    allowNull: boolean;
    /**
     * Whether to allow `RegExp` object.
     * @default false
     */
    allowRegExp: boolean;
    /**
     * Whether contain configurable entries in the object.
     * @default "neutral"
     */
    entriesConfigurable: ThreePhaseConditionEnumValuesType;
    /**
     * Maximum entries count of the object.
     * @default Infinity
     */
    entriesCountMaximum: number;
    /**
     * Minimum entries count of the object.
     * @default 1
     */
    entriesCountMinimum: number;
    /**
     * Whether contain enumerable entries in the object.
     * @default "neutral"
     */
    entriesEnumerable: ThreePhaseConditionEnumValuesType;
    /**
     * Whether contain getter entries in the object.
     * @default "neutral"
     */
    entriesGetter: ThreePhaseConditionEnumValuesType;
    /**
     * Whether contain setter entries in the object.
     * @default "neutral"
     */
    entriesSetter: ThreePhaseConditionEnumValuesType;
    /**
     * Whether contain writable entries in the object.
     * @default "neutral"
     */
    entriesWritable: ThreePhaseConditionEnumValuesType;
    /**
     * Whether contain symbols in the object keys.
     * @default "neutral"
     */
    keysSymbol: ThreePhaseConditionEnumValuesType;
}
export interface ObjectFilterOptions extends Partial<Omit<ObjectFilterStatus, "entriesConfigurable" | "entriesEnumerable" | "entriesGetter" | "entriesSetter" | "entriesWritable" | "keysSymbol">> {
    /**
     * Whether to allow an empty object.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Whether contain configurable entries in the object.
     * @default "neutral"
     */
    entriesConfigurable?: ThreePhaseConditionEnumKeysType;
    /**
     * Entries count of the object.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * Whether contain enumerable entries in the object.
     * @default "neutral"
     */
    entriesEnumerable?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether contain getter entries in the object.
     * @default "neutral"
     */
    entriesGetter?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether contain setter entries in the object.
     * @default "neutral"
     */
    entriesSetter?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether contain writable entries in the object.
     * @default "neutral"
     */
    entriesWritable?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether contain symbols in the object keys.
     * @default "neutral"
     */
    keysSymbol?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
     * @default false
     */
    plain?: boolean;
    /** @alias allowRegExp */ allowRegularExpression?: boolean;
    /** @alias entriesConfigurable */ configurableEntries?: ThreePhaseConditionEnumKeysType;
    /** @alias entriesCountMaximum */ entriesCountMax?: number;
    /** @alias entriesCountMaximum */ maximumEntries?: number;
    /** @alias entriesCountMaximum */ maxEntries?: number;
    /** @alias entriesCountMinimum */ entriesCountMin?: number;
    /** @alias entriesCountMinimum */ minimumEntries?: number;
    /** @alias entriesCountMinimum */ minEntries?: number;
    /** @alias entriesEnumerable */ enumerableEntries?: ThreePhaseConditionEnumKeysType;
    /** @alias entriesGetter */ getterEntries?: ThreePhaseConditionEnumKeysType;
    /** @alias entriesSetter */ setterEntries?: ThreePhaseConditionEnumKeysType;
    /** @alias entriesWritable */ writableEntries?: ThreePhaseConditionEnumKeysType;
    /** @alias keysSymbol */ symbolKeys?: ThreePhaseConditionEnumKeysType;
}
/**
 * Filter for object.
 */
export declare class ObjectFilter {
    #private;
    /**
     * Initialize the object filter.
     * @param {ObjectFilter | ObjectFilterOptions} [options] Options.
     */
    constructor(options?: ObjectFilter | ObjectFilterOptions);
    /**
     * Clone this object filter for reuse.
     * @returns {ObjectFilter} Another instance of this object filter.
     */
    get clone(): ObjectFilter;
    /**
     * Get the status of this object filter.
     * @returns {ObjectFilterStatus} Status of this object filter.
     */
    get status(): ObjectFilterStatus;
    /**
     * Whether to allow `Array` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowArray(value?: boolean): this;
    /**
     * Whether to allow an empty object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Whether to allow `null` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowNull(value?: boolean): this;
    /**
     * Whether to allow `RegExp` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowRegExp(value?: boolean): this;
    /**
     * Whether contain configurable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesConfigurable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value: number): this;
    /**
     * Maximum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value: number): this;
    /**
     * Minimum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value: number): this;
    /**
     * Whether contain enumerable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesEnumerable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether contain getter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesGetter(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether contain setter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesSetter(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether contain writable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesWritable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether contain symbols in the object keys.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    keysSymbol(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    plain(value?: boolean): this;
    /** @alias allowRegExp */ allowRegularExpression: (value?: boolean) => this;
    /** @alias entriesConfigurable */ configurableEntries: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias entriesCountMaximum */ entriesCountMax: (value: number) => this;
    /** @alias entriesCountMaximum */ maximumEntries: (value: number) => this;
    /** @alias entriesCountMaximum */ maxEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ entriesCountMin: (value: number) => this;
    /** @alias entriesCountMinimum */ minimumEntries: (value: number) => this;
    /** @alias entriesCountMinimum */ minEntries: (value: number) => this;
    /** @alias entriesEnumerable */ enumerableEntries: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias entriesGetter */ getterEntries: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias entriesSetter */ setterEntries: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias entriesWritable */ writableEntries: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias keysSymbol */ symbolKeys: (value: ThreePhaseConditionEnumKeysType) => this;
    /**
     * Determine item with the configured object filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the object filter.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: ObjectFilterOptions): boolean;
}
/**
 * Determine item with the object filter.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterObject(item: unknown, options?: ObjectFilterOptions): boolean;
//# sourceMappingURL=object.d.ts.map