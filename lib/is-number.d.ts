export = isNumber;
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even number.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the number.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.finite] Whether a finite number.
 * @param {boolean} [param1.float] Whether a float number.
 * @param {boolean} [param1.infinite] Whether an infinite number.
 * @param {boolean} [param1.integer] Whether an integer number.
 * @param {number} [param1.maximum=Infinity] Maximum of the number.
 * @param {number} [param1.minimum=-Infinity] Minimum of the number.
 * @param {boolean} [param1.negative] Whether a negative number.
 * @param {boolean} [param1.odd] Whether an odd number.
 * @param {boolean} [param1.positive] Whether a positive number.
 * @param {boolean} [param1.prime] Whether a prime number.
 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
 * @param {string} [param1.type] Type of the integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
 * @returns {ReturnType<typeof isNumberInternal>} Determine result.
 * @throws {TypeError} Argument `even` is not type of boolean or undefined.
 * @throws {TypeError} Argument `exclusiveMaximum` is not type of boolean.
 * @throws {TypeError} Argument `exclusiveMinimum` is not type of boolean.
 * @throws {TypeError} Argument `finite` is not type of boolean or undefined.
 * @throws {TypeError} Argument `float` is not type of boolean or undefined.
 * @throws {TypeError} Argument `infinite` is not type of boolean or undefined.
 * @throws {TypeError} Argument `integer` is not type of boolean or undefined.
 * @throws {TypeError} Argument `maximum` is not a valid number.
 * @throws {TypeError} Argument `minimum` is not a valid number.
 * @throws {TypeError} Argument `negative` is not type of boolean or undefined.
 * @throws {TypeError} Argument `odd` is not type of boolean or undefined.
 * @throws {TypeError} Argument `positive` is not type of boolean or undefined.
 * @throws {TypeError} Argument `prime` is not type of boolean or undefined.
 * @throws {TypeError} Argument `safe` is not type of boolean or undefined.
 * @throws {TypeError} Argument `type` is not a valid integer type or type of undefined.
 * @throws {TypeError} Argument `unsafe` is not type of boolean or undefined.
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
}): ReturnType<typeof isNumberInternal>;
import isNumberInternal = require("./internal/is-number.js");
//# sourceMappingURL=is-number.d.ts.map