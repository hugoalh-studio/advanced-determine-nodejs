import isFunction from "./is-function.mjs";
import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.empty] An empty map.
 * @returns {boolean} Determine result.
 */
function isMap(item, option = {}) {
	if (!isPlainObjectInno(option)) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement);
	if (!isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkKeys = undefinish(option.checkKeys, option.checkKey);
	if (!isFunction(option.checkKeys, { asynchronous: false, generator: false }) && typeof option.checkKeys !== "undefined") {
		throw new TypeError(`Argument \`option.checkKeys\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkValues = undefinish(option.checkValues, option.checkValue);
	if (!isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	if (
		!(item instanceof Map) ||
		(option.empty === false && item.size === 0) ||
		(option.empty === true && item.size > 0)
	) {
		return false;
	};
	if (typeof option.checkElements === "function") {
		for (let [itemKey, itemValue] of item.entries()) {
			if (option.checkElements(itemKey, itemValue) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkKeys === "function") {
		for (let itemKey of item.keys()) {
			if (option.checkKeys(itemKey) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		for (let itemValue of item.values()) {
			if (option.checkValues(itemValue) === false) {
				return false;
			};
		};
	};
	return true;
};
export default isMap;
