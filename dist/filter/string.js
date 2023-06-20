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
var _StringFilter_ascii, _StringFilter_case, _StringFilter_lengthMaximum, _StringFilter_lengthMinimum, _StringFilter_line, _StringFilter_pattern, _StringFilter_preTrim;
import { enumResolver, StringCaseEnum, StringLineEnum, ThreePhaseConditionEnum } from "../internal/enum.js";
import { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase } from "../string.js";
/**
 * @class StringFilter
 * @description Filter for string.
 */
class StringFilter {
    /**
     * @constructor
     * @description Initialize the string filter.
     * @param {StringFilter | StringFilterOptions} [options] Options.
     */
    constructor(options) {
        _StringFilter_ascii.set(this, "neutral");
        _StringFilter_case.set(this, "any");
        _StringFilter_lengthMaximum.set(this, Infinity);
        _StringFilter_lengthMinimum.set(this, 1);
        _StringFilter_line.set(this, "any");
        _StringFilter_pattern.set(this, void 0);
        _StringFilter_preTrim.set(this, void 0);
        /** @alias length */ this.characters = this.length;
        /** @alias lengthMaximum */ this.charactersMax = this.lengthMaximum;
        /** @alias lengthMaximum */ this.charactersMaximum = this.lengthMaximum;
        /** @alias lengthMaximum */ this.lengthMax = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maxCharacters = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maximumCharacters = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maximumLength = this.lengthMaximum;
        /** @alias lengthMaximum */ this.maxLength = this.lengthMaximum;
        /** @alias lengthMinimum */ this.charactersMin = this.lengthMinimum;
        /** @alias lengthMinimum */ this.charactersMinimum = this.lengthMinimum;
        /** @alias lengthMinimum */ this.lengthMin = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minCharacters = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minimumCharacters = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minimumLength = this.lengthMinimum;
        /** @alias lengthMinimum */ this.minLength = this.lengthMinimum;
        /** @alias multipleLine */ this.multiline = this.multipleLine;
        /** @alias multipleLine */ this.multiLine = this.multipleLine;
        if (options instanceof StringFilter) {
            __classPrivateFieldSet(this, _StringFilter_ascii, __classPrivateFieldGet(options, _StringFilter_ascii, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_case, __classPrivateFieldGet(options, _StringFilter_case, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_lengthMaximum, __classPrivateFieldGet(options, _StringFilter_lengthMaximum, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_lengthMinimum, __classPrivateFieldGet(options, _StringFilter_lengthMinimum, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_line, __classPrivateFieldGet(options, _StringFilter_line, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_pattern, __classPrivateFieldGet(options, _StringFilter_pattern, "f"), "f");
            __classPrivateFieldSet(this, _StringFilter_preTrim, __classPrivateFieldGet(options, _StringFilter_preTrim, "f"), "f");
        }
        else if (typeof options !== "undefined") {
            options.length ?? (options.length = options.characters);
            options.lengthMaximum ?? (options.lengthMaximum = options.lengthMax ?? options.charactersMaximum ?? options.charactersMax ?? options.maximumLength ?? options.maxLength ?? options.maximumCharacters ?? options.maxCharacters);
            options.lengthMinimum ?? (options.lengthMinimum = options.lengthMin ?? options.charactersMinimum ?? options.charactersMin ?? options.minimumLength ?? options.minLength ?? options.minimumCharacters ?? options.minCharacters);
            for (let option of ["ascii", "case", "lengthMaximum", "lengthMinimum", "line", "pattern", "preTrim", "allowEmpty", "length"]) {
                if (typeof options[option] !== "undefined") {
                    this[option](options[option]);
                }
            }
        }
    }
    /**
     * @method clone
     * @description Clone this string filter for reuse.
     * @returns {StringFilter} Another instance of this string filter.
     */
    get clone() {
        return new StringFilter(this);
    }
    /**
     * @method status
     * @description Get the status of this string filter.
     * @returns {StringFilterStatus} Status of this string filter.
     */
    get status() {
        return {
            ascii: __classPrivateFieldGet(this, _StringFilter_ascii, "f"),
            case: __classPrivateFieldGet(this, _StringFilter_case, "f"),
            lengthMaximum: __classPrivateFieldGet(this, _StringFilter_lengthMaximum, "f"),
            lengthMinimum: __classPrivateFieldGet(this, _StringFilter_lengthMinimum, "f"),
            line: __classPrivateFieldGet(this, _StringFilter_line, "f"),
            pattern: __classPrivateFieldGet(this, _StringFilter_pattern, "f"),
            preTrim: __classPrivateFieldGet(this, _StringFilter_preTrim, "f")
        };
    }
    /**
     * @method allowEmpty
     * @description Whether to allow an empty string.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _StringFilter_lengthMinimum, value ? 0 : 1, "f");
        return this;
    }
    /**
     * @method ascii
     * @description Whether an ASCII string.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ascii(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`ascii\` must be type of string!`);
        }
        let valueResolve = enumResolver(ThreePhaseConditionEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`ascii\` must be either of these values: "${Object.keys(ThreePhaseConditionEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _StringFilter_ascii, valueResolve, "f");
        return this;
    }
    /**
     * @method case
     * @description Case of the string.
     * @param {StringCaseEnumKeysType} value
     * @returns {this}
     */
    case(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`case\` must be type of string!`);
        }
        let valueResolve = enumResolver(StringCaseEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`case\` must be either of these values: "${Object.keys(StringCaseEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _StringFilter_case, valueResolve, "f");
        return this;
    }
    /**
     * @method length
     * @description Length of the string.
     * @param {number} value
     * @returns {this}
     */
    length(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`length\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0)) {
            throw new RangeError(`Filter argument \`length\` must be a number which is integer, positive, and safe!`);
        }
        __classPrivateFieldSet(this, _StringFilter_lengthMaximum, value, "f");
        __classPrivateFieldSet(this, _StringFilter_lengthMinimum, value, "f");
        return this;
    }
    /**
     * @method lengthMaximum
     * @description Maximum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`lengthMaximum\` must be type of number!`);
        }
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _StringFilter_lengthMinimum, "f"))) {
            throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _StringFilter_lengthMinimum, "f")}!`);
        }
        __classPrivateFieldSet(this, _StringFilter_lengthMaximum, value, "f");
        return this;
    }
    /**
     * @method lengthMinimum
     * @description Minimum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value) {
        if (!(typeof value === "number" && !Number.isNaN(value))) {
            throw new TypeError(`Filter argument \`lengthMinimum\` must be type of number!`);
        }
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _StringFilter_lengthMaximum, "f"))) {
            throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _StringFilter_lengthMaximum, "f")}!`);
        }
        __classPrivateFieldSet(this, _StringFilter_lengthMinimum, value, "f");
        return this;
    }
    /**
     * @method line
     * @description Line of the string.
     * @param {StringLineEnumKeysType} value
     * @returns {this}
     */
    line(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Filter argument \`line\` must be type of string!`);
        }
        let valueResolve = enumResolver(StringLineEnum, value);
        if (typeof valueResolve !== "string") {
            throw new RangeError(`Filter argument \`line\` must be either of these values: "${Object.keys(StringLineEnum).sort().join("\", \"")}"`);
        }
        __classPrivateFieldSet(this, _StringFilter_line, valueResolve, "f");
        return this;
    }
    /**
     * @method pattern
     * @description Whether a pattern matchable string.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    pattern(value) {
        if (!(value instanceof RegExp) && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`pattern\` must be instance of regular expression, or type of undefined!`);
        }
        __classPrivateFieldSet(this, _StringFilter_pattern, value, "f");
        return this;
    }
    /**
     * @method preTrim
     * @description Whether to trim the string internally before determine.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    preTrim(value = true) {
        if (typeof value !== "boolean") {
            throw new TypeError(`Filter argument \`preTrim\` must be type of boolean!`);
        }
        __classPrivateFieldSet(this, _StringFilter_preTrim, value, "f");
        return this;
    }
    /**
     * @method lowerCase
     * @description Set to allow a lower case string.
     * @returns {this}
     */
    lowerCase() {
        return this.case("lower");
    }
    /**
     * @method multipleLine
     * @description Set to allow a multiple line string.
     * @returns {this}
     */
    multipleLine() {
        return this.line("multiple");
    }
    /**
     * @method singleLine
     * @description Set to allow a single line string.
     * @returns {this}
     */
    singleLine() {
        return this.line("single");
    }
    /**
     * @method upperCase
     * @description Set to allow an upper case string.
     * @returns {this}
     */
    upperCase() {
        return this.case("upper");
    }
    /**
     * @method test
     * @description Determine item with the configured string filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (typeof item !== "string") {
            return false;
        }
        let itemRaw = __classPrivateFieldGet(this, _StringFilter_preTrim, "f") ? item.trim() : item;
        if ((__classPrivateFieldGet(this, _StringFilter_ascii, "f") === "false" && isStringASCII(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_ascii, "f") === "true" && !isStringASCII(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_case, "f") === "lower" && !isStringLowerCase(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_case, "f") === "upper" && !isStringUpperCase(itemRaw)) ||
            __classPrivateFieldGet(this, _StringFilter_lengthMaximum, "f") < itemRaw.length ||
            itemRaw.length < __classPrivateFieldGet(this, _StringFilter_lengthMinimum, "f") ||
            (__classPrivateFieldGet(this, _StringFilter_pattern, "f") instanceof RegExp && !__classPrivateFieldGet(this, _StringFilter_pattern, "f").test(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_line, "f") === "multiple" && !isStringMultipleLine(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_line, "f") === "single" && !isStringSingleLine(itemRaw))) {
            return false;
        }
        return true;
    }
    /**
     * @static test
     * @description Determine item with the string filter.
     * @param {unknown} item Item that need to determine.
     * @param {StringFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item, options = {}) {
        return new this(options).test(item);
    }
}
_StringFilter_ascii = new WeakMap(), _StringFilter_case = new WeakMap(), _StringFilter_lengthMaximum = new WeakMap(), _StringFilter_lengthMinimum = new WeakMap(), _StringFilter_line = new WeakMap(), _StringFilter_pattern = new WeakMap(), _StringFilter_preTrim = new WeakMap();
/**
 * @function filterString
 * @description Determine item with the string filter.
 * @param {unknown} item Item that need to determine.
 * @param {StringFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function filterString(item, options = {}) {
    return new StringFilter(options).test(item);
}
export { filterString, StringFilter };
