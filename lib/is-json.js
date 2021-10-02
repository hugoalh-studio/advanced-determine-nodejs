const $isPlainObject = require("./internal/is-plain-object.js");
const isFunction = require("./is-function.js");
const isNumber = require("./is-number.js");
/**
 * @private
 * @function checkJSONElement
 * @param {any} item
 * @param {object} option
 * @returns {boolean}
 */
function checkJSONElement(item, option) {
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
		let itemLength = item.length;
		if (itemLength === 0) {
			return null;
		};
		for (let index = 0; index < itemLength; index++) {
			if (checkJSONElement(item[index], option) === false) {
				return false;
			};
		};
		return true;
	};
	if ($isPlainObject(item) !== false) {
		let itemKeys = Object.keys(item);
		let itemStringify;
		try {
			itemStringify = JSON.stringify(item);
		} catch {
			return false;
		};
		let itemKeysLength = itemKeys.length;
		if (
			itemKeysLength === 0 ||
			itemStringify === "{}"
		) {
			return null;
		};
		for (let index = 0; index < itemKeysLength; index++) {
			let key = itemKeys[index];
			if (
				(option.strictKey === true && key.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyAsterisk === false && key.search(/\*/giu) !== -1) ||
					(option.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
					(option.allowKeyWhitespace === false && key.search(/\s/giu) !== -1))
				)
			) {
				return false;
			};
			if (checkJSONElement(item[key], option) === false) {
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
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no any illegal namespace character(s) in the JSON key.
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowArrayRoot = ((typeof option.allowArrayRoot === "undefined") ? true : option.allowArrayRoot);
	if (typeof option.allowArrayRoot !== "boolean") {
		throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
	};
	option.allowKeyAsterisk = ((typeof option.allowKeyAsterisk === "undefined") ? true : option.allowKeyAsterisk);
	if (typeof option.allowKeyAsterisk !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyAsterisk\` must be type of boolean!`);
	};
	option.allowKeyHyphen = ((typeof option.allowKeyHyphen === "undefined") ? true : option.allowKeyHyphen);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = ((typeof option.allowKeyWhitespace === "undefined") ? true : option.allowKeyWhitespace);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (isFunction(option.checkElement, { asynchronous: false, generator: false }) && typeof option.checkElement !== "undefined") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.strict = ((typeof option.strict === "undefined") ? false : option.strict);
	if (typeof option.strict !== "boolean") {
		throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
	};
	option.strictKey = ((typeof option.strictKey === "undefined") ? false : option.strictKey);
	if (typeof option.strictKey !== "boolean") {
		throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
	};
	option.allowArrayRoot = !option.strict;
	option.strictKey = option.strict;
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
