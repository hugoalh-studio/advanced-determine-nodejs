const isArray = require("./is-array.js");
const isFunction = require("./is-function.js");
const isNumber = require("./is-number.js");
const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @private
 * @function $isValidJSONValue
 * @param {any} item
 * @param {object} option
 * @returns {boolean}
 */
function $isValidJSONValue(item, option) {
	if (
		typeof item === "boolean" ||
		$isJSON(item, option) ||
		item === null ||
		isNumber(item) ||
		typeof item === "string"
	) {
		return true;
	};
	return false;
};
/**
 * @private
 * @function $isJSON
 * @param {any} item
 * @param {object} option
 * @returns {boolean}
 */
function $isJSON(item, option) {
	if (isArray(item, { super: true })) {
		for (let itemElement of item) {
			if (!$isValidJSONValue(itemElement, option)) {
				return false;
			};
		};
		return true;
	};
	if (isPlainObjectInno(item)) {
		try {
			JSON.stringify(item);
		} catch {
			return false;
		};
		for (let itemKey of Object.keys(item)) {
			if (
				(typeof option.checkKeys === "function" && option.checkKeys(itemKey) === false) ||
				!$isValidJSONValue(item[itemKey], option)
			) {
				return false;
			};
		};
		return true;
	};
	return false;
};
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.arrayRoot] Type of array as the root of the JSON.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.empty] An empty JSON.
 * @param {number} [option.maximumEntries=Infinity] Maximum entries of the JSON.
 * @param {number} [option.minimumEntries=0] Minimum entries of the JSON.
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the JSON keys.
 * @returns {boolean} Determine result.
 */
function isJSON(item, option = {}) {
	if (!isPlainObjectInno(option)) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (typeof option.arrayRoot !== "boolean" && typeof option.arrayRoot !== "undefined") {
		throw new TypeError(`Argument \`option.arrayRoot\` must be type of boolean or undefined!`);
	};
	if (!isFunction(option.checkEntries, { asynchronous: false, generator: false }) && typeof option.checkEntries !== "undefined") {
		throw new TypeError(`Argument \`option.checkEntries\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!isFunction(option.checkKeys, { asynchronous: false, generator: false }) && typeof option.checkKeys !== "undefined") {
		throw new TypeError(`Argument \`option.checkKeys\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (!isFunction(option.checkValues, { asynchronous: false, generator: false }) && typeof option.checkValues !== "undefined") {
		throw new TypeError(`Argument \`option.checkValues\` must be type of function (non-asynchronous and non-generator) or undefined!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	option.maximumEntries = undefinish(option.maximumEntries, option.maxEntries, Infinity);
	if (option.maximumEntries !== Infinity && !isNumber(option.maximumEntries, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.maximumEntries\` must be \`Infinity\` or type of number (finite, integer, positive, and safe)!`);
	};
	option.minimumEntries = undefinish(option.minimumEntries, option.minEntries, 0);
	if (!isNumber(option.minimumEntries, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.minimumEntries\` must be type of number (finite, integer, positive, and safe)!`);
	};
	if (option.minimumEntries > option.maximumEntries) {
		throw new RangeError(`Illogical condition, argument \`option.minimumEntries\`'s value must be less than or equal to argument \`option.maximumEntries\`'s value!`);
	};
	option.strict = undefinish(option.strict, false);
	if (typeof option.strict !== "boolean") {
		throw new TypeError(`Argument \`option.strict\` must be type of boolean!`);
	};
	option.strictKeys = undefinish(option.strictKeys, false);
	if (typeof option.strictKeys !== "boolean") {
		throw new TypeError(`Argument \`option.strictKeys\` must be type of boolean!`);
	};
	if (option.empty === false) {
		option.maximumEntries = Infinity;
		option.minimumEntries = 1;
	} else if (option.empty === true) {
		option.maximumEntries = 0;
		option.minimumEntries = 0;
	};
	if (option.strict) {
		option.arrayRoot = false;
		option.strictKeys = true;
	};
	if (option.strictKeys) {
		option.checkKeys = (key) => {
			return (key.search(/^[$_a-z][$\d_a-z]*$/giu) === 0);
		};
	};
	let itemEntries = Object.entries(item);
	let itemEntriesLength = itemEntries.length;
	let itemIsArray = Array.isArray(item);
	if (
		(option.arrayRoot === false && itemIsArray) ||
		(option.arrayRoot === true && !itemIsArray) ||
		!$isJSON(item, option) ||
		option.maximumEntries < itemEntriesLength ||
		itemEntriesLength < option.minimumEntries
	) {
		return false;
	};
	if (typeof option.checkEntries === "function" && !itemIsArray) {
		for (let [itemKey, itemValue] of itemEntries) {
			if (option.checkEntries(itemKey, itemValue) === false) {
				return false;
			};
		};
	};
	if (typeof option.checkValues === "function") {
		if (itemIsArray) {
			for (let itemElement of item) {
				if (option.checkValues(itemElement) === false) {
					return false;
				};
			};
		} else {
			for (let itemValue of Object.values(item)) {
				if (option.checkValues(itemValue) === false) {
					return false;
				};
			};
		};
	};
	return true;
};
module.exports = isJSON;
