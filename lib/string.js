import undefinish from "@hugoalh/undefinish";
import { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase } from "./native/string.js";
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
class StringItemFilter {
	#ascii;
	#lengthMaximum;
	#lengthMinimum;
	#lowerCase;
	#multipleLine;
	#pattern;
	#preTrim;
	#singleLine;
	#upperCase;
	/**
	 * @constructor
	 * @description Initialize the filter of type of string to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty string.
	 * @param {boolean} [param0.ascii] Whether an ASCII string.
	 * @param {number} [param0.length] Length of the string.
	 * @param {number} [param0.lengthMaximum=Infinity] Maximum length of the string.
	 * @param {number} [param0.lengthMinimum=1] Minimum length of the string.
	 * @param {boolean} [param0.lowerCase] Whether a lower case string.
	 * @param {boolean} [param0.multipleLine] Whether a multiple lines string.
	 * @param {RegExp} [param0.pattern] Whether a pattern matchable string.
	 * @param {boolean} [param0.preTrim=false] Whether to trim the string internally before determine.
	 * @param {boolean} [param0.singleLine] Whether a single line string.
	 * @param {boolean} [param0.upperCase] Whether an upper case string.
	 */
	constructor({
		allowEmpty = false,
		ascii,
		length,
		lengthMaximum,
		lengthMinimum,
		lowerCase,
		multipleLine,
		pattern,
		preTrim = false,
		singleLine,
		upperCase,
		...aliases
	} = {}) {
		length = undefinish(length, aliases.characters);
		lengthMaximum = undefinish(lengthMaximum, aliases.lengthMax, aliases.charactersMaximum, aliases.charactersMax, aliases.maximumLength, aliases.maxLength, aliases.maximumCharacters, aliases.maxCharacters, Infinity);
		lengthMinimum = undefinish(lengthMinimum, aliases.lengthMin, aliases.charactersMinimum, aliases.charactersMin, aliases.minimumLength, aliases.minLength, aliases.minimumCharacters, aliases.minCharacters, 1);
		multipleLine = undefinish(multipleLine, aliases.multiLine, aliases.multiline);
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
		}
		if (typeof ascii !== "boolean" && typeof ascii !== "undefined") {
			throw new TypeError(`Argument \`ascii\` must be type of boolean or undefined!`);
		}
		if (!(typeof length === "number" && Number.isSafeInteger(length) && length >= 0) && typeof length !== "undefined") {
			throw new TypeError(`Argument \`length\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (lengthMaximum !== Infinity && !(typeof lengthMaximum === "number" && Number.isSafeInteger(lengthMaximum) && lengthMaximum >= 0)) {
			throw new TypeError(`Argument \`lengthMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!(typeof lengthMinimum === "number" && Number.isSafeInteger(lengthMinimum) && lengthMinimum >= 0 && lengthMinimum <= lengthMaximum)) {
			throw new TypeError(`Argument \`lengthMinimum\` must be type of number (integer, positive, and safe) and <= ${lengthMaximum}!`);
		}
		if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
			throw new TypeError(`Argument \`lowerCase\` must be type of boolean or undefined!`);
		}
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`multipleLine\` must be type of boolean or undefined!`);
		}
		if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
			throw new TypeError(`Argument \`pattern\` must be type of regular expression or undefined!`);
		}
		if (typeof preTrim !== "boolean") {
			throw new TypeError(`Argument \`preTrim\` must be type of boolean!`);
		}
		if (typeof singleLine !== "boolean" && typeof singleLine !== "undefined") {
			throw new TypeError(`Argument \`singleLine\` must be type of boolean or undefined!`);
		}
		if (typeof upperCase !== "boolean" && typeof upperCase !== "undefined") {
			throw new TypeError(`Argument \`upperCase\` must be type of boolean or undefined!`);
		}
		if (typeof length === "number") {
			this.#lengthMaximum = length;
			this.#lengthMinimum = length;
		} else {
			this.#lengthMaximum = lengthMaximum;
			this.#lengthMinimum = allowEmpty ? 0 : lengthMinimum;
		}
		this.#ascii = ascii;
		this.#lowerCase = lowerCase;
		this.#multipleLine = multipleLine;
		this.#pattern = pattern;
		this.#preTrim = preTrim;
		this.#singleLine = singleLine;
		this.#upperCase = upperCase;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of string.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (typeof item !== "string") {
			return false;
		}
		let itemRaw = this.#preTrim ? item.trim() : item;
		if (
			(this.#ascii === false && isStringASCII(itemRaw)) ||
			(this.#ascii === true && !isStringASCII(itemRaw)) ||
			this.#lengthMaximum < itemRaw.length ||
			itemRaw.length < this.#lengthMinimum ||
			(this.#pattern instanceof RegExp && !this.#pattern.test(itemRaw)) ||
			((
				this.#lowerCase === true ||
				this.#upperCase === false
			) && !isStringLowerCase(itemRaw)) ||
			((
				this.#upperCase === true ||
				this.#lowerCase === false
			) && !isStringUpperCase(itemRaw)) ||
			((
				this.#multipleLine === true ||
				this.#singleLine === false
			) && !isStringMultipleLine(itemRaw)) ||
			((
				this.#singleLine === true ||
				this.#multipleLine === false
			) && !isStringSingleLine(itemRaw))
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of string.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty string.
	 * @param {boolean} [param1.ascii] Whether an ASCII string.
	 * @param {number} [param1.length] Length of the string.
	 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the string.
	 * @param {number} [param1.lengthMinimum=1] Minimum length of the string.
	 * @param {boolean} [param1.lowerCase] Whether a lower case string.
	 * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
	 * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
	 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
	 * @param {boolean} [param1.singleLine] Whether a single line string.
	 * @param {boolean} [param1.upperCase] Whether an upper case string.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		ascii,
		length,
		lengthMaximum,
		lengthMinimum,
		lowerCase,
		multipleLine,
		pattern,
		preTrim = false,
		singleLine,
		upperCase,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			ascii,
			length,
			lengthMaximum,
			lengthMinimum,
			lowerCase,
			multipleLine,
			pattern,
			preTrim,
			singleLine,
			upperCase,
			...aliases
		}).test(item);
	}
}
/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty string.
 * @param {boolean} [param1.ascii] Whether an ASCII string.
 * @param {number} [param1.length] Length of the string.
 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the string.
 * @param {number} [param1.lengthMinimum=1] Minimum length of the string.
 * @param {boolean} [param1.lowerCase] Whether a lower case string.
 * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
 * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
 * @param {boolean} [param1.singleLine] Whether a single line string.
 * @param {boolean} [param1.upperCase] Whether an upper case string.
 * @returns {boolean} Determine result.
 */
function isString(item, {
	allowEmpty = false,
	ascii,
	length,
	lengthMaximum,
	lengthMinimum,
	lowerCase,
	multipleLine,
	pattern,
	preTrim = false,
	singleLine,
	upperCase,
	...aliases
} = {}) {
	return new StringItemFilter({
		allowEmpty,
		ascii,
		length,
		lengthMaximum,
		lengthMinimum,
		lowerCase,
		multipleLine,
		pattern,
		preTrim,
		singleLine,
		upperCase,
		...aliases
	}).test(item);
}
export {
	isString,
	StringItemFilter
};
