import { types } from "node:util";
import undefinish from "@hugoalh/undefinish";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
class GeneratorItemFilter {
	#objectStringRegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of generator to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.asynchronous] Whether an asynchronous generator.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
	 */
	constructor({
		asynchronous,
		...aliases
	} = {}) {
		asynchronous = undefinish(asynchronous, aliases.async);
		if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
			throw new TypeError(`Filter argument \`asynchronous\` must be type of boolean or undefined!`);
		}
		this.#objectStringRegExp = new RegExp(`^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "u");
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of generator.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
	 */
	test(item) {
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
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
	 * @returns {boolean} Determine result.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
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
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
function isGenerator(item, {
	asynchronous,
	...aliases
} = {}) {
	return new GeneratorItemFilter({
		asynchronous,
		...aliases
	}).test(item);
}
export {
	GeneratorItemFilter,
	isGenerator
};
