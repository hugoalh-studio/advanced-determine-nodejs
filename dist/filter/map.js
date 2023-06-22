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
var _MapFilter_status;
/**
 * @class MapFilter
 * @description Filter for `Map`.
 */
class MapFilter {
    /**
     * @constructor
     * @description Initialize the `Map` filter.
     * @param {MapFilter | MapFilterOptions} [options] Options.
     */
    constructor(options) {
        _MapFilter_status.set(this, {
            sizeMaximum: Infinity,
            sizeMinimum: 1
        });
        /** @alias sizeMaximum */ this.sizeMax = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maximumSize = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maxSize = this.sizeMaximum;
        /** @alias sizeMinimum */ this.sizeMin = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minimumSize = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minSize = this.sizeMinimum;
        if (options instanceof MapFilter) {
            __classPrivateFieldSet(this, _MapFilter_status, { ...__classPrivateFieldGet(options, _MapFilter_status, "f") }, "f");
        }
        else if (typeof options !== "undefined") {
            options.sizeMaximum ?? (options.sizeMaximum = options.sizeMax ?? options.maximumSize ?? options.maxSize);
            options.sizeMinimum ?? (options.sizeMinimum = options.sizeMin ?? options.minimumSize ?? options.minSize);
            for (let option of ["sizeMaximum", "sizeMinimum", "allowEmpty", "size"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this `Map` filter for reuse.
     * @returns {MapFilter} Another instance of this `Map` filter.
     */
    get clone() {
        return new MapFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this `Map` filter.
     * @returns {MapFilterStatus} Status of this `Map` filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _MapFilter_status, "f") };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty `Map`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * @method size
     * @description Size of the `Map`.
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
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum = value;
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * @method sizeMaximum
     * @description Maximum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum)) {
            throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum}!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum = value;
        return this;
    }
    /**
     * @method sizeMinimum
     * @description Minimum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum)) {
            throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum}!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Map) ||
            __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum < item.size ||
            item.size < __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the `Map` filter.
     * @param {unknown} item Item that need to determine.
     * @param {MapFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_MapFilter_status = new WeakMap();
/**
 * @function filterMap
 * @description Determine item with the `Map` filter.
 * @param {unknown} item Item that need to determine.
 * @param {MapFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterMap(item, options = {}) {
    return new MapFilter(options).test(item);
}
export { filterMap, MapFilter };
