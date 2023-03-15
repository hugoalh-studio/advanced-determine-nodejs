import { checkNumberIPS, checkNumberIPSWithMaximum } from "../internal/check-item.js";
import undefinish from "@hugoalh/undefinish";
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
class ArrayItemFilter {
	#maximumLength;
	#minimumLength;
	#strict;
	#unique;
	/**
	 * @constructor
	 * @description Initialize the filter of type of array to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty array.
	 * @param {number} [param0.maximumLength=Infinity] Maximum length of the array.
	 * @param {number} [param0.minimumLength=1] Minimum length of the array.
	 * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties in the array.
	 * @param {boolean} [param0.unique=false] Whether to determine all of the elements in the array are unique.
	 */
	constructor({
		allowEmpty = false,
		maximumLength,
		minimumLength,
		strict = false,
		unique = false,
		...aliases
	} = {}) {
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean.`);
		}
		maximumLength = undefinish(maximumLength, aliases.maxLength, aliases.maximumElements, aliases.maxElements, Infinity);
		if (maximumLength !== Infinity && !checkNumberIPS(maximumLength)) {
			throw new TypeError(`Argument \`maximumLength\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
		}
		minimumLength = undefinish(minimumLength, aliases.minLength, aliases.minimumElements, aliases.minElements, 1);
		if (!checkNumberIPSWithMaximum(minimumLength, maximumLength)) {
			throw new TypeError(`Argument \`minimumLength\` must be type of number (integer, positive, and safe) and <= ${maximumLength}.`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean.`);
		}
		if (typeof unique !== "boolean") {
			throw new TypeError(`Argument \`unique\` must be type of boolean.`);
		}
		this.#maximumLength = maximumLength;
		this.#minimumLength = allowEmpty ? 0 : minimumLength;
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
			this.#maximumLength < item.length ||
			item.length < this.#minimumLength ||
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
	 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
	 * @param {number} [param1.minimumLength=1] Minimum length of the array.
	 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
	 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		maximumLength,
		minimumLength,
		strict = false,
		unique = false,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			maximumLength,
			minimumLength,
			strict,
			unique,
			...aliases
		}).test(item);
	}
}
export {
	ArrayItemFilter
};
