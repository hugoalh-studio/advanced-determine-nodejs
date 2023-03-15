import { StringifyJSONItemFilter } from "../item-filter/stringify-json.js";
/**
 * @function isStringifyJSON
 * @alias isJSONStringified
 * @alias isJSONStringify
 * @alias isStringifiedJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the stringify JSON.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the stringify JSON.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item, {
	allowEmpty = false,
	arrayRoot,
	keysPattern,
	maximumEntries,
	minimumEntries,
	strict = false,
	strictKeys = false,
	...aliases
} = {}) {
	return new StringifyJSONItemFilter({
		allowEmpty,
		arrayRoot,
		keysPattern,
		maximumEntries,
		minimumEntries,
		strict,
		strictKeys,
		...aliases
	}).test(item);
}
export {
	isStringifyJSON
};
