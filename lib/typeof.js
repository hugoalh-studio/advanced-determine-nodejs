/*==================
[NodeJS] Advanced Determine - Type Of
	Language:
		NodeJS/14.15.0
==================*/
const isArray = require("./isarray.js"),
	isDataView = require("./isdataview.js"),
	isDate = require("./isdate.js"),
	isMap = require("./ismap.js"),
	isNull = require("./isnull.js"),
	isRegularExpression = require("./isregularexpression.js"),
	isSet = require("./isset.js"),
	isWeakMap = require("./isweakmap.js"),
	isWeakSet = require("./isweakset.js");
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {*} item Item that need to determine.
 * @returns {(string|undefined)} Determine result.
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
			if (isArray(item) !== false) {
				return "array";
			};
			if (isDataView(item) !== false) {
				return "dataview";
			};
			if (isDate(item) !== false) {
				return "date";
			};
			if (isMap(item) !== false) {
				return "map";
			};
			if (isNull(item) !== false) {
				return "null";
			};
			if (isRegularExpression(item) !== false) {
				return "regexp";
			};
			if (isSet(item) !== false) {
				return "set";
			};
			if (isWeakMap(item) !== false) {
				return "weakmap";
			};
			if (isWeakSet(item) !== false) {
				return "weakset";
			};
			return "object";
		default:
			return undefined;
	};
};
module.exports = typeOf;
