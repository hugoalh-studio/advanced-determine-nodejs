import { integralNumericTypeRange, isPrimeNumeric } from "./internal/numeric.js";
const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE_INTEGER = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * Determine whether the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntEven(item) {
    return (item % 2n === 0n);
}
/**
 * Determine whether the big integer is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntIntegralNumericType(typeName, item) {
    let [minimum, maximum] = integralNumericTypeRange(typeName);
    return (minimum <= item && item <= maximum);
}
/**
 * Determine whether the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntNegative(item) {
    return (item < 0n);
}
/**
 * Determine whether the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntOdd(item) {
    return (item % 2n !== 0n);
}
/**
 * Determine whether the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntPositive(item) {
    return (item >= 0n);
}
/**
 * Determine whether the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntPrime(item) {
    return isPrimeNumeric(item);
}
/**
 * Determine whether the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isBigIntSafe(item) {
    return (MIN_SAFE_INTEGER <= item && item <= MAX_SAFE_INTEGER);
}
export { isBigIntEven as isBigIntegerEven, isBigIntIntegralNumericType as isBigIntegerIntegralNumericType, isBigIntNegative as isBigIntegerNegative, isBigIntOdd as isBigIntegerOdd, isBigIntPositive as isBigIntegerPositive, isBigIntPrime as isBigIntegerPrime, isBigIntSafe as isBigIntegerSafe };
