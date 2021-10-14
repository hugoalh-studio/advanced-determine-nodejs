import isFunction from "./is-function.mjs";
import isNumber from "./is-number.mjs";
import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
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
			if ($checkJSONValue(itemElement, option) !== true) {
				return false;
			};
		};
		return true;
	};
	if (isPlainObjectInno(item) !== false) {
		let itemKeys = Object.keys(item);
		let itemStringify;
		try {
			itemStringify = JSON.stringify(item);
		} catch {
			return false;
		};
		if (itemKeys.length > 0 && itemStringify === "{}") {
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
			if ($checkJSONValue(item[itemKey], option) !== true) {
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
 * @param {boolean} [option.allowKeysAsterisks=true] Allow asterisk characters (`*`) in the JSON keys.
 * @param {boolean} [option.allowKeysHyphens=true] Allow hyphen characters (`-`) in the JSON keys.
 * @param {boolean} [option.allowKeysWhitespaces=true] Allow whitespaces in the JSON keys.
 * @param {boolean} [option.arrayRoot] Type of array as the root of the JSON.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the JSON keys.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowKeysAsterisks = undefinish(option.allowKeysAsterisks, option.allowKeysAsterisk, option.allowKeyAsterisks, option.allowKeyAsterisk, option.allowKeysStars, option.allowKeysStar, option.allowKeyStars, option.allowKeyStar, true);
	if (typeof option.allowKeysAsterisks !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysAsterisks\` must be type of boolean!`);
	};
	option.allowKeysHyphens = undefinish(option.allowKeysHyphens, option.allowKeysHyphen, option.allowKeyHyphens, option.allowKeyHyphen, true);
	if (typeof option.allowKeysHyphens !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysHyphens\` must be type of boolean!`);
	};
	option.allowKeysWhitespaces = undefinish(option.allowKeysWhitespaces, option.allowKeysWhitespace, option.allowKeyWhitespaces, option.allowKeyWhitespace, true);
	if (typeof option.allowKeysWhitespaces !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysWhitespaces\` must be type of boolean!`);
	};
	if (typeof option.arrayRoot !== "boolean" && typeof option.arrayRoot !== "undefined") {
		throw new TypeError(`Argument \`option.arrayRoot\` must be type of boolean or undefined!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement);
	if (isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkKeys = undefinish(option.checkKeys, option.checkKey);
	if (isFunction(option.checkKeys, { asynchronous: false, generator: false }) && typeof option.checkKeys !== "undefined") {
		throw new TypeError(`Argument \`option.checkKeys\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkValues = undefinish(option.checkValues, option.checkValue);
	if (isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.strict = undefinish(option.strict, false);
	if (typeof option.strict !== "boolean") {
		throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
	};
	option.strictKeys = undefinish(option.strictKeys, option.strictKey, false);
	if (typeof option.strictKeys !== "boolean") {
		throw new TypeError(`Argument \`option.strictKeys\` must be type of boolean!`);
	};
	if (option.strict === true) {
		option.arrayRoot = false;
		option.strictKeys = true;
	};
	let itemIsArray = Array.isArray(item);
	if (
		(option.arrayRoot === false && itemIsArray === true) ||
		(option.arrayRoot === true && itemIsArray === false)
	) {
		return false;
	};
	let itemIsJSON = $isJSON(item, option);
	if (itemIsJSON !== true) {
		return itemIsJSON;
	};
	if (typeof option.checkElements === "function" && itemIsArray === false) {
		let itemEntries = Object.entries(item);
		for (let [itemKey, itemValue] of itemEntries) {
			if (option.checkElements(itemKey, itemValue) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkKeys === "function" && itemIsArray === false) {
		let itemKeys = Object.keys(item);
		for (let itemKey of itemKeys) {
			if (option.checkKeys(itemKey) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		if (itemIsArray === true) {
			for (let itemElement of item) {
				if (option.checkValues(itemElement) === false) {
					return false;
				};
			};
		} else {
			let itemValues = Object.values(item);
			for (let itemValue of itemValues) {
				if (option.checkValues(itemValue) === false) {
					return false;
				};
			};
		};
	};
	return true;
};
export default isJSON;
