import { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase } from "./native/string.js";
interface StringItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty string.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property ascii
	 * @description Whether an ASCII string.
	 * @default undefined
	 */
	ascii?: boolean;
	/**
	 * @property length
	 * @description Length of the string.
	 * @default undefined
	 */
	length?: number;
	/**
	 * @property lengthMaximum
	 * @description Maximum length of the string.
	 * @default Infinity
	 */
	lengthMaximum?: number;
	/**
	 * @property lengthMinimum
	 * @description Minimum length of the string.
	 * @default 1
	 */
	lengthMinimum?: number;
	/**
	 * @property lowerCase
	 * @description Whether a lower case string.
	 * @default undefined
	 */
	lowerCase?: boolean;
	/**
	 * @property multipleLine
	 * @description Whether a multiple line string.
	 * @default undefined
	 */
	multipleLine?: boolean;
	/**
	 * @property pattern
	 * @description Whether a pattern matchable string.
	 * @default undefined
	 */
	pattern?: RegExp;
	/**
	 * @property preTrim
	 * @description Whether to trim the string internally before determine.
	 * @default false
	 */
	preTrim?: boolean;
	/**
	 * @property singleLine
	 * @description Whether a single line string.
	 * @default undefined
	 */
	singleLine?: boolean;
	/**
	 * @property upperCase
	 * @description Whether an upper case string.
	 * @default undefined
	 */
	upperCase?: boolean;
	/** @alias length */characters?: number;
	/** @alias lengthMaximum */charactersMax?: number;
	/** @alias lengthMaximum */charactersMaximum?: number;
	/** @alias lengthMaximum */lengthMax?: number;
	/** @alias lengthMaximum */maxCharacters?: number;
	/** @alias lengthMaximum */maximumCharacters?: number;
	/** @alias lengthMaximum */maximumLength?: number;
	/** @alias lengthMaximum */maxLength?: number;
	/** @alias lengthMinimum */charactersMin?: number;
	/** @alias lengthMinimum */charactersMinimum?: number;
	/** @alias lengthMinimum */lengthMin?: number;
	/** @alias lengthMinimum */minCharacters?: number;
	/** @alias lengthMinimum */minimumCharacters?: number;
	/** @alias lengthMinimum */minimumLength?: number;
	/** @alias lengthMinimum */minLength?: number;
	/** @alias multipleLine */multiline?: boolean;
	/** @alias multipleLine */multiLine?: boolean;
}
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
class StringItemFilter {
	#ascii?: boolean;
	#lengthMaximum: number;
	#lengthMinimum: number;
	#lowerCase?: boolean;
	#multipleLine?: boolean;
	#pattern?: RegExp;
	#preTrim: boolean;
	#singleLine?: boolean;
	#upperCase?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of string to determine item.
	 * @param {StringItemFilterOptions} [options={}] Options
	 */
	constructor(options: StringItemFilterOptions = {}) {
		let {
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
		} = options;
		length ??= aliases.characters;
		lengthMaximum ??= aliases.lengthMax ?? aliases.charactersMaximum ?? aliases.charactersMax ?? aliases.maximumLength ?? aliases.maxLength ?? aliases.maximumCharacters ?? aliases.maxCharacters ?? Infinity;
		lengthMinimum ??= aliases.lengthMin ?? aliases.charactersMinimum ?? aliases.charactersMin ?? aliases.minimumLength ?? aliases.minLength ?? aliases.minimumCharacters ?? aliases.minCharacters ?? 1;
		multipleLine ??= aliases.multiLine ?? aliases.multiline;
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
		}
		if (typeof ascii !== "boolean" && typeof ascii !== "undefined") {
			throw new TypeError(`Argument \`options.ascii\` must be type of boolean or undefined!`);
		}
		if (typeof length === "number" && !Number.isNaN(length)) {
			if (!(Number.isSafeInteger(length) && length >= 0)) {
				throw new RangeError(`Argument \`options.length\` must be a number which is integer, positive, and safe!`);
			}
		} else if (typeof length !== "undefined") {
			throw new TypeError(`Argument \`options.length\` must be type of number or undefined!`);
		}
		if (!(typeof lengthMaximum === "number" && !Number.isNaN(lengthMaximum))) {
			throw new TypeError(`Argument \`options.lengthMaximum\` must be type of number!`);
		}
		if (lengthMaximum !== Infinity && !(Number.isSafeInteger(lengthMaximum) && lengthMaximum >= 0)) {
			throw new RangeError(`Argument \`options.lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
		}
		if (!(typeof lengthMinimum === "number" && !Number.isNaN(lengthMinimum))) {
			throw new TypeError(`Argument \`options.lengthMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(lengthMinimum) && lengthMinimum >= 0 && lengthMinimum <= lengthMaximum)) {
			throw new RangeError(`Argument \`options.lengthMinimum\` must be a number which is integer, positive, safe, and <= ${lengthMaximum}!`);
		}
		if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
			throw new TypeError(`Argument \`options.lowerCase\` must be type of boolean or undefined!`);
		}
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`options.multipleLine\` must be type of boolean or undefined!`);
		}
		if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
			throw new TypeError(`Argument \`options.pattern\` must be instance of regular expression, or type of undefined!`);
		}
		if (typeof preTrim !== "boolean") {
			throw new TypeError(`Argument \`options.preTrim\` must be type of boolean!`);
		}
		if (typeof singleLine !== "boolean" && typeof singleLine !== "undefined") {
			throw new TypeError(`Argument \`options.singleLine\` must be type of boolean or undefined!`);
		}
		if (typeof upperCase !== "boolean" && typeof upperCase !== "undefined") {
			throw new TypeError(`Argument \`options.upperCase\` must be type of boolean or undefined!`);
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
	test(item: unknown): boolean {
		if (typeof item !== "string") {
			return false;
		}
		let itemRaw: string = this.#preTrim ? item.trim() : item;
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
	 * @param {StringItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: StringItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {StringItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isString(item: unknown, options: StringItemFilterOptions = {}): boolean {
	return new StringItemFilter(options).test(item);
}
export {
	isString,
	StringItemFilter,
	type StringItemFilterOptions
};
