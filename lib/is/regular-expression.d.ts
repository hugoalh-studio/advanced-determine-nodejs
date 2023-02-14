export default isRegularExpression;
/**
 * @function isRegularExpression
 * @alias isRegEx
 * @alias isRegExp
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
declare function isRegularExpression(item: unknown, { caseInsensitive, dotAll, exactly, global, multipleLine, sticky, unicode, ...aliases }?: {
    caseInsensitive?: boolean;
    dotAll?: boolean;
    exactly?: boolean;
    global?: boolean;
    multipleLine?: boolean;
    sticky?: boolean;
    unicode?: boolean;
}): boolean;
//# sourceMappingURL=regular-expression.d.ts.map