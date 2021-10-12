import $isPlainObject from "./internal/is-plain-object.mjs";
import isFunction from "./is-function.mjs";
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
 * @param {boolean} [option.allowKeyAsterisks=true] Allow asterisk characters (`*`) in the plain object keys.
 * @param {boolean} [option.allowKeyHyphens=true] Allow hyphen characters (`-`) in the plain object keys.
 * @param {boolean} [option.allowKeyWhitespaces=true] Allow whitespaces in the plain object keys.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the plain object keys.
 * @returns {(boolean|null)} Determine result.
 */
function isPlainObject(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowKeyAsterisks = undefinish(option.allowKeyAsterisks, option.allowKeyAsterisk, option.allowKeyStars, option.allowKeyStar, true);
	if (typeof option.allowKeyAsterisks !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyAsterisks\` must be type of boolean!`);
	};
	option.allowKeyHyphens = undefinish(option.allowKeyHyphens, option.allowKeyHyphen, true);
	if (typeof option.allowKeyHyphens !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyHyphens\` must be type of boolean!`);
	};
	option.allowKeyWhitespaces = undefinish(option.allowKeyWhitespaces, option.allowKeyWhitespace, true);
	if (typeof option.allowKeyWhitespaces !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeyWhitespaces\` must be type of boolean!`);
	};
	option.checkValues = undefinish(option.checkValues, option.checkValue, option.checkElements, option.checkElement);
	if (isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	option.strictKeys = undefinish(option.strictKeys, option.strictKey, false);
	if (typeof option.strictKeys !== "boolean") {
		throw new TypeError(`Argument \`option.strictKeys\` must be type of boolean!`);
	};
	let itemIsPlainObject = $isPlainObject(item);
	if (itemIsPlainObject !== true) {
		return itemIsPlainObject;
	};
	if (
		option.strictKeys === true ||
		option.allowKeyAsterisks === false ||
		option.allowKeyHyphens === false ||
		option.allowKeyWhitespaces === false
	) {
		let itemKeys = Object.keys(item);
		for (let itemKey of itemKeys) {
			if (
				(option.strictKeys === true && itemKey.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKeys === false && (
					(option.allowKeyAsterisks === false && itemKey.search(/\*/giu) !== -1) ||
					(option.allowKeyHyphens === false && itemKey.search(/-/giu) !== -1) ||
					(option.allowKeyWhitespaces === false && itemKey.search(/\s/giu) !== -1)
				))
			) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		return Object.values(item).every(option.checkValues);
	};
	return true;
};
export default isPlainObject;
