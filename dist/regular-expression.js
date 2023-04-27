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
var _RegularExpressionItemFilter_dotAll, _RegularExpressionItemFilter_exactly, _RegularExpressionItemFilter_global, _RegularExpressionItemFilter_ignoreCase, _RegularExpressionItemFilter_multipleLine, _RegularExpressionItemFilter_sticky, _RegularExpressionItemFilter_unicode;
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of regular expression to determine item.
     * @param {RegularExpressionItemFilterOptions} [options={}] Options.
     */
    constructor(options = {}) {
        _RegularExpressionItemFilter_dotAll.set(this, void 0);
        _RegularExpressionItemFilter_exactly.set(this, void 0);
        _RegularExpressionItemFilter_global.set(this, void 0);
        _RegularExpressionItemFilter_ignoreCase.set(this, void 0);
        _RegularExpressionItemFilter_multipleLine.set(this, void 0);
        _RegularExpressionItemFilter_sticky.set(this, void 0);
        _RegularExpressionItemFilter_unicode.set(this, void 0);
        let { dotAll, exactly, global, ignoreCase, multipleLine, sticky, unicode, ...aliases } = options;
        exactly ?? (exactly = aliases.exact);
        ignoreCase ?? (ignoreCase = aliases.caseInsensitive);
        multipleLine ?? (multipleLine = aliases.multiLine ?? aliases.multiline);
        if (typeof dotAll !== "boolean" && typeof dotAll !== "undefined") {
            throw new TypeError(`Filter argument \`dotAll\` must be type of boolean or undefined!`);
        }
        if (typeof exactly !== "boolean" && typeof exactly !== "undefined") {
            throw new TypeError(`Filter argument \`exactly\` must be type of boolean or undefined!`);
        }
        if (typeof global !== "boolean" && typeof global !== "undefined") {
            throw new TypeError(`Filter argument \`global\` must be type of boolean or undefined!`);
        }
        if (typeof ignoreCase !== "boolean" && typeof ignoreCase !== "undefined") {
            throw new TypeError(`Filter argument \`ignoreCase\` must be type of boolean or undefined!`);
        }
        if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
            throw new TypeError(`Filter argument \`multipleLine\` must be type of boolean or undefined!`);
        }
        if (typeof sticky !== "boolean" && typeof sticky !== "undefined") {
            throw new TypeError(`Filter argument \`sticky\` must be type of boolean or undefined!`);
        }
        if (typeof unicode !== "boolean" && typeof unicode !== "undefined") {
            throw new TypeError(`Filter argument \`unicode\` must be type of boolean or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_dotAll, dotAll, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_exactly, exactly, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_global, global, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_ignoreCase, ignoreCase, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_multipleLine, multipleLine, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_sticky, sticky, "f");
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_unicode, unicode, "f");
    }
    /**
     * @method test
     * @description Determine item with the configured filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof RegExp) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_dotAll, "f") === false && item.dotAll) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_dotAll, "f") === true && !item.dotAll) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_exactly, "f") === false && item.source.startsWith("^") && item.source.endsWith("$")) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_exactly, "f") === true && (!item.source.startsWith("^") ||
                !item.source.endsWith("$"))) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_global, "f") === false && item.global) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_global, "f") === true && !item.global) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_ignoreCase, "f") === false && item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_ignoreCase, "f") === true && !item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_multipleLine, "f") === false && item.multiline) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_multipleLine, "f") === true && !item.multiline) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_sticky, "f") === false && item.sticky) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_sticky, "f") === true && !item.sticky) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_unicode, "f") === false && item.unicode) ||
            (__classPrivateFieldGet(this, _RegularExpressionItemFilter_unicode, "f") === true && !item.unicode)) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @param {RegularExpressionItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_RegularExpressionItemFilter_dotAll = new WeakMap(), _RegularExpressionItemFilter_exactly = new WeakMap(), _RegularExpressionItemFilter_global = new WeakMap(), _RegularExpressionItemFilter_ignoreCase = new WeakMap(), _RegularExpressionItemFilter_multipleLine = new WeakMap(), _RegularExpressionItemFilter_sticky = new WeakMap(), _RegularExpressionItemFilter_unicode = new WeakMap();
/**
 * @function isRegularExpression
 * @description Determine item with the filter of type of regular expression.
 * @param {unknown} item Item that need to determine.
 * @param {RegularExpressionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item, options = {}) {
    return new RegularExpressionItemFilter(options).test(item);
}
export { isRegularExpression, isRegularExpression as isRegEx, isRegularExpression as isRegExp, RegularExpressionItemFilter, RegularExpressionItemFilter as RegExItemFilter, RegularExpressionItemFilter as RegExpItemFilter };
