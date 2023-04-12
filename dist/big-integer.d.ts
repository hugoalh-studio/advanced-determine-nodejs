interface BigIntegerItemFilterOptions {
    /**
     * @property even
     * @description Whether an even big integer.
     * @default undefined
     */
    even?: boolean;
    /**
     * @property maximum
     * @description Maximum of the big integer.
     * @default undefined
     */
    maximum?: bigint;
    /**
     * @property maximumExclusive
     * @description Whether to exclusive maximum of the big integer.
     * @default false
     */
    maximumExclusive?: boolean;
    /**
     * @property minimum
     * @description Minimum of the big integer.
     * @default undefined
     */
    minimum?: bigint;
    /**
     * @property minimumExclusive
     * @description Whether to exclusive minimum of the big integer.
     * @default false
     */
    minimumExclusive?: boolean;
    /**
     * @property negative
     * @description Whether a negative big integer.
     * @default undefined
     */
    negative?: boolean;
    /**
     * @property odd
     * @description Whether an odd big integer.
     * @default undefined
     */
    odd?: boolean;
    /**
     * @property positive
     * @description Whether a positive big integer.
     * @default undefined
     */
    positive?: boolean;
    /**
     * @property prime
     * @description Whether a prime big integer.
     * @default undefined
     */
    prime?: boolean;
    /**
     * @property safe
     * @description Whether an IEEE-754 big integer.
     * @default undefined
     */
    safe?: boolean;
    /**
     * @property type
     * @description Type of the big integer.
     * @default undefined
     */
    type?: string;
    /**
     * @property unsafe
     * @description Whether not an IEEE-754 big integer.
     * @default undefined
     */
    unsafe?: boolean;
    /** @alias maximum */ max?: bigint;
    /** @alias maximumExclusive */ exclusiveMax?: boolean;
    /** @alias maximumExclusive */ exclusiveMaximum?: boolean;
    /** @alias maximumExclusive */ maxExclusive?: boolean;
    /** @alias minimum */ min?: bigint;
    /** @alias minimumExclusive */ exclusiveMin?: boolean;
    /** @alias minimumExclusive */ exclusiveMinimum?: boolean;
    /** @alias minimumExclusive */ minExclusive?: boolean;
    /** @alias negative */ nega?: boolean;
    /** @alias negative */ ngt?: boolean;
    /** @alias positive */ posi?: boolean;
    /** @alias positive */ pst?: boolean;
}
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
declare class BigIntegerItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {BigIntegerItemFilterOptions} [options={}] Options.
     */
    constructor(options?: BigIntegerItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntegerItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: BigIntegerItemFilterOptions): boolean;
}
/**
 * @function isBigInteger
 * @description Determine item with the filter of type of big integer.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntegerItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isBigInteger(item: unknown, options?: BigIntegerItemFilterOptions): boolean;
export { BigIntegerItemFilter, BigIntegerItemFilter as BigIntItemFilter, isBigInteger, isBigInteger as isBigInt, type BigIntegerItemFilterOptions, type BigIntegerItemFilterOptions as BigIntItemFilterOptions };
//# sourceMappingURL=big-integer.d.ts.map