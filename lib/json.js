import undefinish from "@hugoalh/undefinish";
import { ArrayItemFilter } from "./array.js";
import { PlainObjectItemFilter } from "./plain-object.js";
const jsonArrayFilter = new ArrayItemFilter({ strict: true });
const jsonObjectFilter = new PlainObjectItemFilter({ strict: true });
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
		(typeof item === "number" && !Number.isNaN(item)) ||
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
	#arrayRoot;
	#entriesCountMaximum;
	#entriesCountMinimum;
	#keysPattern;
	/**
	 * @constructor
	 * @description Initialize the filter of type of JSON to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty JSON.
	 * @param {boolean} [param0.arrayRoot] Whether type of array as the root of the JSON.
	 * @param {number} [param0.entriesCount] Entries of the JSON.
	 * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the JSON.
	 * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the JSON.
	 * @param {RegExp} [param0.keysPattern] Whether a pattern matchable JSON keys.
	 * @param {boolean} [param0.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @param {boolean} [param0.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
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
		entriesCount = undefinish(entriesCount, aliases.entries);
		entriesCountMaximum = undefinish(entriesCountMaximum, aliases.entriesMaximum, aliases.entriesCountMax, aliases.entriesMax, aliases.maximumEntries, aliases.maxEntries, Infinity);
		entriesCountMinimum = undefinish(entriesCountMinimum, aliases.entriesMinimum, aliases.entriesCountMin, aliases.entriesMin, aliases.minimumEntries, aliases.minEntries, 1);
		strictKeys = undefinish(strictKeys, aliases.keysStrict);
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
		}
		if (typeof arrayRoot !== "boolean" && typeof arrayRoot !== "undefined") {
			throw new TypeError(`Argument \`arrayRoot\` must be type of boolean or undefined!`);
		}
		if (typeof entriesCount === "number" && !Number.isNaN(entriesCount)) {
			if (!(Number.isSafeInteger(entriesCount) && entriesCount >= 0)) {
				throw new RangeError(`Argument \`entriesCount\` must be a number which is integer, positive, and safe!`);
			}
		} else if (typeof entriesCount !== "undefined") {
			throw new TypeError(`Argument \`entriesCount\` must be type of number or undefined!`);
		}
		if (!(typeof entriesCountMaximum === "number" && !Number.isNaN(entriesCountMaximum))) {
			throw new TypeError(`Argument \`entriesCountMaximum\` must be type of number!`);
		}
		if (entriesCountMaximum !== Infinity && !(Number.isSafeInteger(entriesCountMaximum) && entriesCountMaximum >= 0)) {
			throw new RangeError(`Argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
		}
		if (!(typeof entriesCountMinimum === "number" && !Number.isNaN(entriesCountMinimum))) {
			throw new TypeError(`Argument \`entriesCountMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(entriesCountMinimum) && entriesCountMinimum >= 0 && entriesCountMinimum <= entriesCountMaximum)) {
			throw new RangeError(`Argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${entriesCountMaximum}!`);
		}
		if (!(keysPattern instanceof RegExp) && typeof keysPattern !== "undefined") {
			throw new TypeError(`Argument \`keysPattern\` must be type of regular expression or undefined!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean!`);
		}
		if (typeof strictKeys !== "boolean") {
			throw new TypeError(`Argument \`strictKeys\` must be type of boolean!`);
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
	test(item) {
		let itemEntriesLength = Object.entries(item).length;
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
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
	 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
	 * @param {number} [param1.entriesCount] Entries of the JSON.
	 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the JSON.
	 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the JSON.
	 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
	 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
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
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
 * @param {number} [param1.entriesCount] Entries of the JSON.
 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the JSON.
 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
 * @returns {boolean} Determine result.
 */
function isJSON(item, {
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
	return new JSONItemFilter({
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
	isJSON,
	JSONItemFilter
};
