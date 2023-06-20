import { type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType } from "../internal/enum.js";
interface ObjectFilterStatus {
    /**
     * @property allowArray
     * @description Whether to allow `Array` object.
     * @default false
     */
    allowArray: boolean;
    /**
     * @property allowNull
     * @description Whether to allow `null` object.
     * @default false
     */
    allowNull: boolean;
    /**
     * @property allowRegExp
     * @description Whether to allow `RegExp` object.
     * @default false
     */
    allowRegExp: boolean;
    /**
     * @property entriesConfigurable
     * @description Whether contain configurable entries in the object.
     * @default "neutral"
     */
    entriesConfigurable: ThreePhaseConditionEnumValuesType;
    /**
     * @property entriesCountMaximum
     * @description Maximum entries count of the object.
     * @default Infinity
     */
    entriesCountMaximum: number;
    /**
     * @property entriesMinimum
     * @description Minimum entries count of the object.
     * @default 1
     */
    entriesCountMinimum: number;
    /**
     * @property entriesEnumerable
     * @description Whether contain enumerable entries in the object.
     * @default "neutral"
     */
    entriesEnumerable: ThreePhaseConditionEnumValuesType;
    /**
     * @property entriesGetter
     * @description Whether contain getter entries in the object.
     * @default "neutral"
     */
    entriesGetter: ThreePhaseConditionEnumValuesType;
    /**
     * @property entriesSetter
     * @description Whether contain setter entries in the object.
     * @default "neutral"
     */
    entriesSetter: ThreePhaseConditionEnumValuesType;
    /**
     * @property entriesWritable
     * @description Whether contain writable entries in the object.
     * @default "neutral"
     */
    entriesWritable: ThreePhaseConditionEnumValuesType;
    /**
     * @property keysSymbol
     * @description Whether contain symbols in the object keys.
     * @default "neutral"
     */
    keysSymbol: ThreePhaseConditionEnumValuesType;
}
interface ObjectFilterOptions extends Partial<Omit<ObjectFilterStatus, "entriesConfigurable" | "entriesEnumerable" | "entriesGetter" | "entriesSetter" | "entriesWritable" | "keysSymbol">> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty object.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property entriesConfigurable
     * @description Whether contain configurable entries in the object.
     * @default "neutral"
     */
    entriesConfigurable?: ThreePhaseConditionEnumKeysType;
    /**
     * @property entriesCount
     * @description Entries count of the object.
     * @default undefined
     */
    entriesCount?: number;
    /**
     * @property entriesEnumerable
     * @description Whether contain enumerable entries in the object.
     * @default "neutral"
     */
    entriesEnumerable?: ThreePhaseConditionEnumKeysType;
    /**
     * @property entriesGetter
     * @description Whether contain getter entries in the object.
     * @default "neutral"
     */
    entriesGetter?: ThreePhaseConditionEnumKeysType;
    /**
     * @property entriesSetter
     * @description Whether contain setter entries in the object.
     * @default "neutral"
     */
    entriesSetter?: ThreePhaseConditionEnumKeysType;
    /**
     * @property entriesWritable
     * @description Whether contain writable entries in the object.
     * @default "neutral"
     */
    entriesWritable?: ThreePhaseConditionEnumKeysType;
    /**
     * @property keysSymbol
     * @description Whether contain symbols in the object keys.
     * @default "neutral"
     */
    keysSymbol?: ThreePhaseConditionEnumKeysType;
    /**
     * @property plain
     * @description Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
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
 * @class ObjectFilter
 * @description Filter for object.
 */
declare class ObjectFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the object filter.
     * @param {ObjectFilter | ObjectFilterOptions} [options] Options.
     */
    constructor(options?: ObjectFilter | ObjectFilterOptions);
    /**
     * @method clone
     * @description Clone this object filter for reuse.
     * @returns {ObjectFilter} Another instance of this object filter.
     */
    get clone(): ObjectFilter;
    /**
     * @method status
     * @description Get the status of this object filter.
     * @returns {ObjectFilterStatus} Status of this object filter.
     */
    get status(): ObjectFilterStatus;
    /**
     * @method allowArray
     * @description Whether to allow `Array` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowArray(value?: boolean): this;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method allowNull
     * @description Whether to allow `null` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowNull(value?: boolean): this;
    /**
     * @method allowRegExp
     * @description Whether to allow `RegExp` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowRegExp(value?: boolean): this;
    /**
     * @method entriesConfigurable
     * @description Whether contain configurable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesConfigurable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method entriesCount
     * @description Entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCount(value: number): this;
    /**
     * @method entriesCountMaximum
     * @description Maximum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value: number): this;
    /**
     * @method entriesCountMinimum
     * @description Minimum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value: number): this;
    /**
     * @method entriesEnumerable
     * @description Whether contain enumerable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesEnumerable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method entriesGetter
     * @description Whether contain getter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesGetter(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method entriesSetter
     * @description Whether contain setter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesSetter(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method entriesWritable
     * @description Whether contain writable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesWritable(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method keysSymbol
     * @description Whether contain symbols in the object keys.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    keysSymbol(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method plain
     * @description Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
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
     * @method test
     * @description Determine item with the configured object filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the object filter.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: ObjectFilterOptions): boolean;
}
/**
 * @function filterObject
 * @description Determine item with the object filter.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterObject(item: unknown, options?: ObjectFilterOptions): boolean;
export { filterObject, ObjectFilter, type ObjectFilterOptions, type ObjectFilterStatus };
//# sourceMappingURL=object.d.ts.map