const isJSON = require("./is-json.js");
/**
 * @function isStringifyJSON
 * @alias isJSONStr
 * @alias isJSONStringified
 * @alias isJSONStringify
 * @alias isStringifiedJSON
 * @alias isStrJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the stringify JSON.
 * @param {number} [param1.minimumEntries=0] Minimum entries of the stringify JSON.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
 * @returns {item is object} Determine result.
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
	if (typeof item !== "string") {
		return false;
	}
	let itemParse;
	try {
		itemParse = JSON.parse(item);
	} catch {
		return false;
	}
	return isJSON(itemParse, {
		allowEmpty,
		arrayRoot,
		keysPattern,
		maximumEntries,
		minimumEntries,
		strict,
		strictKeys,
		...aliases
	});
}
module.exports = isStringifyJSON;
