const $isPlainObject = require("./internal/is-plain-object.js");
const isFunction = require("./is-function.js");
const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const undefinish = require("@hugoalh/undefinish");
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
 * @param {boolean} [option.allowKeysAsterisks=true] Allow asterisk characters (`*`) in the plain object keys.
 * @param {boolean} [option.allowKeysHyphens=true] Allow hyphen characters (`-`) in the plain object keys.
 * @param {boolean} [option.allowKeysWhitespaces=true] Allow whitespaces in the plain object keys.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.containGetters] Contain custom getters in the plain object.
 * @param {boolean} [option.containSetters] Contain custom setters in the plain object.
 * @param {boolean} [option.elementsConfigurable] Configurable elements/properties in the plain object.
 * @param {boolean} [option.elementsEnumerable] Enumerable elements/properties in the plain object.
 * @param {boolean} [option.elementsWritable] Writable elements/properties in the plain object.
 * @param {boolean} [option.keysSymbols] Symbols in the plain object keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the plain object keys.
 * @param {boolean} [option.super=true] Ensure no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @returns {(boolean|null)} Determine result.
 */
function isPlainObject(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowKeysAsterisks = undefinish(option.allowKeysAsterisks, option.allowKeysAsterisk, option.allowKeyAsterisks, option.allowKeyAsterisk, option.allowKeysStars, option.allowKeysStar, option.allowKeyStars, option.allowKeyStar, true);
	if (typeof option.allowKeysAsterisks !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysAsterisks\` must be type of boolean!`);
	};
	option.allowKeysHyphens = undefinish(option.allowKeysHyphens, option.allowKeysHyphen, option.allowKeyHyphens, option.allowKeyHyphen, true);
	if (typeof option.allowKeysHyphens !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysHyphens\` must be type of boolean!`);
	};
	option.allowKeysWhitespaces = undefinish(option.allowKeysWhitespaces, option.allowKeysWhitespace, option.allowKeyWhitespaces, option.allowKeyWhitespace, true);
	if (typeof option.allowKeysWhitespaces !== "boolean") {
		throw new TypeError(`Argument \`option.allowKeysWhitespaces\` must be type of boolean!`);
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
	option.containGetters = undefinish(option.containGetters, option.containGetter);
	if (typeof option.containGetters !== "boolean" && typeof option.containGetters !== "undefined") {
		throw new TypeError(`Argument \`option.containGetters\` must be type of boolean or undefined!`);
	};
	option.containSetters = undefinish(option.containSetters, option.containSetter);
	if (typeof option.containSetters !== "boolean" && typeof option.containSetters !== "undefined") {
		throw new TypeError(`Argument \`option.containSetters\` must be type of boolean or undefined!`);
	};
	option.elementsConfigurable = undefinish(option.elementsConfigurable, option.propertiesConfigurable, option.elementConfigurable, option.propertyConfigurable);
	if (typeof option.elementsConfigurable !== "boolean" && typeof option.elementsConfigurable !== "undefined") {
		throw new TypeError(`Argument \`option.elementsConfigurable\` must be type of boolean or undefined!`);
	};
	option.elementsEnumerable = undefinish(option.elementsEnumerable, option.propertiesEnumerable, option.elementEnumerable, option.propertyEnumerable);
	if (typeof option.elementsEnumerable !== "boolean" && typeof option.elementsEnumerable !== "undefined") {
		throw new TypeError(`Argument \`option.elementsEnumerable\` must be type of boolean or undefined!`);
	};
	option.elementsWritable = undefinish(option.elementsWritable, option.propertiesWritable, option.elementWritable, option.propertyWritable);
	if (typeof option.elementsWritable !== "boolean" && typeof option.elementsWritable !== "undefined") {
		throw new TypeError(`Argument \`option.elementsWritable\` must be type of boolean or undefined!`);
	};
	option.keysSymbols = undefinish(option.keysSymbols, option.keysSymbol, option.keySymbols, option.keySymbol);
	if (typeof option.keysSymbols !== "boolean" && typeof option.keysSymbols !== "undefined") {
		throw new TypeError(`Argument \`option.keysSymbols\` must be type of boolean or undefined!`);
	};
	option.strictKeys = undefinish(option.strictKeys, option.strictKey, false);
	if (typeof option.strictKeys !== "boolean") {
		throw new TypeError(`Argument \`option.strictKeys\` must be type of boolean!`);
	};
	option.super = undefinish(option.super, true);
	if (typeof option.super !== "boolean") {
		throw new TypeError(`Argument \`option.super\` must be type of boolean!`);
	};
	let itemIsPlainObject = $isPlainObject(
		item,
		{
			configurable: ((option.super === true) ? true : option.elementsConfigurable),
			enumerable: ((option.super === true) ? true : option.elementsEnumerable),
			get: ((option.super === true) ? false : option.containGetters),
			set: ((option.super === true) ? false : option.containSetters),
			symbol: ((option.super === true) ? false : option.keysSymbols),
			writable: ((option.super === true) ? true : option.elementsWritable)
		}
	);
	if (itemIsPlainObject !== true) {
		return itemIsPlainObject;
	};
	if (
		option.strictKeys === true ||
		option.allowKeysAsterisks === false ||
		option.allowKeysHyphens === false ||
		option.allowKeysWhitespaces === false
	) {
		let itemKeys = Object.keys(item);
		for (let itemKey of itemKeys) {
			if (
				(option.strictKeys === true && itemKey.search(/^[$_a-z][$\d_a-z]*$/giu) !== 0) ||
				(option.strictKeys === false && (
					(option.allowKeysAsterisks === false && itemKey.search(/\*/giu) !== -1) ||
					(option.allowKeysHyphens === false && itemKey.search(/-/giu) !== -1) ||
					(option.allowKeysWhitespaces === false && itemKey.search(/\s/giu) !== -1)
				))
			) {
				return false;
			};
		};
	};
	if (typeof option.checkElements === "function") {
		let itemEntries = Object.entries(item);
		for (let [key, value] of itemEntries) {
			if (option.checkElements(key, value) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkKeys === "function") {
		let itemKeys = Object.keys(item);
		for (let key of itemKeys) {
			if (option.checkKeys(key) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		let itemValues = Object.values(item);
		for (let value of itemValues) {
			if (option.checkValues(value) === false) {
				return false;
			};
		};
	};
	return true;
};
module.exports = isPlainObject;
