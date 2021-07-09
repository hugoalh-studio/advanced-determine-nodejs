const allIs = require("./batch-determine.js").allIs,
	checkOption = require("./internal/check-option.js"),
	isString = require("./is-string.js");
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.typeOfElement] Determine element type.
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfElement !== "undefined");
	if (dispatch === true) {
		if (isString(option.typeOfElement) !== true) {
			throw new TypeError(`Argument \`option.typeOfElement\` must be type of string (non-nullable)!`);
		};
	};
	if (Array.isArray(item) === false) {
		return false;
	};
	if (item.length === 0) {
		return null;
	};
	if (dispatch === false) {
		return true;
	};
	return allIs([option.typeOfElement, option], ...item);
};
module.exports = isArray;
