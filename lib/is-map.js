const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const isFunction = require("./is-function.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @returns {(boolean|null)} Determine result.
 */
function isMap(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement);
	if (isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkKeys = undefinish(option.checkKeys, option.checkKey);
	if (isFunction(option.checkKeys, { asynchronous: false, generator: false }) && typeof option.checkKeys !== "undefined") {
		throw new TypeError(`Argument \`option.checkKeys\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.checkValues = undefinish(option.checkValues, option.checkValue);
	if (isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!(item instanceof Map)) {
		return false;
	};
	if (item.size === 0) {
		return null;
	};
	if (typeof option.checkElements === "function") {
		let itemEntries = item.entries();
		for (let [key, value] of itemEntries) {
			if (option.checkElements(key, value) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkKeys === "function") {
		let itemKeys = item.keys();
		for (let key of itemKeys) {
			if (option.checkKeys(key) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		let itemValues = item.values();
		for (let value of itemValues) {
			if (option.checkValues(value) === false) {
				return false;
			};
		};
	};
	return true;
};
module.exports = isMap;
