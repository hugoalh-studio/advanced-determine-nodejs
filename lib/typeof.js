/*==================
[NodeJS] Advanced Determine - Type Of
	Language:
		NodeJS 14
==================*/
const isArray = require("./isarray.js");
const isNull = require("./isnull.js");
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {*} item Item that need to determine.
 * @returns {(string|undefined)} Determine result.
 */
function typeOf(item) {
	const initialResult = typeof item;
	switch (initialResult) {
		case "bigint":
		case "boolean":
		case "function":
		case "string":
		case "symbol":
		case "undefined":
			return initialResult;
			break;
		case "number":
			return (
				(Number.isNaN(item) === true) ? "nan" : "number"
			);
			break;
		case "object":
			if (isArray(item) !== false) {
				return "array";
			};
			if (isNull(item) !== false) {
				return "null";
			};
			return "object";
			break;
		default:
			return undefined;
			break;
	};
};
module.exports = typeOf;
