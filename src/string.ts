import { enumResolve, StringCaseEnum, StringLineEnum, type StringCaseEnumKeysType, type StringCaseEnumValuesType, type StringLineEnumKeysType, type StringLineEnumValuesType } from "./internal/enum.js";
import { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase } from "./native/string.js";
interface StringItemFilterOptionsBase {
	/**
	 * @property ascii
	 * @description Whether an ASCII string.
	 * @default undefined
	 */
	ascii?: boolean;
	/**
	 * @property case
	 * @description Case of the string.
	 * @default "any"
	 */
	case: StringCaseEnumValuesType;
	/**
	 * @property lengthMaximum
	 * @description Maximum length of the string.
	 * @default Infinity
	 */
	lengthMaximum: number;
	/**
	 * @property lengthMinimum
	 * @description Minimum length of the string.
	 * @default 1
	 */
	lengthMinimum: number;
	/**
	 * @property line
	 * @description Line of the string.
	 * @default "any"
	 */
	line: StringLineEnumValuesType;
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
}
interface StringItemFilterOptions extends Partial<Omit<StringItemFilterOptionsBase, "case" | "line">> {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty string.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property case
	 * @description Case of the string.
	 * @default "any"
	 */
	case?: StringCaseEnumKeysType;
	/**
	 * @property length
	 * @description Length of the string.
	 * @default undefined
	 */
	length?: number;
	/**
	 * @property line
	 * @description Line of the string.
	 * @default "any"
	 */
	line?: StringLineEnumKeysType;
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
	/**
	 * @property lowerCase
	 * @description Whether a lower case string.
	 * @default undefined
	 * @deprecated Replaced by property `case` with value `"lower"`.
	 */
	lowerCase?: boolean;
	/**
	 * @property multipleLine
	 * @description Whether a multiple line string.
	 * @deprecated Replaced by property `line` with value `"multiple"`.
	 * @default undefined
	 */
	multipleLine?: boolean;
	/**
	 * @property singleLine
	 * @description Whether a single line string.
	 * @default undefined
	 * @deprecated Replaced by property `line` with value `"single"`.
	 */
	singleLine?: boolean;
	/**
	 * @property upperCase
	 * @description Whether an upper case string.
	 * @default undefined
	 * @deprecated Replaced by property `case` with value `"upper"`.
	 */
	upperCase?: boolean;
	/**
	 * @alias multipleLine
	 * @deprecated Replaced by property `line` with value `"multiple"`.
	 */
	multiline?: boolean;
	/**
	 * @alias multipleLine
	 * @deprecated Replaced by property `line` with value `"multiple"`.
	 */
	multiLine?: boolean;
}
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
class StringItemFilter {
	#ascii?: boolean;
	#case: StringCaseEnumValuesType = "any";
	#lengthMaximum = Infinity;
	#lengthMinimum = 1;
	#line: StringLineEnumValuesType = "any";
	#pattern?: RegExp;
	#preTrim: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of string to determine item.
	 * @param {StringItemFilter | StringItemFilterOptions} [options] Options
	 */
	constructor(options?: StringItemFilter | StringItemFilterOptions) {
		if (options instanceof StringItemFilter) {
			this.#ascii = options.#ascii;
			this.#case = options.#case;
			this.#lengthMaximum = options.#lengthMaximum;
			this.#lengthMinimum = options.#lengthMinimum;
			this.#line = options.#line;
			this.#pattern = options.#pattern;
			this.#preTrim = options.#preTrim;
		} else if (typeof options !== "undefined") {
			options.length ??= options.characters;
			options.lengthMaximum ??= options.lengthMax ?? options.charactersMaximum ?? options.charactersMax ?? options.maximumLength ?? options.maxLength ?? options.maximumCharacters ?? options.maxCharacters;
			options.lengthMinimum ??= options.lengthMin ?? options.charactersMinimum ?? options.charactersMin ?? options.minimumLength ?? options.minLength ?? options.minimumCharacters ?? options.minCharacters;
			options.multipleLine ??= options.multiLine ?? options.multiline;
			for (let option of ["lowerCase", "multipleLine", "singleLine", "upperCase"]) {
				if (options[option] === true) {
					this[option]();
				}
			}
			for (let option of ["ascii", "case", "lengthMaximum", "lengthMinimum", "line", "pattern", "preTrim", "allowEmpty", "length"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {StringItemFilter}
	 */
	get clone(): StringItemFilter {
		return new StringItemFilter(this);
	}
	/**
	 * @method status
	 * @description Status of this filter.
	 * @returns {StringItemFilterOptionsBase}
	 */
	get status(): StringItemFilterOptionsBase {
		return {
			ascii: this.#ascii,
			case: this.#case,
			lengthMaximum: this.#lengthMaximum,
			lengthMinimum: this.#lengthMinimum,
			line: this.#line,
			pattern: this.#pattern,
			preTrim: this.#preTrim
		};
	}
	/**
	 * @method allowEmpty
	 * @description Whether to allow an empty string.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowEmpty(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
		}
		this.#lengthMinimum = value ? 0 : 1;
		return this;
	}
	/**
	 * @method ascii
	 * @description Whether an ASCII string.
	 * @param {boolean} [value]
	 * @returns {this}
	 */
	ascii(value?: boolean): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`ascii\` must be type of boolean or undefined!`);
		}
		this.#ascii = value;
		return this;
	}
	/**
	 * @method case
	 * @description Case of the string.
	 * @param {StringCaseEnumKeysType} value
	 * @returns {this}
	 */
	case(value: StringCaseEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`case\` must be type of string!`);
		}
		let valueResolve: StringCaseEnumValuesType | undefined = enumResolve<StringCaseEnumKeysType, StringCaseEnumValuesType>(StringCaseEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`case\` must be match either of these values: "${Object.keys(StringCaseEnum).sort().join("\", \"")}"`);
		}
		this.#case = valueResolve;
		return this;
	}
	/**
	 * @method length
	 * @description Length of the string.
	 * @param {number} value
	 * @returns {this}
	 */
	length(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`length\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0)) {
			throw new RangeError(`Filter argument \`length\` must be a number which is integer, positive, and safe!`);
		}
		this.#lengthMaximum = value;
		this.#lengthMinimum = value;
		return this;
	}
	/**
	 * @method lengthMaximum
	 * @description Maximum length of the string.
	 * @param {number} value
	 * @returns {this}
	 */
	lengthMaximum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`lengthMaximum\` must be type of number!`);
		}
		if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#lengthMinimum)) {
			throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#lengthMinimum}!`);
		}
		this.#lengthMaximum = value;
		return this;
	}
	/**
	 * @method lengthMinimum
	 * @description Minimum length of the string.
	 * @param {number} value
	 * @returns {this}
	 */
	lengthMinimum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`lengthMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#lengthMaximum)) {
			throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${this.#lengthMaximum}!`);
		}
		this.#lengthMinimum = value;
		return this;
	}
	/**
	 * @method line
	 * @description Line of the string.
	 * @param {StringLineEnumKeysType} value
	 * @returns {this}
	 */
	line(value: StringLineEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`line\` must be type of string!`);
		}
		let valueResolve: StringLineEnumValuesType | undefined = enumResolve<StringLineEnumKeysType, StringLineEnumValuesType>(StringLineEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`line\` must be match either of these values: "${Object.keys(StringLineEnum).sort().join("\", \"")}"`);
		}
		this.#line = valueResolve;
		return this;
	}
	/**
	 * @method pattern
	 * @description Whether a pattern matchable string.
	 * @param {RegExp} [value]
	 * @returns {this}
	 */
	pattern(value?: RegExp): this {
		if (!(value instanceof RegExp) && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`pattern\` must be instance of regular expression, or type of undefined!`);
		}
		this.#pattern = value;
		return this;
	}
	/**
	 * @method preTrim
	 * @description Whether to trim the string internally before determine.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	preTrim(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`preTrim\` must be type of boolean!`);
		}
		this.#preTrim = value;
		return this;
	}
	/** @alias length */characters = this.length;
	/** @alias lengthMaximum */charactersMax = this.lengthMaximum;
	/** @alias lengthMaximum */charactersMaximum = this.lengthMaximum;
	/** @alias lengthMaximum */lengthMax = this.lengthMaximum;
	/** @alias lengthMaximum */maxCharacters = this.lengthMaximum;
	/** @alias lengthMaximum */maximumCharacters = this.lengthMaximum;
	/** @alias lengthMaximum */maximumLength = this.lengthMaximum;
	/** @alias lengthMaximum */maxLength = this.lengthMaximum;
	/** @alias lengthMinimum */charactersMin = this.lengthMinimum;
	/** @alias lengthMinimum */charactersMinimum = this.lengthMinimum;
	/** @alias lengthMinimum */lengthMin = this.lengthMinimum;
	/** @alias lengthMinimum */minCharacters = this.lengthMinimum;
	/** @alias lengthMinimum */minimumCharacters = this.lengthMinimum;
	/** @alias lengthMinimum */minimumLength = this.lengthMinimum;
	/** @alias lengthMinimum */minLength = this.lengthMinimum;
	/**
	 * @method lowerCase
	 * @description Set to allow a lower case string.
	 * @returns {this}
	 */
	lowerCase() {
		return this.case("lower");
	}
	/**
	 * @method multipleLine
	 * @description Set to allow a multiple line string.
	 * @returns {this}
	 */
	multipleLine() {
		return this.line("multiple");
	}
	/**
	 * @method singleLine
	 * @description Set to allow a single line string.
	 * @returns {this}
	 */
	singleLine() {
		return this.line("single");
	}
	/** @alias multipleLine */multiline = this.multipleLine;
	/** @alias multipleLine */multiLine = this.multipleLine;
	/**
	 * @method upperCase
	 * @description Set to allow an upper case string.
	 * @returns {this}
	 */
	upperCase() {
		return this.case("upper");
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
			(this.#case === "lower" && !isStringLowerCase(itemRaw)) ||
			(this.#case === "upper" && !isStringUpperCase(itemRaw)) ||
			this.#lengthMaximum < itemRaw.length ||
			itemRaw.length < this.#lengthMinimum ||
			(this.#pattern instanceof RegExp && !this.#pattern.test(itemRaw)) ||
			(this.#line === "multiple" && !isStringMultipleLine(itemRaw)) ||
			(this.#line === "single" && !isStringSingleLine(itemRaw))
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
	type StringItemFilterOptions,
	type StringItemFilterOptionsBase
};
