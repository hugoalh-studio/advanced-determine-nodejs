interface SetItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty set.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property size
	 * @description Size of the set.
	 * @default undefined
	 */
	size?: number;
	/**
	 * @property sizeMaximum
	 * @description Maximum size of the set.
	 * @default Infinity
	 */
	sizeMaximum?: number;
	/**
	 * @property sizeMinimum
	 * @description Minimum size of the set.
	 * @default 1
	 */
	sizeMinimum?: number;
	/** @alias sizeMaximum */sizeMax?: number;
	/** @alias sizeMaximum */maximumSize?: number;
	/** @alias sizeMaximum */maxSize?: number;
	/** @alias sizeMinimum */sizeMin?: number;
	/** @alias sizeMinimum */minimumSize?: number;
	/** @alias sizeMinimum */minSize?: number;
}
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
class SetItemFilter {
	#sizeMaximum: number;
	#sizeMinimum: number;
	/**
	 * @constructor
	 * @description Initialize the filter of type of set to determine item.
	 * @param {SetItemFilterOptions} [options={}] Options.
	 */
	constructor(options: SetItemFilterOptions = {}) {
		let {
			allowEmpty = false,
			size,
			sizeMaximum,
			sizeMinimum,
			...aliases
		} = options;
		sizeMaximum ??= aliases.sizeMax ?? aliases.maximumSize ?? aliases.maxSize ?? Infinity;
		sizeMinimum ??= aliases.sizeMin ?? aliases.minimumSize ?? aliases.minSize ?? 1;
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
		}
		if (!(typeof size === "number" && Number.isSafeInteger(size) && size >= 0) && typeof size !== "undefined") {
			throw new TypeError(`Argument \`options.size\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (sizeMaximum !== Infinity && !(typeof sizeMaximum === "number" && Number.isSafeInteger(sizeMaximum) && sizeMaximum >= 0)) {
			throw new TypeError(`Argument \`options.sizeMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!(typeof sizeMinimum === "number" && Number.isSafeInteger(sizeMinimum) && sizeMinimum >= 0 && sizeMinimum <= sizeMaximum)) {
			throw new TypeError(`Argument \`options.sizeMinimum\` must be type of number (integer, positive, and safe) and <= ${sizeMaximum}!`);
		}
		if (typeof size === "number") {
			this.#sizeMaximum = size;
			this.#sizeMinimum = size;
		} else {
			this.#sizeMaximum = sizeMaximum;
			this.#sizeMinimum = allowEmpty ? 0 : sizeMinimum;
		}
	}
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of set.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
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
	 * @param {SetItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: SetItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {SetItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isSet(item: unknown, options: SetItemFilterOptions = {}): boolean {
	return new SetItemFilter(options).test(item);
}
export {
	isSet,
	SetItemFilter,
	type SetItemFilterOptions
};
