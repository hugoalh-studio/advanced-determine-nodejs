import { integralNumericTypeRange, isPrimeNumeric } from "./internal/numeric.js";
const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE_INTEGER = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @function isBigIntEven
 * @description Whether the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntEven(item) {
    return (item % 2n === 0n);
}
/**
 * @function isBigIntIntegralNumericType
 * @description Whether the big integer is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntIntegralNumericType(typeName, item) {
    let [minimum, maximum] = integralNumericTypeRange(typeName);
    return (minimum <= item && item <= maximum);
}
/**
 * @function isBigIntNegative
 * @description Whether the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntNegative(item) {
    return (item < 0n);
}
/**
 * @function isBigIntOdd
 * @description Whether the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntOdd(item) {
    return (item % 2n !== 0n);
}
/**
 * @function isBigIntPositive
 * @description Whether the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntPositive(item) {
    return (item >= 0n);
}
/**
 * @function isBigIntPrime
 * @description Whether the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntPrime(item) {
    return isPrimeNumeric(item);
}
/**
 * @function isBigIntSafe
 * @description Whether the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntSafe(item) {
    return (MIN_SAFE_INTEGER <= item && item <= MAX_SAFE_INTEGER);
}
export { isBigIntEven, isBigIntEven as isBigIntegerEven, isBigIntIntegralNumericType, isBigIntIntegralNumericType as isBigIntegerIntegralNumericType, isBigIntNegative, isBigIntNegative as isBigIntegerNegative, isBigIntOdd, isBigIntOdd as isBigIntegerOdd, isBigIntPositive, isBigIntPositive as isBigIntegerPositive, isBigIntPrime, isBigIntPrime as isBigIntegerPrime, isBigIntSafe, isBigIntSafe as isBigIntegerSafe };