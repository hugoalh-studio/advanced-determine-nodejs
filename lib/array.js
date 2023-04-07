import undefinish from "@hugoalh/undefinish";
import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
const arrayIndexRegExp = /^(?:0|[1-9]\d*)$/u;
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
class ArrayItemFilter {
	#lengthMaximum;
	#lengthMinimum;
	#strict;
	#unique;
	/**
	 * @constructor
	 * @description Initialize the filter of type of array to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty array.
	 * @param {number} [param0.length] Length of the array.
	 * @param {number} [param0.lengthMaximum=Infinity] Maximum length of the array.
	 * @param {number} [param0.lengthMinimum=1] Minimum length of the array.
	 * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties in the array.
	 * @param {boolean} [param0.unique=false] Whether to determine all of the elements in the array are unique.
	 */
	constructor({
		allowEmpty = false,
		length,
		lengthMaximum,
		lengthMinimum,
		strict = false,
		unique = false,
		...aliases
	} = {}) {
		length = undefinish(length, aliases.elements);
		lengthMaximum = undefinish(lengthMaximum, aliases.lengthMax, aliases.elementsMaximum, aliases.elementsMax, aliases.maximumLength, aliases.maxLength, aliases.maximumElements, aliases.maxElements, Infinity);
		lengthMinimum = undefinish(lengthMinimum, aliases.lengthMin, aliases.elementsMinimum, aliases.elementsMin, aliases.minimumLength, aliases.minLength, aliases.minimumElements, aliases.minElements, 1);
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
		}
		if (!checkNumberIPS(length) && typeof length !== "undefined") {
			throw new TypeError(`Argument \`length\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (lengthMaximum !== Infinity && !checkNumberIPS(lengthMaximum)) {
			throw new TypeError(`Argument \`lengthMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(lengthMinimum, lengthMaximum)) {
			throw new TypeError(`Argument \`lengthMinimum\` must be type of number (integer, positive, and safe) and <= ${lengthMaximum}!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean!`);
		}
		if (typeof unique !== "boolean") {
			throw new TypeError(`Argument \`unique\` must be type of boolean!`);
		}
		if (typeof length === "number") {
			this.#lengthMaximum = length;
			this.#lengthMinimum = length;
		} else {
			this.#lengthMaximum = lengthMaximum;
			this.#lengthMinimum = allowEmpty ? 0 : lengthMinimum;
		}
		this.#strict = strict;
		this.#unique = unique;
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of array.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			!Array.isArray(item) ||
			!(item instanceof Array) ||
			item.constructor.name !== "Array" ||
			Object.prototype.toString.call(item) !== "[object Array]"
		) {
			return false;
		}
		if (this.#strict) {
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
					if (arrayIndexRegExp.test(itemPropertyKey) && Number(itemPropertyKey) < 4294967296) {
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
			this.#lengthMaximum < item.length ||
			item.length < this.#lengthMinimum ||
			(this.#unique && new Set(item).size !== item.length)
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of array.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
	 * @param {number} [param1.length] Length of the array.
	 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the array.
	 * @param {number} [param1.lengthMinimum=1] Minimum length of the array.
	 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
	 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		length,
		lengthMaximum,
		lengthMinimum,
		strict = false,
		unique = false,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			length,
			lengthMaximum,
			lengthMinimum,
			strict,
			unique,
			...aliases
		}).test(item);
	}
}
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.length] Length of the array.
 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the array.
 * @param {number} [param1.lengthMinimum=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {boolean} Determine result.
 */
function isArray(item, {
	allowEmpty = false,
	length,
	lengthMaximum,
	lengthMinimum,
	strict = false,
	unique = false,
	...aliases
} = {}) {
	return new ArrayItemFilter({
		allowEmpty,
		length,
		lengthMaximum,
		lengthMinimum,
		strict,
		unique,
		...aliases
	}).test(item);
}
export {
	ArrayItemFilter,
	isArray
};
