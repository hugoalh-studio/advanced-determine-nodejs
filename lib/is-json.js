const isArrayInternal = require("./internal/is-array.js"),
	isNumber = require("./is-number.js"),
	isObjectPair = require("./is-object-pair.js");
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item) {
	let isArrayResult = isArrayInternal(item),
		isObjectPairResult = isObjectPair(item);
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
		return true;
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
		return ((Object.keys(item).length > 0 && binStringify !== "{}") ? true : null);
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
