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
    #entriesCountMaximum = Infinity;
    #entriesCountMinimum = 1;
    #entriesEnumerable;
    #entriesGetter;
    #entriesSetter;
    #entriesWritable;
    #keysSymbol;
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {PlainObjectItemFilter | PlainObjectItemFilterOptions} [options] Options.
    */
    constructor(options) {
        if (options instanceof PlainObjectItemFilter) {
            this.#entriesConfigurable = options.#entriesConfigurable;
            this.#entriesCountMaximum = options.#entriesCountMaximum;
            this.#entriesCountMinimum = options.#entriesCountMinimum;
            this.#entriesEnumerable = options.#entriesEnumerable;
            this.#entriesGetter = options.#entriesGetter;
            this.#entriesSetter = options.#entriesSetter;
            this.#entriesWritable = options.#entriesWritable;
            this.#keysSymbol = options.#keysSymbol;
        }
        else if (typeof options !== "undefined") {
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
    get clone() {
        return new PlainObjectItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {PlainObjectItemFilterOptionsBase} Status of this filter.
     */
    get status() {
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
    allowEmpty(value = true) {
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
    entriesConfigurable(value) {
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
    entriesCount(value) {
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
    entriesCountMaximum(value) {
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
    entriesCountMinimum(value) {
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
    entriesEnumerable(value) {
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
    entriesGetter(value) {
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
    entriesSetter(value) {
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
    entriesWritable(value) {
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
    keysSymbol(value) {
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
    strict(value = true) {
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
        }
        else {
            this.#entriesConfigurable = undefined;
            this.#entriesEnumerable = undefined;
            this.#entriesGetter = undefined;
            this.#entriesSetter = undefined;
            this.#entriesWritable = undefined;
            this.#keysSymbol = undefined;
        }
        return this;
    }
    /** @alias entriesConfigurable */ configurableEntries = this.entriesConfigurable;
    /** @alias entriesCountMaximum */ entriesCountMax = this.entriesCountMaximum;
    /** @alias entriesCountMaximum */ maximumEntries = this.entriesCountMaximum;
    /** @alias entriesCountMaximum */ maxEntries = this.entriesCountMaximum;
    /** @alias entriesCountMinimum */ entriesCountMin = this.entriesCountMinimum;
    /** @alias entriesCountMinimum */ minimumEntries = this.entriesCountMinimum;
    /** @alias entriesCountMinimum */ minEntries = this.entriesCountMinimum;
    /** @alias entriesEnumerable */ enumerableEntries = this.entriesEnumerable;
    /** @alias entriesGetter */ getterEntries = this.entriesGetter;
    /** @alias entriesSetter */ setterEntries = this.entriesSetter;
    /** @alias entriesWritable */ writableEntries = this.entriesWritable;
    /** @alias keysSymbol */ symbolKeys = this.keysSymbol;
    /**
     * @method test
     * @description Determine item with the configured filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!objectFilter.test(item) ||
            !(item instanceof Object) ||
            item.constructor.name !== "Object" ||
            Object.prototype.toString.call(item) !== "[object Object]" ||
            !isObjectPlain(item)) {
            return false;
        }
        let itemObjectMeta = new ObjectMeta(item);
        if (Object.entries(item).length !== itemObjectMeta.entriesEnumerable.length ||
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
            ((this.#entriesGetter === true ||
                this.#entriesSetter === true) && itemObjectMeta.entriesNonAccessor.length > 0) ||
            (this.#entriesWritable === false && itemObjectMeta.entriesWritable.length > 0) ||
            (this.#entriesWritable === true && itemObjectMeta.entriesNonWritable.length > 0)) {
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
    static test(item, options = {}) {
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
function isPlainObject(item, options = {}) {
    return new PlainObjectItemFilter(options).test(item);
}
export { isPlainObject, isPlainObject as isObjectPlain, PlainObjectItemFilter, PlainObjectItemFilter as ObjectPlainItemFilter };
