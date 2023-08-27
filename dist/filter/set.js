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
var _SetFilter_status;
/**
 * Filter for `Set`.
 */
export class SetFilter {
    /**
     * Initialize the `Set` filter.
     * @param {SetFilter | SetFilterOptions} [options] Options.
     */
    constructor(options) {
        _SetFilter_status.set(this, {
            sizeMaximum: Infinity,
            sizeMinimum: 1
        });
        /** @alias sizeMaximum */ this.sizeMax = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maximumSize = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maxSize = this.sizeMaximum;
        /** @alias sizeMinimum */ this.sizeMin = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minimumSize = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minSize = this.sizeMinimum;
        if (options instanceof SetFilter) {
            __classPrivateFieldSet(this, _SetFilter_status, { ...__classPrivateFieldGet(options, _SetFilter_status, "f") }, "f");
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
     * Clone this `Set` filter for reuse.
     * @returns {SetFilter} Another instance of this `Set` filter.
     */
    get clone() {
        return new SetFilter(this);
    }
    /**
     * Get the status of this `Set` filter.
     * @returns {SetFilterStatus} Status of this `Set` filter.
     */
    get status() {
        return { ...__classPrivateFieldGet(this, _SetFilter_status, "f") };
    }
    /**
     * Whether to allow an empty `Set`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter status \`allowEmpty\` must be a boolean!`);
        }
        __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * Size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    size(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`size\` must be a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter status \`size\` must be a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMaximum = value;
        __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * Maximum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`sizeMaximum\` must be a number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum)) {
            throw new RangeError(`Filter status \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum}!`);
        }
        __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMaximum = value;
        return this;
    }
    /**
     * Minimum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter status \`sizeMinimum\` must be a number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMaximum)) {
            throw new RangeError(`Filter status \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _SetFilter_status, "f").sizeMaximum}!`);
        }
        __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum = value;
        return this;
    }
    /**
     * Determine item with the configured `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Set) ||
            __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMaximum < item.size ||
            item.size < __classPrivateFieldGet(this, _SetFilter_status, "f").sizeMinimum) {
            return false;
        }
        return true;
    }
    /**
     * Determine item with the `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @param {SetFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_SetFilter_status = new WeakMap();
/**
 * Determine item with the `Set` filter.
 * @param {unknown} item Item that need to determine.
 * @param {SetFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export function filterSet(item, options = {}) {
    return new SetFilter(options).test(item);
}
