import { isArrayStrict, isArrayUnique } from "./native/array.js";
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
class ArrayItemFilter {
    #lengthMaximum = Infinity;
    #lengthMinimum = 1;
    #strict = false;
    #unique = false;
    /**
     * @constructor
     * @description Initialize the filter of type of array to determine item.
     * @param {ArrayItemFilter | ArrayItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof ArrayItemFilter) {
            this.#lengthMaximum = options.#lengthMaximum;
            this.#lengthMinimum = options.#lengthMinimum;
            this.#strict = options.#strict;
            this.#unique = options.#unique;
        }
        else if (typeof options !== "undefined") {
            options.length ??= options.elements;
            options.lengthMaximum ??= options.lengthMax ?? options.elementsMaximum ?? options.elementsMax ?? options.maximumLength ?? options.maxLength ?? options.maximumElements ?? options.maxElements;
            options.lengthMinimum ??= options.lengthMin ?? options.elementsMinimum ?? options.elementsMin ?? options.minimumLength ?? options.minLength ?? options.minimumElements ?? options.minElements;
            for (let option of ["lengthMaximum", "lengthMinimum", "strict", "unique", "allowEmpty", "length"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {ArrayItemFilter} Another instance of this filter.
     */
    get clone() {
        return new ArrayItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {ArrayItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            lengthMaximum: this.#lengthMaximum,
            lengthMinimum: this.#lengthMinimum,
            strict: this.#strict,
            unique: this.#unique
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
        this.#lengthMinimum = value ? 0 : 1;
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
        this.#lengthMaximum = value;
        this.#lengthMinimum = value;
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
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#lengthMinimum)) {
            throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#lengthMinimum}!`);
        }
        this.#lengthMaximum = value;
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
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#lengthMaximum)) {
            throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${this.#lengthMaximum}!`);
        }
        this.#lengthMinimum = value;
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
        this.#strict = value;
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
        this.#unique = value;
        return this;
    }
    /** @alias length */ elements = this.length;
    /** @alias lengthMaximum */ elementsMax = this.lengthMaximum;
    /** @alias lengthMaximum */ elementsMaximum = this.lengthMaximum;
    /** @alias lengthMaximum */ lengthMax = this.lengthMaximum;
    /** @alias lengthMaximum */ maxElements = this.lengthMaximum;
    /** @alias lengthMaximum */ maximumElements = this.lengthMaximum;
    /** @alias lengthMaximum */ maximumLength = this.lengthMaximum;
    /** @alias lengthMaximum */ maxLength = this.lengthMaximum;
    /** @alias lengthMinimum */ elementsMin = this.lengthMinimum;
    /** @alias lengthMinimum */ elementsMinimum = this.lengthMinimum;
    /** @alias lengthMinimum */ lengthMin = this.lengthMinimum;
    /** @alias lengthMinimum */ minElements = this.lengthMinimum;
    /** @alias lengthMinimum */ minimumElements = this.lengthMinimum;
    /** @alias lengthMinimum */ minimumLength = this.lengthMinimum;
    /** @alias lengthMinimum */ minLength = this.lengthMinimum;
    /**
     * @method test
     * @description Determine item with the configured filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!Array.isArray(item) ||
            !(item instanceof Array) ||
            item.constructor.name !== "Array" ||
            Object.prototype.toString.call(item) !== "[object Array]" ||
            Object.entries(item).length !== item.length ||
            this.#lengthMaximum < item.length ||
            item.length < this.#lengthMinimum ||
            (this.#strict && !isArrayStrict(item)) ||
            (this.#unique && !isArrayUnique(item))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @param {ArrayItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {ArrayItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isArray(item, options = {}) {
    return new ArrayItemFilter(options).test(item);
}
export { ArrayItemFilter, isArray };
