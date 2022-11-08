export default $isBigInteger;
/**
 * @access private
 * @function $isBigInteger
 * @description Determine item is type of big integer or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even big integer.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the big integer.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the big integer.
 * @param {bigint} [param1.maximum=Infinity] Maximum of the big integer.
 * @param {bigint} [param1.minimum=-Infinity] Minimum of the big integer.
 * @param {boolean} [param1.negative] Whether a negative big integer.
 * @param {boolean} [param1.odd] Whether an odd big integer.
 * @param {boolean} [param1.positive] Whether a positive big integer.
 * @param {boolean} [param1.prime] Whether a prime big integer.
 * @param {boolean} [param1.safe] Whether an IEEE-754 big integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
 * @returns {item is bigint} Determine result.
 */
declare function $isBigInteger(item: unknown, { even, exclusiveMaximum, exclusiveMinimum, maximum, minimum, negative, odd, positive, prime, safe, unsafe }?: {
    even?: boolean;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    maximum?: bigint;
    minimum?: bigint;
    negative?: boolean;
    odd?: boolean;
    positive?: boolean;
    prime?: boolean;
    safe?: boolean;
    unsafe?: boolean;
}): item is bigint;
//# sourceMappingURL=is-big-integer.d.mts.map