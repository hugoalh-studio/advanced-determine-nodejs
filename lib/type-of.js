/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {*} item Item that need to determine.
 * @returns {("array"|"bigint"|"boolean"|"dataview"|"date"|"function"|"map"|"nan"|"null"|"number"|"object"|"regexp"|"set"|"string"|"symbol"|"undefined"|"weakmap"|"weakset"|undefined)} Determine result.
 */
function typeOf(item) {
	let initialResult = typeof item;
	switch (initialResult) {
		case "bigint":
		case "boolean":
		case "function":
		case "string":
		case "symbol":
		case "undefined":
			return initialResult;
		case "number":
			return ((Number.isNaN(item) === true) ? "nan" : "number");
		case "object":
			if (Array.isArray(item) === true) {
				return "array";
			};
			if (item instanceof DataView) {
				return "dataview";
			};
			if (item instanceof Date) {
				return "date";
			};
			if (item instanceof Map) {
				return "map";
			};
			if (item === null) {
				return "null";
			};
			if (item instanceof RegExp) {
				return "regexp";
			};
			if (item instanceof Set) {
				return "set";
			};
			if (item instanceof WeakMap) {
				return "weakmap";
			};
			if (item instanceof WeakSet) {
				return "weakset";
			};
			return "object";
		default:
			return undefined;
	};
};
module.exports = typeOf;
