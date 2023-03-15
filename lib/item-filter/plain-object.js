import { checkNumberIPS, checkNumberIPSWithMaximum } from "../internal/check-item.js";
import { ObjectItemFilter } from "./object.js";
import { ObjectMeta } from "../internal/object-meta.js";
import undefinish from "@hugoalh/undefinish";
/**
 * @class PlainObjectItemFilter
 * @alias ObjectPlainItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
	#configurableEntries;
	#enumerableEntries;
	#getterEntries;
	#maximumEntries;
	#minimumEntries;
	#setterEntries;
	#symbolKeys;
	#writableEntries;
	/**
	 * @constructor
	 * @description Initialize the filter of type of plain object to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty plain object.
	 * @param {boolean} [param0.configurableEntries] Whether contain configurable entries in the plain object.
	 * @param {boolean} [param0.enumerableEntries] Whether contain enumerable entries in the plain object.
	 * @param {boolean} [param0.getterEntries] Whether contain getter entries in the plain object.
	 * @param {number} [param0.maximumEntries=Infinity] Maximum entries of the plain object.
	 * @param {number} [param0.minimumEntries=1] Minimum entries of the plain object.
	 * @param {boolean} [param0.setterEntries] Whether contain setter entries in the plain object.
	 * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @param {boolean} [param0.symbolKeys] Whether contain symbols in the plain object keys.
	 * @param {boolean} [param0.writableEntries] Whether contain writable entries in the plain object.
	 */
	constructor({
		allowEmpty = false,
		configurableEntries,
		enumerableEntries,
		getterEntries,
		maximumEntries,
		minimumEntries,
		setterEntries,
		strict = false,
		symbolKeys,
		writableEntries,
		...aliases
	} = {}) {
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean.`);
		}
		if (typeof configurableEntries !== "boolean" && typeof configurableEntries !== "undefined") {
			throw new TypeError(`Argument \`configurableEntries\` must be type of boolean or undefined.`);
		}
		if (typeof enumerableEntries !== "boolean" && typeof enumerableEntries !== "undefined") {
			throw new TypeError(`Argument \`elementsEnumerable\` must be type of boolean or undefined.`);
		}
		if (typeof getterEntries !== "boolean" && typeof getterEntries !== "undefined") {
			throw new TypeError(`Argument \`getterEntries\` must be type of boolean or undefined.`);
		}
		maximumEntries = undefinish(maximumEntries, aliases.maxEntries, Infinity);
		if (maximumEntries !== Infinity && !checkNumberIPS(maximumEntries)) {
			throw new TypeError(`Argument \`maximumEntries\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
		}
		minimumEntries = undefinish(minimumEntries, aliases.minEntries, 1);
		if (!checkNumberIPSWithMaximum(minimumEntries, maximumEntries)) {
			throw new TypeError(`Argument \`minimumEntries\` must be type of number (integer, positive, and safe) and <= ${maximumEntries}.`);
		}
		if (typeof setterEntries !== "boolean" && typeof setterEntries !== "undefined") {
			throw new TypeError(`Argument \`setterEntries\` must be type of boolean or undefined.`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean.`);
		}
		if (typeof symbolKeys !== "boolean" && typeof symbolKeys !== "undefined") {
			throw new TypeError(`Argument \`keysSymbols\` must be type of boolean or undefined.`);
		}
		if (typeof writableEntries !== "boolean" && typeof writableEntries !== "undefined") {
			throw new TypeError(`Argument \`elementsWritable\` must be type of boolean or undefined.`);
		}
		this.#maximumEntries = maximumEntries;
		this.#minimumEntries = allowEmpty ? 0 : minimumEntries;
		if (strict) {
			this.#configurableEntries = true;
			this.#enumerableEntries = true;
			this.#getterEntries = false;
			this.#setterEntries = false;
			this.#symbolKeys = false;
			this.#writableEntries = true;
		} else {
			this.#configurableEntries = configurableEntries;
			this.#enumerableEntries = enumerableEntries;
			this.#getterEntries = getterEntries;
			this.#setterEntries = setterEntries;
			this.#symbolKeys = symbolKeys;
			this.#writableEntries = writableEntries;
		}
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of plain object.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			!(new ObjectItemFilter().test(item)) ||
			!(item instanceof Object) ||
			item.constructor.name !== "Object" ||
			Object.prototype.toString.call(item) !== "[object Object]"
		) {
			return false;
		}
		let itemObjectMeta = new ObjectMeta(item);
		if (itemObjectMeta.prototypes !== null && itemObjectMeta.prototypes !== Object.prototype) {
			return false;
		}
		let itemShadow = item;
		while (Object.getPrototypeOf(itemShadow) !== null) {
			itemShadow = Object.getPrototypeOf(itemShadow);
		}
		if (itemObjectMeta.prototypes !== itemShadow) {
			return false;
		}
		if (
			(this.#symbolKeys === false && itemObjectMeta.symbolKeys.length > 0) ||
			(this.#symbolKeys === true && itemObjectMeta.symbolKeys.length === 0)
		) {
			return false;
		}
		if (
			Object.entries(item).length !== itemObjectMeta.enumerableEntries.length ||
			itemObjectMeta.configurableEntries.length + itemObjectMeta.nonConfigurableEntries.length !== itemObjectMeta.enumerableEntries.length + itemObjectMeta.nonEnumerableEntries.length ||
			itemObjectMeta.enumerableEntries.length + itemObjectMeta.nonEnumerableEntries.length !== itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length ||
			itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length !== itemObjectMeta.nonWritableEntries.length + itemObjectMeta.writableEntries.length ||
			itemObjectMeta.configurableEntries.length + itemObjectMeta.nonConfigurableEntries.length !== itemObjectMeta.nonWritableEntries.length + itemObjectMeta.writableEntries.length ||
			this.#maximumEntries < itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length + itemObjectMeta.symbolKeys.length ||
			itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length + itemObjectMeta.symbolKeys.length < this.#minimumEntries ||
			(this.#configurableEntries === false && itemObjectMeta.configurableEntries.length > 0) ||
			(this.#configurableEntries === true && itemObjectMeta.nonConfigurableEntries.length > 0) ||
			(this.#enumerableEntries === false && itemObjectMeta.enumerableEntries.length > 0) ||
			(this.#enumerableEntries === true && itemObjectMeta.nonEnumerableEntries.length > 0) ||
			(this.#getterEntries === false && itemObjectMeta.getterEntries.length > 0) ||
			(this.#setterEntries === false && itemObjectMeta.setterEntries.length > 0) ||
			((
				this.#getterEntries === true ||
				this.#setterEntries === true
			) && itemObjectMeta.nonAccessorEntries.length > 0) ||
			(this.#writableEntries === false && itemObjectMeta.writableEntries.length > 0) ||
			(this.#writableEntries === true && itemObjectMeta.nonWritableEntries.length > 0)
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of plain object.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
	 * @param {boolean} [param1.configurableEntries] Whether contain configurable entries in the plain object.
	 * @param {boolean} [param1.enumerableEntries] Whether contain enumerable entries in the plain object.
	 * @param {boolean} [param1.getterEntries] Whether contain getter entries in the plain object.
	 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the plain object.
	 * @param {number} [param1.minimumEntries=1] Minimum entries of the plain object.
	 * @param {boolean} [param1.setterEntries] Whether contain setter entries in the plain object.
	 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @param {boolean} [param1.symbolKeys] Whether contain symbols in the plain object keys.
	 * @param {boolean} [param1.writableEntries] Whether contain writable entries in the plain object.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		configurableEntries,
		enumerableEntries,
		getterEntries,
		maximumEntries,
		minimumEntries,
		setterEntries,
		strict = false,
		symbolKeys,
		writableEntries,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			configurableEntries,
			enumerableEntries,
			getterEntries,
			maximumEntries,
			minimumEntries,
			setterEntries,
			strict,
			symbolKeys,
			writableEntries,
			...aliases
		}).test(item);
	}
}
export {
	PlainObjectItemFilter
};
