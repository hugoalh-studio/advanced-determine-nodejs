interface MapItemFilterOptionsBase {
	/**
	 * @property sizeMaximum
	 * @description Maximum size of the map.
	 * @default Infinity
	 */
	sizeMaximum: number;
	/**
	 * @property sizeMinimum
	 * @description Minimum size of the map.
	 * @default 1
	 */
	sizeMinimum: number;
}
interface MapItemFilterOptions extends Partial<MapItemFilterOptionsBase> {
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
	#sizeMaximum = Infinity;
	#sizeMinimum = 1;
	/**
	 * @constructor
	 * @description Initialize the filter of type of map to determine item.
	 * @param {MapItemFilter | MapItemFilterOptions} [options] Options.
	 */
	constructor(options?: MapItemFilter | MapItemFilterOptions) {
		if (options instanceof MapItemFilter) {
			this.#sizeMaximum = options.#sizeMaximum;
			this.#sizeMinimum = options.#sizeMinimum;
		} else if (typeof options !== "undefined") {
			options.sizeMaximum ??= options.sizeMax ?? options.maximumSize ?? options.maxSize;
			options.sizeMinimum ??= options.sizeMin ?? options.minimumSize ?? options.minSize;
			for (let option of ["sizeMaximum", "sizeMinimum", "allowEmpty", "size"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {MapItemFilter}
	 */
	get clone(): MapItemFilter {
		return new MapItemFilter(this);
	}
	/**
	 * @method status
	 * @description Status of this filter.
	 * @returns {MapItemFilterOptionsBase}
	 */
	get status(): MapItemFilterOptionsBase {
		return {
			sizeMaximum: this.#sizeMaximum,
			sizeMinimum: this.#sizeMinimum
		};
	}
	/**
	 * @method allowEmpty
	 * @description Whether to allow an empty map.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowEmpty(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
		}
		this.#sizeMinimum = value ? 0 : 1;
		return this;
	}
	/**
	 * @method size
	 * @description Size of the map.
	 * @param {number} value
	 * @returns {this}
	 */
	size(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`size\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0)) {
			throw new RangeError(`Filter argument \`size\` must be a number which is integer, positive, and safe!`);
		}
		this.#sizeMaximum = value;
		this.#sizeMinimum = value;
		return this;
	}
	/**
	 * @method sizeMaximum
	 * @description Maximum size of the map.
	 * @param {number} value
	 * @returns {this}
	 */
	sizeMaximum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
		}
		if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#sizeMinimum)) {
			throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#sizeMinimum}!`);
		}
		this.#sizeMaximum = value;
		return this;
	}
	/**
	 * @method sizeMinimum
	 * @description Minimum size of the map.
	 * @param {number} value
	 * @returns {this}
	 */
	sizeMinimum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#sizeMaximum)) {
			throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${this.#sizeMaximum}!`);
		}
		this.#sizeMinimum = value;
		return this;
	}
	/** @alias sizeMaximum */sizeMax = this.sizeMaximum;
	/** @alias sizeMaximum */maximumSize = this.sizeMaximum;
	/** @alias sizeMaximum */maxSize = this.sizeMaximum;
	/** @alias sizeMinimum */sizeMin = this.sizeMinimum;
	/** @alias sizeMinimum */minimumSize = this.sizeMinimum;
	/** @alias sizeMinimum */minSize = this.sizeMinimum;
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
	type MapItemFilterOptions,
	type MapItemFilterOptionsBase
};
