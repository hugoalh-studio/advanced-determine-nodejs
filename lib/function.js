import { types } from "node:util";
import undefinish from "@hugoalh/undefinish";
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
class FunctionItemFilter {
	#asynchronous;
	#constructorNameRegExp;
	#generator;
	#objectStringRegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of function to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.asynchronous] Whether an asynchronous function.
	 * @param {boolean} [param0.generator] Whether a generator function.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
	 */
	constructor({
		asynchronous,
		generator,
		...aliases
	} = {}) {
		asynchronous = undefinish(asynchronous, aliases.async);
		if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
			throw new TypeError(`Filter argument \`asynchronous\` must be type of boolean or undefined!`);
		}
		if (typeof generator !== "boolean" && typeof generator !== "undefined") {
			throw new TypeError(`Filter argument \`generator\` must be type of boolean or undefined!`);
		}
		let constructorNameRegExpPattern = `${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}${(generator === false) ? "" : "(?:Generator)"}${(typeof generator === "undefined") ? "?" : ""}Function`;
		this.#asynchronous = asynchronous;
		this.#constructorNameRegExp = new RegExp(`^${constructorNameRegExpPattern}$`, "u");
		this.#generator = generator;
		this.#objectStringRegExp = new RegExp(`^\\[object ${constructorNameRegExpPattern}\\]$`, "u");
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of function.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
	 */
	test(item) {
		if (
			typeof item !== "function" ||
			(this.#asynchronous === false && types.isAsyncFunction(item)) ||
			(this.#asynchronous === true && !types.isAsyncFunction(item)) ||
			(this.#generator === false && types.isGeneratorFunction(item)) ||
			(this.#generator === true && !types.isGeneratorFunction(item)) ||
			!this.#constructorNameRegExp.test(item.constructor.name) ||
			!this.#objectStringRegExp.test(Object.prototype.toString.call(item))
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of function.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
	 * @param {boolean} [param1.generator] Whether a generator function.
	 * @returns {boolean} Determine result.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
	 */
	static test(item, {
		asynchronous,
		generator,
		...aliases
	} = {}) {
		return new this({
			asynchronous,
			generator,
			...aliases
		}).test(item);
	}
}
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
 * @param {boolean} [param1.generator] Whether a generator function.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
function isFunction(item, {
	asynchronous,
	generator,
	...aliases
} = {}) {
	return new FunctionItemFilter({
		asynchronous,
		generator,
		...aliases
	}).test(item);
}
export {
	FunctionItemFilter,
	isFunction
};
