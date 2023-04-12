interface SetItemFilterOptions {
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
    /**
     * @property sizeMaximum
     * @description Maximum size of the set.
     * @default Infinity
     */
    sizeMaximum?: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the set.
     * @default 1
     */
    sizeMinimum?: number;
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
     * @param {SetItemFilterOptions} [options={}] Options.
     */
    constructor(options?: SetItemFilterOptions);
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
export { isSet, SetItemFilter, type SetItemFilterOptions };
//# sourceMappingURL=set.d.ts.map