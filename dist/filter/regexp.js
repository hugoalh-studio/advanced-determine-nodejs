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
var _RegExpFilter_dotAll, _RegExpFilter_exactly, _RegExpFilter_global, _RegExpFilter_ignoreCase, _RegExpFilter_multipleLine, _RegExpFilter_sticky, _RegExpFilter_unicode;
import { enumResolver, ThreePhaseConditionEnum } from "../internal/enum.js";
/**
 * @class RegExpFilter
 * @description Filter for `RegExp`.
 */
class RegExpFilter {
    /**
     * @constructor
     * @description Initialize the `RegExp` filter.
     * @param {RegExpFilter | RegExpFilterOptions} [options] Options.
     */
    constructor(options) {
        _RegExpFilter_dotAll.set(this, "neutral");
        _RegExpFilter_exactly.set(this, "neutral");
        _RegExpFilter_global.set(this, "neutral");
        _RegExpFilter_ignoreCase.set(this, "neutral");
        _RegExpFilter_multipleLine.set(this, "neutral");
        _RegExpFilter_sticky.set(this, "neutral");
        _RegExpFilter_unicode.set(this, "neutral");
        /** @alias exactly */ this.exact = this.exactly;
        /** @alias ignoreCase */ this.caseInsensitive = this.ignoreCase;
        /** @alias multipleLine */ this.multiline = this.multipleLine;
        /** @alias multipleLine */ this.multiLine = this.multipleLine;
        if (options instanceof RegExpFilter) {
            __classPrivateFieldSet(this, _RegExpFilter_dotAll, __classPrivateFieldGet(options, _RegExpFilter_dotAll, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_exactly, __classPrivateFieldGet(options, _RegExpFilter_exactly, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_global, __classPrivateFieldGet(options, _RegExpFilter_global, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_ignoreCase, __classPrivateFieldGet(options, _RegExpFilter_ignoreCase, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_multipleLine, __classPrivateFieldGet(options, _RegExpFilter_multipleLine, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_sticky, __classPrivateFieldGet(options, _RegExpFilter_sticky, "f"), "f");
            __classPrivateFieldSet(this, _RegExpFilter_unicode, __classPrivateFieldGet(options, _RegExpFilter_unicode, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.exactly ?? (options.exactly = options.exact);
            options.ignoreCase ?? (options.ignoreCase = options.caseInsensitive);
            options.multipleLine ?? (options.multipleLine = options.multiLine ?? options.multiline);
            for (let option of ["dotAll", "exactly", "global", "ignoreCase", "multipleLine", "sticky", "unicode"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this `RegExp` filter for reuse.
     * @returns {RegExpFilter} Another instance of this `RegExp` filter.
     */
    get clone() {
        return new RegExpFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this `RegExp` filter.
     * @returns {RegExpFilterStatus} Status of this `RegExp` filter.
     */
    get status() {
        return {
            dotAll: __classPrivateFieldGet(this, _RegExpFilter_dotAll, "f"),
            exactly: __classPrivateFieldGet(this, _RegExpFilter_exactly, "f"),
            global: __classPrivateFieldGet(this, _RegExpFilter_global, "f"),
            ignoreCase: __classPrivateFieldGet(this, _RegExpFilter_ignoreCase, "f"),
            multipleLine: __classPrivateFieldGet(this, _RegExpFilter_multipleLine, "f"),
            sticky: __classPrivateFieldGet(this, _RegExpFilter_sticky, "f"),
            unicode: __classPrivateFieldGet(this, _RegExpFilter_unicode, "f")
        };
    }
    /**
     * @method dotAll
     * @description Whether a dot-all `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    dotAll(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`dotAll\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`dotAll\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_dotAll, valueResolve, "f");
        return this;
    }
    /**
     * @method exactly
     * @description Whether an exactly `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    exactly(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`exactly\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`exactly\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_exactly, valueResolve, "f");
        return this;
    }
    /**
     * @method global
     * @description Whether a global `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    global(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`global\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`global\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_global, valueResolve, "f");
        return this;
    }
    /**
     * @method ignoreCase
     * @description Whether a case insensitive `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ignoreCase(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`ignoreCase\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`ignoreCase\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_ignoreCase, valueResolve, "f");
        return this;
    }
    /**
     * @method multipleLine
     * @description Whether a multiple line `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    multipleLine(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`multipleLine\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`multipleLine\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_multipleLine, valueResolve, "f");
        return this;
    }
    /**
     * @method sticky
     * @description Whether a sticky `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    sticky(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`sticky\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`sticky\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_sticky, valueResolve, "f");
        return this;
    }
    /**
     * @method unicode
     * @description Whether an unicode `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    unicode(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`unicode\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`unicode\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _RegExpFilter_unicode, valueResolve, "f");
        return this;
    }
    /**
     * @method test
     * @description Determine item with the configured `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof RegExp) ||
            (__classPrivateFieldGet(this, _RegExpFilter_dotAll, "f") === "false" && item.dotAll) ||
            (__classPrivateFieldGet(this, _RegExpFilter_dotAll, "f") === "true" && !item.dotAll) ||
            (__classPrivateFieldGet(this, _RegExpFilter_exactly, "f") === "false" && item.source.startsWith("^") && item.source.endsWith("$")) ||
            (__classPrivateFieldGet(this, _RegExpFilter_exactly, "f") === "true" && (!item.source.startsWith("^") ||
                !item.source.endsWith("$"))) ||
            (__classPrivateFieldGet(this, _RegExpFilter_global, "f") === "false" && item.global) ||
            (__classPrivateFieldGet(this, _RegExpFilter_global, "f") === "true" && !item.global) ||
            (__classPrivateFieldGet(this, _RegExpFilter_ignoreCase, "f") === "false" && item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegExpFilter_ignoreCase, "f") === "true" && !item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegExpFilter_multipleLine, "f") === "false" && item.multiline) ||
            (__classPrivateFieldGet(this, _RegExpFilter_multipleLine, "f") === "true" && !item.multiline) ||
            (__classPrivateFieldGet(this, _RegExpFilter_sticky, "f") === "false" && item.sticky) ||
            (__classPrivateFieldGet(this, _RegExpFilter_sticky, "f") === "true" && !item.sticky) ||
            (__classPrivateFieldGet(this, _RegExpFilter_unicode, "f") === "false" && item.unicode) ||
            (__classPrivateFieldGet(this, _RegExpFilter_unicode, "f") === "true" && !item.unicode)) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @param {RegExpFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_RegExpFilter_dotAll = new WeakMap(), _RegExpFilter_exactly = new WeakMap(), _RegExpFilter_global = new WeakMap(), _RegExpFilter_ignoreCase = new WeakMap(), _RegExpFilter_multipleLine = new WeakMap(), _RegExpFilter_sticky = new WeakMap(), _RegExpFilter_unicode = new WeakMap();
/**
 * @function filterRegExp
 * @description Determine item with the `RegExp` filter.
 * @param {unknown} item Item that need to determine.
 * @param {RegExpFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterRegExp(item, options = {}) {
    return new RegExpFilter(options).test(item);
}
export { filterRegExp, filterRegExp as filterRegEx, filterRegExp as filterRegularExpression, RegExpFilter, RegExpFilter as RegExFilter, RegExpFilter as RegularExpressionFilter };
