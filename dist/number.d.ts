interface NumberItemFilterOptions {
    /**
     * @property even
     * @description Whether an even number.
     * @default undefined
     */
    even?: boolean;
    /**
     * @property finite
     * @description Whether a finite number.
     * @default undefined
     */
    finite?: boolean;
    /**
     * @property float
     * @description Whether a float number.
     * @default undefined
     */
    float?: boolean;
    /**
     * @property infinite
     * @description Whether an infinite number.
     * @default undefined
     */
    infinite?: boolean;
    /**
     * @property integer
     * @description Whether an integer number.
     * @default undefined
     */
    integer?: boolean;
    /**
     * @property maximum
     * @description Maximum of the number.
     * @default undefined
     */
    maximum?: number;
    /**
     * @property maximumExclusive
     * @description Whether to exclusive maximum of the number.
     * @default false
     */
    maximumExclusive?: boolean;
    /**
     * @property minimum
     * @description Minimum of the number.
     * @default undefined
     */
    minimum?: number;
    /**
     * @property minimumExclusive
     * @description Whether to exclusive minimum of the number.
     * @default false
     */
    minimumExclusive?: boolean;
    /**
     * @property negative
     * @description Whether a negative number.
     * @default undefined
     */
    negative?: boolean;
    /**
     * @property odd
     * @description Whether an odd number.
     * @default undefined
     */
    odd?: boolean;
    /**
     * @property positive
     * @description Whether a positive number.
     * @default undefined
     */
    positive?: boolean;
    /**
     * @property prime
     * @description Whether a prime number.
     * @default undefined
     */
    prime?: boolean;
    /**
     * @property safe
     * @description Whether an IEEE-754 number.
     * @default undefined
     */
    safe?: boolean;
    /**
     * @property type
     * @description Type of the integer.
     * @default undefined
     */
    type?: string;
    /**
     * @property unsafe
     * @description Whether not an IEEE-754 number.
     * @default undefined
     */
    unsafe?: boolean;
    /** @alias float */ flt?: boolean;
    /** @alias integer */ int?: boolean;
    /** @alias maximum */ max?: number;
    /** @alias maximumExclusive */ exclusiveMax?: boolean;
    /** @alias maximumExclusive */ exclusiveMaximum?: boolean;
    /** @alias maximumExclusive */ maxExclusive?: boolean;
    /** @alias minimum */ min?: number;
    /** @alias minimumExclusive */ exclusiveMin?: boolean;
    /** @alias minimumExclusive */ exclusiveMinimum?: boolean;
    /** @alias minimumExclusive */ minExclusive?: boolean;
    /** @alias negative */ nega?: boolean;
    /** @alias negative */ ngt?: boolean;
    /** @alias positive */ posi?: boolean;
    /** @alias positive */ pst?: boolean;
}
/**
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
declare class NumberItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of number to determine item.
     * @param {NumberItemFilterOptions} [options={}] Options.
     */
    constructor(options?: NumberItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @param {NumberItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: NumberItemFilterOptions): boolean;
}
/**
 * @function isNumber
 * @description Determine item with the filter of type of number.
 * @param {unknown} item Item that need to determine.
 * @param {NumberItemFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
declare function isNumber(item: unknown, options?: NumberItemFilterOptions): boolean;
export { isNumber, NumberItemFilter, type NumberItemFilterOptions };
//# sourceMappingURL=number.d.ts.map