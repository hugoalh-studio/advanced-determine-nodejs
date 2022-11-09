export = isRegularExpression;
/**
 * @function isRegularExpression
 * @alias isRegEx
 * @alias isRegExp
 * @description Determine item is type of regular expression or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.caseInsensitive] Whether a case insensitive regular expression.
 * @param {boolean} [param1.dotAll] Whether a dot-all regular expression.
 * @param {boolean} [param1.exactly] Whether an exactly regular expression.
 * @param {boolean} [param1.global] Whether a global regular expression.
 * @param {boolean} [param1.multipleLine] Whether a multiple line regular expression.
 * @param {boolean} [param1.sticky] Whether a sticky regular expression.
 * @param {boolean} [param1.unicode] Whether an unicode regular expression.
 * @returns {item is RegExp} Determine result.
 * @throws {TypeError} Argument `caseInsensitive` is not type of boolean or undefined.
 * @throws {TypeError} Argument `dotAll` is not type of boolean or undefined.
 * @throws {TypeError} Argument `exactly` is not type of boolean or undefined.
 * @throws {TypeError} Argument `global` is not type of boolean or undefined.
 * @throws {TypeError} Argument `multipleLine` is not type of boolean or undefined.
 * @throws {TypeError} Argument `sticky` is not type of boolean or undefined.
 * @throws {TypeError} Argument `unicode` is not type of boolean or undefined.
 */
declare function isRegularExpression(item: unknown, { caseInsensitive, dotAll, exactly, global, multipleLine, sticky, unicode, ...aliases }?: {
    caseInsensitive?: boolean;
    dotAll?: boolean;
    exactly?: boolean;
    global?: boolean;
    multipleLine?: boolean;
    sticky?: boolean;
    unicode?: boolean;
}): item is RegExp;
//# sourceMappingURL=is-regular-expression.d.ts.map