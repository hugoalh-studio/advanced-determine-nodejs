import isFunction from "./is-function.mjs";
import isObjectPairInternal from "./internal/is-object-pair.mjs";
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
 * @param {boolean} [option.allowKeyAsterisk=true] Allow any asterisk character(s) (`*`) in the object pair key.
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the object pair key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the object pair key.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the object pair key.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	option.allowKeyAsterisk = ((typeof option.allowKeyAsterisk === "undefined") ? true : option.allowKeyAsterisk);
	if (typeof option.allowKeyAsterisk !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyAsterisk\` must be type of boolean!`);
	};
	option.allowKeyHyphen = ((typeof option.allowKeyHyphen === "undefined") ? true : option.allowKeyHyphen);
	if (typeof option.allowKeyHyphen !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphen\` must be type of boolean!`);
	};
	option.allowKeyWhitespace = ((typeof option.allowKeyWhitespace === "undefined") ? true : option.allowKeyWhitespace);
	if (typeof option.allowKeyWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespace\` must be type of boolean!`);
	};
	if (isFunction(option.checkElement, { asynchronous: false, generator: false }) && typeof option.checkElement !== "undefined") {
		throw new TypeError(`Argument \`option.checkElement\` must be type of function (non-asynchronous and non-generator) or undefined!`);
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
		option.allowKeyAsterisk === false ||
		option.allowKeyHyphen === false ||
		option.allowKeyWhitespace === false
	) {
		let itemKeys = Object.keys(item);
		let itemKeysLength = itemKeys.length;
		for (let index = 0; index < itemKeysLength; index++) {
			let key = itemKeys[index];
			if (
				(option.strictKey === true && key.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKey === false && (
					(option.allowKeyAsterisk === false && key.search(/\*/giu) !== -1) ||
					(option.allowKeyHyphen === false && key.search(/-/giu) !== -1) ||
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
