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
var _RegularExpressionItemFilter_dotAll, _RegularExpressionItemFilter_exactly, _RegularExpressionItemFilter_global, _RegularExpressionItemFilter_ignoreCase, _RegularExpressionItemFilter_multipleLine, _RegularExpressionItemFilter_sticky, _RegularExpressionItemFilter_unicode;
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of regular expression to determine item.
     * @param {RegularExpressionItemFilter | RegularExpressionItemFilterOptions} [options] Options.
     */
    constructor(options) {
        _RegularExpressionItemFilter_dotAll.set(this, void 0);
        _RegularExpressionItemFilter_exactly.set(this, void 0);
        _RegularExpressionItemFilter_global.set(this, void 0);
        _RegularExpressionItemFilter_ignoreCase.set(this, void 0);
        _RegularExpressionItemFilter_multipleLine.set(this, void 0);
        _RegularExpressionItemFilter_sticky.set(this, void 0);
        _RegularExpressionItemFilter_unicode.set(this, void 0);
        /** @alias exactly */ this.exact = this.exactly;
        /** @alias ignoreCase */ this.caseInsensitive = this.ignoreCase;
        /** @alias multipleLine */ this.multiline = this.multipleLine;
        /** @alias multipleLine */ this.multiLine = this.multipleLine;
        if (options instanceof RegularExpressionItemFilter) {
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_dotAll, __classPrivateFieldGet(options, _RegularExpressionItemFilter_dotAll, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_exactly, __classPrivateFieldGet(options, _RegularExpressionItemFilter_exactly, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_global, __classPrivateFieldGet(options, _RegularExpressionItemFilter_global, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_ignoreCase, __classPrivateFieldGet(options, _RegularExpressionItemFilter_ignoreCase, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_multipleLine, __classPrivateFieldGet(options, _RegularExpressionItemFilter_multipleLine, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_sticky, __classPrivateFieldGet(options, _RegularExpressionItemFilter_sticky, "f"), "f");
            __classPrivateFieldSet(this, _RegularExpressionItemFilter_unicode, __classPrivateFieldGet(options, _RegularExpressionItemFilter_unicode, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.exactly ?? (options.exactly = options.exact);
            options.ignoreCase ?? (options.ignoreCase = options.caseInsensitive);
            options.multipleLine ?? (options.multipleLine = options.multiLine ?? options.multiline);
            for (let option of ["dotAll", "exactly", "global", "ignoreCase", "multipleLine", "sticky", "unicode"]) {
                if (typeof option !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {RegularExpressionItemFilter} Another instance of this filter.
     */
    get clone() {
        return new RegularExpressionItemFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {RegularExpressionItemFilterOptionsBase} Status of this filter.
     */
    get status() {
        return {
            dotAll: __classPrivateFieldGet(this, _RegularExpressionItemFilter_dotAll, "f"),
            exactly: __classPrivateFieldGet(this, _RegularExpressionItemFilter_exactly, "f"),
            global: __classPrivateFieldGet(this, _RegularExpressionItemFilter_global, "f"),
            ignoreCase: __classPrivateFieldGet(this, _RegularExpressionItemFilter_ignoreCase, "f"),
            multipleLine: __classPrivateFieldGet(this, _RegularExpressionItemFilter_multipleLine, "f"),
            sticky: __classPrivateFieldGet(this, _RegularExpressionItemFilter_sticky, "f"),
            unicode: __classPrivateFieldGet(this, _RegularExpressionItemFilter_unicode, "f")
        };
    }
    /**
     * @method dotAll
     * @description Whether a dot-all regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    dotAll(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`dotAll\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_dotAll, value, "f");
        return this;
    }
    /**
     * @method exactly
     * @description Whether an exactly regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    exactly(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`exactly\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_exactly, value, "f");
        return this;
    }
    /**
     * @method global
     * @description Whether a global regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    global(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`global\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_global, value, "f");
        return this;
    }
    /**
     * @method ignoreCase
     * @description Whether a case insensitive regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    ignoreCase(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`ignoreCase\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_ignoreCase, value, "f");
        return this;
    }
    /**
     * @method multipleLine
     * @description Whether a multiple line regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    multipleLine(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`multipleLine\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_multipleLine, value, "f");
        return this;
    }
    /**
     * @method sticky
     * @description Whether a sticky regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    sticky(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`sticky\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_sticky, value, "f");
        return this;
    }
    /**
     * @method unicode
     * @description Whether an unicode regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    unicode(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`unicode\` must be type of string or undefined!`);
        }
        __classPrivateFieldSet(this, _RegularExpressionItemFilter_unicode, value, "f");
        return this;
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
