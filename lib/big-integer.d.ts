/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
export class BigIntegerItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.even] Whether an even big integer.
     * @param {bigint} [param1.maximum] Maximum of the big integer.
     * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the big integer.
     * @param {bigint} [param1.minimum] Minimum of the big integer.
     * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the big integer.
     * @param {boolean} [param1.negative] Whether a negative big integer.
     * @param {boolean} [param1.odd] Whether an odd big integer.
     * @param {boolean} [param1.positive] Whether a positive big integer.
     * @param {boolean} [param1.prime] Whether a prime big integer.
     * @param {boolean} [param1.safe] Whether an IEEE-754 big integer.
     * @param {string} [param1.type] Type of the big integer.
     * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { even, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
        even?: boolean;
        maximum?: bigint;
        maximumExclusive?: boolean;
        minimum?: bigint;
        minimumExclusive?: boolean;
        negative?: boolean;
        odd?: boolean;
        positive?: boolean;
        prime?: boolean;
        safe?: boolean;
        type?: string;
        unsafe?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.even] Whether an even big integer.
     * @param {bigint} [param0.maximum] Maximum of the big integer.
     * @param {boolean} [param0.maximumExclusive=false] Whether to exclusive maximum of the big integer.
     * @param {bigint} [param0.minimum] Minimum of the big integer.
     * @param {boolean} [param0.minimumExclusive=false] Whether to exclusive minimum of the big integer.
     * @param {boolean} [param0.negative] Whether a negative big integer.
     * @param {boolean} [param0.odd] Whether an odd big integer.
     * @param {boolean} [param0.positive] Whether a positive big integer.
     * @param {boolean} [param0.prime] Whether a prime big integer.
     * @param {boolean} [param0.safe] Whether an IEEE-754 big integer.
     * @param {string} [param0.type] Type of the big integer.
     * @param {boolean} [param0.unsafe] Whether not an IEEE-754 big integer.
     */
    constructor({ even, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
        even?: boolean;
        maximum?: bigint;
        maximumExclusive?: boolean;
        minimum?: bigint;
        minimumExclusive?: boolean;
        negative?: boolean;
        odd?: boolean;
        positive?: boolean;
        prime?: boolean;
        safe?: boolean;
        type?: string;
        unsafe?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
/**
 * @function isBigInteger
 * @description Determine item with the filter of type of big integer.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even big integer.
 * @param {bigint} [param1.maximum] Maximum of the big integer.
 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the big integer.
 * @param {bigint} [param1.minimum] Minimum of the big integer.
 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the big integer.
 * @param {boolean} [param1.negative] Whether a negative big integer.
 * @param {boolean} [param1.odd] Whether an odd big integer.
 * @param {boolean} [param1.positive] Whether a positive big integer.
 * @param {boolean} [param1.prime] Whether a prime big integer.
 * @param {boolean} [param1.safe] Whether an IEEE-754 big integer.
 * @param {string} [param1.type] Type of the big integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
 * @returns {boolean} Determine result.
 */
export function isBigInteger(item: unknown, { even, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
    even?: boolean;
    maximum?: bigint;
    maximumExclusive?: boolean;
    minimum?: bigint;
    minimumExclusive?: boolean;
    negative?: boolean;
    odd?: boolean;
    positive?: boolean;
    prime?: boolean;
    safe?: boolean;
    type?: string;
    unsafe?: boolean;
}): boolean;
export { BigIntegerItemFilter as BigIntItemFilter, isBigInteger as isBigInt };
//# sourceMappingURL=big-integer.d.ts.map