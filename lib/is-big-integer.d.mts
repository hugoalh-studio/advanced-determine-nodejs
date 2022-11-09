export default isBigInteger;
/**
 * @function isBigInteger
 * @alias isBigInt
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
 * @param {string} [param1.type] Type of the big integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 big integer.
 * @returns {ReturnType<typeof isBigIntegerInternal>} Determine result.
 * @throws {TypeError} Argument `even` is not type of boolean or undefined.
 * @throws {TypeError} Argument `exclusiveMaximum` is not type of boolean.
 * @throws {TypeError} Argument `exclusiveMinimum` is not type of boolean.
 * @throws {TypeError} Argument `maximum` is not a valid big integer.
 * @throws {TypeError} Argument `minimum` is not a valid big integer.
 * @throws {TypeError} Argument `negative` is not type of boolean or undefined.
 * @throws {TypeError} Argument `odd` is not type of boolean or undefined.
 * @throws {TypeError} Argument `positive` is not type of boolean or undefined.
 * @throws {TypeError} Argument `prime` is not type of boolean or undefined.
 * @throws {TypeError} Argument `safe` is not type of boolean or undefined.
 * @throws {TypeError} Argument `type` is not a valid integer type or type of undefined.
 * @throws {TypeError} Argument `unsafe` is not type of boolean or undefined.
 */
declare function isBigInteger(item: unknown, { even, exclusiveMaximum, exclusiveMinimum, maximum, minimum, negative, odd, positive, prime, safe, type, unsafe, ...aliases }?: {
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
    type?: string;
    unsafe?: boolean;
}): ReturnType<typeof isBigIntegerInternal>;
import isBigIntegerInternal from "./internal/is-big-integer.mjs";
//# sourceMappingURL=is-big-integer.d.mts.map