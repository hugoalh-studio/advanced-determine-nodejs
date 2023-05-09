var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PlainObjectItemFilter_entriesConfigurable, _PlainObjectItemFilter_entriesCountMaximum, _PlainObjectItemFilter_entriesCountMinimum, _PlainObjectItemFilter_entriesEnumerable, _PlainObjectItemFilter_entriesGetter, _PlainObjectItemFilter_entriesSetter, _PlainObjectItemFilter_entriesWritable, _PlainObjectItemFilter_keysSymbol;
import { ObjectMeta } from "./internal/object-meta.js";
import { isObjectPlain } from "./native/plain-object.js";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
class PlainObjectItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {PlainObjectItemFilter | PlainObjectItemFilterOptions} [options] Options.
    */
    constructor(options) {
        _PlainObjectItemFilter_entriesConfigurable.set(this, void 0);
        _PlainObjectItemFilter_entriesCountMaximum.set(this, Infinity);
        _PlainObjectItemFilter_entriesCountMinimum.set(this, 1);
        _PlainObjectItemFilter_entriesEnumerable.set(this, void 0);
        _PlainObjectItemFilter_entriesGetter.set(this, void 0);
        _PlainObjectItemFilter_entriesSetter.set(this, void 0);
        _PlainObjectItemFilter_entriesWritable.set(this, void 0);
        _PlainObjectItemFilter_keysSymbol.set(this, void 0);
        /** @alias entriesConfigurable */ this.configurableEntries = this.entriesConfigurable;
        /** @alias entriesCountMaximum */ this.entriesCountMax = this.entriesCountMaximum;
        /** @alias entriesCountMaximum */ this.maximumEntries = this.entriesCountMaximum;
        /** @alias entriesCountMaximum */ this.maxEntries = this.entriesCountMaximum;
        /** @alias entriesCountMinimum */ this.entriesCountMin = this.entriesCountMinimum;
        /** @alias entriesCountMinimum */ this.minimumEntries = this.entriesCountMinimum;
        /** @alias entriesCountMinimum */ this.minEntries = this.entriesCountMinimum;
        /** @alias entriesEnumerable */ this.enumerableEntries = this.entriesEnumerable;
        /** @alias entriesGetter */ this.getterEntries = this.entriesGetter;
        /** @alias entriesSetter */ this.setterEntries = this.entriesSetter;
        /** @alias entriesWritable */ this.writableEntries = this.entriesWritable;
        /** @alias keysSymbol */ this.symbolKeys = this.keysSymbol;
        if (options instanceof PlainObjectItemFilter) {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesConfigurable, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMaximum, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesCountMaximum, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesCountMinimum, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesEnumerable, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesGetter, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesSetter, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, __classPrivateFieldGet(options, _PlainObjectItemFilter_entriesWritable, "f"), "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, __classPrivateFieldGet(options, _PlainObjectItemFilter_keysSymbol, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.entriesConfigurable ?? (options.entriesConfigurable = options.configurableEntries);
            options.entriesCount ?? (options.entriesCount = options.entries);
            options.entriesCountMaximum ?? (options.entriesCountMaximum = options.entriesCountMax ?? options.entriesMaximum ?? options.entriesMax ?? options.maximumEntries ?? options.maxEntries);
            options.entriesCountMinimum ?? (options.entriesCountMinimum = options.entriesCountMin ?? options.entriesMinimum ?? options.entriesMin ?? options.minimumEntries ?? options.minEntries);
            options.entriesEnumerable ?? (options.entriesEnumerable = options.enumerableEntries);
            options.entriesGetter ?? (options.entriesGetter = options.getterEntries);
            options.entriesSetter ?? (options.entriesSetter = options.setterEntries);
            options.entriesWritable ?? (options.entriesWritable = options.writableEntries);
            options.keysSymbol ?? (options.keysSymbol = options.symbolKeys);
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
            entriesConfigurable: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesConfigurable, "f"),
            entriesCountMaximum: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMaximum, "f"),
            entriesCountMinimum: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMinimum, "f"),
            entriesEnumerable: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesEnumerable, "f"),
            entriesGetter: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesGetter, "f"),
            entriesSetter: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesSetter, "f"),
            entriesWritable: __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesWritable, "f"),
            keysSymbol: __classPrivateFieldGet(this, _PlainObjectItemFilter_keysSymbol, "f")
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, value ? 0 : 1, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMaximum, value, "f");
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, value, "f");
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
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMinimum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMaximum, value, "f");
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
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMaximum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesCountMinimum, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, value, "f");
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
        __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, value, "f");
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
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, false, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, false, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, true, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, false, "f");
        }
        else {
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesConfigurable, undefined, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesEnumerable, undefined, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesGetter, undefined, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesSetter, undefined, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_entriesWritable, undefined, "f");
            __classPrivateFieldSet(this, _PlainObjectItemFilter_keysSymbol, undefined, "f");
        }
        return this;
    }
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
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_keysSymbol, "f") === false && itemObjectMeta.keysSymbol.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_keysSymbol, "f") === true && itemObjectMeta.keysSymbol.length === 0) ||
            itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length ||
            itemObjectMeta.entriesEnumerable.length + itemObjectMeta.entriesNonEnumerable.length !== itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
            itemObjectMeta.entriesConfigurable.length + itemObjectMeta.entriesNonConfigurable.length !== itemObjectMeta.entriesNonWritable.length + itemObjectMeta.entriesWritable.length ||
            __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMaximum, "f") < itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length < __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesCountMinimum, "f") ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesConfigurable, "f") === false && itemObjectMeta.entriesConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesConfigurable, "f") === true && itemObjectMeta.entriesNonConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesEnumerable, "f") === false && itemObjectMeta.entriesEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesEnumerable, "f") === true && itemObjectMeta.entriesNonEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesGetter, "f") === false && itemObjectMeta.entriesGetter.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesSetter, "f") === false && itemObjectMeta.entriesSetter.length > 0) ||
            ((__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesGetter, "f") === true ||
                __classPrivateFieldGet(this, _PlainObjectItemFilter_entriesSetter, "f") === true) && itemObjectMeta.entriesNonAccessor.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesWritable, "f") === false && itemObjectMeta.entriesWritable.length > 0) ||
            (__classPrivateFieldGet(this, _PlainObjectItemFilter_entriesWritable, "f") === true && itemObjectMeta.entriesNonWritable.length > 0)) {
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
_PlainObjectItemFilter_entriesConfigurable = new WeakMap(), _PlainObjectItemFilter_entriesCountMaximum = new WeakMap(), _PlainObjectItemFilter_entriesCountMinimum = new WeakMap(), _PlainObjectItemFilter_entriesEnumerable = new WeakMap(), _PlainObjectItemFilter_entriesGetter = new WeakMap(), _PlainObjectItemFilter_entriesSetter = new WeakMap(), _PlainObjectItemFilter_entriesWritable = new WeakMap(), _PlainObjectItemFilter_keysSymbol = new WeakMap();
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
