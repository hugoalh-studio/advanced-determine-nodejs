/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
    #allowArray = false;
    #allowNull = false;
    #allowRegExp = false;
    /**
     * @constructor
     * @description Initialize the filter of type of object to determine item.
     * @param {ObjectItemFilter | ObjectItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof ObjectItemFilter) {
            this.#allowArray = options.#allowArray;
            this.#allowNull = options.#allowNull;
            this.#allowRegExp = options.#allowRegExp;
        }
        else if (typeof options !== "undefined") {
            options.allowRegExp ??= options.allowRegularExpression;
            for (let option of ["allowArray", "allowNull", "allowRegExp"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {ObjectItemFilter} Another instance of this filter.
     */
    get clone() {
        return new ObjectItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {ObjectItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            allowArray: this.#allowArray,
            allowNull: this.#allowNull,
            allowRegExp: this.#allowRegExp
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
        this.#allowArray = value;
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
        this.#allowNull = value;
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
        this.#allowRegExp = value;
        return this;
    }
    /** @alias allowRegExp */ allowRegularExpression = this.allowRegExp;
    /**
     * @method test
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "object" ||
            (!this.#allowArray && Array.isArray(item)) ||
            (!this.#allowNull && item === null) ||
            (!this.#allowRegExp && item instanceof RegExp)) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of object.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isObject(item, options = {}) {
    return new ObjectItemFilter(options).test(item);
}
export { isObject, ObjectItemFilter };
