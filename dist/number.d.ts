import { type IntegralNumericTypeEnumKeysType } from "./internal/enum.js";
/**
 * @function isNumberEven
 * @description Whether the number is even.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberEven(item: number): boolean;
/**
 * @function isNumberFloat
 * @description Whether the number is float.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberFloat(item: number): boolean;
/**
 * @function isNumberIntegralNumericType
 * @description Whether the number is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberIntegralNumericType(typeName: IntegralNumericTypeEnumKeysType, item: number): boolean;
/**
 * @function isNumberNegative
 * @description Whether the number is negative.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberNegative(item: number): boolean;
/**
 * @function isNumberOdd
 * @description Whether the number is odd.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberOdd(item: number): boolean;
/**
 * @function isNumberPositive
 * @description Whether the number is positive.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberPositive(item: number): boolean;
/**
 * @function isNumberPrime
 * @description Whether the number is prime.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberPrime(item: number): boolean;
/**
 * @function isNumberSafe
 * @description Whether the number is safe with IEEE-754.
 * @param {number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isNumberSafe(item: number): boolean;
export { isNumberEven, isNumberFloat, isNumberIntegralNumericType, isNumberNegative, isNumberOdd, isNumberPositive, isNumberPrime, isNumberSafe };
//# sourceMappingURL=number.d.ts.map