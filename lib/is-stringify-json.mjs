import checkOption from "./internal/check-option.mjs";
import isJSON from "./is-json.mjs";
import isString from "./is-string.mjs";
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @alias isStringifiedJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the stringify JSON.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	checkOption(option);
	if (isString(item) !== true) {
		return false;
	};
	let itemParse;
	try {
		itemParse = JSON.parse(item);
	} catch (error) {
		return false;
	};
	return isJSON(itemParse, option);
};
export default isStringifyJSON;
