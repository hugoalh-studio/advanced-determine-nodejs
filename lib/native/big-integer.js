import { integralNumericTypeRange } from "../internal/integral-numeric-types.js";
import { isPrimeNumber } from "../internal/is-prime-number.js";
const maximumSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
const minimumSafeInteger = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @function isBigIntegerEven
 * @description Determine the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerEven(item) {
	return (item % 2n === 0n);
}
/**
 * @function isBigIntegerIntegralNumericType
 * @description Determine the big integer is match the specified integral numeric type.
 * @param {string} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerIntegralNumericType(typeName, item) {
	let [minimum, maximum] = integralNumericTypeRange(typeName);
	return (minimum <= item && item <= maximum);
}
/**
 * @function isBigIntegerNegative
 * @description Determine the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerNegative(item) {
	return (item < 0n);
}
/**
 * @function isBigIntegerOdd
 * @description Determine the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerOdd(item) {
	return (item % 2n !== 0n);
}
/**
 * @function isBigIntegerPositive
 * @description Determine the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPositive(item) {
	return (item >= 0n);
}
/**
 * @function isBigIntegerPrime
 * @description Determine the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPrime(item) {
	return isPrimeNumber(item);
}
/**
 * @function isBigIntegerSafe
 * @description Determine the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerSafe(item) {
	return (minimumSafeInteger <= item && item <= maximumSafeInteger);
}
export {
	isBigIntegerEven,
	isBigIntegerIntegralNumericType,
	isBigIntegerNegative,
	isBigIntegerOdd,
	isBigIntegerPositive,
	isBigIntegerPrime,
	isBigIntegerSafe
};
