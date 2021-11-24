import isFunction from "./is-function.mjs";
import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {boolean} [option.empty] An empty set.
 * @returns {boolean} Determine result.
 */
function isSet(item, option = {}) {
	if (!isPlainObjectInno(option)) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement, option.checkKeys, option.checkValues, option.checkKey, option.checkValue);
	if (!isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	if (
		!(item instanceof Set) ||
		(option.empty === false && item.size === 0) ||
		(option.empty === true && item.size > 0)
	) {
		return false;
	};
	if (typeof option.checkElements === "function") {
		for (let itemValue of item.values()) {
			if (option.checkElements(itemValue) === false) {
				return false;
			};
		};
	};
	return true;
};
export default isSet;
