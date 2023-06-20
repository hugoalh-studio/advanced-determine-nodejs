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
var _SetFilter_sizeMaximum, _SetFilter_sizeMinimum;
/**
 * @class SetFilter
 * @description Filter for `Set`.
 */
class SetFilter {
    /**
     * @constructor
     * @description Initialize the `Set` filter.
     * @param {SetFilter | SetFilterOptions} [options] Options.
     */
    constructor(options) {
        _SetFilter_sizeMaximum.set(this, Infinity);
        _SetFilter_sizeMinimum.set(this, 1);
        /** @alias sizeMaximum */ this.sizeMax = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maximumSize = this.sizeMaximum;
        /** @alias sizeMaximum */ this.maxSize = this.sizeMaximum;
        /** @alias sizeMinimum */ this.sizeMin = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minimumSize = this.sizeMinimum;
        /** @alias sizeMinimum */ this.minSize = this.sizeMinimum;
        if (options instanceof SetFilter) {
            __classPrivateFieldSet(this, _SetFilter_sizeMaximum, __classPrivateFieldGet(options, _SetFilter_sizeMaximum, "f"), "f");
            __classPrivateFieldSet(this, _SetFilter_sizeMinimum, __classPrivateFieldGet(options, _SetFilter_sizeMinimum, "f"), "f");
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
     * @description Clone this `Set` filter for reuse.
     * @returns {SetFilter} Another instance of this `Set` filter.
     */
    get clone() {
        return new SetFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this `Set` filter.
     * @returns {SetFilterStatus} Status of this `Set` filter.
     */
    get status() {
        return {
            sizeMaximum: __classPrivateFieldGet(this, _SetFilter_sizeMaximum, "f"),
            sizeMinimum: __classPrivateFieldGet(this, _SetFilter_sizeMinimum, "f")
        };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty `Set`.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _SetFilter_sizeMinimum, value ? 0 : 1, "f");
        return this;
    }
    /**
     * @method size
     * @description Size of the `Set`.
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
        __classPrivateFieldSet(this, _SetFilter_sizeMaximum, value, "f");
        __classPrivateFieldSet(this, _SetFilter_sizeMinimum, value, "f");
        return this;
    }
    /**
     * @method sizeMaximum
     * @description Maximum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _SetFilter_sizeMinimum, "f"))) {
            throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _SetFilter_sizeMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _SetFilter_sizeMaximum, value, "f");
        return this;
    }
    /**
     * @method sizeMinimum
     * @description Minimum size of the `Set`.
     * @param {number} value
     * @returns {this}
     */
    sizeMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _SetFilter_sizeMaximum, "f"))) {
            throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _SetFilter_sizeMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _SetFilter_sizeMinimum, value, "f");
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Set) ||
            __classPrivateFieldGet(this, _SetFilter_sizeMaximum, "f") < item.size ||
            item.size < __classPrivateFieldGet(this, _SetFilter_sizeMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the `Set` filter.
     * @param {unknown} item Item that need to determine.
     * @param {SetFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_SetFilter_sizeMaximum = new WeakMap(), _SetFilter_sizeMinimum = new WeakMap();
/**
 * @function filterSet
 * @description Determine item with the `Set` filter.
 * @param {unknown} item Item that need to determine.
 * @param {SetFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterSet(item, options = {}) {
    return new SetFilter(options).test(item);
}
export { filterSet, SetFilter };
