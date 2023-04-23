type AdvancedTypeOf = "array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined";
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {unknown} item Item that need to determine.
 * @returns {AdvancedTypeOf} Determine result.
 */
declare function typeOf(item: unknown): AdvancedTypeOf;
export { typeOf, type AdvancedTypeOf };
//# sourceMappingURL=type-of.d.ts.map