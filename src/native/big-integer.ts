import { integralNumericTypeRange } from "../internal/integral-numeric-types.js";
import { isPrimeNumber } from "../internal/is-prime-number.js";
const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE_INTEGER = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @function isBigIntegerEven
 * @description Determine the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerEven(item: bigint): boolean {
	return (item % 2n === 0n);
}
/**
 * @function isBigIntegerIntegralNumericType
 * @description Determine the big integer is match the specified integral numeric type.
 * @param {string} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerIntegralNumericType(typeName: string, item: bigint): boolean {
	let [minimum, maximum] = integralNumericTypeRange(typeName);
	return (minimum <= item && item <= maximum);
}
/**
 * @function isBigIntegerNegative
 * @description Determine the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerNegative(item: bigint): boolean {
	return (item < 0n);
}
/**
 * @function isBigIntegerOdd
 * @description Determine the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerOdd(item: bigint): boolean {
	return (item % 2n !== 0n);
}
/**
 * @function isBigIntegerPositive
 * @description Determine the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPositive(item: bigint): boolean {
	return (item >= 0n);
}
/**
 * @function isBigIntegerPrime
 * @description Determine the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPrime(item: bigint): boolean {
	return isPrimeNumber(item);
}
/**
 * @function isBigIntegerSafe
 * @description Determine the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerSafe(item: bigint):boolean {
	return (MIN_SAFE_INTEGER <= item && item <= MAX_SAFE_INTEGER);
}
export {
	isBigIntegerEven,
	isBigIntegerEven as isBigIntEven,
	isBigIntegerIntegralNumericType,
	isBigIntegerIntegralNumericType as isBigIntIntegralNumericType,
	isBigIntegerNegative,
	isBigIntegerNegative as isBigIntNegative,
	isBigIntegerOdd,
	isBigIntegerOdd as isBigIntOdd,
	isBigIntegerPositive,
	isBigIntegerPositive as isBigIntPositive,
	isBigIntegerPrime,
	isBigIntegerPrime as isBigIntPrime,
	isBigIntegerSafe,
	isBigIntegerSafe as isBigIntSafe
};
