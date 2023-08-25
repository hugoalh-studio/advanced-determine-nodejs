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
var _ArrayFilter_status;
import { isArrayStrict, isArrayUnique } from "../array.js";
/**
 * Filter for array.
 */
export class ArrayFilter {
    /**
     * Initialize the array filter.
     * @param {ArrayFilter | ArrayFilterOptions} [options] Options.
     */
    constructor(options) {
        _ArrayFilter_status.set(this, {
            lengthMaximum: Infinity,
            lengthMinimum: 1,
            strict: false,
            unique: false
        });
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
            __classPrivateFieldSet(this, _ArrayFilter_status, { ...__classPrivateFieldGet(options, _ArrayFilter_status, "f") }, "f");
        }
        else if (typeof options !== "undefined") {
            options.length ?? (options.length = options.elements);
            options.lengthMaximum ?? (options.lengthMaximum = options.lengthMax ?? options.elementsMaximum ?? options.elementsMax ?? options.maximumLength ?? options.maxLength ?? options.maximumElements ?? options.maxElements);
            options.lengthMinimum ?? (options.lengthMinimum = options.lengthMin ?? options.elementsMinimum ?? options.elementsMin ?? options.minimumLength ?? options.minLength ?? options.minimumElements ?? options.minElements);
            for (const option of ["lengthMaximum", "lengthMinimum", "strict", "unique", "allowEmpty", "length"]) {
                //@ts-ignore Handle by it's method.
                if (typeof options[option] !== "undefined") {
                    //@ts-ignore Handle by it's method.
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * Clone this array filter for reuse.
     * @returns {ArrayFilter} Another instance of this array filter.
     */
    get clone() {
        return new ArrayFilter(this);
    }
    /**
     * Get the status of this array filter.
     * @returns {ArrayFilterStatus} Status of this array filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _ArrayFilter_status, "f") };
    }
    /**
     * Whether to allow an empty array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * Length of the array.
     * @param {number} value
     * @returns {this}
     */
    length(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`length\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter status \`length\` must be a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMaximum = value;
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum = value;
        return this;
    }
    /**
     * Maximum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`lengthMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum)) {
            throw new RangeError(`Filter status \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum}!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMaximum = value;
        return this;
    }
    /**
     * Minimum length of the array.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`lengthMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMaximum)) {
            throw new RangeError(`Filter status \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMaximum}!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum = value;
        return this;
    }
    /**
     * Whether to determine no custom defined properties in the array.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    strict(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`strict\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").strict = value;
        return this;
    }
    /**
     * Whether to determine all of the elements in the array are unique.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    unique(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`unique\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _ArrayFilter_status, "f").unique = value;
        return this;
    }
    /**
     * Determine item with the configured array filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!Array.isArray(item) ||
            !(item instanceof Array) ||
            item.constructor.name !== "Array" ||
            Object.prototype.toString.call(item) !== "[object Array]" ||
            Object.entries(item).length !== item.length ||
            __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMaximum < item.length ||
            item.length < __classPrivateFieldGet(this, _ArrayFilter_status, "f").lengthMinimum ||
            (__classPrivateFieldGet(this, _ArrayFilter_status, "f").strict && !isArrayStrict(item)) ||
            (__classPrivateFieldGet(this, _ArrayFilter_status, "f").unique && !isArrayUnique(item))) {
            return false;
        }
        return true;
    }
    /**
     * Determine item with the array filter.
     * @param {unknown} item Item that need to determine.
     * @param {ArrayFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_ArrayFilter_status = new WeakMap();
/**
 * Determine item with the array filter.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterArray(item, options = {}) {
    return new ArrayFilter(options).test(item);
}
