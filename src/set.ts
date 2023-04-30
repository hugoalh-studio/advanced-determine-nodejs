interface SetItemFilterOptionsBase {
	/**
	 * @property sizeMaximum
	 * @description Maximum size of the set.
	 * @default Infinity
	 */
	sizeMaximum: number;
	/**
	 * @property sizeMinimum
	 * @description Minimum size of the set.
	 * @default 1
	 */
	sizeMinimum: number;
}
interface SetItemFilterOptions extends Partial<SetItemFilterOptionsBase> {
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
	#sizeMaximum = Infinity;
	#sizeMinimum = 1;
	/**
	 * @constructor
	 * @description Initialize the filter of type of set to determine item.
	 * @param {SetItemFilter | SetItemFilterOptions} [options] Options.
	 */
	constructor(options?: SetItemFilter | SetItemFilterOptions) {
		if (options instanceof SetItemFilter) {
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
	 * @returns {SetItemFilter} Another instance of this filter.
	 */
	get clone(): SetItemFilter {
		return new SetItemFilter(this);
	}
	/**
	 * @method status
	 * @description Get the status of this filter.
	 * @returns {SetItemFilterOptionsBase} Status of this filter.
	 */
	get status(): SetItemFilterOptionsBase {
		return {
			sizeMaximum: this.#sizeMaximum,
			sizeMinimum: this.#sizeMinimum
		};
	}
	/**
	 * @method allowEmpty
	 * @description Whether to allow an empty set.
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
	 * @description Size of the set.
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
	 * @description Maximum size of the set.
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
	 * @description Minimum size of the set.
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
	type SetItemFilterOptions,
	type SetItemFilterOptionsBase
};
