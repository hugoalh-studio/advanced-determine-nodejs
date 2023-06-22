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
var _RegExpFilter_status;
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
        _RegExpFilter_status.set(this, {
            dotAll: "neutral",
            exactly: "neutral",
            global: "neutral",
            ignoreCase: "neutral",
            multipleLine: "neutral",
            sticky: "neutral",
            unicode: "neutral"
        });
        /** @alias exactly */ this.exact = this.exactly;
        /** @alias ignoreCase */ this.caseInsensitive = this.ignoreCase;
        /** @alias multipleLine */ this.multiline = this.multipleLine;
        /** @alias multipleLine */ this.multiLine = this.multipleLine;
        if (options instanceof RegExpFilter) {
            __classPrivateFieldSet(this, _RegExpFilter_status, { ...__classPrivateFieldGet(options, _RegExpFilter_status, "f") }, "f");
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
        return { ...__classPrivateFieldGet(this, _RegExpFilter_status, "f") };
    }
    /**
     * @method dotAll
     * @description Whether a dot-all `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    dotAll(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").dotAll = enumResolver(ThreePhaseConditionEnum, value, "dotAll");
        return this;
    }
    /**
     * @method exactly
     * @description Whether an exactly `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    exactly(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").exactly = enumResolver(ThreePhaseConditionEnum, value, "exactly");
        return this;
    }
    /**
     * @method global
     * @description Whether a global `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    global(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").global = enumResolver(ThreePhaseConditionEnum, value, "global");
        return this;
    }
    /**
     * @method ignoreCase
     * @description Whether a case insensitive `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ignoreCase(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").ignoreCase = enumResolver(ThreePhaseConditionEnum, value, "ignoreCase");
        return this;
    }
    /**
     * @method multipleLine
     * @description Whether a multiple line `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    multipleLine(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").multipleLine = enumResolver(ThreePhaseConditionEnum, value, "multipleLine");
        return this;
    }
    /**
     * @method sticky
     * @description Whether a sticky `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    sticky(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").sticky = enumResolver(ThreePhaseConditionEnum, value, "sticky");
        return this;
    }
    /**
     * @method unicode
     * @description Whether an unicode `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    unicode(value) {
        __classPrivateFieldGet(this, _RegExpFilter_status, "f").unicode = enumResolver(ThreePhaseConditionEnum, value, "unicode");
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
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").dotAll === "false" && item.dotAll) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").dotAll === "true" && !item.dotAll) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").exactly === "false" && item.source.startsWith("^") && item.source.endsWith("$")) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").exactly === "true" && (!item.source.startsWith("^") ||
                !item.source.endsWith("$"))) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").global === "false" && item.global) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").global === "true" && !item.global) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").ignoreCase === "false" && item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").ignoreCase === "true" && !item.ignoreCase) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").multipleLine === "false" && item.multiline) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").multipleLine === "true" && !item.multiline) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").sticky === "false" && item.sticky) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").sticky === "true" && !item.sticky) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").unicode === "false" && item.unicode) ||
            (__classPrivateFieldGet(this, _RegExpFilter_status, "f").unicode === "true" && !item.unicode)) {
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
_RegExpFilter_status = new WeakMap();
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
