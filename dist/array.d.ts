interface ArrayItemFilterOptionsBase {
    /**
     * @property lengthMaximum
     * @description Maximum length of the array.
     * @default Infinity
     */
    lengthMaximum: number;
    /**
     * @property lengthMinimum
     * @description Minimum length of the array.
     * @default 1
     */
    lengthMinimum: number;
    /**
     * @property strict
     * @description Whether to determine no custom defined properties in the array.
     * @default false
     */
    strict: boolean;
    /**
     * @property unique
     * @description Whether to determine all of the elements in the array are unique.
     * @default false
     */
    unique: boolean;
}
interface ArrayItemFilterOptions extends Partial<ArrayItemFilterOptionsBase> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty array.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property length
     * @description Length of the array.
     * @default undefined
     */
    length?: number;
    /** @alias length */ elements?: number;
    /** @alias lengthMaximum */ elementsMax?: number;
    /** @alias lengthMaximum */ elementsMaximum?: number;
    /** @alias lengthMaximum */ lengthMax?: number;
    /** @alias lengthMaximum */ maxElements?: number;
    /** @alias lengthMaximum */ maximumElements?: number;
    /** @alias lengthMaximum */ maximumLength?: number;
    /** @alias lengthMaximum */ maxLength?: number;
    /** @alias lengthMinimum */ elementsMin?: number;
    /** @alias lengthMinimum */ elementsMinimum?: number;
    /** @alias lengthMinimum */ lengthMin?: number;
    /** @alias lengthMinimum */ minElements?: number;
    /** @alias lengthMinimum */ minimumElements?: number;
    /** @alias lengthMinimum */ minimumLength?: number;
    /** @alias lengthMinimum */ minLength?: number;
}
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
declare class ArrayItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of array to determine item.
     * @param {ArrayItemFilter | ArrayItemFilterOptions} [options] Options.
     */
    constructor(options?: ArrayItemFilter | ArrayItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {ArrayItemFilter}
     */
    get clone(): ArrayItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {ArrayItemFilterOptionsBase}
     */
    get status(): ArrayItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method length
     * @description Length of the array.
     * @param {number} value
     * @returns {this}
     */
    length(value: number): this;
    /**
     * @method lengthMaximum
     * @description Maximum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value: number): this;
    /**
     * @method lengthMinimum
     * @description Minimum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value: number): this;
    /**
     * @method strict
     * @description Whether to determine no custom defined properties in the array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value?: boolean): this;
    /**
     * @method unique
     * @description Whether to determine all of the elements in the array are unique.
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
     * @method test
     * @description Determine item with the configured filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @param {ArrayItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: ArrayItemFilterOptions): boolean;
}
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isArray(item: unknown, options?: ArrayItemFilterOptions): boolean;
export { ArrayItemFilter, isArray, type ArrayItemFilterOptions, type ArrayItemFilterOptionsBase };
//# sourceMappingURL=array.d.ts.map