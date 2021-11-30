import $isPlainObject from "./internal/is-plain-object.mjs";
import isFunction from "./is-function.mjs";
import isNumber from "./is-number.mjs";
import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isPlainObject
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPlain
 * @alias isPlainObj
 * @description Determine item is type of plain object or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.configurableEntries] Configurable entries in the plain object.
 * @param {boolean} [option.empty] An empty plain object.
 * @param {boolean} [option.enumerableEntries] Enumerable entries in the plain object.
 * @param {boolean} [option.getterEntries] Getter entries in the plain object.
 * @param {number} [option.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [option.minimumEntries=0] Minimum entries of the plain object.
 * @param {boolean} [option.setterEntries] Setter entries in the plain object.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the plain object keys.
 * @param {boolean} [option.super=false] Ensure no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @param {boolean} [option.symbolKeys] Symbols in the plain object keys.
 * @param {boolean} [option.writableEntries] Writable entries in the plain object.
 * @returns {boolean} Determine result.
 */
function isPlainObject(item, option = {}) {
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
	if (typeof option.getterEntries !== "boolean" && typeof option.getterEntries !== "undefined") {
		throw new TypeError(`Argument \`option.getterEntries\` must be type of boolean or undefined!`);
	};
	if (typeof option.setterEntries !== "boolean" && typeof option.setterEntries !== "undefined") {
		throw new TypeError(`Argument \`option.setterEntries\` must be type of boolean or undefined!`);
	};
	if (typeof option.configurableEntries !== "boolean" && typeof option.configurableEntries !== "undefined") {
		throw new TypeError(`Argument \`option.configurableEntries\` must be type of boolean or undefined!`);
	};
	if (typeof option.enumerableEntries !== "boolean" && typeof option.enumerableEntries !== "undefined") {
		throw new TypeError(`Argument \`option.elementsEnumerable\` must be type of boolean or undefined!`);
	};
	if (typeof option.writableEntries !== "boolean" && typeof option.writableEntries !== "undefined") {
		throw new TypeError(`Argument \`option.elementsWritable\` must be type of boolean or undefined!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	if (typeof option.symbolKeys !== "boolean" && typeof option.symbolKeys !== "undefined") {
		throw new TypeError(`Argument \`option.keysSymbols\` must be type of boolean or undefined!`);
	};
	option.maximumEntries = undefinish(option.maximumEntries, option.maxEntries, Infinity);
	if (option.maximumEntries !== Infinity && !isNumber(option.maximumEntries, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.maximumEntries\` must be \`Infinity\` or type of number (finite, integer, positive, and safe)!`);
	};
	option.minimumEntries = undefinish(option.minimumEntries, option.minEntries, 0);
	if (!isNumber(option.minimumEntries, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.minimumEntries\` must be type of number (finite, integer, positive, and safe)!`);
	};
	if (option.minimumEntries > option.maximumEntries) {
		throw new RangeError(`Illogical condition, argument \`option.minimumEntries\`'s value must be less than or equal to argument \`option.maximumEntries\`'s value!`);
	};
	option.strictKeys = undefinish(option.strictKeys, false);
	if (typeof option.strictKeys !== "boolean") {
		throw new TypeError(`Argument \`option.strictKeys\` must be type of boolean!`);
	};
	option.super = undefinish(option.super, false);
	if (typeof option.super !== "boolean") {
		throw new TypeError(`Argument \`option.super\` must be type of boolean!`);
	};
	if (option.empty === false) {
		option.maximumEntries = Infinity;
		option.minimumEntries = 1;
	} else if (option.empty === true) {
		option.maximumEntries = 0;
		option.minimumEntries = 0;
	};
	if (option.strictKeys) {
		option.checkKeys = (key) => {
			return (key.search(/^[$_a-z][$\d_a-z]*$/giu) === 0);
		};
	};
	if (option.super) {
		option.configurableEntries = true;
		option.enumerableEntries = true;
		option.getterEntries = false;
		option.setterEntries = false;
		option.symbolKeys = false;
		option.writableEntries = true;
	};
	if (!$isPlainObject(item, { configurable: option.configurableEntries, enumerable: option.enumerableEntries, get: option.getterEntries, maximumEntries: option.maximumEntries, minimumEntries: option.minimumEntries, set: option.setterEntries, symbol: option.symbolKeys, writable: option.writableEntries })) {
		return false;
	};
	if (typeof option.checkEntries === "function") {
		for (let [itemKey, itemValue] of Object.entries(item)) {
			if (option.checkEntries(itemKey, itemValue) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkKeys === "function") {
		for (let itemKey of Object.keys(item)) {
			if (option.checkKeys(itemKey) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		for (let itemValue of Object.values(item)) {
			if (option.checkValues(itemValue) === false) {
				return false;
			};
		};
	};
	return true;
};
export default isPlainObject;
