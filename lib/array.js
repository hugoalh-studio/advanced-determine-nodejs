import undefinish from "@hugoalh/undefinish";
import { isArrayStrict, isArrayUnique } from "./native/array.js";
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
			throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
		}
		if (typeof length === "number" && !Number.isNaN(length)) {
			if (!(Number.isSafeInteger(length) && length >= 0)) {
				throw new RangeError(`Filter argument \`length\` must be a number which is integer, positive, and safe!`);
			}
		} else if (typeof length !== "undefined") {
			throw new TypeError(`Filter argument \`length\` must be type of number or undefined!`);
		}
		if (!(typeof lengthMaximum === "number" && !Number.isNaN(lengthMaximum))) {
			throw new TypeError(`Filter argument \`lengthMaximum\` must be type of number!`);
		}
		if (lengthMaximum !== Infinity && !(Number.isSafeInteger(lengthMaximum) && lengthMaximum >= 0)) {
			throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
		}
		if (!(typeof lengthMinimum === "number" && !Number.isNaN(lengthMinimum))) {
			throw new TypeError(`Filter argument \`lengthMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(lengthMinimum) && lengthMinimum >= 0 && lengthMinimum <= lengthMaximum)) {
			throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${lengthMaximum}!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Filter argument \`strict\` must be type of boolean!`);
		}
		if (typeof unique !== "boolean") {
			throw new TypeError(`Filter argument \`unique\` must be type of boolean!`);
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
			Object.prototype.toString.call(item) !== "[object Array]" ||
			Object.entries(item).length !== item.length ||
			this.#lengthMaximum < item.length ||
			item.length < this.#lengthMinimum ||
			(this.#strict && !isArrayStrict(item)) ||
			(this.#unique && !isArrayUnique(item))
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
