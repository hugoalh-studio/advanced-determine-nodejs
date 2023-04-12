interface RegularExpressionItemFilterOptions {
    /**
     * @property caseInsensitive
     * @description Whether a case insensitive regular expression.
     * @default undefined
     */
    caseInsensitive?: boolean;
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
    /** @alias caseInsensitive */ ignoreCase?: boolean;
    /** @alias exactly */ exact?: boolean;
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
     * @param {RegularExpressionItemFilterOptions} [options={}] Options.
     */
    constructor(options?: RegularExpressionItemFilterOptions);
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
export { isRegularExpression, isRegularExpression as isRegEx, isRegularExpression as isRegExp, RegularExpressionItemFilter, RegularExpressionItemFilter as RegExItemFilter, RegularExpressionItemFilter as RegExpItemFilter, type RegularExpressionItemFilterOptions, type RegularExpressionItemFilterOptions as RegExItemFilterOptions, type RegularExpressionItemFilterOptions as RegExpItemFilterOptions };
//# sourceMappingURL=regular-expression.d.ts.map