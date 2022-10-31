export default $isBigInteger;
/**
 * @function $isBigInteger
 * @param {unknown} item
 * @param {object} [param1={}]
 * @param {boolean} [param1.even]
 * @param {boolean} [param1.exclusiveMaximum=false]
 * @param {boolean} [param1.exclusiveMinimum=false]
 * @param {bigint} [param1.maximum=Infinity]
 * @param {bigint} [param1.minimum=-Infinity]
 * @param {boolean} [param1.negative]
 * @param {boolean} [param1.odd]
 * @param {boolean} [param1.positive]
 * @param {boolean} [param1.prime]
 * @param {boolean} [param1.safe]
 * @param {boolean} [param1.unsafe]
 * @returns {item is bigint}
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