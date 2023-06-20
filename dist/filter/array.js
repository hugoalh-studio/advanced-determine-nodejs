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
var _ArrayFilter_lengthMaximum, _ArrayFilter_lengthMinimum, _ArrayFilter_strict, _ArrayFilter_unique;
import { isArrayStrict, isArrayUnique } from "../array.js";
/**
 * @class ArrayFilter
 * @description Filter for array.
 */
class ArrayFilter {
    /**
     * @constructor
     * @description Initialize the array filter.
     * @param {ArrayFilter | ArrayFilterOptions} [options] Options.
     */
    constructor(options) {
        _ArrayFilter_lengthMaximum.set(this, Infinity);
        _ArrayFilter_lengthMinimum.set(this, 1);
        _ArrayFilter_strict.set(this, false);
        _ArrayFilter_unique.set(this, false);
        /** @alias length */ this.elements = this.length;
        /** @alias lengthMaximum */ this.elementsMax = this.lengthMaximum;
        /** @alias lengthMaximum */ this.elementsMaximum = this.lengthMaximum;
        /** @alias lengthMaximum */ this.lengthMax = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maxElements = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maximumElements = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maximumLength = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maxLength = this.lengthMaximum;
        /** @alias lengthMinimum */ this.elementsMin = this.lengthMinimum;
        /** @alias lengthMinimum */ this.elementsMinimum = this.lengthMinimum;
        /** @alias lengthMinimum */ this.lengthMin = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minElements = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minimumElements = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minimumLength = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minLength = this.lengthMinimum;
        if (options instanceof ArrayFilter) {
            __classPrivateFieldSet(this, _ArrayFilter_lengthMaximum, __classPrivateFieldGet(options, _ArrayFilter_lengthMaximum, "f"), "f");
            __classPrivateFieldSet(this, _ArrayFilter_lengthMinimum, __classPrivateFieldGet(options, _ArrayFilter_lengthMinimum, "f"), "f");
            __classPrivateFieldSet(this, _ArrayFilter_strict, __classPrivateFieldGet(options, _ArrayFilter_strict, "f"), "f");
            __classPrivateFieldSet(this, _ArrayFilter_unique, __classPrivateFieldGet(options, _ArrayFilter_unique, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.length ?? (options.length = options.elements);
            options.lengthMaximum ?? (options.lengthMaximum = options.lengthMax ?? options.elementsMaximum ?? options.elementsMax ?? options.maximumLength ?? options.maxLength ?? options.maximumElements ?? options.maxElements);
            options.lengthMinimum ?? (options.lengthMinimum = options.lengthMin ?? options.elementsMinimum ?? options.elementsMin ?? options.minimumLength ?? options.minLength ?? options.minimumElements ?? options.minElements);
            for (let option of ["lengthMaximum", "lengthMinimum", "strict", "unique", "allowEmpty", "length"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this array filter for reuse.
     * @returns {ArrayFilter} Another instance of this array filter.
     */
    get clone() {
        return new ArrayFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this array filter.
     * @returns {ArrayFilterStatus} Status of this array filter.
     */
    get status() {
        return {
            lengthMaximum: __classPrivateFieldGet(this, _ArrayFilter_lengthMaximum, "f"),
            lengthMinimum: __classPrivateFieldGet(this, _ArrayFilter_lengthMinimum, "f"),
            strict: __classPrivateFieldGet(this, _ArrayFilter_strict, "f"),
            unique: __classPrivateFieldGet(this, _ArrayFilter_unique, "f")
        };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_lengthMinimum, value ? 0 : 1, "f");
        return this;
    }
    /**
     * @method length
     * @description Length of the array.
     * @param {number} value
     * @returns {this}
     */
    length(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`length\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter argument \`length\` must be a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_lengthMaximum, value, "f");
        __classPrivateFieldSet(this, _ArrayFilter_lengthMinimum, value, "f");
        return this;
    }
    /**
     * @method lengthMaximum
     * @description Maximum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`lengthMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _ArrayFilter_lengthMinimum, "f"))) {
            throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _ArrayFilter_lengthMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_lengthMaximum, value, "f");
        return this;
    }
    /**
     * @method lengthMinimum
     * @description Minimum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`lengthMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _ArrayFilter_lengthMaximum, "f"))) {
            throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _ArrayFilter_lengthMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_lengthMinimum, value, "f");
        return this;
    }
    /**
     * @method strict
     * @description Whether to determine no custom defined properties in the array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`strict\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_strict, value, "f");
        return this;
    }
    /**
     * @method unique
     * @description Whether to determine all of the elements in the array are unique.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    unique(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`unique\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ArrayFilter_unique, value, "f");
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured array filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!Array.isArray(item) ||
            !(item instanceof Array) ||
            item.constructor.name !== "Array" ||
            Object.prototype.toString.call(item) !== "[object Array]" ||
            Object.entries(item).length !== item.length ||
            __classPrivateFieldGet(this, _ArrayFilter_lengthMaximum, "f") < item.length ||
            item.length < __classPrivateFieldGet(this, _ArrayFilter_lengthMinimum, "f") ||
            (__classPrivateFieldGet(this, _ArrayFilter_strict, "f") && !isArrayStrict(item)) ||
            (__classPrivateFieldGet(this, _ArrayFilter_unique, "f") && !isArrayUnique(item))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the array filter.
     * @param {unknown} item Item that need to determine.
     * @param {ArrayFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_ArrayFilter_lengthMaximum = new WeakMap(), _ArrayFilter_lengthMinimum = new WeakMap(), _ArrayFilter_strict = new WeakMap(), _ArrayFilter_unique = new WeakMap();
/**
 * @function filterArray
 * @description Determine item with the array filter.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterArray(item, options = {}) {
    return new ArrayFilter(options).test(item);
}
export { ArrayFilter, filterArray };
