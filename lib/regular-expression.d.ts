/**
 * @function isRegularExpression
 * @description Determine item with the filter of type of regular expression.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.caseInsensitive] Whether a case insensitive regular expression.
 * @param {boolean} [param1.dotAll] Whether a dot-all regular expression.
 * @param {boolean} [param1.exactly] Whether an exactly regular expression.
 * @param {boolean} [param1.global] Whether a global regular expression.
 * @param {boolean} [param1.multipleLine] Whether a multiple line regular expression.
 * @param {boolean} [param1.sticky] Whether a sticky regular expression.
 * @param {boolean} [param1.unicode] Whether an unicode regular expression.
 * @returns {boolean} Determine result.
 */
export function isRegularExpression(item: unknown, { caseInsensitive, dotAll, exactly, global, multipleLine, sticky, unicode, ...aliases }?: {
    caseInsensitive?: boolean;
    dotAll?: boolean;
    exactly?: boolean;
    global?: boolean;
    multipleLine?: boolean;
    sticky?: boolean;
    unicode?: boolean;
}): boolean;
/**
 * @class RegularExpressionItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
export class RegularExpressionItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.caseInsensitive] Whether a case insensitive regular expression.
     * @param {boolean} [param1.dotAll] Whether a dot-all regular expression.
     * @param {boolean} [param1.exactly] Whether an exactly regular expression.
     * @param {boolean} [param1.global] Whether a global regular expression.
     * @param {boolean} [param1.multipleLine] Whether a multiple line regular expression.
     * @param {boolean} [param1.sticky] Whether a sticky regular expression.
     * @param {boolean} [param1.unicode] Whether an unicode regular expression.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { caseInsensitive, dotAll, exactly, global, multipleLine, sticky, unicode, ...aliases }?: {
        caseInsensitive?: boolean;
        dotAll?: boolean;
        exactly?: boolean;
        global?: boolean;
        multipleLine?: boolean;
        sticky?: boolean;
        unicode?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of regular expression to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.caseInsensitive] Whether a case insensitive regular expression.
     * @param {boolean} [param0.dotAll] Whether a dot-all regular expression.
     * @param {boolean} [param0.exactly] Whether an exactly regular expression.
     * @param {boolean} [param0.global] Whether a global regular expression.
     * @param {boolean} [param0.multipleLine] Whether a multiple line regular expression.
     * @param {boolean} [param0.sticky] Whether a sticky regular expression.
     * @param {boolean} [param0.unicode] Whether an unicode regular expression.
     */
    constructor({ caseInsensitive, dotAll, exactly, global, multipleLine, sticky, unicode, ...aliases }?: {
        caseInsensitive?: boolean;
        dotAll?: boolean;
        exactly?: boolean;
        global?: boolean;
        multipleLine?: boolean;
        sticky?: boolean;
        unicode?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of regular expression.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
export { isRegularExpression as isRegEx, isRegularExpression as isRegExp, RegularExpressionItemFilter as RegExItemFilter, RegularExpressionItemFilter as RegExpItemFilter };
//# sourceMappingURL=regular-expression.d.ts.map