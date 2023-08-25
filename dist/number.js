import { integralNumericTypeRange, isPrimeNumeric } from "./internal/numeric.js";
/**
 * Determine whether the number is even.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberEven(item) {
    return (Number.isInteger(item) && item % 2 === 0);
}
/**
 * Determine whether the number is float.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberFloat(item) {
    return (item % 1 !== 0);
}
/**
 * Determine whether the number is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberIntegralNumericType(typeName, item) {
    const [minimum, maximum] = integralNumericTypeRange(typeName);
    return (Number.isInteger(item) && Number(minimum) <= item && item <= Number(maximum));
}
/**
 * Determine whether the number is negative.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberNegative(item) {
    return (item < 0);
}
/**
 * Determine whether the number is odd.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberOdd(item) {
    return (Number.isInteger(item) && item % 2 !== 0);
}
/**
 * Determine whether the number is positive.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberPositive(item) {
    return (item >= 0);
}
/**
 * Determine whether the number is prime.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberPrime(item) {
    return (Number.isInteger(item) && isPrimeNumeric(item));
}
/**
 * Determine whether the number is safe with IEEE-754.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumberSafe(item) {
    return (Number.MIN_SAFE_INTEGER <= item && item <= Number.MAX_SAFE_INTEGER);
}
