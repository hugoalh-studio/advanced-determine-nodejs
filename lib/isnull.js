/*==================
[NodeJS] Advanced Determine - Is Null
	Language:
		NodeJS/10.0.0
==================*/
const isArray = require("./isarray.js");
const isObjectPair = require("./isobjectpair.js");
const isString = require("./isstring.js");
/**
 * @function isNull
 * @alias isNil
 * @alias isNul
 * @description Determine item is type of null or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.allowStringifyAlias=false] Allow alias stringify type.
 * @param {boolean} [option.allowWhitespace=true] When option.allowExtend is true, allow whitespace in string.
 * @returns {boolean} Determine result.
 */
function isNull(item, option = {}) {
	let runtime = {
		allowStringify: false,
		allowStringifyAlias: false,
		allowExtend: false
	};
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Determine - Is Null)`);
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument "option.allowStringify" must be type of boolean! ([NodeJS] Advanced Determine - Is Null)`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof option.allowStringifyAlias !== "undefined") {
		if (typeof option.allowStringifyAlias !== "boolean") {
			throw new TypeError(`Argument "option.allowStringifyAlias" must be type of boolean! ([NodeJS] Advanced Determine - Is Null)`);
		};
		runtime.allowStringifyAlias = option.allowStringifyAlias;
	};
	if (typeof option.allowExtend !== "undefined") {
		if (typeof option.allowExtend !== "boolean") {
			throw new TypeError(`Argument "option.allowExtend" must be type of boolean! ([NodeJS] Advanced Determine - Is Null)`);
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
