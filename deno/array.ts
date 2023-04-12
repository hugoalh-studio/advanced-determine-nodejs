import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.ts"
const arrayIndexRegExp = /^(?:0|[1-9]\d*)$/u;
interface ArrayItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty array.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property length
	 * @description Length of the array.
	 * @default undefined
	 */
	length?: number;
	/**
	 * @property lengthMaximum
	 * @description Maximum length of the array.
	 * @default Infinity
	 */
	lengthMaximum?: number;
	/**
	 * @property lengthMinimum
	 * @description Minimum length of the array.
	 * @default 1
	 */
	lengthMinimum?: number;
	/**
	 * @property strict
	 * @description Whether to determine no custom defined properties in the array.
	 * @default false
	 */
	strict?: boolean;
	/**
	 * @property unique
	 * @description Whether to determine all of the elements in the array are unique.
	 * @default false
	 */
	unique?: boolean;
	/** @alias length */elements?: number;
	/** @alias lengthMaximum */elementsMax?: number;
	/** @alias lengthMaximum */elementsMaximum?: number;
	/** @alias lengthMaximum */lengthMax?: number;
	/** @alias lengthMaximum */maxElements?: number;
	/** @alias lengthMaximum */maximumElements?: number;
	/** @alias lengthMaximum */maximumLength?: number;
	/** @alias lengthMaximum */maxLength?: number;
	/** @alias lengthMinimum */elementsMin?: number;
	/** @alias lengthMinimum */elementsMinimum?: number;
	/** @alias lengthMinimum */lengthMin?: number;
	/** @alias lengthMinimum */minElements?: number;
	/** @alias lengthMinimum */minimumElements?: number;
	/** @alias lengthMinimum */minimumLength?: number;
	/** @alias lengthMinimum */minLength?: number;
}
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
class ArrayItemFilter {
	#lengthMaximum: number;
	#lengthMinimum: number;
	#strict: boolean;
	#unique: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of array to determine item.
	 * @param {ArrayItemFilterOptions} [options={}] Options.
	 */
	constructor(options: ArrayItemFilterOptions = {}) {
		let {
			allowEmpty = false,
			length,
			lengthMaximum,
			lengthMinimum,
			strict = false,
			unique = false,
			...aliases
		} = options;
		length ??= aliases.elements;
		lengthMaximum ??= aliases.lengthMax ?? aliases.elementsMaximum ?? aliases.elementsMax ?? aliases.maximumLength ?? aliases.maxLength ?? aliases.maximumElements ?? aliases.maxElements ?? Infinity;
		lengthMinimum ??= aliases.lengthMin ?? aliases.elementsMinimum ?? aliases.elementsMin ?? aliases.minimumLength ?? aliases.minLength ?? aliases.minimumElements ?? aliases.minElements ?? 1;
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
		}
		if (!checkNumberIPS(length) && typeof length !== "undefined") {
			throw new TypeError(`Argument \`options.length\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (lengthMaximum !== Infinity && !checkNumberIPS(lengthMaximum)) {
			throw new TypeError(`Argument \`options.lengthMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(lengthMinimum, lengthMaximum)) {
			throw new TypeError(`Argument \`options.lengthMinimum\` must be type of number (integer, positive, and safe) and <= ${lengthMaximum}!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
		}
		if (typeof unique !== "boolean") {
			throw new TypeError(`Argument \`options.unique\` must be type of boolean!`);
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
	test(item: unknown): boolean {
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
						let itemPropertyDescriptor: PropertyDescriptor = itemDescriptors[itemPropertyKey];
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
						let itemPropertyDescriptor: PropertyDescriptor = itemDescriptors[itemPropertyKey] as PropertyDescriptor;
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
	 * @param {ArrayItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: ArrayItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isArray(item: unknown, options: ArrayItemFilterOptions = {}): boolean {
	return new ArrayItemFilter(options).test(item);
}
export {
	ArrayItemFilter,
	isArray,
	type ArrayItemFilterOptions
};
