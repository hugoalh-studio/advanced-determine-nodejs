import { types } from "node:util";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] An asynchronous function.
 * @param {boolean} [param1.generator] A generator function.
 * @returns {item is Function} Determine result.
 */
function isFunction(item, {
	asynchronous,
	generator,
	...aliases
} = {}) {
	asynchronous = undefinish(asynchronous, aliases.async);
	if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
		throw new TypeError(`Argument \`asynchronous\` must be type of boolean or undefined!`);
	}
	if (typeof generator !== "boolean" && typeof generator !== "undefined") {
		throw new TypeError(`Argument \`generator\` must be type of boolean or undefined!`);
	}
	let reConstructorName = `${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}${(generator === false) ? "" : "(?:Generator)"}${(typeof generator === "undefined") ? "?" : ""}Function`;
	if (
		typeof item !== "function" ||
		(asynchronous === false && types.isAsyncFunction(item)) ||
		(asynchronous === true && !types.isAsyncFunction(item)) ||
		(generator === false && types.isGeneratorFunction(item)) ||
		(generator === true && !types.isGeneratorFunction(item)) ||
		item.constructor.name.search(new RegExp(`^${reConstructorName}$`, "gu")) !== 0 ||
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${reConstructorName}\\]$`, "gu")) !== 0
	) {
		return false;
	}
	return true;
}
export default isFunction;
