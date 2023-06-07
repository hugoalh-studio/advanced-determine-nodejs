/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
class RegularExpressionItemFilter {
    #dotAll;
    #exactly;
    #global;
    #ignoreCase;
    #multipleLine;
    #sticky;
    #unicode;
    /**
     * @constructor
     * @description Initialize the filter of type of regular expression to determine item.
     * @param {RegularExpressionItemFilter | RegularExpressionItemFilterOptions} [options] Options.
     */
    constructor(options) {
        if (options instanceof RegularExpressionItemFilter) {
            this.#dotAll = options.#dotAll;
            this.#exactly = options.#exactly;
            this.#global = options.#global;
            this.#ignoreCase = options.#ignoreCase;
            this.#multipleLine = options.#multipleLine;
            this.#sticky = options.#sticky;
            this.#unicode = options.#unicode;
        }
        else if (typeof options !== "undefined") {
            options.exactly ??= options.exact;
            options.ignoreCase ??= options.caseInsensitive;
            options.multipleLine ??= options.multiLine ?? options.multiline;
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
            dotAll: this.#dotAll,
            exactly: this.#exactly,
            global: this.#global,
            ignoreCase: this.#ignoreCase,
            multipleLine: this.#multipleLine,
            sticky: this.#sticky,
            unicode: this.#unicode
        };
    }
    /**
     * @method dotAll
     * @description Whether a dot-all regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    dotAll(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`dotAll\` must be type of string or undefined!`);
        }
        this.#dotAll = value;
        return this;
    }
    /**
     * @method exactly
     * @description Whether an exactly regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    exactly(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`exactly\` must be type of string or undefined!`);
        }
        this.#exactly = value;
        return this;
    }
    /**
     * @method global
     * @description Whether a global regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    global(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`global\` must be type of string or undefined!`);
        }
        this.#global = value;
        return this;
    }
    /**
     * @method ignoreCase
     * @description Whether a case insensitive regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    ignoreCase(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`ignoreCase\` must be type of string or undefined!`);
        }
        this.#ignoreCase = value;
        return this;
    }
    /**
     * @method multipleLine
     * @description Whether a multiple line regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    multipleLine(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`multipleLine\` must be type of string or undefined!`);
        }
        this.#multipleLine = value;
        return this;
    }
    /**
     * @method sticky
     * @description Whether a sticky regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    sticky(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`sticky\` must be type of string or undefined!`);
        }
        this.#sticky = value;
        return this;
    }
    /**
     * @method unicode
     * @description Whether an unicode regular expression.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    unicode(value) {
        if (typeof value !== "boolean" && typeof value !== "undefined") {
            throw new TypeError(`Filter argument \`unicode\` must be type of string or undefined!`);
        }
        this.#unicode = value;
        return this;
    }
    /** @alias exactly */ exact = this.exactly;
    /** @alias ignoreCase */ caseInsensitive = this.ignoreCase;
    /** @alias multipleLine */ multiline = this.multipleLine;
    /** @alias multipleLine */ multiLine = this.multipleLine;
    /**
     * @method test
     * @description Determine item with the configured filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item) {
        if (!(item instanceof RegExp) ||
            (this.#dotAll === false && item.dotAll) ||
            (this.#dotAll === true && !item.dotAll) ||
            (this.#exactly === false && item.source.startsWith("^") && item.source.endsWith("$")) ||
            (this.#exactly === true && (!item.source.startsWith("^") ||
                !item.source.endsWith("$"))) ||
            (this.#global === false && item.global) ||
            (this.#global === true && !item.global) ||
            (this.#ignoreCase === false && item.ignoreCase) ||
            (this.#ignoreCase === true && !item.ignoreCase) ||
            (this.#multipleLine === false && item.multiline) ||
            (this.#multipleLine === true && !item.multiline) ||
            (this.#sticky === false && item.sticky) ||
            (this.#sticky === true && !item.sticky) ||
            (this.#unicode === false && item.unicode) ||
            (this.#unicode === true && !item.unicode)) {
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
