import { types } from "node:util";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
interface GeneratorItemFilterOptions {
	/**
	 * @property asynchronous
	 * @description Whether an asynchronous generator.
	 * @default undefined
	 */
	asynchronous?: boolean;
	/** @alias asynchronous */async?: boolean;
}
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
class GeneratorItemFilter {
	#objectStringRegExp: RegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of generator to determine item.
	 * @param {GeneratorItemFilterOptions} [options={}] Options.
	 */
	constructor(options: GeneratorItemFilterOptions = {}) {
		let {
			asynchronous,
			...aliases
		} = options;
		asynchronous ??= aliases.async;
		if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
			throw new TypeError(`Argument \`options.asynchronous\` must be type of boolean or undefined!`);
		}
		this.#objectStringRegExp = new RegExp(`^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "u");
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of generator.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		if (
			!objectFilter.test(item) ||
			!types.isGeneratorObject(item) ||
			!this.#objectStringRegExp.test(Object.prototype.toString.call(item)) ||
			typeof item.next !== "function" ||
			typeof item.return !== "function" ||
			typeof item.throw !== "function"
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of generator.
	 * @param {unknown} item Item that need to determine.
	 * @param {GeneratorItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: GeneratorItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {GeneratorItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isGenerator(item: unknown, options: GeneratorItemFilterOptions = {}): boolean {
	return new GeneratorItemFilter(options).test(item);
}
export {
	GeneratorItemFilter,
	isGenerator,
	type GeneratorItemFilterOptions
};
