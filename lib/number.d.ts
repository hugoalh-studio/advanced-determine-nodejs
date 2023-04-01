/**
 * @function isNumber
 * @description Determine item with the filter of type of number.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even number.
 * @param {boolean} [param1.finite] Whether a finite number.
 * @param {boolean} [param1.float] Whether a float number.
 * @param {boolean} [param1.infinite] Whether an infinite number.
 * @param {boolean} [param1.integer] Whether an integer number.
 * @param {number} [param1.maximum] Maximum of the number.
 * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the number.
 * @param {number} [param1.minimum] Minimum of the number.
 * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.negative] Whether a negative number.
 * @param {boolean} [param1.odd] Whether an odd number.
 * @param {boolean} [param1.positive] Whether a positive number.
 * @param {boolean} [param1.prime] Whether a prime number.
 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
 * @param {string} [param1.type] Type of the integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
export function isNumber(item: unknown, { even, finite, float, infinite, integer, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
    even?: boolean;
    finite?: boolean;
    float?: boolean;
    infinite?: boolean;
    integer?: boolean;
    maximum?: number;
    maximumExclusive?: boolean;
    minimum?: number;
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
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
export class NumberItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.even] Whether an even number.
     * @param {boolean} [param1.finite] Whether a finite number.
     * @param {boolean} [param1.float] Whether a float number.
     * @param {boolean} [param1.infinite] Whether an infinite number.
     * @param {boolean} [param1.integer] Whether an integer number.
     * @param {number} [param1.maximum] Maximum of the number.
     * @param {boolean} [param1.maximumExclusive=false] Whether to exclusive maximum of the number.
     * @param {number} [param1.minimum] Minimum of the number.
     * @param {boolean} [param1.minimumExclusive=false] Whether to exclusive minimum of the number.
     * @param {boolean} [param1.negative] Whether a negative number.
     * @param {boolean} [param1.odd] Whether an odd number.
     * @param {boolean} [param1.positive] Whether a positive number.
     * @param {boolean} [param1.prime] Whether a prime number.
     * @param {boolean} [param1.safe] Whether an IEEE-754 number.
     * @param {string} [param1.type] Type of the integer.
     * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { even, finite, float, infinite, integer, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
        even?: boolean;
        finite?: boolean;
        float?: boolean;
        infinite?: boolean;
        integer?: boolean;
        maximum?: number;
        maximumExclusive?: boolean;
        minimum?: number;
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
     * @description Initialize the filter of type of number to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.even] Whether an even number.
     * @param {boolean} [param0.finite] Whether a finite number.
     * @param {boolean} [param0.float] Whether a float number.
     * @param {boolean} [param0.infinite] Whether an infinite number.
     * @param {boolean} [param0.integer] Whether an integer number.
     * @param {number} [param0.maximum] Maximum of the number.
     * @param {boolean} [param0.maximumExclusive=false] Whether to exclusive maximum of the number.
     * @param {number} [param0.minimum] Minimum of the number.
     * @param {boolean} [param0.minimumExclusive=false] Whether to exclusive minimum of the number.
     * @param {boolean} [param0.negative] Whether a negative number.
     * @param {boolean} [param0.odd] Whether an odd number.
     * @param {boolean} [param0.positive] Whether a positive number.
     * @param {boolean} [param0.prime] Whether a prime number.
     * @param {boolean} [param0.safe] Whether an IEEE-754 number.
     * @param {string} [param0.type] Type of the integer.
     * @param {boolean} [param0.unsafe] Whether not an IEEE-754 number.
     */
    constructor({ even, finite, float, infinite, integer, maximum, maximumExclusive, minimum, minimumExclusive, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
        even?: boolean;
        finite?: boolean;
        float?: boolean;
        infinite?: boolean;
        integer?: boolean;
        maximum?: number;
        maximumExclusive?: boolean;
        minimum?: number;
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
     * @description Determine item with the configured filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=number.d.ts.map