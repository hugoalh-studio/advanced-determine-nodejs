interface SetFilterStatus {
    /**
     * @property sizeMaximum
     * @description Maximum size of the `Set`.
     * @default Infinity
     */
    sizeMaximum: number;
    /**
     * @property sizeMinimum
     * @description Minimum size of the `Set`.
     * @default 1
     */
    sizeMinimum: number;
}
interface SetFilterOptions extends Partial<SetFilterStatus> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty `Set`.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property size
     * @description Size of the `Set`.
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
 * @class SetFilter
 * @description Filter for `Set`.
 */
declare class SetFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the `Set` filter.
     * @param {SetFilter | SetFilterOptions} [options] Options.
     */
    constructor(options?: SetFilter | SetFilterOptions);
    /**
     * @method clone
     * @description Clone this `Set` filter for reuse.
     * @returns {SetFilter} Another instance of this `Set` filter.
     */
    get clone(): SetFilter;
    /**
     * @method status
     * @description Get the status of this `Set` filter.
     * @returns {SetFilterStatus} Status of this `Set` filter.
     */
    get status(): SetFilterStatus;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty `Set`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method size
     * @description Size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    size(value: number): this;
    /**
     * @method sizeMaximum
     * @description Maximum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value: number): this;
    /**
     * @method sizeMinimum
     * @description Minimum size of the `Set`.
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
     * @description Determine item with the configured `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @param {SetFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: SetFilterOptions): boolean;
}
/**
 * @function filterSet
 * @description Determine item with the `Set` filter.
 * @param {unknown} item Item that need to determine.
 * @param {SetFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterSet(item: unknown, options?: SetFilterOptions): boolean;
export { filterSet, SetFilter, type SetFilterOptions, type SetFilterStatus };
//# sourceMappingURL=set.d.ts.map