export interface ArrayFilterStatus {
    /**
     * Maximum length of the array.
     * @default Infinity
     */
    lengthMaximum: number;
    /**
     * Minimum length of the array.
     * @default 1
     */
    lengthMinimum: number;
    /**
     * Whether to determine no custom defined properties in the array.
     * @default false
     */
    strict: boolean;
    /**
     * Whether to determine all of the elements in the array are unique.
     * @default false
     */
    unique: boolean;
}
export interface ArrayFilterOptions extends Partial<ArrayFilterStatus> {
    /**
     * Whether to allow an empty array.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Length of the array.
     * @default undefined
     */
    length?: number;
    /** @alias length */ elements?: this["length"];
    /** @alias lengthMaximum */ elementsMax?: this["lengthMaximum"];
    /** @alias lengthMaximum */ elementsMaximum?: this["lengthMaximum"];
    /** @alias lengthMaximum */ lengthMax?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maxElements?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maximumElements?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maximumLength?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maxLength?: this["lengthMaximum"];
    /** @alias lengthMinimum */ elementsMin?: this["lengthMinimum"];
    /** @alias lengthMinimum */ elementsMinimum?: this["lengthMinimum"];
    /** @alias lengthMinimum */ lengthMin?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minElements?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minimumElements?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minimumLength?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minLength?: this["lengthMinimum"];
}
/**
 * Filter for array.
 */
export declare class ArrayFilter {
    #private;
    /**
     * Initialize the array filter.
     * @param {ArrayFilter | ArrayFilterOptions} [options] Options.
     */
    constructor(options?: ArrayFilter | ArrayFilterOptions);
    /**
     * Clone this array filter for reuse.
     * @returns {ArrayFilter} Another instance of this array filter.
     */
    get clone(): ArrayFilter;
    /**
     * Get the status of this array filter.
     * @returns {ArrayFilterStatus} Status of this array filter.
     */
    get status(): ArrayFilterStatus;
    /**
     * Whether to allow an empty array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Length of the array.
     * @param {number} value
     * @returns {this}
     */
    length(value: number): this;
    /**
     * Maximum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value: number): this;
    /**
     * Minimum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value: number): this;
    /**
     * Whether to determine no custom defined properties in the array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value?: boolean): this;
    /**
     * Whether to determine all of the elements in the array are unique.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    unique(value?: boolean): this;
    /** @alias length */ elements: (value: number) => this;
    /** @alias lengthMaximum */ elementsMax: (value: number) => this;
    /** @alias lengthMaximum */ elementsMaximum: (value: number) => this;
    /** @alias lengthMaximum */ lengthMax: (value: number) => this;
    /** @alias lengthMaximum */ maxElements: (value: number) => this;
    /** @alias lengthMaximum */ maximumElements: (value: number) => this;
    /** @alias lengthMaximum */ maximumLength: (value: number) => this;
    /** @alias lengthMaximum */ maxLength: (value: number) => this;
    /** @alias lengthMinimum */ elementsMin: (value: number) => this;
    /** @alias lengthMinimum */ elementsMinimum: (value: number) => this;
    /** @alias lengthMinimum */ lengthMin: (value: number) => this;
    /** @alias lengthMinimum */ minElements: (value: number) => this;
    /** @alias lengthMinimum */ minimumElements: (value: number) => this;
    /** @alias lengthMinimum */ minimumLength: (value: number) => this;
    /** @alias lengthMinimum */ minLength: (value: number) => this;
    /**
     * Determine item with the configured array filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the array filter.
     * @param {unknown} item Item that need to determine.
     * @param {ArrayFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: ArrayFilterOptions): boolean;
}
/**
 * Determine item with the array filter.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterArray(item: unknown, options?: ArrayFilterOptions): boolean;
//# sourceMappingURL=array.d.ts.map