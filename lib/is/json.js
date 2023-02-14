import JSONItemFilter from "../item-filter/json.js";
/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the JSON.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the JSON.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
 * @returns {boolean} Determine result.
 */
function isJSON(item, {
	allowEmpty = false,
	arrayRoot,
	keysPattern,
	maximumEntries,
	minimumEntries,
	strict = false,
	strictKeys = false,
	...aliases
} = {}) {
	return new JSONItemFilter({
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
export default isJSON;
