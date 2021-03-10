/*==================
Advanced Determine - Is Null
	Language:
		NodeJS/14.15.0
==================*/
const checkOption = require("./internal/checkoption.js"),
	isArray = require("./isarray.js"),
	isObjectPair = require("./isobjectpair.js"),
	isString = require("./isstring.js");
/**
 * @function isNull
 * @alias isNil
 * @alias isNul
 * @description Determine item is type of null or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.allowStringifyAlias=false] Allow alias stringify type.
 * @param {boolean} [option.allowWhitespace=true] When option.allowExtend is true, allow carriage return, linefeed, tab, and whitespace in the string before counting it's length.
 * @returns {boolean} Determine result.
 */
function isNull(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowStringify: false,
		allowStringifyAlias: false,
		allowExtend: false
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument "option.allowStringify" must be type of boolean! (Advanced Determine - Is Null)`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof option.allowStringifyAlias !== "undefined") {
		if (typeof option.allowStringifyAlias !== "boolean") {
			throw new TypeError(`Argument "option.allowStringifyAlias" must be type of boolean! (Advanced Determine - Is Null)`);
		};
		runtime.allowStringifyAlias = option.allowStringifyAlias;
	};
	if (typeof option.allowExtend !== "undefined") {
		if (typeof option.allowExtend !== "boolean") {
			throw new TypeError(`Argument "option.allowExtend" must be type of boolean! (Advanced Determine - Is Null)`);
		};
		runtime.allowExtend = option.allowExtend;
	};
	if (item === null) {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (item === "null") {
			return true;
		};
		if (runtime.allowStringifyAlias === true) {
			if (
				item === "nil" ||
				item === "nul"
			) {
				return true;
			};
		};
	};
	if (runtime.allowExtend === true) {
		if (
			isArray(item) === null ||
			isObjectPair(item) === null ||
			isString(item, option) === null
		) {
			return true;
		};
	};
	return false;
};
module.exports = isNull;
