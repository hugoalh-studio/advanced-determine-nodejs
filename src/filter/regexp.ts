interface RegExpFilterStatus {
	/**
	 * @property dotAll
	 * @description Whether a dot-all `RegExp`.
	 * @default undefined
	 */
	dotAll?: boolean;
	/**
	 * @property exactly
	 * @description Whether an exactly `RegExp`.
	 * @default undefined
	 */
	exactly?: boolean;
	/**
	 * @property global
	 * @description Whether a global `RegExp`.
	 * @default undefined
	 */
	global?: boolean;
	/**
	 * @property ignoreCase
	 * @description Whether a case insensitive `RegExp`.
	 * @default undefined
	 */
	ignoreCase?: boolean;
	/**
	 * @property multipleLine
	 * @description Whether a multiple line `RegExp`.
	 * @default undefined
	 */
	multipleLine?: boolean;
	/**
	 * @property sticky
	 * @description Whether a sticky `RegExp`.
	 * @default undefined
	 */
	sticky?: boolean;
	/**
	 * @property unicode
	 * @description Whether an unicode `RegExp`.
	 * @default undefined
	 */
	unicode?: boolean;
}
interface RegExpFilterOptions extends Partial<RegExpFilterStatus> {
	/** @alias exactly */exact?: boolean;
	/** @alias ignoreCase */caseInsensitive?: boolean;
	/** @alias multipleLine */multiline?: boolean;
	/** @alias multipleLine */multiLine?: boolean;
}
/**
 * @class RegExpFilter
 * @description Filter for `RegExp`.
 */
class RegExpFilter {
	#dotAll?: boolean;
	#exactly?: boolean;
	#global?: boolean;
	#ignoreCase?: boolean;
	#multipleLine?: boolean;
	#sticky?: boolean;
	#unicode?: boolean;
	/**
	 * @constructor
	 * @description Initialize the `RegExp` filter.
	 * @param {RegExpFilter | RegExpFilterOptions} [options] Options.
	 */
	constructor(options?: RegExpFilter | RegExpFilterOptions) {
		if (options instanceof RegExpFilter) {
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
	 * @description Clone this `RegExp` filter for reuse.
	 * @returns {RegExpFilter} Another instance of this `RegExp` filter.
	 */
	get clone(): RegExpFilter {
		return new RegExpFilter(this);
	}
	/**
	 * @method status
	 * @description Get the status of this `RegExp` filter.
	 * @returns {RegExpFilterStatus} Status of this `RegExp` filter.
	 */
	get status(): RegExpFilterStatus {
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
	 * @description Whether a dot-all `RegExp`.
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
	 * @description Whether an exactly `RegExp`.
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
	 * @description Whether a global `RegExp`.
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
	 * @description Whether a case insensitive `RegExp`.
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
	 * @description Whether a multiple line `RegExp`.
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
	 * @description Whether a sticky `RegExp`.
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
	 * @description Whether an unicode `RegExp`.
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
	 * @description Determine item with the configured `RegExp` filter.
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
	 * @description Determine item with the `RegExp` filter.
	 * @param {unknown} item Item that need to determine.
	 * @param {RegExpFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: RegExpFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function filterRegExp
 * @description Determine item with the `RegExp` filter.
 * @param {unknown} item Item that need to determine.
 * @param {RegExpFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterRegExp(item: unknown, options: RegExpFilterOptions = {}): boolean {
	return new RegExpFilter(options).test(item);
}
export {
	filterRegExp,
	filterRegExp as filterRegEx,
	filterRegExp as filterRegularExpression,
	RegExpFilter,
	RegExpFilter as RegExFilter,
	RegExpFilter as RegularExpressionFilter,
	type RegExpFilterOptions,
	type RegExpFilterOptions as RegExFilterOptions,
	type RegExpFilterOptions as RegularExpressionFilterOptions,
	type RegExpFilterStatus,
	type RegExpFilterStatus as RegExFilterStatus,
	type RegExpFilterStatus as RegularExpressionFilterStatus
};
