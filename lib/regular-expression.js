import undefinish from "@hugoalh/undefinish";
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
	#dotAll;
	#exactly;
	#global;
	#ignoreCase;
	#multipleLine;
	#sticky;
	#unicode;
	/**
	 * @constructor
	 * @description Initialize the filter of type of regular expression to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.dotAll] Whether a dot-all regular expression.
	 * @param {boolean} [param0.exactly] Whether an exactly regular expression.
	 * @param {boolean} [param0.global] Whether a global regular expression.
	 * @param {boolean} [param0.ignoreCase] Whether a case insensitive regular expression.
	 * @param {boolean} [param0.multipleLine] Whether a multiple line regular expression.
	 * @param {boolean} [param0.sticky] Whether a sticky regular expression.
	 * @param {boolean} [param0.unicode] Whether an unicode regular expression.
	 */
	constructor({
		dotAll,
		exactly,
		global,
		ignoreCase,
		multipleLine,
		sticky,
		unicode,
		...aliases
	} = {}) {
		exactly = undefinish(exactly, aliases.exact);
		ignoreCase = undefinish(ignoreCase, aliases.caseInsensitive);
		multipleLine = undefinish(multipleLine, aliases.multiLine, aliases.multiline);
		if (typeof dotAll !== "boolean" && typeof dotAll !== "undefined") {
			throw new TypeError(`Filter argument \`dotAll\` must be type of boolean or undefined!`);
		}
		if (typeof exactly !== "boolean" && typeof exactly !== "undefined") {
			throw new TypeError(`Filter argument \`exactly\` must be type of boolean or undefined!`);
		}
		if (typeof global !== "boolean" && typeof global !== "undefined") {
			throw new TypeError(`Filter argument \`global\` must be type of boolean or undefined!`);
		}
		if (typeof ignoreCase !== "boolean" && typeof ignoreCase !== "undefined") {
			throw new TypeError(`Filter argument \`ignoreCase\` must be type of boolean or undefined!`);
		}
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Filter argument \`multipleLine\` must be type of boolean or undefined!`);
		}
		if (typeof sticky !== "boolean" && typeof sticky !== "undefined") {
			throw new TypeError(`Filter argument \`sticky\` must be type of boolean or undefined!`);
		}
		if (typeof unicode !== "boolean" && typeof unicode !== "undefined") {
			throw new TypeError(`Filter argument \`unicode\` must be type of boolean or undefined!`);
		}
		this.#dotAll = dotAll;
		this.#exactly = exactly;
		this.#global = global;
		this.#ignoreCase = ignoreCase;
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
	test(item) {
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
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.dotAll] Whether a dot-all regular expression.
	 * @param {boolean} [param1.exactly] Whether an exactly regular expression.
	 * @param {boolean} [param1.global] Whether a global regular expression.
	 * @param {boolean} [param1.ignoreCase] Whether a case insensitive regular expression.
	 * @param {boolean} [param1.multipleLine] Whether a multiple line regular expression.
	 * @param {boolean} [param1.sticky] Whether a sticky regular expression.
	 * @param {boolean} [param1.unicode] Whether an unicode regular expression.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		dotAll,
		exactly,
		global,
		ignoreCase,
		multipleLine,
		sticky,
		unicode,
		...aliases
	} = {}) {
		return new this({
			dotAll,
			exactly,
			global,
			ignoreCase,
			multipleLine,
			sticky,
			unicode,
			...aliases
		}).test(item);
	}
}
/**
 * @function isRegularExpression
 * @description Determine item with the filter of type of regular expression.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.dotAll] Whether a dot-all regular expression.
 * @param {boolean} [param1.exactly] Whether an exactly regular expression.
 * @param {boolean} [param1.global] Whether a global regular expression.
 * @param {boolean} [param1.ignoreCase] Whether a case insensitive regular expression.
 * @param {boolean} [param1.multipleLine] Whether a multiple line regular expression.
 * @param {boolean} [param1.sticky] Whether a sticky regular expression.
 * @param {boolean} [param1.unicode] Whether an unicode regular expression.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item, {
	dotAll,
	exactly,
	global,
	ignoreCase,
	multipleLine,
	sticky,
	unicode,
	...aliases
} = {}) {
	return new RegularExpressionItemFilter({
		dotAll,
		exactly,
		global,
		ignoreCase,
		multipleLine,
		sticky,
		unicode,
		...aliases
	}).test(item);
}
export {
	isRegularExpression,
	isRegularExpression as isRegEx,
	isRegularExpression as isRegExp,
	RegularExpressionItemFilter,
	RegularExpressionItemFilter as RegExItemFilter,
	RegularExpressionItemFilter as RegExpItemFilter
};
