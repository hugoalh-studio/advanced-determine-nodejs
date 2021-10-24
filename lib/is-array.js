const isFunction = require("./is-function.js");
const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {boolean} [option.super=false] Ensure no custom defined properties in the array.
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
	option.super = undefinish(option.super, false);
	if (typeof option.super !== "boolean") {
		throw new TypeError(`Argument \`option.super\` must be type of boolean!`);
	};
	if (
		Array.isArray(item) === false ||
		!(item instanceof Array) ||
		item.constructor.name !== "Array" ||
		Object.prototype.toString.call(item) !== "[object Array]"
	) {
		return false;
	};
	let itemLength = item.length;
	if (Object.entries(item).length !== itemLength) {
		return false;
	};
	if (option.super === true) {
		let itemPrototype = Object.getPrototypeOf(item);
		if (itemPrototype !== null && itemPrototype !== Array.prototype) {
			return false;
		};
		if (Object.getOwnPropertySymbols(item).length > 0) {
			return false;
		};
		let itemDescriptors = Object.getOwnPropertyDescriptors(item);
		for (let itemPropertyKey in itemDescriptors) {
			if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey) === true) {
				if (itemPropertyKey.search(/^(?:0|[1-9]\d*)$/gu) === 0 && Number(itemPropertyKey) < 4294967296) {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						itemPropertyDescriptor.configurable === false ||
						itemPropertyDescriptor.enumerable === false ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						itemPropertyDescriptor.writable === false
					) {
						return false;
					};
				} else if (itemPropertyKey === "length") {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						itemPropertyDescriptor.configurable === true ||
						itemPropertyDescriptor.enumerable === true ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						itemPropertyDescriptor.writable === false
					) {
						return false;
					};
				} else {
					return false;
				};
			};
		};
	};
	if (itemLength === 0) {
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
module.exports = isArray;
