import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import isFunction from "./is-function.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement, option.checkValues, option.checkValue);
	if (isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (Array.isArray(item) === false) {
		return false;
	};
	if (item.length === 0) {
		return null;
	};
	if (typeof option.checkElements === "function") {
		for (let itemElement of item) {
			if (option.checkElements(itemElement) === false) {
				return false;
			};
		};
	};
	return true;
};
export default isArray;
