import undefinish from "@hugoalh/undefinish";
/**
 * @class RegularExpressionItemFilter
 * @alias RegExItemFilter
 * @alias RegExpItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
	#caseInsensitive;
	#dotAll;
	#exactly;
	#global;
	#multipleLine;
	#sticky;
	#unicode;
	/**
	 * @constructor
	 * @description Initialize the filter of type of regular expression to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.caseInsensitive] Whether a case insensitive regular expression.
	 * @param {boolean} [param0.dotAll] Whether a dot-all regular expression.
	 * @param {boolean} [param0.exactly] Whether an exactly regular expression.
	 * @param {boolean} [param0.global] Whether a global regular expression.
	 * @param {boolean} [param0.multipleLine] Whether a multiple line regular expression.
	 * @param {boolean} [param0.sticky] Whether a sticky regular expression.
	 * @param {boolean} [param0.unicode] Whether an unicode regular expression.
	 */
	constructor({
		caseInsensitive,
		dotAll,
		exactly,
		global,
		multipleLine,
		sticky,
		unicode,
		...aliases
	} = {}) {
		caseInsensitive = undefinish(caseInsensitive, aliases.ignoreCase);
		if (typeof caseInsensitive !== "boolean" && typeof caseInsensitive !== "undefined") {
			throw new TypeError(`Argument \`caseInsensitive\` must be type of boolean or undefined.`);
		}
		if (typeof dotAll !== "boolean" && typeof dotAll !== "undefined") {
			throw new TypeError(`Argument \`dotAll\` must be type of boolean or undefined.`);
		}
		exactly = undefinish(exactly, aliases.exact);
		if (typeof exactly !== "boolean" && typeof exactly !== "undefined") {
			throw new TypeError(`Argument \`exactly\` must be type of boolean or undefined.`);
		}
		if (typeof global !== "boolean" && typeof global !== "undefined") {
			throw new TypeError(`Argument \`global\` must be type of boolean or undefined.`);
		}
		multipleLine = undefinish(multipleLine, aliases.multiLine, aliases.multiline);
		if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
			throw new TypeError(`Argument \`multipleLine\` must be type of boolean or undefined.`);
		}
		if (typeof sticky !== "boolean" && typeof sticky !== "undefined") {
			throw new TypeError(`Argument \`sticky\` must be type of boolean or undefined.`);
		}
		if (typeof unicode !== "boolean" && typeof unicode !== "undefined") {
			throw new TypeError(`Argument \`unicode\` must be type of boolean or undefined.`);
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
	test(item) {
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
}
export default RegularExpressionItemFilter;
