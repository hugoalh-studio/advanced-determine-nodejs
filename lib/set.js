import undefinish from "@hugoalh/undefinish";
import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
class SetItemFilter {
	#sizeMaximum;
	#sizeMinimum;
	/**
	 * @constructor
	 * @description Initialize the filter of type of set to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty set.
	 * @param {number} [param0.size] Size of the set.
	 * @param {number} [param0.sizeMaximum=Infinity] Maximum size of the set.
	 * @param {number} [param0.sizeMinimum=1] Minimum size of the set.
	 */
	constructor({
		allowEmpty = false,
		size,
		sizeMaximum,
		sizeMinimum,
		...aliases
	} = {}) {
		sizeMaximum = undefinish(sizeMaximum, aliases.sizeMax, aliases.maximumSize, aliases.maxSize, Infinity);
		sizeMinimum = undefinish(sizeMinimum, aliases.sizeMin, aliases.minimumSize, aliases.minSize, 1);
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
		}
		if (!checkNumberIPS(size) && typeof size !== "undefined") {
			throw new TypeError(`Argument \`size\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (sizeMaximum !== Infinity && !checkNumberIPS(sizeMaximum)) {
			throw new TypeError(`Argument \`sizeMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(sizeMinimum, sizeMaximum)) {
			throw new TypeError(`Argument \`sizeMinimum\` must be type of number (integer, positive, and safe) and <= ${sizeMaximum}!`);
		}
		this.#sizeMaximum = undefinish(size, sizeMaximum);
		this.#sizeMinimum = undefinish(size, allowEmpty ? 0 : sizeMinimum);
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of set.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			!(item instanceof Set) ||
			this.#sizeMaximum < item.size ||
			item.size < this.#sizeMinimum
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of set.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
	 * @param {number} [param1.size] Size of the set.
	 * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the set.
	 * @param {number} [param1.sizeMinimum=1] Minimum size of the set.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowEmpty = false,
		size,
		sizeMaximum,
		sizeMinimum,
		...aliases
	} = {}) {
		return new this({
			allowEmpty,
			size,
			sizeMaximum,
			sizeMinimum,
			...aliases
		}).test(item);
	}
}
/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
 * @param {number} [param1.size] Size of the set.
 * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the set.
 * @param {number} [param1.sizeMinimum=1] Minimum size of the set.
 * @returns {boolean} Determine result.
 */
function isSet(item, {
	allowEmpty = false,
	size,
	sizeMaximum,
	sizeMinimum,
	...aliases
} = {}) {
	return new SetItemFilter({
		allowEmpty,
		size,
		sizeMaximum,
		sizeMinimum,
		...aliases
	}).test(item);
}
export {
	isSet,
	SetItemFilter
};
