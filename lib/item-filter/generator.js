import { ObjectItemFilter } from "./object.js";
import { types } from "node:util";
import undefinish from "@hugoalh/undefinish";
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
class GeneratorItemFilter {
	#objectStringRegExp;
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
		this.#objectStringRegExp = new RegExp(`^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "u");
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of generator.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			!(new ObjectItemFilter().test(item)) ||
			!types.isGeneratorObject(item) ||
			Object.prototype.toString.call(item).search(this.#objectStringRegExp) !== 0 ||
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
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		asynchronous,
		...aliases
	} = {}) {
		return new this({
			asynchronous,
			...aliases
		}).test(item);
	}
}
export {
	GeneratorItemFilter
};
