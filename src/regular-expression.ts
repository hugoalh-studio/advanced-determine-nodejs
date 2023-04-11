interface RegularExpressionItemFilterOptions {
	/**
	 * @property caseInsensitive
	 * @description Whether a case insensitive regular expression.
	 * @default undefined
	 */
	caseInsensitive?: boolean;
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
	/** @alias caseInsensitive */ignoreCase?: boolean;
	/** @alias exactly */exact?: boolean;
	/** @alias multipleLine */multiline?: boolean;
	/** @alias multipleLine */multiLine?: boolean;
}
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
	#caseInsensitive?: boolean;
	#dotAll?: boolean;
	#exactly?: boolean;
	#global?: boolean;
	#multipleLine?: boolean;
	#sticky?: boolean;
	#unicode?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of regular expression to determine item.
	 * @param {RegularExpressionItemFilterOptions} [options={}] Options.
	 */
	constructor(options: RegularExpressionItemFilterOptions = {}) {
		let {
			caseInsensitive,
			dotAll,
			exactly,
			global,
			multipleLine,
			sticky,
			unicode,
			...aliases
		} = options;
		caseInsensitive ??= aliases.ignoreCase;
		exactly ??= aliases.exact;
		multipleLine ??= aliases.multiLine ?? aliases.multiline;
		if (typeof caseInsensitive !== "boolean" && typeof caseInsensitive !== "undefined") {
			throw new TypeError(`Argument \`options.caseInsensitive\` must be type of boolean or undefined!`);
		}
		if (typeof dotAll !== "boolean" && typeof dotAll !== "undefined") {
			throw new TypeError(`Argument \`options.dotAll\` must be type of boolean or undefined!`);
		}
		if (typeof exactly !== "boolean" && typeof exactly !== "undefined") {
			throw new TypeError(`Argument \`options.exactly\` must be type of boolean or undefined!`);
		}
		if (typeof global !== "boolean" && typeof global !== "undefined") {
			throw new TypeError(`Argument \`options.global\` must be type of boolean or undefined!`);
		}
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`options.multipleLine\` must be type of boolean or undefined!`);
		}
		if (typeof sticky !== "boolean" && typeof sticky !== "undefined") {
			throw new TypeError(`Argument \`options.sticky\` must be type of boolean or undefined!`);
		}
		if (typeof unicode !== "boolean" && typeof unicode !== "undefined") {
			throw new TypeError(`Argument \`options.unicode\` must be type of boolean or undefined!`);
		}
		this.#caseInsensitive = caseInsensitive;
		this.#dotAll = dotAll;
		this.#exactly = exactly;
		this.#global = global;
		this.#multipleLine = multipleLine;
		this.#sticky = sticky;
		this.#unicode = unicode;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of regular expression.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		if (
			!(item instanceof RegExp) ||
			(this.#caseInsensitive === false && item.ignoreCase) ||
			(this.#caseInsensitive === true && !item.ignoreCase) ||
			(this.#dotAll === false && item.dotAll) ||
			(this.#dotAll === true && !item.dotAll) ||
			(this.#exactly === false && item.source.startsWith("^") && item.source.endsWith("$")) ||
			(this.#exactly === true && (
				!item.source.startsWith("^") ||
				!item.source.endsWith("$")
			)) ||
			(this.#global === false && item.global) ||
			(this.#global === true && !item.global) ||
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
	type RegularExpressionItemFilterOptions as RegExpItemFilterOptions
};