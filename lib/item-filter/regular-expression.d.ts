export default RegularExpressionItemFilter;
/**
 * @class RegularExpressionItemFilter
 * @alias RegExItemFilter
 * @alias RegExpItemFilter
 * @description Determine item with the filter of type of regular expression.
 */
declare class RegularExpressionItemFilter {
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
//# sourceMappingURL=regular-expression.d.ts.map