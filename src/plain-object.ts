import { ObjectMeta } from "./internal/object-meta.js";
import { isObjectPlain } from "./native/plain-object.js";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
interface PlainObjectItemFilterOptions {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty plain object.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property entriesConfigurable
	 * @description Whether contain configurable entries in the plain object.
	 * @default undefined
	 */
	entriesConfigurable?: boolean;
	/**
	 * @property entriesCount
	 * @description Entries of the plain object.
	 * @default undefined
	 */
	entriesCount?: number;
	/**
	 * @property entriesCountMaximum
	 * @description Maximum entries of the plain object.
	 * @default Infinity
	 */
	entriesCountMaximum?: number;
	/**
	 * @property entriesCountMinimum
	 * @description Minimum entries of the plain object.
	 * @default 1
	 */
	entriesCountMinimum?: number;
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
	/**
	 * @property strict
	 * @description Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @default false
	 */
	strict?: boolean;
	/** @alias entriesConfigurable */configurableEntries?: boolean;
	/** @alias entriesCount */entries?: number;
	/** @alias entriesCountMaximum */entriesMaximum?: number;
	/** @alias entriesCountMaximum */entriesCountMax?: number;
	/** @alias entriesCountMaximum */entriesMax?: number;
	/** @alias entriesCountMaximum */maximumEntries?: number;
	/** @alias entriesCountMaximum */maxEntries?: number;
	/** @alias entriesCountMinimum */entriesMinimum?: number;
	/** @alias entriesCountMinimum */entriesCountMin?: number;
	/** @alias entriesCountMinimum */entriesMin?: number;
	/** @alias entriesCountMinimum */minimumEntries?: number;
	/** @alias entriesCountMinimum */minEntries?: number;
	/** @alias entriesEnumerable */enumerableEntries?: boolean;
	/** @alias entriesGetter */getterEntries?: boolean;
	/** @alias entriesSetter */setterEntries?: boolean;
	/** @alias entriesWritable */writableEntries?: boolean;
	/** @alias keysSymbol */symbolKeys?: boolean;
}
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
	#entriesConfigurable?: boolean;
	#entriesCountMaximum: number;
	#entriesCountMinimum: number;
	#entriesEnumerable?: boolean;
	#entriesGetter?: boolean;
	#entriesSetter?: boolean;
	#entriesWritable?: boolean;
	#keysSymbol?: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of plain object to determine item.
	 * @param {PlainObjectItemFilterOptions} [options={}] Options.
	*/
	constructor(options: PlainObjectItemFilterOptions = {}) {
		let {
			allowEmpty = false,
			entriesConfigurable,
			entriesCount,
			entriesCountMaximum,
			entriesCountMinimum,
			entriesEnumerable,
			entriesGetter,
			entriesSetter,
			entriesWritable,
			keysSymbol,
			strict = false,
			...aliases
		} = options;
		entriesConfigurable ??= aliases.configurableEntries;
		entriesCount ??= aliases.entries;
		entriesCountMaximum ??= aliases.entriesMaximum ?? aliases.entriesCountMax ?? aliases.entriesMax ?? aliases.maximumEntries ?? aliases.maxEntries ?? Infinity;
		entriesCountMinimum ??= aliases.entriesMinimum ?? aliases.entriesCountMin ?? aliases.entriesMin ?? aliases.minimumEntries ?? aliases.minEntries ?? 1;
		entriesEnumerable ??= aliases.enumerableEntries;
		entriesGetter ??= aliases.getterEntries;
		entriesSetter ??= aliases.setterEntries;
		entriesWritable ??= aliases.writableEntries;
		keysSymbol ??= aliases.symbolKeys;
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
		}
		if (typeof entriesConfigurable !== "boolean" && typeof entriesConfigurable !== "undefined") {
			throw new TypeError(`Argument \`options.entriesConfigurable\` must be type of boolean or undefined!`);
		}
		if (!(typeof entriesCount === "number" && Number.isSafeInteger(entriesCount) && entriesCount >= 0) && typeof entriesCount !== "undefined") {
			throw new TypeError(`Argument \`options.entriesCount\` must be type of number (integer, positive, and safe) or undefined!`);
		}
		if (entriesCountMaximum !== Infinity && !(typeof entriesCountMaximum === "number" && Number.isSafeInteger(entriesCountMaximum) && entriesCountMaximum >= 0)) {
			throw new TypeError(`Argument \`options.entriesCountMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
		}
		if (!(typeof entriesCountMinimum === "number" && Number.isSafeInteger(entriesCountMinimum) && entriesCountMinimum >= 0 && entriesCountMinimum <= entriesCountMaximum)) {
			throw new TypeError(`Argument \`options.entriesCountMinimum\` must be type of number (integer, positive, and safe) and <= ${entriesCountMaximum}!`);
		}
		if (typeof entriesEnumerable !== "boolean" && typeof entriesEnumerable !== "undefined") {
			throw new TypeError(`Argument \`options.entriesEnumerable\` must be type of boolean or undefined!`);
		}
		if (typeof entriesGetter !== "boolean" && typeof entriesGetter !== "undefined") {
			throw new TypeError(`Argument \`options.entriesGetter\` must be type of boolean or undefined!`);
		}
		if (typeof entriesSetter !== "boolean" && typeof entriesSetter !== "undefined") {
			throw new TypeError(`Argument \`options.entriesSetter\` must be type of boolean or undefined!`);
		}
		if (typeof entriesWritable !== "boolean" && typeof entriesWritable !== "undefined") {
			throw new TypeError(`Argument \`options.entriesWritable\` must be type of boolean or undefined!`);
		}
		if (typeof keysSymbol !== "boolean" && typeof keysSymbol !== "undefined") {
			throw new TypeError(`Argument \`options.keysSymbol\` must be type of boolean or undefined!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
		}
		if (typeof entriesCount === "number") {
			this.#entriesCountMaximum = entriesCount;
			this.#entriesCountMinimum = entriesCount;
		} else {
			this.#entriesCountMaximum = entriesCountMaximum;
			this.#entriesCountMinimum = allowEmpty ? 0 : entriesCountMinimum;
		}
		if (strict) {
			this.#entriesConfigurable = true;
			this.#entriesEnumerable = true;
			this.#entriesGetter = false;
			this.#entriesSetter = false;
			this.#entriesWritable = true;
			this.#keysSymbol = false;
		} else {
			this.#entriesConfigurable = entriesConfigurable;
			this.#entriesEnumerable = entriesEnumerable;
			this.#entriesGetter = entriesGetter;
			this.#entriesSetter = entriesSetter;
			this.#entriesWritable = entriesWritable;
			this.#keysSymbol = keysSymbol;
		}
	}
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
	static test(item: unknown, options : PlainObjectItemFilterOptions = {}): boolean {
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
function isPlainObject(item: unknown, options : PlainObjectItemFilterOptions = {}): boolean {
	return new PlainObjectItemFilter(options).test(item);
}
export {
	isPlainObject,
	isPlainObject as isObjectPlain,
	PlainObjectItemFilter,
	PlainObjectItemFilter as ObjectPlainItemFilter,
	type PlainObjectItemFilterOptions,
	type PlainObjectItemFilterOptions as ObjectPlainItemFilterOptions
};
