interface SetItemFilterOptionsBase {
    /**
     * @property sizeMaximum
     * @description Maximum size of the set.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the set.
     * @default 1
     */
    sizeMinimum: number;
}
interface SetItemFilterOptions extends Partial<SetItemFilterOptionsBase> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty set.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property size
     * @description Size of the set.
     * @default undefined
     */
    size?: number;
    /** @alias sizeMaximum */ sizeMax?: number;
    /** @alias sizeMaximum */ maximumSize?: number;
    /** @alias sizeMaximum */ maxSize?: number;
    /** @alias sizeMinimum */ sizeMin?: number;
    /** @alias sizeMinimum */ minimumSize?: number;
    /** @alias sizeMinimum */ minSize?: number;
}
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
declare class SetItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of set to determine item.
     * @param {SetItemFilter | SetItemFilterOptions} [options] Options.
     */
    constructor(options?: SetItemFilter | SetItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {SetItemFilter}
     */
    get clone(): SetItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {SetItemFilterOptionsBase}
     */
    get status(): SetItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty set.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method size
     * @description Size of the set.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * @method sizeMaximum
     * @description Maximum size of the set.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * @method sizeMinimum
     * @description Minimum size of the set.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value: number): this;
    /** @alias sizeMaximum */ sizeMax: (value: number) => this;
    /** @alias sizeMaximum */ maximumSize: (value: number) => this;
    /** @alias sizeMaximum */ maxSize: (value: number) => this;
    /** @alias sizeMinimum */ sizeMin: (value: number) => this;
    /** @alias sizeMinimum */ minimumSize: (value: number) => this;
    /** @alias sizeMinimum */ minSize: (value: number) => this;
    /**
     * @method test
     * @description Determine item with the configured filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @param {SetItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: SetItemFilterOptions): boolean;
}
/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {SetItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isSet(item: unknown, options?: SetItemFilterOptions): boolean;
export { isSet, SetItemFilter, type SetItemFilterOptions, type SetItemFilterOptionsBase };
//# sourceMappingURL=set.d.ts.map