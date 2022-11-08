const isArray = require("./is-array.js");
const isNumberInternal = require("./internal/is-number.js");
const isPlainObjectInternal = require("./internal/is-plain-object.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @access private
 * @function $isJSONValue
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function $isJSONValue(item, keysPattern) {
	return (
		typeof item === "boolean" ||
		$isJSON(item, keysPattern) ||
		item === null ||
		isNumberInternal(item) ||
		typeof item === "string"
	);
}
/**
 * @access private
 * @function $isJSON
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function $isJSON(item, keysPattern) {
	if (isArray(item, { strict: true })) {
		for (let itemElement of item) {
			if (!$isJSONValue(itemElement, keysPattern)) {
				return false;
			}
		}
		return true;
	}
	if (isPlainObjectInternal(item, {
		configurableEntries: true,
		enumerableEntries: true,
		getterEntries: false,
		setterEntries: false,
		symbolKeys: false,
		writableEntries: true
	})) {
		try {
			JSON.stringify(item);
		} catch {
			return false;
		}
		for (let itemKey of Object.keys(item)) {
			if (
				(keysPattern instanceof RegExp && itemKey.search(keysPattern) === -1) ||
				!$isJSONValue(item[itemKey], keysPattern)
			) {
				return false;
			}
		}
		return true;
	}
	return false;
}
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the JSON.
 * @param {number} [param1.minimumEntries=0] Minimum entries of the JSON.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
 * @returns {item is object} Determine result.
 */
function isJSON(item, {
	allowEmpty = false,
	arrayRoot,
	keysPattern,
	maximumEntries,
	minimumEntries,
	strict = false,
	strictKeys = false,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean") {
		throw new TypeError(`Argument \`empty\` must be type of boolean!`);
	}
	if (typeof arrayRoot !== "boolean" && typeof arrayRoot !== "undefined") {
		throw new TypeError(`Argument \`arrayRoot\` must be type of boolean or undefined!`);
	}
	if (!(keysPattern instanceof RegExp) && typeof keysPattern !== "undefined") {
		throw new TypeError(`Argument \`keysPattern\` must be type of regular expression or undefined!`);
	}
	maximumEntries = undefinish(maximumEntries, aliases.maxEntries, Infinity);
	if (maximumEntries !== Infinity && !isNumberInternal(maximumEntries, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumEntries\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
	}
	minimumEntries = undefinish(minimumEntries, aliases.minEntries, 0);
	if (!isNumberInternal(minimumEntries, {
		integer: true,
		maximum: maximumEntries,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumEntries\` must be type of number (integer, positive, and safe) and <= ${maximumEntries}!`);
	}
	if (typeof strict !== "boolean") {
		throw new TypeError(`Argument \`strict\` must be type of boolean!`);
	}
	if (typeof strictKeys !== "boolean") {
		throw new TypeError(`Argument \`strictKeys\` must be type of boolean!`);
	}
	if (allowEmpty) {
		minimumEntries = 0;
	}
	if (strict) {
		arrayRoot = false;
		strictKeys = true;
	}
	if (strictKeys) {
		keysPattern = /^[$_a-z][$\d_a-z]*$/u;
	}
	let itemEntriesLength = Object.entries(item).length;
	let itemIsArray = Array.isArray(item);
	if (
		!$isJSON(item, keysPattern) ||
		(arrayRoot === false && itemIsArray) ||
		(arrayRoot === true && !itemIsArray) ||
		maximumEntries < itemEntriesLength ||
		itemEntriesLength < minimumEntries
	) {
		return false;
	}
	return true;
}
module.exports = isJSON;
