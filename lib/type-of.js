const isArray = require("./is-array.js"),
	isDataView = require("./is-data-view.js"),
	isDate = require("./is-date.js"),
	isMap = require("./is-map.js"),
	isNull = require("./is-null.js"),
	isRegularExpression = require("./is-regular-expression.js"),
	isSet = require("./is-set.js"),
	isWeakMap = require("./is-weak-map.js"),
	isWeakSet = require("./is-weak-set.js");
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
