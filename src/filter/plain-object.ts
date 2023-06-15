import { isObjectPlain } from "../object.js";
import { ObjectItemFilter } from "./object.js";
/**
 * @access private
 * @class ObjectMeta
 */
class ObjectMeta {
	prototypes: any;
	keysSymbol: symbol[];
	descriptors: object & { [x: string]: PropertyDescriptor; };
	entriesConfigurable: string[];
	entriesEnumerable: string[];
	entriesGetter: string[];
	entriesNonAccessor: string[];
	entriesNonConfigurable: string[];
	entriesNonEnumerable: string[];
	entriesNonWritable: string[];
	entriesSetter: string[];
	entriesWritable: string[];
	/**
	 * @constructor
	 * @param {object} item
	 */
	constructor(item: object) {
		this.prototypes = Object.getPrototypeOf(item);
		this.keysSymbol = Object.getOwnPropertySymbols(item);
		this.descriptors = Object.getOwnPropertyDescriptors(item);
		this.entriesConfigurable = [];
		this.entriesEnumerable = [];
		this.entriesGetter = [];
		this.entriesNonAccessor = [];
		this.entriesNonConfigurable = [];
		this.entriesNonEnumerable = [];
		this.entriesNonWritable = [];
		this.entriesSetter = [];
		this.entriesWritable = [];
		for (let descriptor in this.descriptors) {
			if (Object.prototype.hasOwnProperty.call(this.descriptors, descriptor)) {
				let descriptorProperties: PropertyDescriptor = this.descriptors[descriptor];
				if (descriptorProperties.configurable) {
					this.entriesConfigurable.push(descriptor);
				} else {
					this.entriesNonConfigurable.push(descriptor);
				}
				if (descriptorProperties.enumerable) {
					this.entriesEnumerable.push(descriptor);
				} else {
					this.entriesNonEnumerable.push(descriptor);
				}
				if (typeof descriptorProperties.get !== "undefined") {
					this.entriesGetter.push(descriptor);
				}
				if (typeof descriptorProperties.set !== "undefined") {
					this.entriesSetter.push(descriptor);
				}
				if (typeof descriptorProperties.get === "undefined" && typeof descriptorProperties.set === "undefined") {
					this.entriesNonAccessor.push(descriptor);
				}
				if (descriptorProperties.writable) {
					this.entriesWritable.push(descriptor);
				} else {
					this.entriesNonWritable.push(descriptor);
				}
			}
		}
	}
}
const objectFilter = new ObjectItemFilter();
interface PlainObjectItemFilterOptionsBase {
	/**
	 * @property entriesConfigurable
	 * @description Whether contain configurable entries in the plain object.
	 * @default undefined
	 */
	entriesConfigurable?: boolean;
	/**
	 * @property entriesCountMaximum
	 * @description Maximum entries count of the plain object.
	 * @default Infinity
	 */
	entriesCountMaximum: number;
	/**
	 * @property entriesMinimum
	 * @description Minimum entries count of the plain object.
	 * @default 1
	 */
	entriesCountMinimum: number;
	/**
	 * @property entriesEnumerable
	 * @description Whether contain enumerable entries in the plain object.
	 * @default undefined
	 */
	entriesEnumerable?: boolean;
	/**
	 * @property entriesGetter
	 * @description Whether contain getter entries in the plain object.
	 * @default undefined
	 */
	entriesGetter?: boolean;
	/**
	 * @property entriesSetter
	 * @description Whether contain setter entries in the plain object.
	 * @default undefined
	 */
	entriesSetter?: boolean;
	/**
	 * @property entriesWritable
	 * @description Whether contain writable entries in the plain object.
	 * @default undefined
	 */
	entriesWritable?: boolean;
	/**
	 * @property keysSymbol
	 * @description Whether contain symbols in the plain object keys.
	 * @default undefined
	 */
	keysSymbol?: boolean;
}
interface PlainObjectItemFilterOptions extends Partial<PlainObjectItemFilterOptionsBase> {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty plain object.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property entriesCount
	 * @description Entries count of the plain object.
	 * @default undefined
	 */
	entriesCount?: number;
	/**
	 * @property strict
	 * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @default false
	 */
	strict?: boolean;
	/** @alias entriesConfigurable */configurableEntries?: boolean;
	/** @alias entriesCountMaximum */entriesCountMax?: number;
	/** @alias entriesCountMaximum */maximumEntries?: number;
	/** @alias entriesCountMaximum */maxEntries?: number;
	/** @alias entriesCountMinimum */entriesCountMin?: number;
	/** @alias entriesCountMinimum */minimumEntries?: number;
	/** @alias entriesCountMinimum */minEntries?: number;
	/** @alias entriesEnumerable */enumerableEntries?: boolean;
	/** @alias entriesGetter */getterEntries?: boolean;
	/** @alias entriesSetter */setterEntries?: boolean;
	/** @alias entriesWritable */writableEntries?: boolean;
	/** @alias keysSymbol */symbolKeys?: boolean
}
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
	#entriesConfigurable?: boolean;
	#entriesCountMaximum = Infinity;
	#entriesCountMinimum = 1;
	#entriesEnumerable?: boolean;
	#entriesGetter?: boolean;
	#entriesSetter?: boolean;
	#entriesWritable?: boolean;
	#keysSymbol?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of plain object to determine item.
	 * @param {PlainObjectItemFilter | PlainObjectItemFilterOptions} [options] Options.
	*/
	constructor(options?: PlainObjectItemFilter | PlainObjectItemFilterOptions) {
		if (options instanceof PlainObjectItemFilter) {
			this.#entriesConfigurable = options.#entriesConfigurable;
			this.#entriesCountMaximum = options.#entriesCountMaximum;
			this.#entriesCountMinimum = options.#entriesCountMinimum;
			this.#entriesEnumerable = options.#entriesEnumerable;
			this.#entriesGetter = options.#entriesGetter;
			this.#entriesSetter = options.#entriesSetter;
			this.#entriesWritable = options.#entriesWritable;
			this.#keysSymbol = options.#keysSymbol;
		} else if (typeof options !== "undefined") {
			options.entriesConfigurable ??= options.configurableEntries;
			options.entriesCountMaximum ??= options.entriesCountMax ?? options.maximumEntries ?? options.maxEntries;
			options.entriesCountMinimum ??= options.entriesCountMin ?? options.minimumEntries ?? options.minEntries;
			options.entriesEnumerable ??= options.enumerableEntries;
			options.entriesGetter ??= options.getterEntries;
			options.entriesSetter ??= options.setterEntries;
			options.entriesWritable ??= options.writableEntries;
			options.keysSymbol ??= options.symbolKeys;
			for (let option of ["entriesConfigurable", "entriesCountMaximum", "entriesCountMinimum", "entriesEnumerable", "entriesGetter", "entriesSetter", "entriesWritable", "keysSymbol", "allowEmpty", "entriesCount", "strict"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {PlainObjectItemFilter} Another instance of this filter.
	 */
	get clone(): PlainObjectItemFilter {
		return new PlainObjectItemFilter(this);
	}
	/**
	 * @method status
	 * @description Get the status of this filter.
	 * @returns {PlainObjectItemFilterOptionsBase} Status of this filter.
	 */
	get status(): PlainObjectItemFilterOptionsBase {
		return {
			entriesConfigurable: this.#entriesConfigurable,
			entriesCountMaximum: this.#entriesCountMaximum,
			entriesCountMinimum: this.#entriesCountMinimum,
			entriesEnumerable: this.#entriesEnumerable,
			entriesGetter: this.#entriesGetter,
			entriesSetter: this.#entriesSetter,
			entriesWritable: this.#entriesWritable,
			keysSymbol: this.#keysSymbol
		};
	}
	/**
	 * @method allowEmpty
	 * @description Whether to allow an empty plain object.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowEmpty(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
		}
		this.#entriesCountMinimum = value ? 0 : 1;
		return this;
	}
	/**
	 * @method entriesConfigurable
	 * @description Whether contain configurable entries in the plain object.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	entriesConfigurable(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`entriesConfigurable\` must be type of boolean or undefined!`);
		}
		this.#entriesConfigurable = value;
		return this;
	}
	/**
	 * @method entriesCount
	 * @description Entries count of the plain object.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCount(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCount\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0)) {
			throw new RangeError(`Filter argument \`entriesCount\` must be a number which is integer, positive, and safe!`);
		}
		this.#entriesCountMaximum = value;
		this.#entriesCountMinimum = value;
		return this;
	}
	/**
	 * @method entriesCountMaximum
	 * @description Maximum entries count of the plain object.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCountMaximum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCountMaximum\` must be type of number!`);
		}
		if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#entriesCountMinimum)) {
			throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#entriesCountMinimum}!`);
		}
		this.#entriesCountMaximum = value;
		return this;
	}
	/**
	 * @method entriesCountMinimum
	 * @description Minimum entries count of the plain object.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCountMinimum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCountMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#entriesCountMaximum)) {
			throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${this.#entriesCountMaximum}!`);
		}
		this.#entriesCountMinimum = value;
		return this;
	}
	/**
	 * @method entriesEnumerable
	 * @description Whether contain enumerable entries in the plain object.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	entriesEnumerable(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`entriesEnumerable\` must be type of boolean or undefined!`);
		}
		this.#entriesEnumerable = value;
		return this;
	}
	/**
	 * @method entriesGetter
	 * @description Whether contain getter entries in the plain object.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	entriesGetter(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`entriesGetter\` must be type of boolean or undefined!`);
		}
		this.#entriesGetter = value;
		return this;
	}
	/**
	 * @method entriesSetter
	 * @description Whether contain setter entries in the plain object.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	entriesSetter(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`entriesSetter\` must be type of boolean or undefined!`);
		}
		this.#entriesSetter = value;
		return this;
	}
	/**
	 * @method entriesWritable
	 * @description Whether contain writable entries in the plain object.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	entriesWritable(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`entriesWritable\` must be type of boolean or undefined!`);
		}
		this.#entriesWritable = value;
		return this;
	}
	/**
	 * @method keysSymbol
	 * @description Whether contain symbols in the plain object keys.
	 * @param {boolean | undefined} [value]
	 * @returns {this}
	 */
	keysSymbol(value?: boolean | undefined): this {
		if (typeof value !== "boolean" && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`keysSymbol\` must be type of boolean or undefined!`);
		}
		this.#keysSymbol = value;
		return this;
	}
	/**
	 * @method strict
	 * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	strict(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`strict\` must be type of boolean!`);
		}
		if (value) {
			this.#entriesConfigurable = true;
			this.#entriesEnumerable = true;
			this.#entriesGetter = false;
			this.#entriesSetter = false;
			this.#entriesWritable = true;
			this.#keysSymbol = false;
		} else {
			this.#entriesConfigurable = undefined;
			this.#entriesEnumerable = undefined;
			this.#entriesGetter = undefined;
			this.#entriesSetter = undefined;
			this.#entriesWritable = undefined;
			this.#keysSymbol = undefined;
		}
		return this;
	}
	/** @alias entriesConfigurable */configurableEntries = this.entriesConfigurable;
	/** @alias entriesCountMaximum */entriesCountMax = this.entriesCountMaximum;
	/** @alias entriesCountMaximum */maximumEntries = this.entriesCountMaximum;
	/** @alias entriesCountMaximum */maxEntries = this.entriesCountMaximum;
	/** @alias entriesCountMinimum */entriesCountMin = this.entriesCountMinimum;
	/** @alias entriesCountMinimum */minimumEntries = this.entriesCountMinimum;
	/** @alias entriesCountMinimum */minEntries = this.entriesCountMinimum;
	/** @alias entriesEnumerable */enumerableEntries = this.entriesEnumerable;
	/** @alias entriesGetter */getterEntries = this.entriesGetter;
	/** @alias entriesSetter */setterEntries = this.entriesSetter;
	/** @alias entriesWritable */writableEntries = this.entriesWritable;
	/** @alias keysSymbol */symbolKeys = this.keysSymbol;
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of plain object.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		if (
			!objectFilter.test(item) ||
			!(item instanceof Object) ||
			item.constructor.name !== "Object" ||
			Object.prototype.toString.call(item) !== "[object Object]" ||
			!isObjectPlain(item)
		) {
			return false;
		}
		let itemObjectMeta: ObjectMeta = new ObjectMeta(item);
		if (
			Object.entries(item).length !== itemObjectMeta.entriesEnumerable.length ||
			(this.#keysSymbol === false && itemObjectMeta.keysSymbol.length > 0) ||
			(this.#keysSymbol === true && itemObjectMeta.keysSymbol.length === 0) ||
			itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length ||
			itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length !== itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length ||
			itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
			itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
			this.#entriesCountMaximum < itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length ||
			itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length < this.#entriesCountMinimum ||
			(this.#entriesConfigurable === false && itemObjectMeta.entriesConfigurable.length > 0) ||
			(this.#entriesConfigurable === true && itemObjectMeta.entriesNonConfigurable.length > 0) ||
			(this.#entriesEnumerable === false && itemObjectMeta.entriesEnumerable.length > 0) ||
			(this.#entriesEnumerable === true && itemObjectMeta.entriesNonEnumerable.length > 0) ||
			(this.#entriesGetter === false && itemObjectMeta.entriesGetter.length > 0) ||
			(this.#entriesSetter === false && itemObjectMeta.entriesSetter.length > 0) ||
			((
				this.#entriesGetter === true ||
				this.#entriesSetter === true
			) && itemObjectMeta.entriesNonAccessor.length > 0) ||
			(this.#entriesWritable === false && itemObjectMeta.entriesWritable.length > 0) ||
			(this.#entriesWritable === true && itemObjectMeta.entriesNonWritable.length > 0)
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of plain object.
	 * @param {unknown} item Item that need to determine.
	 * @param {PlainObjectItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: PlainObjectItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isPlainObject
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {PlainObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isPlainObject(item: unknown, options: PlainObjectItemFilterOptions = {}): boolean {
	return new PlainObjectItemFilter(options).test(item);
}
export {
	isPlainObject,
	isPlainObject as isObjectPlain,
	PlainObjectItemFilter,
	PlainObjectItemFilter as ObjectPlainItemFilter,
	type PlainObjectItemFilterOptions,
	type PlainObjectItemFilterOptions as ObjectPlainItemFilterOptions,
	type PlainObjectItemFilterOptionsBase,
	type PlainObjectItemFilterOptionsBase as ObjectPlainItemFilterOptionsBase
};
