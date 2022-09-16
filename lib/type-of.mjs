/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {any} item Item that need to determine.
 * @returns {("array"|"bigint"|"boolean"|"function"|"nan"|"null"|"number"|"object"|"regexp"|"string"|"symbol"|"undefined")} Determine result.
 */
function typeOf(item) {
	let itemTypeOfOriginal = typeof item;
	if (itemTypeOfOriginal === "number") {
		if (Number.isNaN(item)) {
			return "nan";
		}
	} else if (itemTypeOfOriginal === "object") {
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
	return itemTypeOfOriginal;
}
export default typeOf;
