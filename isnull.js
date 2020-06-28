/*==================
[NodeJS] Advanced Determine - Is Null
	Language:
		NodeJS 14
==================*/
const isArray = require("./isarray.js");
const isJSON = require("./isjson.js");
const isString = require("./isstring.js");
function isNullStandardMode(item) {
	return (
		item === null ||
		isArray(item) == null ||
		isJSON(item) == null ||
		isString(item) == null
	);
};
function isNullFuzzyMode(item) {
	return (
		item === "null"
	);
};
function isNull(item, fuzzyMode = false) {
	if (typeof fuzzyMode != "boolean") {
		throw new TypeError(`Invalid type of "fuzzyMode"! Require type of boolean.`);
	};
	if (fuzzyMode == false) {
		return isNullStandardMode(item);
	};
	return (
		isNullStandardMode(item) || isNullFuzzyMode(item)
	);
};
module.exports = isNull;
