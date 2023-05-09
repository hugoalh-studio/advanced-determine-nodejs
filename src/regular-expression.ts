interface RegularExpressionItemFilterOptionsBase {
	/**
	 * @property dotAll
	 * @description Whether a dot-all regular expression.
	 * @default undefined
	 */
	dotAll?: boolean;
	/**
	 * @property exactly
	 * @description Whether an exactly regular expression.
	 * @default undefined
	 */
	exactly?: boolean;
	/**
	 * @property global
	 * @description Whether a global regular expression.
	 * @default undefined
	 */
	global?: boolean;
	/**
	 * @property ignoreCase
	 * @description Whether a case insensitive regular expression.
	 * @default undefined
	 */
	ignoreCase?: boolean;
	/**
	 * @property multipleLine
	 * @description Whether a multiple line regular expression.
	 * @default undefined
	 */
	multipleLine?: boolean;
	/**
	 * @property sticky
	 * @description Whether a sticky regular expression.
	 * @default undefined
	 */
	sticky?: boolean;
	/**
	 * @property unicode
	 * @description Whether an unicode regular expression.
	 * @default undefined
	 */
	unicode?: boolean;
}
interface RegularExpressionItemFilterOptions extends Partial<RegularExpressionItemFilterOptionsBase> {
	/** @alias exactly */exact?: boolean;
	/** @alias ignoreCase */caseInsensitive?: boolean;
	/** @alias multipleLine */multiline?: boolean;
	/** @alias multipleLine */multiLine?: boolean;
}
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
	#dotAll?: boolean;
	#exactly?: boolean;
	#global?: boolean;
	#ignoreCase?: boolean;
	#multipleLine?: boolean;
	#sticky?: boolean;
	#unicode?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of regular expression to determine item.
	 * @param {RegularExpressionItemFilter | RegularExpressionItemFilterOptions} [options] Options.
	 */
	constructor(options?: RegularExpressionItemFilter | RegularExpressionItemFilterOptions) {
		if (options instanceof RegularExpressionItemFilter) {
			this.#dotAll = options.#dotAll;
			this.#exactly = options.#exactly;
			this.#global = options.#global;
			this.#ignoreCase = options.#ignoreCase;
			this.#multipleLine = options.#multipleLine;
			this.#sticky = options.#sticky;
			this.#unicode = options.#unicode;
		} else if (typeof options !== "undefined") {
			options.exactly ??= options.exact;
			options.ignoreCase ??= options.caseInsensitive;
			options.multipleLine ??= options.multiLine ?? options.multiline;
			for (let option of ["dotAll", "exactly", "global", "ignoreCase", "multipleLine", "sticky", "unicode"]) {
				if (typeof option !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {RegularExpressionItemFilter} Another instance of this filter.
	 */
	get clone(): RegularExpressionItemFilter {
		return new RegularExpressionItemFilter(this);
	}
	/**
	 * @method status
	 * @description Get the status of this filter.
	 * @returns {RegularExpressionItemFilterOptionsBase} Status of this filter.
	 */
	get status(): RegularExpressionItemFilterOptionsBase {
		return {
			dotAll: this.#dotAll,
			exactly: this.#exactly,
			global: this.#global,
			ignoreCase: this.#ignoreCase,
			multipleLine: this.#multipleLine,
			sticky: this.#sticky,
			unicode: this.#unicode
		};
	}
	/**
	 * @method dotAll
	 * @description Whether a dot-all regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	dotAll(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`dotAll\` must be type of string or undefined!`);
		}
		this.#dotAll = value;
		return this;
	}
	/**
	 * @method exactly
	 * @description Whether an exactly regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	exactly(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`exactly\` must be type of string or undefined!`);
		}
		this.#exactly = value;
		return this;
	}
	/**
	 * @method global
	 * @description Whether a global regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	global(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`global\` must be type of string or undefined!`);
		}
		this.#global = value;
		return this;
	}
	/**
	 * @method ignoreCase
	 * @description Whether a case insensitive regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	ignoreCase(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`ignoreCase\` must be type of string or undefined!`);
		}
		this.#ignoreCase = value;
		return this;
	}
	/**
	 * @method multipleLine
	 * @description Whether a multiple line regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	multipleLine(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`multipleLine\` must be type of string or undefined!`);
		}
		this.#multipleLine = value;
		return this;
	}
	/**
	 * @method sticky
	 * @description Whether a sticky regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	sticky(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`sticky\` must be type of string or undefined!`);
		}
		this.#sticky = value;
		return this;
	}
	/**
	 * @method unicode
	 * @description Whether an unicode regular expression.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	unicode(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`unicode\` must be type of string or undefined!`);
		}
		this.#unicode = value;
		return this;
	}
	/** @alias exactly */exact = this.exactly;
	/** @alias ignoreCase */caseInsensitive = this.ignoreCase;
	/** @alias multipleLine */multiline = this.multipleLine;
	/** @alias multipleLine */multiLine = this.multipleLine;
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of regular expression.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		if (
			!(item instanceof RegExp) ||
			(this.#dotAll === false && item.dotAll) ||
			(this.#dotAll === true && !item.dotAll) ||
			(this.#exactly === false && item.source.startsWith("^") && item.source.endsWith("$")) ||
			(this.#exactly === true && (
				!item.source.startsWith("^") ||
				!item.source.endsWith("$")
			)) ||
			(this.#global === false && item.global) ||
			(this.#global === true && !item.global) ||
			(this.#ignoreCase === false && item.ignoreCase) ||
			(this.#ignoreCase === true && !item.ignoreCase) ||
			(this.#multipleLine === false && item.multiline) ||
			(this.#multipleLine === true && !item.multiline) ||
			(this.#sticky === false && item.sticky) ||
			(this.#sticky === true && !item.sticky) ||
			(this.#unicode === false && item.unicode) ||
			(this.#unicode === true && !item.unicode)
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of regular expression.
	 * @param {unknown} item Item that need to determine.
	 * @param {RegularExpressionItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: RegularExpressionItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isRegularExpression
 * @description Determine item with the filter of type of regular expression.
 * @param {unknown} item Item that need to determine.
 * @param {RegularExpressionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item: unknown, options: RegularExpressionItemFilterOptions = {}): boolean {
	return new RegularExpressionItemFilter(options).test(item);
}
export {
	isRegularExpression,
	isRegularExpression as isRegEx,
	isRegularExpression as isRegExp,
	RegularExpressionItemFilter,
	RegularExpressionItemFilter as RegExItemFilter,
	RegularExpressionItemFilter as RegExpItemFilter,
	type RegularExpressionItemFilterOptions,
	type RegularExpressionItemFilterOptions as RegExItemFilterOptions,
	type RegularExpressionItemFilterOptions as RegExpItemFilterOptions,
	type RegularExpressionItemFilterOptionsBase,
	type RegularExpressionItemFilterOptionsBase as RegExItemFilterOptionsBase,
	type RegularExpressionItemFilterOptionsBase as RegExpItemFilterOptionsBase
};
