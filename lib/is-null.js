const checkOption = require("./internal/check-option.js"),
	isArrayInternal = require("./internal/is-array.js"),
	isObjectPairInternal = require("./internal/is-object-pair.js"),
	isString = require("./is-string.js");
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
			throw new TypeError(`Argument \`option.allowStringify\` must be type of boolean!`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof option.allowStringifyAlias !== "undefined") {
		if (typeof option.allowStringifyAlias !== "boolean") {
			throw new TypeError(`Argument \`option.allowStringifyAlias\` must be type of boolean!`);
		};
		runtime.allowStringifyAlias = option.allowStringifyAlias;
	};
	if (typeof option.allowExtend !== "undefined") {
		if (typeof option.allowExtend !== "boolean") {
			throw new TypeError(`Argument \`option.allowExtend\` must be type of boolean!`);
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
			isArrayInternal(item) === null ||
			isObjectPairInternal(item) === null ||
			isString(item) === null
		) {
			return true;
		};
	};
	return false;
};
module.exports = isNull;
