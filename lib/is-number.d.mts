export default isNumber;
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] An even number.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the number.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.finite] A finite number.
 * @param {boolean} [param1.float] A float number.
 * @param {boolean} [param1.infinite] An infinite number.
 * @param {boolean} [param1.integer] An integer number.
 * @param {number} [param1.maximum=Infinity] Maximum of the number.
 * @param {number} [param1.minimum=-Infinity] Minimum of the number.
 * @param {boolean} [param1.negative] A negative number.
 * @param {boolean} [param1.odd] An odd number.
 * @param {boolean} [param1.positive] A positive number.
 * @param {boolean} [param1.prime] A prime number.
 * @param {boolean} [param1.safe] An IEEE-754 number.
 * @param {string} [param1.type] Type of the integer.
 * @param {boolean} [param1.unsafe] Not an IEEE-754 number.
 * @returns {item is number} Determine result.
 */
declare function isNumber(item: unknown, { even, exclusiveMaximum, exclusiveMinimum, finite, float, infinite, integer, maximum, minimum, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
    even?: boolean;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    finite?: boolean;
    float?: boolean;
    infinite?: boolean;
    integer?: boolean;
    maximum?: number;
    minimum?: number;
    negative?: boolean;
    odd?: boolean;
    positive?: boolean;
    prime?: boolean;
    safe?: boolean;
    type?: string;
    unsafe?: boolean;
}): item is number;
//# sourceMappingURL=is-number.d.mts.map