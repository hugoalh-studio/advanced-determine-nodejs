import { integralNumericTypeRange } from "../internal/integral-numeric-types.js";
import { isPrimeNumber } from "../internal/is-prime-number.js";
/**
 * @function isNumberEven
 * @description Determine the number is even.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberEven(item) {
	return (Number.isInteger(item) && item % 2 === 0);
}
/**
 * @function isNumberFloat
 * @description Determine the number is float.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberFloat(item) {
	return (item % 1 !== 0);
}
/**
 * @function isNumberIntegralNumericType
 * @description Determine the number is match the specified integral numeric type.
 * @param {string} typeName Name of the integral numeric type.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberIntegralNumericType(typeName, item) {
	let [minimum, maximum] = integralNumericTypeRange(typeName);
	return (Number.isInteger(item) && Number(minimum) <= item && item <= Number(maximum));
}
/**
 * @function isNumberNegative
 * @description Determine the number is negative.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegative(item) {
	return (item < 0);
}
/**
 * @function isNumberOdd
 * @description Determine the number is odd.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberOdd(item) {
	return (Number.isInteger(item) && item % 2 !== 0);
}
/**
 * @function isNumberPositive
 * @description Determine the number is positive.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositive(item) {
	return (item >= 0);
}
/**
 * @function isNumberPrime
 * @description Determine the number is prime.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPrime(item) {
	return isPrimeNumber(item);
}
/**
 * @function isNumberSafe
 * @description Determine the number is safe with IEEE-754.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafe(item) {
	return (Number.MIN_SAFE_INTEGER <= item && item <= Number.MAX_SAFE_INTEGER);
}
export {
	isNumberEven,
	isNumberFloat,
	isNumberIntegralNumericType,
	isNumberNegative,
	isNumberOdd,
	isNumberPositive,
	isNumberPrime,
	isNumberSafe
};
