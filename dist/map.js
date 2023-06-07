/**
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
class MapItemFilter {
    #sizeMaximum = Infinity;
    #sizeMinimum = 1;
    /**
     * @constructor
     * @description Initialize the filter of type of map to determine item.
     * @param {MapItemFilter | MapItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof MapItemFilter) {
            this.#sizeMaximum = options.#sizeMaximum;
            this.#sizeMinimum = options.#sizeMinimum;
        }
        else if (typeof options !== "undefined") {
            options.sizeMaximum ??= options.sizeMax ?? options.maximumSize ?? options.maxSize;
            options.sizeMinimum ??= options.sizeMin ?? options.minimumSize ?? options.minSize;
            for (let option of ["sizeMaximum", "sizeMinimum", "allowEmpty", "size"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {MapItemFilter} Another instance of this filter.
     */
    get clone() {
        return new MapItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {MapItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            sizeMaximum: this.#sizeMaximum,
            sizeMinimum: this.#sizeMinimum
        };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty map.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        this.#sizeMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * @method size
     * @description Size of the map.
     * @param {number} value
     * @returns {this}
     */
    size(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`size\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter argument \`size\` must be a number which is integer, positive, and safe!`);
        }
        this.#sizeMaximum = value;
        this.#sizeMinimum = value;
        return this;
    }
    /**
     * @method sizeMaximum
     * @description Maximum size of the map.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#sizeMinimum)) {
            throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#sizeMinimum}!`);
        }
        this.#sizeMaximum = value;
        return this;
    }
    /**
     * @method sizeMinimum
     * @description Minimum size of the map.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#sizeMaximum)) {
            throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${this.#sizeMaximum}!`);
        }
        this.#sizeMinimum = value;
        return this;
    }
    /** @alias sizeMaximum */ sizeMax = this.sizeMaximum;
    /** @alias sizeMaximum */ maximumSize = this.sizeMaximum;
    /** @alias sizeMaximum */ maxSize = this.sizeMaximum;
    /** @alias sizeMinimum */ sizeMin = this.sizeMinimum;
    /** @alias sizeMinimum */ minimumSize = this.sizeMinimum;
    /** @alias sizeMinimum */ minSize = this.sizeMinimum;
    /**
     * @method test
     * @description Determine item with the configured filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Map) ||
            this.#sizeMaximum < item.size ||
            item.size < this.#sizeMinimum) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @param {MapItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {MapItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isMap(item, options = {}) {
    return new MapItemFilter(options).test(item);
}
export { isMap, MapItemFilter };
