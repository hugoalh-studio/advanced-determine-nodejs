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
 * Filter for `Map`.
 */
export class MapFilter {
    /**
     * Initialize the `Map` filter.
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
            for (const option of ["sizeMaximum", "sizeMinimum", "allowEmpty", "size"]) {
                //@ts-ignore Handle by it's method.
                if (typeof options[option] !== "undefined") {
                    //@ts-ignore Handle by it's method.
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * Clone this `Map` filter for reuse.
     * @returns {MapFilter} Another instance of this `Map` filter.
     */
    get clone() {
        return new MapFilter(this);
    }
    /**
     * Get the status of this `Map` filter.
     * @returns {MapFilterStatus} Status of this `Map` filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _MapFilter_status, "f") };
    }
    /**
     * Whether to allow an empty `Map`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`allowEmpty\` is not a boolean!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * Size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    size(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`size\` is not a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter status \`size\` is not a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum = value;
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * Maximum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`sizeMaximum\` is not a number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum)) {
            throw new RangeError(`Filter status \`sizeMaximum\` is not \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum}!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum = value;
        return this;
    }
    /**
     * Minimum size of the `Map`.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`sizeMinimum\` is not a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum)) {
            throw new RangeError(`Filter status \`sizeMinimum\` is not a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _MapFilter_status, "f").sizeMaximum}!`);
        }
        __classPrivateFieldGet(this, _MapFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * Determine item with the configured `Map` filter.
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
     * Determine item with the `Map` filter.
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
 * Determine item with the `Map` filter.
 * @param {unknown} item Item that need to determine.
 * @param {MapFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterMap(item, options = {}) {
    return new MapFilter(options).test(item);
}
