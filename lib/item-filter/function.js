import { types } from "node:util";
import undefinish from "@hugoalh/undefinish";
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 */
class FunctionItemFilter {
	#asynchronous;
	#constructorNameRegExpPattern;
	#generator;
	/**
	 * @constructor
	 * @description Initialize the filter of type of function to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.asynchronous] Whether an asynchronous function.
	 * @param {boolean} [param0.generator] Whether a generator function.
	 * @returns {boolean} Determine result.
	 */
	constructor({
		asynchronous,
		generator,
		...aliases
	} = {}) {
		asynchronous = undefinish(asynchronous, aliases.async);
		if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
			throw new TypeError(`Argument \`asynchronous\` must be type of boolean or undefined.`);
		}
		if (typeof generator !== "boolean" && typeof generator !== "undefined") {
			throw new TypeError(`Argument \`generator\` must be type of boolean or undefined.`);
		}
		this.#asynchronous = asynchronous;
		this.#generator = generator;
		this.#constructorNameRegExpPattern = `${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}${(generator === false) ? "" : "(?:Generator)"}${(typeof generator === "undefined") ? "?" : ""}Function`;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of function.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			typeof item !== "function" ||
			(this.#asynchronous === false && types.isAsyncFunction(item)) ||
			(this.#asynchronous === true && !types.isAsyncFunction(item)) ||
			(this.#generator === false && types.isGeneratorFunction(item)) ||
			(this.#generator === true && !types.isGeneratorFunction(item)) ||
			item.constructor.name.search(new RegExp(`^${this.#constructorNameRegExpPattern}$`, "u")) !== 0 ||
			Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${this.#constructorNameRegExpPattern}\\]$`, "u")) !== 0
		) {
			return false;
		}
		return true;
	}
}
export default FunctionItemFilter;
