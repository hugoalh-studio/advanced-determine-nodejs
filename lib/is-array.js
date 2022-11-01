const $isNumber = require("./internal/is-number.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine the array does not contain custom defined properties.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {item is Array} Determine result.
 */
function isArray(item, {
	allowEmpty = false,
	maximumLength,
	minimumLength,
	strict,
	unique = false,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean") {
		throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
	}
	maximumLength = undefinish(maximumLength, aliases.maxLength, aliases.maximumCount, aliases.maxCount, aliases.maximumElements, aliases.maxElements, Infinity);
	if (maximumLength !== Infinity && !$isNumber(maximumLength, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumLength\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
	}
	minimumLength = undefinish(minimumLength, aliases.minLength, aliases.minimumCount, aliases.minCount, aliases.minimumElements, aliases.minElements, 1);
	if (!$isNumber(minimumLength, {
		integer: true,
		maximum: maximumLength,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumLength\` must be type of number (integer, positive, and safe) and <= ${maximumLength}!`);
	}
	strict = undefinish(strict, aliases.super, false);
	if (typeof strict !== "boolean") {
		throw new TypeError(`Argument \`strict\` must be type of boolean!`);
	}
	if (typeof unique !== "boolean") {
		throw new TypeError(`Argument \`unique\` must be type of boolean!`);
	}
	if (allowEmpty) {
		minimumLength = 0;
	}
	if (
		!Array.isArray(item) ||
		!(item instanceof Array) ||
		item.constructor.name !== "Array" ||
		Object.prototype.toString.call(item) !== "[object Array]"
	) {
		return false;
	}
	if (strict) {
		let itemPrototype = Object.getPrototypeOf(item);
		if (
			(itemPrototype !== null && itemPrototype !== Array.prototype) ||
			Object.getOwnPropertySymbols(item).length > 0
		) {
			return false;
		}
		let itemDescriptors = Object.getOwnPropertyDescriptors(item);
		for (let itemPropertyKey in itemDescriptors) {
			if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
				if (itemPropertyKey.search(/^(?:0|[1-9]\d*)$/u) === 0 && Number(itemPropertyKey) < 4294967296) {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						!itemPropertyDescriptor.configurable ||
						!itemPropertyDescriptor.enumerable ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						!itemPropertyDescriptor.writable
					) {
						return false;
					}
				} else if (itemPropertyKey === "length") {
					let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
					if (
						itemPropertyDescriptor.configurable ||
						itemPropertyDescriptor.enumerable ||
						typeof itemPropertyDescriptor.get !== "undefined" ||
						typeof itemPropertyDescriptor.set !== "undefined" ||
						!itemPropertyDescriptor.writable
					) {
						return false;
					}
				} else {
					return false;
				}
			}
		}
	}
	if (
		Object.entries(item).length !== item.length ||
		maximumLength < item.length ||
		item.length < minimumLength ||
		(unique && new Set(item).size !== item.length)
	) {
		return false;
	}
	return true;
}
module.exports = isArray;
