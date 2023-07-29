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
var _ObjectFilter_status;
import { enumResolver, ThreePhaseConditionEnum } from "../internal/enum.js";
import { ObjectMeta } from "../internal/object-meta.js";
/**
 * Filter for object.
 */
export class ObjectFilter {
    /**
     * Initialize the object filter.
     * @param {ObjectFilter | ObjectFilterOptions} [options] Options.
     */
    constructor(options) {
        _ObjectFilter_status.set(this, {
            allowArray: false,
            allowNull: false,
            allowRegExp: false,
            entriesConfigurable: "neutral",
            entriesCountMaximum: Infinity,
            entriesCountMinimum: 1,
            entriesEnumerable: "neutral",
            entriesGetter: "neutral",
            entriesSetter: "neutral",
            entriesWritable: "neutral",
            keysSymbol: "neutral"
        });
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
            __classPrivateFieldSet(this, _ObjectFilter_status, { ...__classPrivateFieldGet(options, _ObjectFilter_status, "f") }, "f");
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
     * Clone this object filter for reuse.
     * @returns {ObjectFilter} Another instance of this object filter.
     */
    get clone() {
        return new ObjectFilter(this);
    }
    /**
     * Get the status of this object filter.
     * @returns {ObjectFilterStatus} Status of this object filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _ObjectFilter_status, "f") };
    }
    /**
     * Whether to allow `Array` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowArray(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowArray\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").allowArray = value;
        return this;
    }
    /**
     * Whether to allow an empty object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * Whether to allow `null` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowNull(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowNull\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").allowNull = value;
        return this;
    }
    /**
     * Whether to allow `RegExp` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowRegExp(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowRegExp\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").allowRegExp = value;
        return this;
    }
    /**
     * Whether contain configurable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesConfigurable(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesConfigurable = enumResolver(ThreePhaseConditionEnum, value, "entriesConfigurable");
        return this;
    }
    /**
     * Entries count of the object.
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
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMaximum = value;
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum = value;
        return this;
    }
    /**
     * Maximum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum)) {
            throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum}!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMaximum = value;
        return this;
    }
    /**
     * Minimum entries count of the object.
     * @param {number} value
     * @returns {this}
     */
    entriesCountMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`entriesCountMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMaximum)) {
            throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMaximum}!`);
        }
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum = value;
        return this;
    }
    /**
     * Whether contain enumerable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesEnumerable(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesEnumerable = enumResolver(ThreePhaseConditionEnum, value, "entriesEnumerable");
        return this;
    }
    /**
     * Whether contain getter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesGetter(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesGetter = enumResolver(ThreePhaseConditionEnum, value, "entriesGetter");
        return this;
    }
    /**
     * Whether contain setter entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesSetter(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesSetter = enumResolver(ThreePhaseConditionEnum, value, "entriesSetter");
        return this;
    }
    /**
     * Whether contain writable entries in the object.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    entriesWritable(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesWritable = enumResolver(ThreePhaseConditionEnum, value, "entriesWritable");
        return this;
    }
    /**
     * Whether contain symbols in the object keys.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    keysSymbol(value) {
        __classPrivateFieldGet(this, _ObjectFilter_status, "f").keysSymbol = enumResolver(ThreePhaseConditionEnum, value, "keysSymbol");
        return this;
    }
    /**
     * Whether to not allow getters, setters, non-configurable, non-enumerable, and non-writable in the object, and not allow symbols in the object keys.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    plain(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`plain\` must be type of boolean!`);
        }
        if (value) {
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesConfigurable = "true";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesEnumerable = "true";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesGetter = "false";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesSetter = "false";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesWritable = "true";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").keysSymbol = "false";
        }
        else {
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesConfigurable = "neutral";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesEnumerable = "neutral";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesGetter = "neutral";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesSetter = "neutral";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesWritable = "neutral";
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").keysSymbol = "neutral";
        }
        return this;
    }
    /**
     * Determine item with the configured object filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "object" ||
            (!__classPrivateFieldGet(this, _ObjectFilter_status, "f").allowArray && Array.isArray(item)) ||
            (!__classPrivateFieldGet(this, _ObjectFilter_status, "f").allowNull && item === null) ||
            (!__classPrivateFieldGet(this, _ObjectFilter_status, "f").allowRegExp && item instanceof RegExp)) {
            return false;
        }
        let itemObjectMeta = new ObjectMeta(item);
        if (Object.entries(item).length !== itemObjectMeta.entriesEnumerable.length ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").keysSymbol === "false" && itemObjectMeta.keysSymbol.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").keysSymbol === "true" && itemObjectMeta.keysSymbol.length === 0) ||
            __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMaximum < itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length ||
            itemObjectMeta.entriesGetter.length + itemObjectMeta.entriesNonAccessor.length + itemObjectMeta.entriesSetter.length + itemObjectMeta.keysSymbol.length < __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesCountMinimum ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesConfigurable === "false" && itemObjectMeta.entriesConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesConfigurable === "true" && itemObjectMeta.entriesNonConfigurable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesEnumerable === "false" && itemObjectMeta.entriesEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesEnumerable === "true" && itemObjectMeta.entriesNonEnumerable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesGetter === "false" && itemObjectMeta.entriesGetter.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesSetter === "false" && itemObjectMeta.entriesSetter.length > 0) ||
            ((__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesGetter === "true" ||
                __classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesSetter === "true") && itemObjectMeta.entriesNonAccessor.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesWritable === "false" && itemObjectMeta.entriesWritable.length > 0) ||
            (__classPrivateFieldGet(this, _ObjectFilter_status, "f").entriesWritable === "true" && itemObjectMeta.entriesNonWritable.length > 0)) {
            return false;
        }
        return true;
    }
    /**
     * Determine item with the object filter.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_ObjectFilter_status = new WeakMap();
/**
 * Determine item with the object filter.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterObject(item, options = {}) {
    return new ObjectFilter(options).test(item);
}
