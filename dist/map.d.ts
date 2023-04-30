interface MapItemFilterOptionsBase {
    /**
     * @property sizeMaximum
     * @description Maximum size of the map.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the map.
     * @default 1
     */
    sizeMinimum: number;
}
interface MapItemFilterOptions extends Partial<MapItemFilterOptionsBase> {
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
     * @param {MapItemFilter | MapItemFilterOptions} [options] Options.
     */
    constructor(options?: MapItemFilter | MapItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {MapItemFilter} Another instance of this filter.
     */
    get clone(): MapItemFilter;
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {MapItemFilterOptionsBase} Status of this filter.
     */
    get status(): MapItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty map.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method size
     * @description Size of the map.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * @method sizeMaximum
     * @description Maximum size of the map.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * @method sizeMinimum
     * @description Minimum size of the map.
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
export { isMap, MapItemFilter, type MapItemFilterOptions, type MapItemFilterOptionsBase };
//# sourceMappingURL=map.d.ts.map