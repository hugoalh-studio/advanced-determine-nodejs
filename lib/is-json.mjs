import checkOption from "./internal/check-option.mjs";
import isArray from "./is-array.mjs";
import isNumber from "./is-number.mjs";
import isObjectPair from "./is-object-pair.mjs";
/**
 * @private
 * @function checkJSONElement
 * @param {*} item
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
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the JSON.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined"),
		runtime = {
			allowArrayRoot: true
		};
	if (typeof option.allowArrayRoot !== "undefined") {
		if (typeof option.allowArrayRoot !== "boolean") {
			throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
		};
		runtime.allowArrayRoot = option.allowArrayRoot;
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
		if (dispatch === false) {
			return true;
		};
		return item.every((element) => {
			return option.checkElement(element);
		});
	};
	if (isObjectPairResult === true) {
		let binValue = Object.values(item);
		for (let index = 0; index < binValue.length; index++) {
			if (checkJSONElement(binValue[index]) === false) {
				return false;
			};
		};
		let binStringify;
		try {
			binStringify = JSON.stringify(item);
		} catch (error) {
			return false;
		};
		if (
			Object.keys(item).length === 0 ||
			binStringify === "{}"
		) {
			return null;
		};
		if (dispatch === false) {
			return true;
		};
		return Object.values(item).every((element) => {
			return option.checkElement(element);
		});
	};
	if (
		(runtime.allowArrayRoot === true && isArrayResult === null) ||
		isObjectPairResult === null
	) {
		return null;
	};
	return false;
};
export default isJSON;
