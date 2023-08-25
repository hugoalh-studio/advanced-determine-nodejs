export interface SetFilterStatus {
    /**
     * Maximum size of the `Set`.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * Minimum size of the `Set`.
     * @default 1
     */
    sizeMinimum: number;
}
export interface SetFilterOptions extends Partial<SetFilterStatus> {
    /**
     * Whether to allow an empty `Set`.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Size of the `Set`.
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
 * Filter for `Set`.
 */
export declare class SetFilter {
    #private;
    /**
     * Initialize the `Set` filter.
     * @param {SetFilter | SetFilterOptions} [options] Options.
     */
    constructor(options?: SetFilter | SetFilterOptions);
    /**
     * Clone this `Set` filter for reuse.
     * @returns {SetFilter} Another instance of this `Set` filter.
     */
    get clone(): SetFilter;
    /**
     * Get the status of this `Set` filter.
     * @returns {SetFilterStatus} Status of this `Set` filter.
     */
    get status(): SetFilterStatus;
    /**
     * Whether to allow an empty `Set`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * Maximum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * Minimum size of the `Set`.
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
     * Determine item with the configured `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @param {SetFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: SetFilterOptions): boolean;
}
/**
 * Determine item with the `Set` filter.
 * @param {unknown} item Item that need to determine.
 * @param {SetFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterSet(item: unknown, options?: SetFilterOptions): boolean;
//# sourceMappingURL=set.d.ts.map