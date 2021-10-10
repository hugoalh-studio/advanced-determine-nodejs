import $isPlainObject from "./internal/is-plain-object.mjs";
import isFunction from "./is-function.mjs";
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElement] A function to ensure element(s) type(s).
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (isFunction(option.checkElement, { asynchronous: false, generator: false }) && typeof option.checkElement !== "undefined") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (Array.isArray(item) === false) {
		return false;
	};
	if (item.length === 0) {
		return null;
	};
	if (typeof option.checkElement === "function") {
		return item.every(option.checkElement);
	};
	return true;
};
export default isArray;
