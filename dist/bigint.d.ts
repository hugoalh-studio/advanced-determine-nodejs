import { type IntegralNumericTypeEnumKeysType } from "./internal/enum.js";
/**
 * Determine whether the big integer is even.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntEven(item: bigint): boolean;
export { isBigIntEven as isBigIntegerEven };
/**
 * Determine whether the big integer is match the specified integral numeric type.
 * @param {IntegralNumericTypeEnumKeysType} typeName Name of the integral numeric type.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntIntegralNumericType(typeName: IntegralNumericTypeEnumKeysType, item: bigint): boolean;
export { isBigIntIntegralNumericType as isBigIntegerIntegralNumericType };
/**
 * Determine whether the big integer is negative.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntNegative(item: bigint): boolean;
export { isBigIntNegative as isBigIntegerNegative };
/**
 * Determine whether the big integer is odd.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntOdd(item: bigint): boolean;
export { isBigIntOdd as isBigIntegerOdd };
/**
 * Determine whether the big integer is positive.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntPositive(item: bigint): boolean;
export { isBigIntPositive as isBigIntegerPositive };
/**
 * Determine whether the big integer is prime.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntPrime(item: bigint): boolean;
export { isBigIntPrime as isBigIntegerPrime };
/**
 * Determine whether the big integer is safe with IEEE-754.
 * @param {bigint} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isBigIntSafe(item: bigint): boolean;
export { isBigIntSafe as isBigIntegerSafe };
//# sourceMappingURL=bigint.d.ts.map