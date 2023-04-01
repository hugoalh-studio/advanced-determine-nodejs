import { JSONItemFilter } from "./json.js";
/**
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 */
class StringifyJSONItemFilter {
	#jsonItemFilterWrapper;
	/**
	 * @constructor
	 * @description Initialize the filter of type of stringify JSON to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty stringify JSON.
	 * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the stringify JSON.
	 * @param {number} [param0.entriesCount] Entries of the stringify JSON.
	 * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the stringify JSON.
	 * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the stringify JSON.
	 * @param {RegExp} [param0.keysPattern] Whether a pattern matchable stringify JSON keys.
	 * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
	 * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
	 */
	constructor({
		allowEmpty = false,
		arrayRoot,
		entriesCount,
		entriesCountMaximum,
		entriesCountMinimum,
		keysPattern,
		strict = false,
		strictKeys,
		...aliases
	} = {}) {
		this.#jsonItemFilterWrapper = new JSONItemFilter({
			allowEmpty,
			arrayRoot,
			entriesCount,
			entriesCountMaximum,
			entriesCountMinimum,
			keysPattern,
			strict,
			strictKeys,
			...aliases
		});
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (typeof item !== "string") {
			return false;
		}
		let itemParse;
		try {
			itemParse = JSON.parse(item);
		} catch {
			return false;
		}
		return this.#jsonItemFilterWrapper.test(itemParse);
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
	 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
	 * @param {number} [param1.entriesCount] Entries of the stringify JSON.
	 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the stringify JSON.
	 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the stringify JSON.
	 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
	 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
	 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		arrayRoot,
		entriesCount,
		entriesCountMaximum,
		entriesCountMinimum,
		keysPattern,
		strict = false,
		strictKeys,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			arrayRoot,
			entriesCount,
			entriesCountMaximum,
			entriesCountMinimum,
			keysPattern,
			strict,
			strictKeys,
			...aliases
		}).test(item);
	}
}
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty stringify JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the stringify JSON.
 * @param {number} [param1.entriesCount] Entries of the stringify JSON.
 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the stringify JSON.
 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the stringify JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable stringify JSON keys.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the stringify JSON keys.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item, {
	allowEmpty = false,
	arrayRoot,
	entriesCount,
	entriesCountMaximum,
	entriesCountMinimum,
	keysPattern,
	strict = false,
	strictKeys,
	...aliases
} = {}) {
	return new StringifyJSONItemFilter({
		allowEmpty,
		arrayRoot,
		entriesCount,
		entriesCountMaximum,
		entriesCountMinimum,
		keysPattern,
		strict,
		strictKeys,
		...aliases
	}).test(item);
}
export {
	isStringifyJSON,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isStringifyJSON as isStringifiedJSON,
	StringifyJSONItemFilter,
	StringifyJSONItemFilter as JSONStringifiedItemFilter,
	StringifyJSONItemFilter as JSONStringifyItemFilter,
	StringifyJSONItemFilter as StringifiedJSONItemFilter
};
