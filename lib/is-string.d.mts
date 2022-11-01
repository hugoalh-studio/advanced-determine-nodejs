export default isString;
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty] Whether to allow an empty string.
 * @param {boolean} [param1.ascii] Whether an ASCII string.
 * @param {boolean} [param1.lowerCase] Whether a lower case string.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the string.
 * @param {number} [param1.minimumLength=0] Minimum length of the string.
 * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
 * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
 * @param {boolean} [param1.singleLine] Whether a single line string.
 * @param {boolean} [param1.upperCase] Whether an upper case string.
 * @returns {item is string} Determine result.
 */
declare function isString(item: unknown, { allowEmpty, ascii, lowerCase, maximumLength, minimumLength, multipleLine, pattern, preTrim, singleLine, upperCase, ...aliases }?: {
    allowEmpty?: boolean;
    ascii?: boolean;
    lowerCase?: boolean;
    maximumLength?: number;
    minimumLength?: number;
    multipleLine?: boolean;
    pattern?: RegExp;
    preTrim?: boolean;
    singleLine?: boolean;
    upperCase?: boolean;
}): item is string;
//# sourceMappingURL=is-string.d.mts.map