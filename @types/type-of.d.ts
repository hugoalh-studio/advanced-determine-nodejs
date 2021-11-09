export = typeOf;
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {any} item Item that need to determine.
 * @returns {("array"|"bigint"|"boolean"|"function"|"nan"|"null"|"number"|"object"|"regexp"|"string"|"symbol"|"undefined"|undefined)} Determine result.
 */
declare function typeOf(item: any): ("array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined" | undefined);
