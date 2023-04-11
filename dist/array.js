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
var _ArrayItemFilter_lengthMaximum, _ArrayItemFilter_lengthMinimum, _ArrayItemFilter_strict, _ArrayItemFilter_unique;
import { checkNumberIPS, checkNumberIPSWithMaximum } from "./internal/check-item.js";
const arrayIndexRegExp = /^(?:0|[1-9]\d*)$/u;
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
class ArrayItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of array to determine item.
     * @param {ArrayItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _ArrayItemFilter_lengthMaximum.set(this, void 0);
        _ArrayItemFilter_lengthMinimum.set(this, void 0);
        _ArrayItemFilter_strict.set(this, void 0);
        _ArrayItemFilter_unique.set(this, void 0);
        let { allowEmpty = false, length, lengthMaximum, lengthMinimum, strict = false, unique = false, ...aliases } = options;
        length ?? (length = aliases.elements);
        lengthMaximum ?? (lengthMaximum = aliases.lengthMax ?? aliases.elementsMaximum ?? aliases.elementsMax ?? aliases.maximumLength ?? aliases.maxLength ?? aliases.maximumElements ?? aliases.maxElements ?? Infinity);
        lengthMinimum ?? (lengthMinimum = aliases.lengthMin ?? aliases.elementsMinimum ?? aliases.elementsMin ?? aliases.minimumLength ?? aliases.minLength ?? aliases.minimumElements ?? aliases.minElements ?? 1);
        if (typeof allowEmpty !== "boolean") {
            throw new TypeError(`Argument \`options.allowEmpty\` must be type of boolean!`);
        }
        if (!checkNumberIPS(length) && typeof length !== "undefined") {
            throw new TypeError(`Argument \`options.length\` must be type of number (integer, positive, and safe) or undefined!`);
        }
        if (lengthMaximum !== Infinity && !checkNumberIPS(lengthMaximum)) {
            throw new TypeError(`Argument \`options.lengthMaximum\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
        }
        if (!checkNumberIPSWithMaximum(lengthMinimum, lengthMaximum)) {
            throw new TypeError(`Argument \`options.lengthMinimum\` must be type of number (integer, positive, and safe) and <= ${lengthMaximum}!`);
        }
        if (typeof strict !== "boolean") {
            throw new TypeError(`Argument \`options.strict\` must be type of boolean!`);
        }
        if (typeof unique !== "boolean") {
            throw new TypeError(`Argument \`options.unique\` must be type of boolean!`);
        }
        if (typeof length === "number") {
            __classPrivateFieldSet(this, _ArrayItemFilter_lengthMaximum, length, "f");
            __classPrivateFieldSet(this, _ArrayItemFilter_lengthMinimum, length, "f");
        }
        else {
            __classPrivateFieldSet(this, _ArrayItemFilter_lengthMaximum, lengthMaximum, "f");
            __classPrivateFieldSet(this, _ArrayItemFilter_lengthMinimum, allowEmpty ? 0 : lengthMinimum, "f");
        }
        __classPrivateFieldSet(this, _ArrayItemFilter_strict, strict, "f");
        __classPrivateFieldSet(this, _ArrayItemFilter_unique, unique, "f");
    }
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
            Object.prototype.toString.call(item) !== "[object Array]") {
            return false;
        }
        if (__classPrivateFieldGet(this, _ArrayItemFilter_strict, "f")) {
            let itemPrototype = Object.getPrototypeOf(item);
            if ((itemPrototype !== null && itemPrototype !== Array.prototype) ||
                Object.getOwnPropertySymbols(item).length > 0) {
                return false;
            }
            let itemDescriptors = Object.getOwnPropertyDescriptors(item);
            for (let itemPropertyKey in itemDescriptors) {
                if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
                    if (arrayIndexRegExp.test(itemPropertyKey) && Number(itemPropertyKey) < 4294967296) {
                        let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
                        if (!itemPropertyDescriptor.configurable ||
                            !itemPropertyDescriptor.enumerable ||
                            typeof itemPropertyDescriptor.get !== "undefined" ||
                            typeof itemPropertyDescriptor.set !== "undefined" ||
                            !itemPropertyDescriptor.writable) {
                            return false;
                        }
                    }
                    else if (itemPropertyKey === "length") {
                        let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
                        if (itemPropertyDescriptor.configurable ||
                            itemPropertyDescriptor.enumerable ||
                            typeof itemPropertyDescriptor.get !== "undefined" ||
                            typeof itemPropertyDescriptor.set !== "undefined" ||
                            !itemPropertyDescriptor.writable) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        if (Object.entries(item).length !== item.length ||
            __classPrivateFieldGet(this, _ArrayItemFilter_lengthMaximum, "f") < item.length ||
            item.length < __classPrivateFieldGet(this, _ArrayItemFilter_lengthMinimum, "f") ||
            (__classPrivateFieldGet(this, _ArrayItemFilter_unique, "f") && new Set(item).size !== item.length)) {
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
_ArrayItemFilter_lengthMaximum = new WeakMap(), _ArrayItemFilter_lengthMinimum = new WeakMap(), _ArrayItemFilter_strict = new WeakMap(), _ArrayItemFilter_unique = new WeakMap();
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