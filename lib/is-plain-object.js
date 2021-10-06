const isFunction = require("./is-function.js");
const isObject = require("./is-object.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @private
 * @function $isPlainObject
 * @param {any} item
 * @returns {(boolean|null)}
 */
function $isPlainObject(item) {
	if (
		isObject(item) !== true ||
		item instanceof Object ||
		item.constructor.name !== "Object" ||
		Object.getPrototypeOf(item) !== Object.prototype ||
		Object.prototype.toString.call(item) !== "[object Object]"
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
	let itemKeysLength = Object.keys(item).length;
	if (itemKeysLength !== Object.values(item).length) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		itemKeysLength === 0
	) {
		return null;
	};
	return true;
};
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
 * @param {boolean} [option.allowKeyAsterisk=true] Allow any asterisk character(s) (`*`) in the plain object key.
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the plain object key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the plain object key.
 * @param {Function} [option.checkElement] A function to ensure element(s) type(s).
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the plain object key.
 * @returns {(boolean|null)} Determine result.
 */
function isPlainObject(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowKeyAsterisk = undefinish(option.allowKeyAsterisk, option.allowKeyStar, true);
	if (typeof option.allowKeyAsterisk !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyAsterisk\` must be type of boolean!`);
	};
	option.allowKeyHyphen = undefinish(option.allowKeyHyphen, true);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = undefinish(option.allowKeyWhitespace, true);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (isFunction(option.checkElement, { asynchronous: false, generator: false }) && typeof option.checkElement !== "undefined") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.strictKey = undefinish(option.strictKey, false);
	if (typeof option.strictKey !== "boolean") {
		throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
	};
	let itemIsPlainObject = $isPlainObject(item);
	if (itemIsPlainObject !== true) {
		return itemIsPlainObject;
	};
	if (
		option.strictKey === true ||
		option.allowKeyAsterisk === false ||
		option.allowKeyHyphen === false ||
		option.allowKeyWhitespace === false
	) {
		let itemKeys = Object.keys(item);
		for (let itemKey of itemKeys) {
			if (
				(option.strictKey === true && itemKey.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyAsterisk === false && itemKey.search(/\*/giu) !== -1) ||
					(option.allowKeyHyphen === false && itemKey.search(/-/giu) !== -1) ||
					(option.allowKeyWhitespace === false && itemKey.search(/\s/giu) !== -1)
				))
			) {
				return false;
			};
		};
	};
	if (typeof option.checkElement === "function") {
		return Object.values(item).every(option.checkElement);
	};
	return true;
};
module.exports = isPlainObject;
