var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetItemFilter_sizeMaximum, _SetItemFilter_sizeMinimum;
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
class SetItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of set to determine item.
     * @param {SetItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _SetItemFilter_sizeMaximum.set(this, void 0);
        _SetItemFilter_sizeMinimum.set(this, void 0);
        let { allowEmpty = false, size, sizeMaximum, sizeMinimum, ...aliases } = options;
        sizeMaximum ?? (sizeMaximum = aliases.sizeMax ?? aliases.maximumSize ?? aliases.maxSize ?? Infinity);
        sizeMinimum ?? (sizeMinimum = aliases.sizeMin ?? aliases.minimumSize ?? aliases.minSize ?? 1);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        if (typeof size === "number" && !Number.isNaN(size)) {
            if (!(Number.isSafeInteger(size) && size >= 0)) {
                throw new RangeError(`Filter argument \`size\` must be a number which is integer, positive, and safe!`);
            }
        }
        else if (typeof size !== "undefined") {
            throw new TypeError(`Filter argument \`size\` must be type of number or undefined!`);
        }
        if (!(typeof sizeMaximum === "number" && !Number.isNaN(sizeMaximum))) {
            throw new TypeError(`Filter argument \`sizeMaximum\` must be type of number!`);
        }
        if (sizeMaximum !== Infinity && !(Number.isSafeInteger(sizeMaximum) && sizeMaximum >= 0)) {
            throw new RangeError(`Filter argument \`sizeMaximum\` must be \`Infinity\`, or a number which is integer, positive, and safe!`);
        }
        if (!(typeof sizeMinimum === "number" && !Number.isNaN(sizeMinimum))) {
            throw new TypeError(`Filter argument \`sizeMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(sizeMinimum) && sizeMinimum >= 0 && sizeMinimum <= sizeMaximum)) {
            throw new RangeError(`Filter argument \`sizeMinimum\` must be a number which is integer, positive, safe, and <= ${sizeMaximum}!`);
        }
        if (typeof size === "number") {
            __classPrivateFieldSet(this, _SetItemFilter_sizeMaximum, size, "f");
            __classPrivateFieldSet(this, _SetItemFilter_sizeMinimum, size, "f");
        }
        else {
            __classPrivateFieldSet(this, _SetItemFilter_sizeMaximum, sizeMaximum, "f");
            __classPrivateFieldSet(this, _SetItemFilter_sizeMinimum, allowEmpty ? 0 : sizeMinimum, "f");
        }
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof Set) ||
            __classPrivateFieldGet(this, _SetItemFilter_sizeMaximum, "f") < item.size ||
            item.size < __classPrivateFieldGet(this, _SetItemFilter_sizeMinimum, "f")) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @param {SetItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_SetItemFilter_sizeMaximum = new WeakMap(), _SetItemFilter_sizeMinimum = new WeakMap();
/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {SetItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isSet(item, options = {}) {
    return new SetItemFilter(options).test(item);
}
export { isSet, SetItemFilter };
