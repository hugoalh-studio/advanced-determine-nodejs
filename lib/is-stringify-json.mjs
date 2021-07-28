import checkOption from "./internal/check-option.mjs";
import isJSON from "./is-json.mjs";
import isString from "./is-string.mjs";
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @alias isStringifiedJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the stringify JSON.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	checkOption(option);
	if (isString(item) !== true) {
		return false;
	};
	let bin;
	try {
		bin = JSON.parse(item);
	} catch (error) {
		return false;
	};
	return isJSON(bin, option);
};
export default isStringifyJSON;
