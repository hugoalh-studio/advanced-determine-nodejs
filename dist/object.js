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
var _ObjectItemFilter_allowArray, _ObjectItemFilter_allowNull, _ObjectItemFilter_allowRegExp;
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of object to determine item.
     * @param {ObjectItemFilter | ObjectItemFilterOptions} [options] Options.
     */
    constructor(options) {
        _ObjectItemFilter_allowArray.set(this, false);
        _ObjectItemFilter_allowNull.set(this, false);
        _ObjectItemFilter_allowRegExp.set(this, false);
        /** @alias allowRegExp */ this.allowRegularExpression = this.allowRegExp;
        if (options instanceof ObjectItemFilter) {
            __classPrivateFieldSet(this, _ObjectItemFilter_allowArray, __classPrivateFieldGet(options, _ObjectItemFilter_allowArray, "f"), "f");
            __classPrivateFieldSet(this, _ObjectItemFilter_allowNull, __classPrivateFieldGet(options, _ObjectItemFilter_allowNull, "f"), "f");
            __classPrivateFieldSet(this, _ObjectItemFilter_allowRegExp, __classPrivateFieldGet(options, _ObjectItemFilter_allowRegExp, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.allowRegExp ?? (options.allowRegExp = options.allowRegularExpression);
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
     * @returns {ObjectItemFilter}
     */
    get clone() {
        return new ObjectItemFilter(this);
    }
    /**
     * @method status
     * @description Status of this filter.
     * @returns {ObjectItemFilterOptionsBase}
     */
    get status() {
        return {
            allowArray: __classPrivateFieldGet(this, _ObjectItemFilter_allowArray, "f"),
            allowNull: __classPrivateFieldGet(this, _ObjectItemFilter_allowNull, "f"),
            allowRegExp: __classPrivateFieldGet(this, _ObjectItemFilter_allowRegExp, "f")
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
        __classPrivateFieldSet(this, _ObjectItemFilter_allowArray, value, "f");
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
        __classPrivateFieldSet(this, _ObjectItemFilter_allowNull, value, "f");
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
        __classPrivateFieldSet(this, _ObjectItemFilter_allowRegExp, value, "f");
        return this;
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
