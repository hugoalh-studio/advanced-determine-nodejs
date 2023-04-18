import undefinish from "@hugoalh/undefinish";
import { ObjectMeta } from "./internal/object-meta.js";
import { isObjectPlain } from "./native/plain-object.js";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
	#entriesConfigurable;
	#entriesCountMaximum;
	#entriesCountMinimum;
	#entriesEnumerable;
	#entriesGetter;
	#entriesSetter;
	#entriesWritable;
	#keysSymbol;
	/**
	 * @constructor
	 * @description Initialize the filter of type of plain object to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty plain object.
	 * @param {boolean} [param0.entriesConfigurable] Whether contain configurable entries in the plain object.
	 * @param {number} [param0.entriesCount] Entries of the plain object.
	 * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the plain object.
	 * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the plain object.
	 * @param {boolean} [param0.entriesEnumerable] Whether contain enumerable entries in the plain object.
	 * @param {boolean} [param0.entriesGetter] Whether contain getter entries in the plain object.
	 * @param {boolean} [param0.entriesSetter] Whether contain setter entries in the plain object.
	 * @param {boolean} [param0.entriesWritable] Whether contain writable entries in the plain object.
	 * @param {boolean} [param0.keysSymbol] Whether contain symbols in the plain object keys.
	 * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	*/
	constructor({
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
	} = {}) {
		entriesConfigurable = undefinish(entriesConfigurable, aliases.configurableEntries);
		entriesCount = undefinish(entriesCount, aliases.entries);
		entriesCountMaximum = undefinish(entriesCountMaximum, aliases.entriesMaximum, aliases.entriesCountMax, aliases.entriesMax, aliases.maximumEntries, aliases.maxEntries, Infinity);
		entriesCountMinimum = undefinish(entriesCountMinimum, aliases.entriesMinimum, aliases.entriesCountMin, aliases.entriesMin, aliases.minimumEntries, aliases.minEntries, 1);
		entriesEnumerable = undefinish(entriesEnumerable, aliases.enumerableEntries);
		entriesGetter = undefinish(entriesGetter, aliases.getterEntries);
		entriesSetter = undefinish(entriesSetter, aliases.setterEntries);
		entriesWritable = undefinish(entriesWritable, aliases.writableEntries);
		keysSymbol = undefinish(keysSymbol, aliases.symbolKeys);
		if (typeof allowEmpty !== "boolean") {
			throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
		}
		if (typeof entriesConfigurable !== "boolean" && typeof entriesConfigurable !== "undefined") {
			throw new TypeError(`Argument \`entriesConfigurable\` must be type of boolean or undefined!`);
		}
		if (typeof entriesCount === "number" && !Number.isNaN(entriesCount)) {
			if (!(Number.isSafeInteger(entriesCount) && entriesCount >= 0)) {
				throw new RangeError(`Argument \`entriesCount\` must be a number which is integer, positive, and safe!`);
			}
		} else if (typeof entriesCount !== "undefined") {
			throw new TypeError(`Argument \`entriesCount\` must be type of number or undefined!`);
		}
		if (!(typeof entriesCountMaximum === "number" && !Number.isNaN(entriesCountMaximum))) {
			throw new TypeError(`Argument \`entriesCountMaximum\` must be type of number!`);
		}
		if (entriesCountMaximum !== Infinity && !(Number.isSafeInteger(entriesCountMaximum) && entriesCountMaximum >= 0)) {
			throw new RangeError(`Argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
		}
		if (!(typeof entriesCountMinimum === "number" && !Number.isNaN(entriesCountMinimum))) {
			throw new TypeError(`Argument \`entriesCountMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(entriesCountMinimum) && entriesCountMinimum >= 0 && entriesCountMinimum <= entriesCountMaximum)) {
			throw new RangeError(`Argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${entriesCountMaximum}!`);
		}
		if (typeof entriesEnumerable !== "boolean" && typeof entriesEnumerable !== "undefined") {
			throw new TypeError(`Argument \`entriesEnumerable\` must be type of boolean or undefined!`);
		}
		if (typeof entriesGetter !== "boolean" && typeof entriesGetter !== "undefined") {
			throw new TypeError(`Argument \`entriesGetter\` must be type of boolean or undefined!`);
		}
		if (typeof entriesSetter !== "boolean" && typeof entriesSetter !== "undefined") {
			throw new TypeError(`Argument \`entriesSetter\` must be type of boolean or undefined!`);
		}
		if (typeof entriesWritable !== "boolean" && typeof entriesWritable !== "undefined") {
			throw new TypeError(`Argument \`entriesWritable\` must be type of boolean or undefined!`);
		}
		if (typeof keysSymbol !== "boolean" && typeof keysSymbol !== "undefined") {
			throw new TypeError(`Argument \`keysSymbol\` must be type of boolean or undefined!`);
		}
		if (typeof strict !== "boolean") {
			throw new TypeError(`Argument \`strict\` must be type of boolean!`);
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
	test(item) {
		if (
			!objectFilter.test(item) ||
			!(item instanceof Object) ||
			item.constructor.name !== "Object" ||
			Object.prototype.toString.call(item) !== "[object Object]" ||
			!isObjectPlain(item)
		) {
			return false;
		}
		let itemObjectMeta = new ObjectMeta(item);
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
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
	 * @param {boolean} [param1.entriesConfigurable] Whether contain configurable entries in the plain object.
	 * @param {number} [param1.entriesCount] Entries of the plain object.
	 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the plain object.
	 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the plain object.
	 * @param {boolean} [param1.entriesEnumerable] Whether contain enumerable entries in the plain object.
	 * @param {boolean} [param1.entriesGetter] Whether contain getter entries in the plain object.
	 * @param {boolean} [param1.entriesSetter] Whether contain setter entries in the plain object.
	 * @param {boolean} [param1.entriesWritable] Whether contain writable entries in the plain object.
	 * @param {boolean} [param1.keysSymbol] Whether contain symbols in the plain object keys.
	 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
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
	} = {}) {
		return new this({
			allowEmpty,
			entriesConfigurable,
			entriesCount,
			entriesCountMaximum,
			entriesCountMinimum,
			entriesEnumerable,
			entriesGetter,
			entriesSetter,
			entriesWritable,
			keysSymbol,
			strict,
			...aliases
		}).test(item);
	}
}
/**
 * @function isPlainObject
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
 * @param {boolean} [param1.entriesConfigurable] Whether contain configurable entries in the plain object.
 * @param {number} [param1.entriesCount] Entries of the plain object.
 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the plain object.
 * @param {boolean} [param1.entriesEnumerable] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.entriesGetter] Whether contain getter entries in the plain object.
 * @param {boolean} [param1.entriesSetter] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.entriesWritable] Whether contain writable entries in the plain object.
 * @param {boolean} [param1.keysSymbol] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @returns {boolean} Determine result.
 */
function isPlainObject(item, {
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
} = {}) {
	return new PlainObjectItemFilter({
		allowEmpty,
		entriesConfigurable,
		entriesCount,
		entriesCountMaximum,
		entriesCountMinimum,
		entriesEnumerable,
		entriesGetter,
		entriesSetter,
		entriesWritable,
		keysSymbol,
		strict,
		...aliases
	}).test(item);
}
export {
	isPlainObject,
	isPlainObject as isObjectPlain,
	PlainObjectItemFilter,
	PlainObjectItemFilter as ObjectPlainItemFilter
};
