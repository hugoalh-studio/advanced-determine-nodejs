/*==================
[NodeJS] Advanced Determine - Is Null
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isObjectPair = require("./isobjectpair.js");
const isString = require("./isstring.js");
/**
 * @function isNull
 * @alias isNul
 * @description Determine item is type of null or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.allowWhitespace=true] When option.allowExtend is true, allow whitespace in string.
 * @returns {boolean} Determine result.
 */
function isNull(item, option) {
	let runtime = {
		allowStringify: false,
		allowExtend: false
	};
	if (isObjectPair(option) == true) {
		if (typeof option.allowStringify != "undefined") {
			if (typeof option.allowStringify != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowStringify"! Require type of boolean.`);
			};
			runtime.allowStringify = option.allowStringify;
		};
		if (typeof option.allowExtend != "undefined") {
			if (typeof option.allowExtend != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowExtend"! Require type of boolean.`);
			};
			runtime.allowExtend = option.allowExtend;
		};
	};
	if (item === null) {
		return true;
	};
	if (runtime.allowStringify == true) {
		if (item === "null") {
			return true;
		};
	};
	if (runtime.allowExtend == true) {
		if (
			isArray(item) == null ||
			isObjectPair(item) == null ||
			isString(item) == null
		) {
			return true;
		};
	};
	return false;
};
module.exports = isNull;
