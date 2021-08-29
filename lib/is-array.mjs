import checkOption from "./internal/check-option.mjs";
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	checkOption(option);
	if (typeof option.checkElement !== "undefined" && typeof option.checkElement !== "function") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function or undefined!`);
	};
	if (Array.isArray(item) === false) {
		return false;
	};
	if (item.length === 0) {
		return null;
	};
	if (typeof option.checkElement === "function") {
		return item.every(option.checkElement);
	};
	return true;
};
export default isArray;
