export interface MapFilterStatus {
    /**
     * Maximum size of the `Map`.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * Minimum size of the `Map`.
     * @default 1
     */
    sizeMinimum: number;
}
export interface MapFilterOptions extends Partial<MapFilterStatus> {
    /**
     * Whether to allow an empty `Map`.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Size of the `Map`.
     * @default undefined
     */
    size?: number;
    /** @alias sizeMaximum */ sizeMax?: this["sizeMaximum"];
    /** @alias sizeMaximum */ maximumSize?: this["sizeMaximum"];
    /** @alias sizeMaximum */ maxSize?: this["sizeMaximum"];
    /** @alias sizeMinimum */ sizeMin?: this["sizeMinimum"];
    /** @alias sizeMinimum */ minimumSize?: this["sizeMinimum"];
    /** @alias sizeMinimum */ minSize?: this["sizeMinimum"];
}
/**
 * Filter for `Map`.
 */
export declare class MapFilter {
    #private;
    /**
     * Initialize the `Map` filter.
     * @param {MapFilter | MapFilterOptions} [options] Options.
     */
    constructor(options?: MapFilter | MapFilterOptions);
    /**
     * Clone this `Map` filter for reuse.
     * @returns {MapFilter} Another instance of this `Map` filter.
     */
    get clone(): MapFilter;
    /**
     * Get the status of this `Map` filter.
     * @returns {MapFilterStatus} Status of this `Map` filter.
     */
    get status(): MapFilterStatus;
    /**
     * Whether to allow an empty `Map`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * Maximum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * Minimum size of the `Map`.
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
     * Determine item with the configured `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @param {MapFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: MapFilterOptions): boolean;
}
/**
 * Determine item with the `Map` filter.
 * @param {unknown} item Item that need to determine.
 * @param {MapFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterMap(item: unknown, options?: MapFilterOptions): boolean;
//# sourceMappingURL=map.d.ts.map