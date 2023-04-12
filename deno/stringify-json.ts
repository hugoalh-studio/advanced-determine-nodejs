import { JSONItemFilter } from "./json.ts"
interface StringifyJSONItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty stringify JSON.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property arrayRoot
	 * @description Whether type of array as the root of the stringify JSON.
	 * @default undefined
	 */
	arrayRoot?: boolean;
	/**
	 * @property entriesCount
	 * @description Entries of the stringify JSON.
	 * @default undefined
	 */
	entriesCount?: number;
	/**
	 * @property entriesCountMaximum
	 * @description Maximum entries of the stringify JSON.
	 * @default Infinity
	 */
	entriesCountMaximum?: number;
	/**
	 * @property entriesCountMinimum
	 * @description Minimum entries of the stringify JSON.
	 * @default 1
	 */
	entriesCountMinimum?: number;
	/**
	 * @property keysPattern
	 * @description Whether a pattern matchable stringify JSON keys.
	 * @default undefined
	 */
	keysPattern?: RegExp;
	/**
	 * @property strict
	 * @description Whether to determine type of array not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
	 * @default false
	 */
	strict?: boolean;
	/**
	 * @property strictKeys
	 * @description Whether to determine no illegal namespace characters in the stringify JSON keys.
	 * @default false
	 */
	strictKeys?: boolean;
	/** @alias entriesCount */entries?: number;
	/** @alias entriesCountMaximum */entriesCountMax?: number;
	/** @alias entriesCountMaximum */entriesMax?: number;
	/** @alias entriesCountMaximum */entriesMaximum?: number;
	/** @alias entriesCountMaximum */maxEntries?: number;
	/** @alias entriesCountMaximum */maximumEntries?: number;
	/** @alias entriesCountMinimum */entriesCountMin?: number;
	/** @alias entriesCountMinimum */entriesMin?: number;
	/** @alias entriesCountMinimum */entriesMinimum?: number;
	/** @alias entriesCountMinimum */minEntries?: number;
	/** @alias entriesCountMinimum */minimumEntries?: number;
	/** @alias strictKeys */keysStrict?: boolean;
}
/**
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 */
class StringifyJSONItemFilter {
	#jsonItemFilterWrapper: JSONItemFilter;
	/**
	 * @constructor
	 * @description Initialize the filter of type of stringify JSON to determine item.
	 * @param {StringifyJSONItemFilterOptions} [options={}] Options.
	 */
	constructor(options: StringifyJSONItemFilterOptions = {}) {
		this.#jsonItemFilterWrapper = new JSONItemFilter(options);
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
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
	 * @param {StringifyJSONItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: StringifyJSONItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {StringifyJSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item: unknown, options: StringifyJSONItemFilterOptions = {}): boolean {
	return new StringifyJSONItemFilter(options).test(item);
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
	type StringifyJSONItemFilterOptions,
	type StringifyJSONItemFilterOptions as JSONStringifiedItemFilterOptions,
	type StringifyJSONItemFilterOptions as JSONStringifyItemFilterOptions,
	type StringifyJSONItemFilterOptions as StringifiedJSONItemFilterOptions
};
