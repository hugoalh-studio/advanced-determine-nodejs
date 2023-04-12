import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.ts"
interface MapItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty map.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property size
	 * @description Size of the map.
	 * @default undefined
	 */
	size?: number;
	/**
	 * @property sizeMaximum
	 * @description Maximum size of the map.
	 * @default Infinity
	 */
	sizeMaximum?: number;
	/**
	 * @property sizeMinimum
	 * @description Minimum size of the map.
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
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
class MapItemFilter {
	#sizeMaximum: number;
	#sizeMinimum: number;
	/**
	 * @constructor
	 * @description Initialize the filter of type of map to determine item.
	 * @param {MapItemFilterOptions} [options={}] Options.
	 */
	constructor(options: MapItemFilterOptions = {}) {
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
		if (!checkNumberIPS(size) && typeof size !== "undefined") {
			throw new TypeError(`Argument \`options.size\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (sizeMaximum !== Infinity && !checkNumberIPS(sizeMaximum)) {
			throw new TypeError(`Argument \`options.sizeMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!checkNumberIPSWithMaximum(sizeMinimum, sizeMaximum)) {
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
	 * @description Determine item with the configured filter of type of map.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		if (
			!(item instanceof Map) ||
			this.#sizeMaximum < item.size ||
			item.size < this.#sizeMinimum
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of map.
	 * @param {unknown} item Item that need to determine.
	 * @param {MapItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: MapItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {MapItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isMap(item: unknown, options: MapItemFilterOptions = {}): boolean {
	return new MapItemFilter(options).test(item);
}
export {
	isMap,
	MapItemFilter,
	type MapItemFilterOptions
};
