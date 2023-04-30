interface RegularExpressionItemFilterOptionsBase {
    /**
     * @property dotAll
     * @description Whether a dot-all regular expression.
     * @default undefined
     */
    dotAll?: boolean;
    /**
     * @property exactly
     * @description Whether an exactly regular expression.
     * @default undefined
     */
    exactly?: boolean;
    /**
     * @property global
     * @description Whether a global regular expression.
     * @default undefined
     */
    global?: boolean;
    /**
     * @property ignoreCase
     * @description Whether a case insensitive regular expression.
     * @default undefined
     */
    ignoreCase?: boolean;
    /**
     * @property multipleLine
     * @description Whether a multiple line regular expression.
     * @default undefined
     */
    multipleLine?: boolean;
    /**
     * @property sticky
     * @description Whether a sticky regular expression.
     * @default undefined
     */
    sticky?: boolean;
    /**
     * @property unicode
     * @description Whether an unicode regular expression.
     * @default undefined
     */
    unicode?: boolean;
}
interface RegularExpressionItemFilterOptions extends Partial<RegularExpressionItemFilterOptionsBase> {
    /** @alias exactly */ exact?: boolean;
    /** @alias ignoreCase */ caseInsensitive?: boolean;
    /** @alias multipleLine */ multiline?: boolean;
    /** @alias multipleLine */ multiLine?: boolean;
}
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
declare class RegularExpressionItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of regular expression to determine item.
     * @param {RegularExpressionItemFilter | RegularExpressionItemFilterOptions} [options] Options.
     */
    constructor(options?: RegularExpressionItemFilter | RegularExpressionItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {RegularExpressionItemFilter} Another instance of this filter.
     */
    get clone(): RegularExpressionItemFilter;
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {RegularExpressionItemFilterOptionsBase} Status of this filter.
     */
    get status(): RegularExpressionItemFilterOptionsBase;
    /**
     * @method dotAll
     * @description Whether a dot-all regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    dotAll(value?: boolean): this;
    /**
     * @method exactly
     * @description Whether an exactly regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    exactly(value?: boolean): this;
    /**
     * @method global
     * @description Whether a global regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    global(value?: boolean): this;
    /**
     * @method ignoreCase
     * @description Whether a case insensitive regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    ignoreCase(value?: boolean): this;
    /**
     * @method multipleLine
     * @description Whether a multiple line regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    multipleLine(value?: boolean): this;
    /**
     * @method sticky
     * @description Whether a sticky regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    sticky(value?: boolean): this;
    /**
     * @method unicode
     * @description Whether an unicode regular expression.
     * @param {boolean} [value]
     * @returns {this}
     */
    unicode(value?: boolean): this;
    /** @alias exactly */ exact: (value?: boolean) => this;
    /** @alias ignoreCase */ caseInsensitive: (value?: boolean) => this;
    /** @alias multipleLine */ multiline: (value?: boolean) => this;
    /** @alias multipleLine */ multiLine: (value?: boolean) => this;
    /**
     * @method test
     * @description Determine item with the configured filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @param {RegularExpressionItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: RegularExpressionItemFilterOptions): boolean;
}
/**
 * @function isRegularExpression
 * @description Determine item with the filter of type of regular expression.
 * @param {unknown} item Item that need to determine.
 * @param {RegularExpressionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isRegularExpression(item: unknown, options?: RegularExpressionItemFilterOptions): boolean;
export { isRegularExpression, isRegularExpression as isRegEx, isRegularExpression as isRegExp, RegularExpressionItemFilter, RegularExpressionItemFilter as RegExItemFilter, RegularExpressionItemFilter as RegExpItemFilter, type RegularExpressionItemFilterOptions, type RegularExpressionItemFilterOptions as RegExItemFilterOptions, type RegularExpressionItemFilterOptions as RegExpItemFilterOptions, type RegularExpressionItemFilterOptionsBase, type RegularExpressionItemFilterOptionsBase as RegExItemFilterOptionsBase, type RegularExpressionItemFilterOptionsBase as RegExpItemFilterOptionsBase };
//# sourceMappingURL=regular-expression.d.ts.map