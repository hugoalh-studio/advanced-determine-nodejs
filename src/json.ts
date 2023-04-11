import { ArrayItemFilter } from "./array.js";
import { checkNumber, checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
import { PlainObjectItemFilter } from "./plain-object.js";
const jsonArrayFilter = new ArrayItemFilter({ strict: true });
const jsonObjectFilter = new PlainObjectItemFilter({ strict: true });
const jsonLegalKeysPatternRegExp = /^[$_a-z][$\d_a-z]*$/u;
interface JSONItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty JSON.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property arrayRoot
	 * @description Whether type of array as the root of the JSON.
	 * @default undefined
	 */
	arrayRoot?: boolean;
	/**
	 * @property entriesCount
	 * @description Entries of the JSON.
	 * @default undefined
	 */
	entriesCount?: number;
	/**
	 * @property entriesCountMaximum
	 * @description Maximum entries of the JSON.
	 * @default Infinity
	 */
	entriesCountMaximum?: number;
	/**
	 * @property entriesCountMinimum
	 * @description Minimum entries of the JSON.
	 * @default 1
	 */
	entriesCountMinimum?: number;
	/**
	 * @property keysPattern
	 * @description Whether a pattern matchable JSON keys.
	 * @default undefined
	 */
	keysPattern?: RegExp;
	/**
	 * @property strict
	 * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @default false
	 */
	strict?: boolean;
	/**
	 * @property strictKeys
	 * @description Whether to determine no illegal namespace characters in the JSON keys.
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
 * @access private
 * @function isJSONValue
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONValue(item: unknown, keysPattern?: RegExp): boolean {
	return (
		typeof item === "boolean" ||
		isJSONInternal(item, keysPattern) ||
		item === null ||
		checkNumber(item as number) ||
		typeof item === "string"
	);
}
/**
 * @access private
 * @function isJSONInternal
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONInternal(item: unknown, keysPattern?: RegExp): boolean {
	if (jsonArrayFilter.test(item)) {
		for (let itemElement of (item as unknown[])) {
			if (!isJSONValue(itemElement, keysPattern)) {
				return false;
			}
		}
		return true;
	}
	if (jsonObjectFilter.test(item)) {
		try {
			JSON.stringify(item);
		} catch {
			return false;
		}
		for (let itemKey of Object.keys(item)) {
			if (
				(keysPattern instanceof RegExp && !keysPattern.test(itemKey)) ||
				!isJSONValue(item[itemKey], keysPattern)
			) {
				return false;
			}
		}
		return true;
	}
	return false;
}
/**
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
class JSONItemFilter {
	#arrayRoot?: boolean;
	#entriesCountMaximum: number;
	#entriesCountMinimum: number;
	#keysPattern?: RegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of JSON to determine item.
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 */
	constructor(options: JSONItemFilterOptions = {}) {
		let {
			allowEmpty = false,
			arrayRoot,
			entriesCount,
			entriesCountMaximum,
			entriesCountMinimum,
			keysPattern,
			strict = false,
			strictKeys,
			...aliases
		} = options;
		entriesCount ??= aliases.entries;
		entriesCountMaximum ??= aliases.entriesMaximum ?? aliases.entriesCountMax ?? aliases.entriesMax ?? aliases.maximumEntries ?? aliases.maxEntries ?? Infinity;
		entriesCountMinimum ??= aliases.entriesMinimum ?? aliases.entriesCountMin ?? aliases.entriesMin ?? aliases.minimumEntries ?? aliases.minEntries ?? 1;
		strictKeys ??= aliases.keysStrict;
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
		}
		if (typeof arrayRoot !== "boolean" && typeof arrayRoot !== "undefined") {
			throw new TypeError(`Argument \`options.arrayRoot\` must be type of boolean or undefined!`);
		}
		if (!checkNumberIPS(entriesCount) && typeof entriesCount !== "undefined") {
			throw new TypeError(`Argument \`options.entriesCount\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (entriesCountMaximum !== Infinity && !checkNumberIPS(entriesCountMaximum)) {
			throw new TypeError(`Argument \`options.entriesCountMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(entriesCountMinimum, entriesCountMaximum)) {
			throw new TypeError(`Argument \`options.entriesCountMinimum\` must be type of number (integer, positive, and safe) and <= ${entriesCountMaximum}!`);
		}
		if (!(keysPattern instanceof RegExp) && typeof keysPattern !== "undefined") {
			throw new TypeError(`Argument \`options.keysPattern\` must be type of regular expression or undefined!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
		}
		if (typeof strictKeys !== "boolean") {
			throw new TypeError(`Argument \`options.strictKeys\` must be type of boolean!`);
		}
		if (typeof entriesCount === "number") {
			this.#entriesCountMaximum = entriesCount;
			this.#entriesCountMinimum = entriesCount;
		} else {
			this.#entriesCountMaximum = entriesCountMaximum;
			this.#entriesCountMinimum = allowEmpty ? 0 : entriesCountMinimum;
		}
		this.#arrayRoot = strict ? false : arrayRoot;
		this.#keysPattern = (strict || strictKeys) ? jsonLegalKeysPatternRegExp : keysPattern;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		let itemEntriesLength: number = Object.entries(item).length;
		if (
			!isJSONInternal(item, this.#keysPattern) ||
			(this.#arrayRoot === false && Array.isArray(item)) ||
			(this.#arrayRoot === true && !Array.isArray(item)) ||
			this.#entriesCountMaximum < itemEntriesLength ||
			itemEntriesLength < this.#entriesCountMinimum
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of JSON.
	 * @param {unknown} item Item that need to determine.
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: JSONItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isJSON(item: unknown, options: JSONItemFilterOptions = {}): boolean {
	return new JSONItemFilter(options).test(item);
}
export {
	isJSON,
	JSONItemFilter,
	type JSONItemFilterOptions
};
