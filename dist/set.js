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
import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
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
            throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
        }
        if (!checkNumberIPS(size) && typeof size !== "undefined") {
            throw new TypeError(`Argument \`options.size\` must be type of number (integer, positive, and safe) or undefined!`);
        }
        if (sizeMaximum !== Infinity && !checkNumberIPS(sizeMaximum)) {
            throw new TypeError(`Argument \`options.sizeMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
        }
        if (!checkNumberIPSWithMaximum(sizeMinimum, sizeMaximum)) {
            throw new TypeError(`Argument \`options.sizeMinimum\` must be type of number (integer, positive, and safe) and <= ${sizeMaximum}!`);
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
