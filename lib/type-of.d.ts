/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {unknown} item Item that need to determine.
 * @returns {"array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined"} Determine result.
 */
export function typeOf(item: unknown): "array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined";
