export type AdvancedTypeOf = "array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined";
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {unknown} item Item that need to determine.
 * @returns {AdvancedTypeOf} Determine result.
 */
export function typeOf(item: unknown): AdvancedTypeOf;
