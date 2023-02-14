import { checkNumberIPS, checkNumberIPSWithMaximum } from "../internal/check-item.js";
import undefinish from "@hugoalh/undefinish";
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
class SetItemFilter {
	#maximumSize;
	#minimumSize;
	/**
	 * @constructor
	 * @description Initialize the filter of type of set to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty set.
	 * @param {number} [param0.maximumSize=Infinity] Maximum size of the set.
	 * @param {number} [param0.minimumSize=1] Minimum size of the set.
	 */
	constructor({
		allowEmpty = false,
		maximumSize,
		minimumSize,
		...aliases
	} = {}) {
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`empty\` must be type of boolean.`);
		}
		maximumSize = undefinish(maximumSize, aliases.maxSize, Infinity);
		if (maximumSize !== Infinity && !checkNumberIPS(maximumSize)) {
			throw new TypeError(`Argument \`maximumSize\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
		}
		minimumSize = undefinish(minimumSize, aliases.minSize, 1);
		if (!checkNumberIPSWithMaximum(minimumSize, maximumSize)) {
			throw new TypeError(`Argument \`minimumSize\` must be type of number (integer, positive, and safe) and <= ${maximumSize}.`);
		}
		this.#maximumSize = maximumSize;
		this.#minimumSize = allowEmpty ? 0 : minimumSize;
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
			this.#maximumSize < item.size ||
			item.size < this.#minimumSize
		) {
			return false;
		}
		return true;
	}
}
export default SetItemFilter;
