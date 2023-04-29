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
var _GeneratorItemFilter_objectStringRegExp;
import { types } from "node:util";
import { ObjectItemFilter } from "./object.js";
const objectFilter = new ObjectItemFilter();
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
class GeneratorItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of generator to determine item.
     * @param {GeneratorItemFilterOptions} [options={}] Options.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    constructor(options = {}) {
        _GeneratorItemFilter_objectStringRegExp.set(this, void 0);
        let { asynchronous, ...aliases } = options;
        asynchronous ?? (asynchronous = aliases.async);
        if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
            throw new TypeError(`Filter argument \`asynchronous\` must be type of boolean or undefined!`);
        }
        __classPrivateFieldSet(this, _GeneratorItemFilter_objectStringRegExp, new RegExp(`^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "u"), "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    test(item) {
        if (!objectFilter.test(item) ||
            !types.isGeneratorObject(item) ||
            !__classPrivateFieldGet(this, _GeneratorItemFilter_objectStringRegExp, "f").test(Object.prototype.toString.call(item)) ||
            typeof item.next !== "function" ||
            typeof item.return !== "function" ||
            typeof item.throw !== "function") {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @param {GeneratorItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_GeneratorItemFilter_objectStringRegExp = new WeakMap();
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {GeneratorItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
function isGenerator(item, options = {}) {
    return new GeneratorItemFilter(options).test(item);
}
export { GeneratorItemFilter, isGenerator };
