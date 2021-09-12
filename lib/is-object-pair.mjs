import isObject from "./is-object.mjs";
/**
 * @private
 * @function isObjectPairInternal
 * @param {any} item
 * @returns {(boolean|null)}
 */
function isObjectPairInternal(item) {
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
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	option.allowKeyHyphen = ((typeof option.allowKeyHyphen === "undefined") ? true : option.allowKeyHyphen);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyStar = ((typeof option.allowKeyStar === "undefined") ? true : option.allowKeyStar);
	if (typeof option.allowKeyStar !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyStar\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = ((typeof option.allowKeyWhitespace === "undefined") ? true : option.allowKeyWhitespace);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (typeof option.checkElement !== "undefined" && typeof option.checkElement !== "function") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function or undefined!`);
	};
	option.strictKey = ((typeof option.strictKey === "undefined") ? false : option.strictKey);
	if (typeof option.strictKey !== "boolean") {
		throw new TypeError(`Argument \`option.strictKey\` must be type of boolean!`);
	};
	let itemIsObjectPair = isObjectPairInternal(item);
	if (itemIsObjectPair !== true) {
		return itemIsObjectPair;
	};
	if (
		option.strictKey === true ||
		option.allowKeyHyphen === false ||
		option.allowKeyStar === false ||
		option.allowKeyWhitespace === false
	) {
		let itemKeys = Object.keys(item);
		for (let index = 0; index < itemKeys.length; index++) {
			let key = itemKeys[index];
			if (
				(option.strictKey === true && key.search(/^[$_a-z][$0-9_a-z]*?$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
					(option.allowKeyStar === false && key.search(/\*/giu) !== -1) ||
					(option.allowKeyWhitespace === false && key.search(/\s/giu) !== -1)
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
export default isObjectPair;
