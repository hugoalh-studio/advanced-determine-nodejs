const checkOption = require("./internal/check-option.js");
const isObject = require("./is-object.js");
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
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the object pair key.
 * @param {boolean} [option.allowKeyStar=true] Allow any star character(s) (`*`) in the object pair key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the object pair key.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the object pair key.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.checkElement !== "undefined");
	let runtime = {
		allowKeyHyphen: true,
		allowKeyStar: true,
		allowKeyWhitespace: true,
		strictKey: false
	};
	if (dispatch === true && typeof option.checkElement !== "function") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
	};
	if (typeof option.strictKey === "undefined") {
		if (typeof option.allowKeyHyphen !== "undefined") {
			if (typeof option.allowKeyHyphen !== "boolean") {
				throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
			};
			runtime.allowKeyHyphen = option.allowKeyHyphen;
		};
		if (typeof option.allowKeyStar !== "undefined") {
			if (typeof option.allowKeyStar !== "boolean") {
				throw new TypeError(`Argument \`option.allowKeyStar\` must be type of boolean!`);
			};
			runtime.allowKeyStar = option.allowKeyStar;
		};
		if (typeof option.allowKeyWhitespace !== "undefined") {
			if (typeof option.allowKeyWhitespace !== "boolean") {
				throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
			};
			runtime.allowKeyWhitespace = option.allowKeyWhitespace;
		};
	} else {
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
	if (
		runtime.strictKey === true ||
		runtime.allowKeyHyphen === false ||
		runtime.allowKeyStar === false ||
		runtime.allowKeyWhitespace === false
	) {
		for (let index = 0; index < itemKeys.length; index++) {
			let key = itemKeys[index];
			if (
				(runtime.strictKey === true && key.search(/^[$_a-z][$0-9_a-z]*?$/giu) !== 0) ||
				(runtime.strictKey === false && (
					(runtime.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
					(runtime.allowKeyStar === false && key.search(/\*/giu) !== -1) ||
					(runtime.allowKeyWhitespace === false && key.search(/\s/giu) !== -1))
				)
			) {
				return false;
			};
		};
	};
	if (dispatch === false) {
		return true;
	};
	return Object.values(item).every(option.checkElement);
};
module.exports = isObjectPair;
