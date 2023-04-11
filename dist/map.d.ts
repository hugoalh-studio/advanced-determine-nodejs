interface MapItemFilterOptions {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty map.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property size
     * @description Size of the map.
     * @default undefined
     */
    size?: number;
    /**
     * @property sizeMaximum
     * @description Maximum size of the map.
     * @default Infinity
     */
    sizeMaximum?: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the map.
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
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
declare class MapItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of map to determine item.
     * @param {MapItemFilterOptions} [options={}] Options.
     */
    constructor(options?: MapItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @param {MapItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: MapItemFilterOptions): boolean;
}
/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {MapItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isMap(item: unknown, options?: MapItemFilterOptions): boolean;
export { isMap, MapItemFilter, type MapItemFilterOptions };
//# sourceMappingURL=map.d.ts.map