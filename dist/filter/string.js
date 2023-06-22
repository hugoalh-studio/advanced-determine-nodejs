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
var _StringFilter_status;
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
        _StringFilter_status.set(this, {
            ascii: "neutral",
            case: "any",
            lengthMaximum: Infinity,
            lengthMinimum: 1,
            line: "any",
            pattern: undefined,
            preTrim: false
        });
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
            __classPrivateFieldSet(this, _StringFilter_status, { ...__classPrivateFieldGet(options, _StringFilter_status, "f") }, "f");
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
        return { ...__classPrivateFieldGet(this, _StringFilter_status, "f") };
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
        __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum = value ? 0 : 1;
        return this;
    }
    /**
     * @method ascii
     * @description Whether an ASCII string.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ascii(value) {
        __classPrivateFieldGet(this, _StringFilter_status, "f").ascii = enumResolver(ThreePhaseConditionEnum, value, "ascii");
        return this;
    }
    /**
     * @method case
     * @description Case of the string.
     * @param {StringCaseEnumKeysType} value
     * @returns {this}
     */
    case(value) {
        __classPrivateFieldGet(this, _StringFilter_status, "f").case = enumResolver(StringCaseEnum, value, "case");
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
        __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMaximum = value;
        __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum = value;
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
        if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum)) {
            throw new RangeError(`Filter argument \`lengthMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${__classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum}!`);
        }
        __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMaximum = value;
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
        if (!(Number.isSafeInteger(value) && value >= 0 && value <= __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMaximum)) {
            throw new RangeError(`Filter argument \`lengthMinimum\` must be a number which is integer, positive, safe, and <= ${__classPrivateFieldGet(this, _StringFilter_status, "f").lengthMaximum}!`);
        }
        __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum = value;
        return this;
    }
    /**
     * @method line
     * @description Line of the string.
     * @param {StringLineEnumKeysType} value
     * @returns {this}
     */
    line(value) {
        __classPrivateFieldGet(this, _StringFilter_status, "f").line = enumResolver(StringLineEnum, value, "line");
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
        __classPrivateFieldGet(this, _StringFilter_status, "f").pattern = value;
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
        __classPrivateFieldGet(this, _StringFilter_status, "f").preTrim = value;
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
        let itemRaw = __classPrivateFieldGet(this, _StringFilter_status, "f").preTrim ? item.trim() : item;
        if ((__classPrivateFieldGet(this, _StringFilter_status, "f").ascii === "false" && isStringASCII(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").ascii === "true" && !isStringASCII(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").case === "lower" && !isStringLowerCase(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").case === "upper" && !isStringUpperCase(itemRaw)) ||
            __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMaximum < itemRaw.length ||
            itemRaw.length < __classPrivateFieldGet(this, _StringFilter_status, "f").lengthMinimum ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").pattern instanceof RegExp && !__classPrivateFieldGet(this, _StringFilter_status, "f").pattern.test(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").line === "multiple" && !isStringMultipleLine(itemRaw)) ||
            (__classPrivateFieldGet(this, _StringFilter_status, "f").line === "single" && !isStringSingleLine(itemRaw))) {
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
_StringFilter_status = new WeakMap();
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
