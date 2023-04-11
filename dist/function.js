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
var _FunctionItemFilter_asynchronous, _FunctionItemFilter_constructorNameRegExp, _FunctionItemFilter_generator, _FunctionItemFilter_objectStringRegExp;
import { types } from "node:util";
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 */
class FunctionItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of function to determine item.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _FunctionItemFilter_asynchronous.set(this, void 0);
        _FunctionItemFilter_constructorNameRegExp.set(this, void 0);
        _FunctionItemFilter_generator.set(this, void 0);
        _FunctionItemFilter_objectStringRegExp.set(this, void 0);
        let { asynchronous, generator, ...aliases } = options;
        asynchronous ?? (asynchronous = aliases.async);
        if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
            throw new TypeError(`Argument \`options.asynchronous\` must be type of boolean or undefined!`);
        }
        if (typeof generator !== "boolean" && typeof generator !== "undefined") {
            throw new TypeError(`Argument \`options.generator\` must be type of boolean or undefined!`);
        }
        let constructorNameRegExpPattern = `${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}${(generator === false) ? "" : "(?:Generator)"}${(typeof generator === "undefined") ? "?" : ""}Function`;
        __classPrivateFieldSet(this, _FunctionItemFilter_asynchronous, asynchronous, "f");
        __classPrivateFieldSet(this, _FunctionItemFilter_constructorNameRegExp, new RegExp(`^${constructorNameRegExpPattern}$`, "u"), "f");
        __classPrivateFieldSet(this, _FunctionItemFilter_generator, generator, "f");
        __classPrivateFieldSet(this, _FunctionItemFilter_objectStringRegExp, new RegExp(`^\\[object ${constructorNameRegExpPattern}\\]$`, "u"), "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "function" ||
            (__classPrivateFieldGet(this, _FunctionItemFilter_asynchronous, "f") === false && types.isAsyncFunction(item)) ||
            (__classPrivateFieldGet(this, _FunctionItemFilter_asynchronous, "f") === true && !types.isAsyncFunction(item)) ||
            (__classPrivateFieldGet(this, _FunctionItemFilter_generator, "f") === false && types.isGeneratorFunction(item)) ||
            (__classPrivateFieldGet(this, _FunctionItemFilter_generator, "f") === true && !types.isGeneratorFunction(item)) ||
            !__classPrivateFieldGet(this, _FunctionItemFilter_constructorNameRegExp, "f").test(item.constructor.name) ||
            !__classPrivateFieldGet(this, _FunctionItemFilter_objectStringRegExp, "f").test(Object.prototype.toString.call(item))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_FunctionItemFilter_asynchronous = new WeakMap(), _FunctionItemFilter_constructorNameRegExp = new WeakMap(), _FunctionItemFilter_generator = new WeakMap(), _FunctionItemFilter_objectStringRegExp = new WeakMap();
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {FunctionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isFunction(item, options = {}) {
    return new FunctionItemFilter(options).test(item);
}
export { FunctionItemFilter, isFunction };
