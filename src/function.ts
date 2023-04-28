import { types } from "node:util";
interface FunctionItemFilterOptions {
	/**
	 * @property asynchronous
	 * @description Whether an asynchronous function.
	 * @default undefined
	 */
	asynchronous?: boolean;
	/**
	 * @property generator
	 * @description Whether a generator function.
	 * @default undefined
	 */
	generator?: boolean;
	/** @alias asynchronous */async?: boolean;
}
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
class FunctionItemFilter {
	#asynchronous?: boolean;
	#constructorNameRegExp: RegExp;
	#generator?: boolean;
	#objectStringRegExp: RegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of function to determine item.
	 * @param {FunctionItemFilterOptions} [options={}] Options.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
	 */
	constructor(options: FunctionItemFilterOptions = {}) {
		let {
			asynchronous,
			generator,
			...aliases
		} = options;
		asynchronous ??= aliases.async;
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
	test(item: unknown): boolean {
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
	 * @param {FunctionItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
	 */
	static test(item: unknown, options: FunctionItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {FunctionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
function isFunction(item: unknown, options: FunctionItemFilterOptions = {}): boolean {
	return new FunctionItemFilter(options).test(item);
}
export {
	FunctionItemFilter,
	isFunction,
	type FunctionItemFilterOptions
};
