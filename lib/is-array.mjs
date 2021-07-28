import checkOption from "./internal/check-option.mjs";
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type.
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.checkElement !== "undefined");
	if (dispatch === true) {
		if (typeof option.checkElement !== "function") {
			throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
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
	return item.every((element) => {
		return option.checkElement(element);
	});
};
export default isArray;
