import { types } from "node:util";
import isObject from "../is-object.js";
import undefinish from "@hugoalh/undefinish";
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
class GeneratorItemFilter {
	#constructorNameRegExpPattern;
	/**
	 * @constructor
	 * @description Initialize the filter of type of generator to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.asynchronous] Whether an asynchronous generator.
	 */
	constructor({
		asynchronous,
		...aliases
	} = {}) {
		asynchronous = undefinish(asynchronous, aliases.async);
		if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
			throw new TypeError(`Argument \`asynchronous\` must be type of boolean or undefined.`);
		}
		this.#constructorNameRegExpPattern = `^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of generator.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			!isObject(item) ||
			!types.isGeneratorObject(item) ||
			Object.prototype.toString.call(item).search(new RegExp(this.#constructorNameRegExpPattern, "u")) !== 0 ||
			typeof item.next !== "function" ||
			typeof item.return !== "function" ||
			typeof item.throw !== "function"
		) {
			return false;
		}
		return true;
	}
}
export default GeneratorItemFilter;
