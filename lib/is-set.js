const isFunction = require("./is-function.js");
const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @returns {(boolean|null)} Determine result.
 */
function isSet(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.checkElements = undefinish(option.checkElements, option.checkElement, option.checkKeys, option.checkValues, option.checkKey, option.checkValue);
	if (isFunction(option.checkElements, { asynchronous: false, generator: false }) && typeof option.checkElements !== "undefined") {
		throw new TypeError(`Argument \`option.checkElements\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!(item instanceof Set)) {
		return false;
	};
	if (item.size === 0) {
		return null;
	};
	if (typeof option.checkElements === "function") {
		let itemValues = item.values();
		for (let itemValue of itemValues) {
			if (option.checkElements(itemValue) === false) {
				return false;
			};
		};
	};
	return true;
};
module.exports = isSet;
