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
var _StringifyJSONItemFilter_jsonItemFilterWrapper;
import { JSONItemFilter } from "./json.js";
/**
 * @class StringifyJSONItemFilter
 * @description Determine item with the filter of type of stringify JSON.
 * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
 */
class StringifyJSONItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of stringify JSON to determine item.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    constructor(options = {}) {
        _StringifyJSONItemFilter_jsonItemFilterWrapper.set(this, void 0);
        __classPrivateFieldSet(this, _StringifyJSONItemFilter_jsonItemFilterWrapper, new JSONItemFilter(options), "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    test(item) {
        if (typeof item !== "string") {
            return false;
        }
        let itemParse;
        try {
            itemParse = JSON.parse(item);
        }
        catch {
            return false;
        }
        return __classPrivateFieldGet(this, _StringifyJSONItemFilter_jsonItemFilterWrapper, "f").test(itemParse);
    }
    /**
     * @static test
     * @description Determine item with the filter of type of stringify JSON.
     * @param {unknown} item Item that need to determine.
     * @param {JSONItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     * @deprecated Replaced by class `JSONItemFilter` with method `testStringify`.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_StringifyJSONItemFilter_jsonItemFilterWrapper = new WeakMap();
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item, options = {}) {
    return new JSONItemFilter(options).testStringify(item);
}
export { isStringifyJSON, isStringifyJSON as isJSONStringified, isStringifyJSON as isJSONStringify, isStringifyJSON as isStringifiedJSON, StringifyJSONItemFilter, StringifyJSONItemFilter as JSONStringifiedItemFilter, StringifyJSONItemFilter as JSONStringifyItemFilter, StringifyJSONItemFilter as StringifiedJSONItemFilter };
