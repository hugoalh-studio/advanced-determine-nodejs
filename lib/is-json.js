const checkOption = require("./internal/check-option.js");
const isNumber = require("./is-number.js");
const isObjectPair = require("./is-object-pair.js");
/**
 * @private
 * @function checkJSONElement
 * @param {any} item
 * @param {object} runtime
 * @returns {boolean}
 */
function checkJSONElement(item, runtime) {
	if (
		typeof item === "boolean" ||
		isJSONInternal(item, runtime) !== false ||
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
 * @param {object} runtime
 * @returns {(boolean|null)}
 */
function isJSONInternal(item, runtime) {
	if (Array.isArray(item) === true) {
		if (item.length === 0) {
			return null;
		};
		for (let index = 0; index < item.length; index++) {
			if (checkJSONElement(item[index], runtime) === false) {
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
		} catch (error) {
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
				(runtime.strictKey === true && key.search(/^[$_a-z][$0-9_a-z]*?$/giu) !== 0) ||
				(runtime.strictKey === false && (
					(runtime.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
					(runtime.allowKeyStar === false && key.search(/\*/giu) !== -1) ||
					(runtime.allowKeyWhitespace === false && key.search(/\s/giu) !== -1))
				)
			) {
				return false;
			};
			if (checkJSONElement(item[key], runtime) === false) {
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
	checkOption(option);
	let dispatch = (typeof option.checkElement !== "undefined");
	let runtime = {
		allowArrayRoot: true,
		allowKeyHyphen: true,
		allowKeyStar: true,
		allowKeyWhitespace: true,
		strictKey: false
	};
	if (typeof option.strict === "undefined") {
		if (typeof option.allowArrayRoot !== "undefined") {
			if (typeof option.allowArrayRoot !== "boolean") {
				throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
			};
			runtime.allowArrayRoot = option.allowArrayRoot;
		};
		if (typeof option.strictKey === "undefined") {
			if (typeof option.allowKeyHyphen !== "undefined") {
				if (typeof option.allowKeyHyphen !== "boolean") {
					throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
				};
				runtime.allowKeyHyphen = option.allowKeyHyphen;
			};
			if (typeof option.allowKeyStar !== "undefined") {
				if (typeof option.allowKeyStar !== "boolean") {
					throw new TypeError(`Argument \`option.allowKeyStar\` must be type of boolean!`);
				};
				runtime.allowKeyStar = option.allowKeyStar;
			};
			if (typeof option.allowKeyWhitespace !== "undefined") {
				if (typeof option.allowKeyWhitespace !== "boolean") {
					throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
				};
				runtime.allowKeyWhitespace = option.allowKeyWhitespace;
			};
		} else {
			if (typeof option.strictKey !== "boolean") {
				throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
			};
			runtime.strictKey = option.strictKey;
		};
	} else {
		if (typeof option.strict !== "boolean") {
			throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
		};
		runtime.allowArrayRoot = !option.strict;
		runtime.strictKey = option.strict;
	};
	if (dispatch === true && typeof option.checkElement !== "function") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
	};
	let itemIsArray = Array.isArray(item);
	if (runtime.allowArrayRoot === false && itemIsArray === true) {
		return false;
	};
	let itemIsJSON = isJSONInternal(item, runtime);
	if (itemIsJSON !== true) {
		return itemIsJSON;
	};
	if (dispatch === false) {
		return true;
	};
	if (itemIsArray === true) {
		return item.every((element) => {
			return option.checkElement(element);
		});
	};
	return Object.values(item).every((element) => {
		return option.checkElement(element);
	});
};
module.exports = isJSON;
