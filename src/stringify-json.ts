import { JSONItemFilter, type JSONItemFilterOptions } from "./json.js";
/**
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
 */
class StringifyJSONItemFilter {
	#jsonItemFilterWrapper: JSONItemFilter;
	/**
	 * @constructor
	 * @description Initialize the filter of type of stringify JSON to determine item.
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
	 */
	constructor(options: JSONItemFilterOptions = {}) {
		this.#jsonItemFilterWrapper = new JSONItemFilter(options);
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
	 */
	test(item: unknown): boolean {
		if (typeof item !== "string") {
			return false;
		}
		let itemParse: object;
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
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
	 */
	static test(item: unknown, options: JSONItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item: unknown, options: JSONItemFilterOptions = {}): boolean {
	return new JSONItemFilter(options).testStringify(item);
}
export {
	isStringifyJSON,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isStringifyJSON as isStringifiedJSON,
	StringifyJSONItemFilter,
	StringifyJSONItemFilter as JSONStringifiedItemFilter,
	StringifyJSONItemFilter as JSONStringifyItemFilter,
	StringifyJSONItemFilter as StringifiedJSONItemFilter,
	type JSONItemFilterOptions as StringifyJSONItemFilterOptions,
	type JSONItemFilterOptions as JSONStringifiedItemFilterOptions,
	type JSONItemFilterOptions as JSONStringifyItemFilterOptions,
	type JSONItemFilterOptions as StringifiedJSONItemFilterOptions
};
