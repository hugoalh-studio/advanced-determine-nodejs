import { type IntegralNumericTypeEnumKeysType } from "./internal/enum.js";
/**
 * @function isBigIntEven
 * @description Whether the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntEven(item: bigint): boolean;
/**
 * @function isBigIntIntegralNumericType
 * @description Whether the big integer is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntIntegralNumericType(typeName: IntegralNumericTypeEnumKeysType, item: bigint): boolean;
/**
 * @function isBigIntNegative
 * @description Whether the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntNegative(item: bigint): boolean;
/**
 * @function isBigIntOdd
 * @description Whether the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntOdd(item: bigint): boolean;
/**
 * @function isBigIntPositive
 * @description Whether the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntPositive(item: bigint): boolean;
/**
 * @function isBigIntPrime
 * @description Whether the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntPrime(item: bigint): boolean;
/**
 * @function isBigIntSafe
 * @description Whether the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
declare function isBigIntSafe(item: bigint): boolean;
export { isBigIntEven, isBigIntEven as isBigIntegerEven, isBigIntIntegralNumericType, isBigIntIntegralNumericType as isBigIntegerIntegralNumericType, isBigIntNegative, isBigIntNegative as isBigIntegerNegative, isBigIntOdd, isBigIntOdd as isBigIntegerOdd, isBigIntPositive, isBigIntPositive as isBigIntegerPositive, isBigIntPrime, isBigIntPrime as isBigIntegerPrime, isBigIntSafe, isBigIntSafe as isBigIntegerSafe };
//# sourceMappingURL=bigint.d.ts.map