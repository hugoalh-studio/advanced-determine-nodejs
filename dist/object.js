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
var _ObjectItemFilter_allowArray, _ObjectItemFilter_allowNull, _ObjectItemFilter_allowRegExp;
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of object to determine item.
     * @param {ObjectItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _ObjectItemFilter_allowArray.set(this, void 0);
        _ObjectItemFilter_allowNull.set(this, void 0);
        _ObjectItemFilter_allowRegExp.set(this, void 0);
        let { allowArray = false, allowNull = false, allowRegExp, ...aliases } = options;
        allowRegExp ?? (allowRegExp = aliases.allowRegularExpression ?? false);
        if (typeof allowArray !== "boolean") {
            throw new TypeError(`Argument \`options.allowArray\` must be type of boolean!`);
        }
        if (typeof allowNull !== "boolean") {
            throw new TypeError(`Argument \`options.allowNull\` must be type of boolean!`);
        }
        if (typeof allowRegExp !== "boolean") {
            throw new TypeError(`Argument \`options.allowRegExp\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _ObjectItemFilter_allowArray, allowArray, "f");
        __classPrivateFieldSet(this, _ObjectItemFilter_allowNull, allowNull, "f");
        __classPrivateFieldSet(this, _ObjectItemFilter_allowRegExp, allowRegExp, "f");
    }
    /**
     * @method test
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "object" ||
            (!__classPrivateFieldGet(this, _ObjectItemFilter_allowArray, "f") && Array.isArray(item)) ||
            (!__classPrivateFieldGet(this, _ObjectItemFilter_allowNull, "f") && item === null) ||
            (!__classPrivateFieldGet(this, _ObjectItemFilter_allowRegExp, "f") && item instanceof RegExp)) {
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
_ObjectItemFilter_allowArray = new WeakMap(), _ObjectItemFilter_allowNull = new WeakMap(), _ObjectItemFilter_allowRegExp = new WeakMap();
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
