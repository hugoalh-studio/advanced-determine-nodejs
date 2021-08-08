import checkOption from "./internal/check-option.mjs";
import isArray from "./is-array.mjs";
import isNumber from "./is-number.mjs";
import isObjectPair from "./is-object-pair.mjs";
/**
 * @private
 * @function checkJSONElement
 * @param {any} item
 * @returns {boolean}
 */
function checkJSONElement(item) {
	if (
		typeof item === "boolean" ||
		isJSON(item) !== false ||
		item === null ||
		isNumber(item) !== false ||
		typeof item === "string"
	) {
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
 * @param {boolean} [option.strict=false] Use strict to not allow any hyphen (`-`), star (`*`), or whitespace character(s) in the JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined"),
		runtime = {
			allowArrayRoot: true,
			allowKeyHyphen: true,
			allowKeyStar: true,
			allowKeyWhitespace: true
		};
	if (typeof option.allowArrayRoot !== "undefined") {
		if (typeof option.allowArrayRoot !== "boolean") {
			throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
		};
		runtime.allowArrayRoot = option.allowArrayRoot;
	};
	if (typeof option.strict === "undefined") {
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
		if (typeof option.strict !== "boolean") {
			throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
		};
		runtime.allowKeyHyphen = !option.strict;
		runtime.allowKeyStar = !option.strict;
		runtime.allowKeyWhitespace = !option.strict;
	};
	if (dispatch === true) {
		if (typeof option.checkElement !== "function") {
			throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
		};
	};
	let isArrayResult = isArray(item),
		isObjectPairResult = isObjectPair(item);
	if (runtime.allowArrayRoot === true && isArrayResult === true) {
		for (let index = 0; index < item.length; index++) {
			if (checkJSONElement(item[index]) === false) {
				return false;
			};
		};
	} else if (isObjectPairResult === true) {
		let itemKeys = Object.keys(item);
		for (let index = 0; index < itemKeys.length; index++) {
			let key = itemKeys[index];
			if (runtime.allowKeyHyphen === false) {
				if (key.search(/-/giu) !== -1) {
					return false;
				};
			};
			if (runtime.allowKeyStar === false) {
				if (key.search(/\*/giu) !== -1) {
					return false;
				};
			};
			if (runtime.allowKeyWhitespace === false) {
				if (key.search(/\s/giu) !== -1) {
					return false;
				};
			};
			if (checkJSONElement(item[key]) === false) {
				return false;
			};
		};
		let itemStringify;
		try {
			itemStringify = JSON.stringify(item);
		} catch (error) {
			return false;
		};
		if (
			Object.keys(item).length === 0 ||
			itemStringify === "{}"
		) {
			return null;
		};
	} else {
		return false;
	};
	if (
		isArrayResult === null ||
		isObjectPairResult === null
	) {
		return null;
	};
	if (dispatch === false) {
		return true;
	};
	if (isArrayResult === true) {
		return item.every((element) => {
			return option.checkElement(element);
		});
	};
	return Object.values(item).every((element) => {
		return option.checkElement(element);
	});
};
export default isJSON;
