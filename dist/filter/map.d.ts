interface MapFilterStatus {
    /**
     * @property sizeMaximum
     * @description Maximum size of the `Map`.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the `Map`.
     * @default 1
     */
    sizeMinimum: number;
}
interface MapFilterOptions extends Partial<MapFilterStatus> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty `Map`.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property size
     * @description Size of the `Map`.
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
 * @class MapFilter
 * @description Filter for `Map`.
 */
declare class MapFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the `Map` filter.
     * @param {MapFilter | MapFilterOptions} [options] Options.
     */
    constructor(options?: MapFilter | MapFilterOptions);
    /**
     * @method clone
     * @description Clone this `Map` filter for reuse.
     * @returns {MapFilter} Another instance of this `Map` filter.
     */
    get clone(): MapFilter;
    /**
     * @method status
     * @description Get the status of this `Map` filter.
     * @returns {MapFilterStatus} Status of this `Map` filter.
     */
    get status(): MapFilterStatus;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty `Map`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method size
     * @description Size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * @method sizeMaximum
     * @description Maximum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * @method sizeMinimum
     * @description Minimum size of the `Map`.
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
     * @description Determine item with the configured `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @param {MapFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: MapFilterOptions): boolean;
}
/**
 * @function filterMap
 * @description Determine item with the `Map` filter.
 * @param {unknown} item Item that need to determine.
 * @param {MapFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterMap(item: unknown, options?: MapFilterOptions): boolean;
export { filterMap, MapFilter, type MapFilterOptions, type MapFilterStatus };
//# sourceMappingURL=map.d.ts.map