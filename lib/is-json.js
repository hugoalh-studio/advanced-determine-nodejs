const allIs = require("./batch-determine.js").allIs,
	checkOption = require("./internal/check-option.js"),
	isArrayInternal = require("./internal/is-array.js"),
	isNumber = require("./is-number.js"),
	isObjectPairInternal = require("./internal/is-object-pair.js"),
	isString = require("./is-string.js");
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined");
	if (dispatch === true) {
		if (isString(option.typeOfValue) !== true) {
			throw new TypeError(`Argument "option.typeOfValue" must be type of string (non-nullable)!`);
		};
	};
	let isArrayResult = isArrayInternal(item),
		isObjectPairResult = isObjectPairInternal(item);
	if (isArrayResult === true) {
		for (let index = 0; index < item.length; index++) {
			let element = item[index];
			if (!(
				typeof element === "boolean" ||
				isJSON(element) !== false ||
				element === null ||
				isNumber(element) !== false ||
				typeof element === "string"
			)) {
				return false;
			};
		};
		if (dispatch === false) {
			return true;
		};
		return allIs([option.typeOfValue, option], ...item);
	};
	if (isObjectPairResult === true) {
		let binValue = Object.values(item);
		for (let index = 0; index < binValue.length; index++) {
			let element = binValue[index];
			if (!(
				typeof element === "boolean" ||
				isJSON(element) !== false ||
				element === null ||
				isNumber(element) !== false ||
				typeof element === "string"
			)) {
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
		return allIs([option.typeOfValue, option], ...Object.values(item));
	};
	if (
		isArrayResult === null ||
		isObjectPairResult === null
	) {
		return null;
	};
	return false;
};
module.exports = isJSON;
