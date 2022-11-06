const undefinish = require("@hugoalh/undefinish");
const util = require("util");
/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @template {boolean|undefined} TA
 * @template {boolean|undefined} TG
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {TA} [param1.asynchronous] Whether an asynchronous function.
 * @param {TG} [param1.generator] Whether a generator function.
 * @returns {item is (TG extends true ? (TA extends true ? AsyncGeneratorFunction : GeneratorFunction) : Function )} Determine result.
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
	let constructorNameRegExpPattern = `${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}${(generator === false) ? "" : "(?:Generator)"}${(typeof generator === "undefined") ? "?" : ""}Function`;
	if (
		typeof item !== "function" ||
		(asynchronous === false && util.types.isAsyncFunction(item)) ||
		(asynchronous === true && !util.types.isAsyncFunction(item)) ||
		(generator === false && util.types.isGeneratorFunction(item)) ||
		(generator === true && !util.types.isGeneratorFunction(item)) ||
		item.constructor.name.search(new RegExp(`^${constructorNameRegExpPattern}$`, "u")) !== 0 ||
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${constructorNameRegExpPattern}\\]$`, "u")) !== 0
	) {
		return false;
	}
	return true;
}
module.exports = isFunction;
