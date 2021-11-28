import isFunction from "./is-function.mjs";
import isNumber from "./is-number.mjs";
import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.empty] An empty map.
 * @param {number} [option.maximumSize=Infinity] Maximum size of the map.
 * @param {number} [option.minimumSize=0] Minimum size of the map.
 * @returns {boolean} Determine result.
 */
function isMap(item, option = {}) {
	if (!isPlainObjectInno(option)) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (!isFunction(option.checkEntries, { asynchronous: false, generator: false }) && typeof option.checkEntries !== "undefined") {
		throw new TypeError(`Argument \`option.checkEntries\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!isFunction(option.checkKeys, { asynchronous: false, generator: false }) && typeof option.checkKeys !== "undefined") {
		throw new TypeError(`Argument \`option.checkKeys\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	option.maximumSize = undefinish(option.maximumSize, option.maxSize, option.maximumEntries, option.maxEntries, Infinity);
	if (option.maximumSize !== Infinity && !isNumber(option.maximumSize, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.maximumSize\` must be \`Infinity\` or type of number (finite, integer, positive, and safe)!`);
	};
	option.minimumSize = undefinish(option.minimumSize, option.minSize, option.minimumEntries, option.minEntries, 0);
	if (!isNumber(option.minimumSize, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.minimumSize\` must be type of number (finite, integer, positive, and safe)!`);
	};
	if (option.minimumSize > option.maximumSize) {
		throw new RangeError(`Illogical condition, argument \`option.minimumSize\`'s value must be less than or equal to argument \`option.maximumSize\`'s value!`);
	};
	if (option.empty === false) {
		option.maximumSize = Infinity;
		option.minimumSize = 1;
	} else if (option.empty === true) {
		option.maximumSize = 0;
		option.minimumSize = 0;
	};
	if (
		!(item instanceof Map) ||
		option.maximumSize < item.size ||
		item.size < option.minimumSize
	) {
		return false;
	};
	if (typeof option.checkEntries === "function") {
		for (let [itemKey, itemValue] of item.entries()) {
			if (option.checkEntries(itemKey, itemValue) === false) {
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
