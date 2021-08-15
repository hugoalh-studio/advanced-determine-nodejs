const checkOption = require("./internal/check-option.js"),
	isObject = require("./is-object.js");
/**
 * @function isObjectPair
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPair
 * @alias isObjPlain
 * @description Determine item is type of object pair or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the object pair key.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.checkElement !== "undefined"),
		runtime = {
			strictKey: false
		};
	if (dispatch === true) {
		if (typeof option.checkElement !== "function") {
			throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
		};
	};
	if (typeof option.strictKey !== "undefined") {
		if (typeof option.strictKey !== "boolean") {
			throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
		};
		runtime.strictKey = option.strictKey;
	};
	if (
		isObject(item) !== true ||
		item.constructor.name !== "Object" ||
		Object.prototype.toString.call(item) !== "[object Object]" ||
		Object.getPrototypeOf(item) !== Object.prototype
	) {
		return false;
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	let itemKeys = Object.keys(item);
	if (itemKeys.length !== Object.values(item).length) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		itemKeys.length === 0
	) {
		return null;
	};
	if (runtime.strictKey === true) {
		for (let index = 0; index < itemKeys.length; index++) {
			if (itemKeys[index].search(/^[$_a-z][$0-9_a-z]*?$/giu) !== 0) {
				return false;
			};
		};
	};
	if (dispatch === false) {
		return true;
	};
	return Object.values(item).every((element) => {
		return option.checkElement(element);
	});
};
module.exports = isObjectPair;
