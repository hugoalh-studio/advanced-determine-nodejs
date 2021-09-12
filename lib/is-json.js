const isNumber = require("./is-number.js");
const isObjectPair = require("./is-object-pair.js");
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
		isJSONInternal(item, option) !== false ||
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
 * @function isJSONInternal
 * @param {any} item
 * @param {object} option
 * @returns {(boolean|null)}
 */
function isJSONInternal(item, option) {
	if (Array.isArray(item) === true) {
		if (item.length === 0) {
			return null;
		};
		for (let index = 0; index < item.length; index++) {
			if (checkJSONElement(item[index], option) === false) {
				return false;
			};
		};
		return true;
	};
	if (isObjectPair(item) !== false) {
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
		for (let index = 0; index < itemKeys.length; index++) {
			let key = itemKeys[index];
			if (
				(option.strictKey === true && key.search(/^[$_a-z][$0-9_a-z]*?$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
					(option.allowKeyStar === false && key.search(/\*/giu) !== -1) ||
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
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the JSON key.
 * @param {boolean} [option.allowKeyStar=true] Allow any star character(s) (`*`) in the JSON key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the JSON key.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no any illegal namespace character(s) in the JSON key.
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	option.allowArrayRoot = ((typeof option.allowArrayRoot === "undefined") ? true : option.allowArrayRoot);
	if (typeof option.allowArrayRoot !== "boolean") {
		throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
	};
	option.allowKeyHyphen = ((typeof option.allowKeyHyphen === "undefined") ? true : option.allowKeyHyphen);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyStar = ((typeof option.allowKeyStar === "undefined") ? true : option.allowKeyStar);
	if (typeof option.allowKeyStar !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyStar\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = ((typeof option.allowKeyWhitespace === "undefined") ? true : option.allowKeyWhitespace);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (typeof option.checkElement !== "undefined" && typeof option.checkElement !== "function") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function or undefined!`);
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
	let itemIsJSON = isJSONInternal(item, option);
	if (itemIsJSON !== true) {
		return itemIsJSON;
	};
	if (typeof option.checkElement === "function") {
		return ((itemIsArray === true) ? item.every(option.checkElement) : Object.values(item).every(option.checkElement));
	};
	return true;
};
module.exports = isJSON;
