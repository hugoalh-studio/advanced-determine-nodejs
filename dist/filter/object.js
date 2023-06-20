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
var _ObjectFilter_allowArray, _ObjectFilter_allowNull, _ObjectFilter_allowRegExp, _ObjectFilter_entriesConfigurable, _ObjectFilter_entriesCountMaximum, _ObjectFilter_entriesCountMinimum, _ObjectFilter_entriesEnumerable, _ObjectFilter_entriesGetter, _ObjectFilter_entriesSetter, _ObjectFilter_entriesWritable, _ObjectFilter_keysSymbol;
import { enumResolver, ThreePhaseConditionEnum } from "../internal/enum.js";
import { ObjectMeta } from "../internal/object-meta.js";
/**
 * @class ObjectFilter
 * @description Filter for object.
 */
class ObjectFilter {
    /**
     * @constructor
     * @description Initialize the object filter.
     * @param {ObjectFilter | ObjectFilterOptions} [options] Options.
     */
    constructor(options) {
        _ObjectFilter_allowArray.set(this, false);
        _ObjectFilter_allowNull.set(this, false);
        _ObjectFilter_allowRegExp.set(this, false);
        _ObjectFilter_entriesConfigurable.set(this, "neutral");
        _ObjectFilter_entriesCountMaximum.set(this, Infinity);
        _ObjectFilter_entriesCountMinimum.set(this, 1);
        _ObjectFilter_entriesEnumerable.set(this, "neutral");
        _ObjectFilter_entriesGetter.set(this, "neutral");
        _ObjectFilter_entriesSetter.set(this, "neutral");
        _ObjectFilter_entriesWritable.set(this, "neutral");
        _ObjectFilter_keysSymbol.set(this, "neutral");
        /** @alias allowRegExp */ this.allowRegularExpression = this.allowRegExp;
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
        if (options instanceof ObjectFilter) {
            __classPrivateFieldSet(this, _ObjectFilter_allowArray, __classPrivateFieldGet(options, _ObjectFilter_allowArray, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_allowNull, __classPrivateFieldGet(options, _ObjectFilter_allowNull, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_allowRegExp, __classPrivateFieldGet(options, _ObjectFilter_allowRegExp, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesConfigurable, __classPrivateFieldGet(options, _ObjectFilter_entriesConfigurable, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesCountMaximum, __classPrivateFieldGet(options, _ObjectFilter_entriesCountMaximum, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesCountMinimum, __classPrivateFieldGet(options, _ObjectFilter_entriesCountMinimum, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesEnumerable, __classPrivateFieldGet(options, _ObjectFilter_entriesEnumerable, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesGetter, __classPrivateFieldGet(options, _ObjectFilter_entriesGetter, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesSetter, __classPrivateFieldGet(options, _ObjectFilter_entriesSetter, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesWritable, __classPrivateFieldGet(options, _ObjectFilter_entriesWritable, "f"), "f");
            __classPrivateFieldSet(this, _ObjectFilter_keysSymbol, __classPrivateFieldGet(options, _ObjectFilter_keysSymbol, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.allowRegExp ?? (options.allowRegExp = options.allowRegularExpression);
            options.entriesConfigurable ?? (options.entriesConfigurable = options.configurableEntries);
            options.entriesCountMaximum ?? (options.entriesCountMaximum = options.entriesCountMax ?? options.maximumEntries ?? options.maxEntries);
            options.entriesCountMinimum ?? (options.entriesCountMinimum = options.entriesCountMin ?? options.minimumEntries ?? options.minEntries);
            options.entriesEnumerable ?? (options.entriesEnumerable = options.enumerableEntries);
            options.entriesGetter ?? (options.entriesGetter = options.getterEntries);
            options.entriesSetter ?? (options.entriesSetter = options.setterEntries);
            options.entriesWritable ?? (options.entriesWritable = options.writableEntries);
            options.keysSymbol ?? (options.keysSymbol = options.symbolKeys);
            for (let option of ["allowArray", "allowNull", "allowRegExp", "entriesConfigurable", "entriesCountMaximum", "entriesCountMinimum", "entriesEnumerable", "entriesGetter", "entriesSetter", "entriesWritable", "keysSymbol", "allowEmpty", "entriesCount", "plain"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this object filter for reuse.
     * @returns {ObjectFilter} Another instance of this object filter.
     */
    get clone() {
        return new ObjectFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this object filter.
     * @returns {ObjectFilterStatus} Status of this object filter.
     */
    get status() {
        return {
            allowArray: __classPrivateFieldGet(this, _ObjectFilter_allowArray, "f"),
            allowNull: __classPrivateFieldGet(this, _ObjectFilter_allowNull, "f"),
            allowRegExp: __classPrivateFieldGet(this, _ObjectFilter_allowRegExp, "f"),
            entriesConfigurable: __classPrivateFieldGet(this, _ObjectFilter_entriesConfigurable, "f"),
            entriesCountMaximum: __classPrivateFieldGet(this, _ObjectFilter_entriesCountMaximum, "f"),
            entriesCountMinimum: __classPrivateFieldGet(this, _ObjectFilter_entriesCountMinimum, "f"),
            entriesEnumerable: __classPrivateFieldGet(this, _ObjectFilter_entriesEnumerable, "f"),
            entriesGetter: __classPrivateFieldGet(this, _ObjectFilter_entriesGetter, "f"),
            entriesSetter: __classPrivateFieldGet(this, _ObjectFilter_entriesSetter, "f"),
            entriesWritable: __classPrivateFieldGet(this, _ObjectFilter_entriesWritable, "f"),
            keysSymbol: __classPrivateFieldGet(this, _ObjectFilter_keysSymbol, "f")
        };
    }
    /**
     * @method allowArray
     * @description Whether to allow `Array` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowArray(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowArray\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_allowArray, value, "f");
        return this;
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesCountMinimum, value ? 0 : 1, "f");
        return this;
    }
    /**
     * @method allowNull
     * @description Whether to allow `null` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowNull(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowNull\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_allowNull, value, "f");
        return this;
    }
    /**
     * @method allowRegExp
     * @description Whether to allow `RegExp` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowRegExp(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowRegExp\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_allowRegExp, value, "f");
        return this;
    }
    /**
     * @method entriesConfigurable
     * @description Whether contain configurable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesConfigurable(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`entriesConfigurable\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`entriesConfigurable\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesConfigurable, valueResolve, "f");
        return this;
    }
    /**
     * @method entriesCount
     * @description Entries count of the object.
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
        __classPrivateFieldSet(this, _ObjectFilter_entriesCountMaximum, value, "f");
        __classPrivateFieldSet(this, _ObjectFilter_entriesCountMinimum, value, "f");
        return this;
    }
    /**
     * @method entriesCountMaximum
     * @description Maximum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _ObjectFilter_entriesCountMinimum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _ObjectFilter_entriesCountMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesCountMaximum, value, "f");
        return this;
    }
    /**
     * @method entriesCountMinimum
     * @description Minimum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _ObjectFilter_entriesCountMaximum, "f"))) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _ObjectFilter_entriesCountMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesCountMinimum, value, "f");
        return this;
    }
    /**
     * @method entriesEnumerable
     * @description Whether contain enumerable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesEnumerable(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`entriesEnumerable\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`entriesEnumerable\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesEnumerable, valueResolve, "f");
        return this;
    }
    /**
     * @method entriesGetter
     * @description Whether contain getter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesGetter(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`entriesGetter\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`entriesGetter\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesGetter, valueResolve, "f");
        return this;
    }
    /**
     * @method entriesSetter
     * @description Whether contain setter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesSetter(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`entriesSetter\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`entriesSetter\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesSetter, valueResolve, "f");
        return this;
    }
    /**
     * @method entriesWritable
     * @description Whether contain writable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesWritable(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`entriesWritable\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`entriesWritable\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_entriesWritable, valueResolve, "f");
        return this;
    }
    /**
     * @method keysSymbol
     * @description Whether contain symbols in the object keys.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    keysSymbol(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`keysSymbol\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`keysSymbol\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _ObjectFilter_keysSymbol, valueResolve, "f");
        return this;
    }
    /**
     * @method plain
     * @description Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    plain(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`plain\` must be type of boolean!`);
        }
        if (value) {
            __classPrivateFieldSet(this, _ObjectFilter_entriesConfigurable, "true", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesEnumerable, "true", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesGetter, "false", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesSetter, "false", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesWritable, "true", "f");
            __classPrivateFieldSet(this, _ObjectFilter_keysSymbol, "false", "f");
        }
        else {
            __classPrivateFieldSet(this, _ObjectFilter_entriesConfigurable, "neutral", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesEnumerable, "neutral", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesGetter, "neutral", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesSetter, "neutral", "f");
            __classPrivateFieldSet(this, _ObjectFilter_entriesWritable, "neutral", "f");
            __classPrivateFieldSet(this, _ObjectFilter_keysSymbol, "neutral", "f");
        }
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured object filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "object" ||
            (!__classPrivateFieldGet(this, _ObjectFilter_allowArray, "f") && Array.isArray(item)) ||
            (!__classPrivateFieldGet(this, _ObjectFilter_allowNull, "f") && item === null) ||
            (!__classPrivateFieldGet(this, _ObjectFilter_allowRegExp, "f") && item instanceof RegExp)) {
            return false;
        }
        let itemObjectMeta = new ObjectMeta(item);
        if (Object.entries(item).length !== itemObjectMeta.entriesEnumerable.length ||
            (__classPrivateFieldGet(this, _ObjectFilter_keysSymbol, "f") === "false" && itemObjectMeta.keysSymbol.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_keysSymbol, "f") === "true" && itemObjectMeta.keysSymbol.length === 0) ||
            __classPrivateFieldGet(this, _ObjectFilter_entriesCountMaximum, "f") < itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length < __classPrivateFieldGet(this, _ObjectFilter_entriesCountMinimum, "f") ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesConfigurable, "f") === "false" && itemObjectMeta.entriesConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesConfigurable, "f") === "true" && itemObjectMeta.entriesNonConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesEnumerable, "f") === "false" && itemObjectMeta.entriesEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesEnumerable, "f") === "true" && itemObjectMeta.entriesNonEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesGetter, "f") === "false" && itemObjectMeta.entriesGetter.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesSetter, "f") === "false" && itemObjectMeta.entriesSetter.length > 0) ||
            ((__classPrivateFieldGet(this, _ObjectFilter_entriesGetter, "f") === "true" ||
                __classPrivateFieldGet(this, _ObjectFilter_entriesSetter, "f") === "true") && itemObjectMeta.entriesNonAccessor.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesWritable, "f") === "false" && itemObjectMeta.entriesWritable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_entriesWritable, "f") === "true" && itemObjectMeta.entriesNonWritable.length > 0)) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the object filter.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_ObjectFilter_allowArray = new WeakMap(), _ObjectFilter_allowNull = new WeakMap(), _ObjectFilter_allowRegExp = new WeakMap(), _ObjectFilter_entriesConfigurable = new WeakMap(), _ObjectFilter_entriesCountMaximum = new WeakMap(), _ObjectFilter_entriesCountMinimum = new WeakMap(), _ObjectFilter_entriesEnumerable = new WeakMap(), _ObjectFilter_entriesGetter = new WeakMap(), _ObjectFilter_entriesSetter = new WeakMap(), _ObjectFilter_entriesWritable = new WeakMap(), _ObjectFilter_keysSymbol = new WeakMap();
/**
 * @function filterObject
 * @description Determine item with the object filter.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterObject(item, options = {}) {
    return new ObjectFilter(options).test(item);
}
export { filterObject, ObjectFilter };
