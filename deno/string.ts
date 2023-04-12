import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.ts"
const newLineRegExp = /[\n\r]/u;
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
		if (!checkNumberIPS(length) && typeof length !== "undefined") {
			throw new TypeError(`Argument \`options.length\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (lengthMaximum !== Infinity && !checkNumberIPS(lengthMaximum)) {
			throw new TypeError(`Argument \`options.lengthMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(lengthMinimum, lengthMaximum)) {
			throw new TypeError(`Argument \`options.lengthMinimum\` must be type of number (integer, positive, and safe) and <= ${lengthMaximum}!`);
		}
		if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
			throw new TypeError(`Argument \`options.lowerCase\` must be type of boolean or undefined!`);
		}
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`options.multipleLine\` must be type of boolean or undefined!`);
		}
		if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
			throw new TypeError(`Argument \`options.pattern\` must be type of regular expression or undefined!`);
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
		if (typeof this.#ascii === "boolean") {
			for (let character of itemRaw) {
				let charCode: number = character.charCodeAt(0);
				if (
					(this.#ascii === false && charCode < 128) ||
					(this.#ascii === true && charCode > 127)
				) {
					return false;
				}
			}
		}
		if (
			this.#lengthMaximum < itemRaw.length ||
			itemRaw.length < this.#lengthMinimum ||
			(this.#pattern instanceof RegExp && !this.#pattern.test(itemRaw)) ||
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
			) && !newLineRegExp.test(itemRaw)) ||
			((
				this.#singleLine === true ||
				this.#multipleLine === false
			) && newLineRegExp.test(itemRaw))
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
