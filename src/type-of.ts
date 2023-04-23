type AdvancedTypeOf = "array" | "bigint" | "boolean" | "function" | "nan" | "null" | "number" | "object" | "regexp" | "string" | "symbol" | "undefined";
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {unknown} item Item that need to determine.
 * @returns {AdvancedTypeOf} Determine result.
 */
function typeOf(item: unknown): AdvancedTypeOf {
	let itemOriginalType = typeof item;
	if (itemOriginalType === "number") {
		if (Number.isNaN(item)) {
			return "nan";
		}
	} else if (itemOriginalType === "object") {
		if (Array.isArray(item)) {
			return "array";
		}
		if (item === null) {
			return "null";
		}
		if (item instanceof RegExp) {
			return "regexp";
		}
	}
	return itemOriginalType;
}
export {
	typeOf,
	type AdvancedTypeOf
};
