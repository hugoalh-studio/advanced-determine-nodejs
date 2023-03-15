import { checkNumberIPS, checkNumberIPSWithMaximum } from "../internal/check-item.js";
import undefinish from "@hugoalh/undefinish";
const newLineRegExp = /[\n\r]/gu;
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
class StringItemFilter {
	#ascii;
	#lowerCase;
	#maximumLength;
	#minimumLength;
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
	 * @param {boolean} [param0.lowerCase] Whether a lower case string.
	 * @param {number} [param0.maximumLength=Infinity] Maximum length of the string.
	 * @param {number} [param0.minimumLength=1] Minimum length of the string.
	 * @param {boolean} [param0.multipleLine] Whether a multiple lines string.
	 * @param {RegExp} [param0.pattern] Whether a pattern matchable string.
	 * @param {boolean} [param0.preTrim=false] Whether to trim the string internally before determine.
	 * @param {boolean} [param0.singleLine] Whether a single line string.
	 * @param {boolean} [param0.upperCase] Whether an upper case string.
	 */
	constructor({
		allowEmpty = false,
		ascii,
		lowerCase,
		maximumLength,
		minimumLength,
		multipleLine,
		pattern,
		preTrim = false,
		singleLine,
		upperCase,
		...aliases
	} = {}) {
		if (typeof allowEmpty !== "boolean" && typeof allowEmpty !== "undefined") {
			throw new TypeError(`Argument \`empty\` must be type of boolean or undefined.`);
		}
		if (typeof ascii !== "boolean" && typeof ascii !== "undefined") {
			throw new TypeError(`Argument \`ascii\` must be type of boolean or undefined.`);
		}
		if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
			throw new TypeError(`Argument \`lowerCase\` must be type of boolean or undefined.`);
		}
		maximumLength = undefinish(maximumLength, aliases.maxLength, aliases.maximumCharacters, aliases.maxCharacters, Infinity);
		if (maximumLength !== Infinity && !checkNumberIPS(maximumLength)) {
			throw new TypeError(`Argument \`maximumLength\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
		}
		minimumLength = undefinish(minimumLength, aliases.minLength, aliases.minimumCharacters, aliases.minCharacters, 1);
		if (!checkNumberIPSWithMaximum(minimumLength, maximumLength)) {
			throw new TypeError(`Argument \`minimumLength\` must be type of number (integer, positive, and safe) and <= ${maximumLength}.`);
		}
		multipleLine = undefinish(multipleLine, aliases.multipleLines, aliases.multiLine, aliases.multiLines, aliases.multiline, aliases.multilines);
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`multipleLine\` must be type of boolean or undefined.`);
		}
		if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
			throw new TypeError(`Argument \`pattern\` must be type of regular expression or undefined.`);
		}
		if (typeof preTrim !== "boolean") {
			throw new TypeError(`Argument \`preTrim\` must be type of boolean.`);
		}
		if (typeof singleLine !== "boolean" && typeof singleLine !== "undefined") {
			throw new TypeError(`Argument \`singleLine\` must be type of boolean or undefined.`);
		}
		if (typeof upperCase !== "boolean" && typeof upperCase !== "undefined") {
			throw new TypeError(`Argument \`upperCase\` must be type of boolean or undefined.`);
		}
		this.#ascii = ascii;
		this.#lowerCase = lowerCase;
		this.#maximumLength = maximumLength;
		this.#minimumLength = allowEmpty ? 0 : minimumLength;
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
		if (typeof this.#ascii === "boolean") {
			for (let character of itemRaw) {
				let charCode = character.charCodeAt(0);
				if (
					(this.#ascii === false && charCode < 128) ||
					(this.#ascii === true && charCode > 127)
				) {
					return false;
				}
			}
		}
		if (
			this.#maximumLength < itemRaw.length ||
			itemRaw.length < this.#minimumLength ||
			(this.#pattern instanceof RegExp && itemRaw.search(this.#pattern) === -1) ||
			((
				this.#lowerCase === true ||
				this.#upperCase === false
			) && itemRaw !== itemRaw.toLowerCase()) ||
			((
				this.#upperCase === true ||
				this.#lowerCase === false
			) && itemRaw !== itemRaw.toUpperCase()) ||
			((
				this.#multipleLine === true ||
				this.#singleLine === false
			) && itemRaw.search(newLineRegExp) === -1) ||
			((
				this.#singleLine === true ||
				this.#multipleLine === false
			) && itemRaw.search(newLineRegExp) !== -1)
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
	 * @param {boolean} [param1.lowerCase] Whether a lower case string.
	 * @param {number} [param1.maximumLength=Infinity] Maximum length of the string.
	 * @param {number} [param1.minimumLength=1] Minimum length of the string.
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
		lowerCase,
		maximumLength,
		minimumLength,
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
			lowerCase,
			maximumLength,
			minimumLength,
			multipleLine,
			pattern,
			preTrim,
			singleLine,
			upperCase,
			...aliases
		}).test(item);
	}
}
export {
	StringItemFilter
};
