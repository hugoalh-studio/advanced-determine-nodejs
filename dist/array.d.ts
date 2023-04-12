interface ArrayItemFilterOptions {
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
    /**
     * @property lengthMaximum
     * @description Maximum length of the array.
     * @default Infinity
     */
    lengthMaximum?: number;
    /**
     * @property lengthMinimum
     * @description Minimum length of the array.
     * @default 1
     */
    lengthMinimum?: number;
    /**
     * @property strict
     * @description Whether to determine no custom defined properties in the array.
     * @default false
     */
    strict?: boolean;
    /**
     * @property unique
     * @description Whether to determine all of the elements in the array are unique.
     * @default false
     */
    unique?: boolean;
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
     * @param {ArrayItemFilterOptions} [options={}] Options.
     */
    constructor(options?: ArrayItemFilterOptions);
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
export { ArrayItemFilter, isArray, type ArrayItemFilterOptions };
//# sourceMappingURL=array.d.ts.map