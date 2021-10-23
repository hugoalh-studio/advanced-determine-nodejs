/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {any} item Item that need to determine.
 * @returns {("array"|"bigint"|"boolean"|"function"|"nan"|"null"|"number"|"object"|"regexp"|"string"|"symbol"|"undefined"|undefined)} Determine result.
 */
function typeOf(item) {
	let itemTypeOfOriginal = typeof item;
	switch (itemTypeOfOriginal) {
		case "bigint":
		case "boolean":
		case "function":
		case "string":
		case "symbol":
		case "undefined":
			return itemTypeOfOriginal;
		case "number":
			if (Number.isNaN(item) === true) {
				return "nan";
			};
			return itemTypeOfOriginal;
		case "object":
			if (Array.isArray(item) === true) {
				return "array";
			};
			if (item === null) {
				return "null";
			};
			if (item instanceof RegExp) {
				return "regexp";
			};
			return itemTypeOfOriginal;
		default:
			return undefined;
	};
};
module.exports = typeOf;
