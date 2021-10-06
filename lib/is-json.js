const isFunction = require("./is-function.js");
const isNumber = require("./is-number.js");
const isPlainObject = require("./is-plain-object.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @private
 * @function $checkJSONValue
 * @param {any} item
 * @param {object} option
 * @returns {boolean}
 */
function $checkJSONValue(item, option) {
	if (
		typeof item === "boolean" ||
		$isJSON(item, option) !== false ||
		item === null ||
		isNumber(item) !== false ||
		typeof item === "string"
	) {
		return true;
	};
	return false;
};
/**
 * @private
 * @function $isJSON
 * @param {any} item
 * @param {object} option
 * @returns {(boolean|null)}
 */
function $isJSON(item, option) {
	if (Array.isArray(item) === true) {
		if (item.length === 0) {
			return null;
		};
		for (let itemElement of item) {
			if ($checkJSONValue(itemElement, option) === false) {
				return false;
			};
		};
		return true;
	};
	if (isPlainObject(item) !== false) {
		let itemKeys = Object.keys(item);
		let itemStringify;
		try {
			itemStringify = JSON.stringify(item);
		} catch {
			return false;
		};
		if (
			itemKeys.length === 0 ||
			itemStringify === "{}"
		) {
			return null;
		};
		for (let itemKey of itemKeys) {
			if (
				(option.strictKey === true && itemKey.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyAsterisk === false && itemKey.search(/\*/giu) !== -1) ||
					(option.allowKeyHyphen === false && itemKey.search(/-/giu) !== -1) ||
					(option.allowKeyWhitespace === false && itemKey.search(/\s/giu) !== -1))
				)
			) {
				return false;
			};
			if ($checkJSONValue(item[itemKey], option) === false) {
				return false;
			};
		};
		return true;
	};
	return false;
};
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the JSON.
 * @param {boolean} [option.allowKeyAsterisk=true] Allow any asterisk character(s) (`*`) in the JSON key.
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the JSON key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the JSON key.
 * @param {Function} [option.checkElement] A function to ensure element(s) type(s).
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no any illegal namespace character(s) in the JSON key.
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	if (isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowArrayRoot = undefinish(option.allowArrayRoot, true);
	if (typeof option.allowArrayRoot !== "boolean") {
		throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
	};
	option.allowKeyAsterisk = undefinish(option.allowKeyAsterisk, option.allowKeyStar, true);
	if (typeof option.allowKeyAsterisk !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyAsterisk\` must be type of boolean!`);
	};
	option.allowKeyHyphen = undefinish(option.allowKeyHyphen, true);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = undefinish(option.allowKeyWhitespace, true);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (isFunction(option.checkElement, { asynchronous: false, generator: false }) && typeof option.checkElement !== "undefined") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.strict = undefinish(option.strict, false);
	if (typeof option.strict !== "boolean") {
		throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
	};
	option.strictKey = undefinish(option.strictKey, false);
	if (typeof option.strictKey !== "boolean") {
		throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
	};
	if (option.strict === true) {
		option.allowArrayRoot = !option.strict;
		option.strictKey = option.strict;
	};
	let itemIsArray = Array.isArray(item);
	if (option.allowArrayRoot === false && itemIsArray === true) {
		return false;
	};
	let itemIsJSON = $isJSON(item, option);
	if (itemIsJSON !== true) {
		return itemIsJSON;
	};
	if (typeof option.checkElement === "function") {
		return ((itemIsArray === true) ? item.every(option.checkElement) : Object.values(item).every(option.checkElement));
	};
	return true;
};
module.exports = isJSON;
