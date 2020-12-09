type ReturnTypeOf = "array" | "bigint" | "boolean" | "dataview" | "date" | "function" | "map" | "nan" | "null" | "number" | "object" | "regexp" | "set" | "string" | "symbol" | "undefined" | "weakmap" | "weakset" | undefined;
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {*} item Item that need to determine.
 * @returns {(string|undefined)} Determine result.
 */
export function typeOf(item: any): ReturnTypeOf;
