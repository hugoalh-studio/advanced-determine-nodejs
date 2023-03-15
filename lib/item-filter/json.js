import { ArrayItemFilter } from "./array.js";
import { checkNumber, checkNumberIPS, checkNumberIPSWithMaximum } from "../internal/check-item.js";
import { PlainObjectItemFilter } from "./plain-object.js";
import undefinish from "@hugoalh/undefinish";
const jsonArrayFilter = new ArrayItemFilter({ strict: true });
const jsonObjectFilter = new PlainObjectItemFilter({
	configurableEntries: true,
	enumerableEntries: true,
	getterEntries: false,
	setterEntries: false,
	symbolKeys: false,
	writableEntries: true
});
const jsonLegalKeysPatternRegExp = /^[$_a-z][$\d_a-z]*$/u;
/**
 * @access private
 * @function isJSONValue
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONValue(item, keysPattern) {
	return (
		typeof item === "boolean" ||
		isJSONInternal(item, keysPattern) ||
		item === null ||
		checkNumber(item) ||
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
function isJSONInternal(item, keysPattern) {
	if (jsonArrayFilter.test(item)) {
		for (let itemElement of item) {
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
				(keysPattern instanceof RegExp && itemKey.search(keysPattern) === -1) ||
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
	#arrayRoot;
	#keysPattern;
	#maximumEntries;
	#minimumEntries;
	/**
	 * @constructor
	 * @description Initialize the filter of type of JSON to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty JSON.
	 * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the JSON.
	 * @param {RegExp} [param0.keysPattern] Whether a pattern matchable JSON keys.
	 * @param {number} [param0.maximumEntries=Infinity] Maximum entries of the JSON.
	 * @param {number} [param0.minimumEntries=1] Minimum entries of the JSON.
	 * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
	 */
	constructor({
		allowEmpty = false,
		arrayRoot,
		keysPattern,
		maximumEntries,
		minimumEntries,
		strict = false,
		strictKeys = false,
		...aliases
	} = {}) {
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`empty\` must be type of boolean.`);
		}
		if (typeof arrayRoot !== "boolean" && typeof arrayRoot !== "undefined") {
			throw new TypeError(`Argument \`arrayRoot\` must be type of boolean or undefined.`);
		}
		if (!(keysPattern instanceof RegExp) && typeof keysPattern !== "undefined") {
			throw new TypeError(`Argument \`keysPattern\` must be type of regular expression or undefined.`);
		}
		maximumEntries = undefinish(maximumEntries, aliases.maxEntries, Infinity);
		if (maximumEntries !== Infinity && !checkNumberIPS(maximumEntries)) {
			throw new TypeError(`Argument \`maximumEntries\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
		}
		minimumEntries = undefinish(minimumEntries, aliases.minEntries, 1);
		if (!checkNumberIPSWithMaximum(minimumEntries, maximumEntries)) {
			throw new TypeError(`Argument \`minimumEntries\` must be type of number (integer, positive, and safe) and <= ${maximumEntries}.`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean.`);
		}
		if (typeof strictKeys !== "boolean") {
			throw new TypeError(`Argument \`strictKeys\` must be type of boolean.`);
		}
		this.#arrayRoot = strict ? false : arrayRoot;
		this.#keysPattern = (
			strict ||
			strictKeys
		) ? jsonLegalKeysPatternRegExp : keysPattern;
		this.#maximumEntries = maximumEntries;
		this.#minimumEntries = allowEmpty ? 0 : minimumEntries;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		let itemEntriesLength = Object.entries(item).length;
		if (
			!isJSONInternal(item, this.#keysPattern) ||
			(this.#arrayRoot === false && Array.isArray(item)) ||
			(this.#arrayRoot === true && !Array.isArray(item)) ||
			this.#maximumEntries < itemEntriesLength ||
			itemEntriesLength < this.#minimumEntries
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
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
	static test(item, {
		allowEmpty = false,
		arrayRoot,
		keysPattern,
		maximumEntries,
		minimumEntries,
		strict = false,
		strictKeys = false,
		...aliases
	} = {}) {
		return new this({
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
}
export {
	JSONItemFilter
};
