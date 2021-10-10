const $isPlainObject = require("./internal/is-plain-object.js");
const utility = require("util");
/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.asynchronous] An asynchronous function.
 * @param {boolean} [option.generator] A generator function.
 * @returns {boolean} Determine result.
 */
function isFunction(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (typeof option.asynchronous !== "boolean" && typeof option.asynchronous !== "undefined") {
		throw new TypeError(`Argument \`option.asynchronous\` must be type of boolean or undefined!`);
	};
	if (typeof option.generator !== "boolean" && typeof option.generator !== "undefined") {
		throw new TypeError(`Argument \`option.generator\` must be type of boolean or undefined!`);
	};
	let reNamespace = `${(option.asynchronous === false) ? "" : "(?:Async)"}${(typeof option.asynchronous === "undefined") ? "?" : ""}${(option.generator === false) ? "" : "(?:Generator)"}${(typeof option.generator === "undefined") ? "?" : ""}Function`;
	if (
		typeof item !== "function" ||
		(option.asynchronous === false && utility.types.isAsyncFunction(item) === true) ||
		(option.asynchronous === true && utility.types.isAsyncFunction(item) === false) ||
		(option.generator === false && utility.types.isGeneratorFunction(item) === true) ||
		(option.generator === true && utility.types.isGeneratorFunction(item) === false) ||
		item.constructor.name.search(new RegExp(`^${reNamespace}$`, "gu")) !== 0 ||
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${reNamespace}\\]$`, "gu")) !== 0
	) {
		return false;
	};
	return true;
};
module.exports = isFunction;
