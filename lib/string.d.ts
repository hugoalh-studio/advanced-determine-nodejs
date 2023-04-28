/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty string.
 * @param {boolean} [param1.ascii] Whether an ASCII string.
 * @param {number} [param1.length] Length of the string.
 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the string.
 * @param {number} [param1.lengthMinimum=1] Minimum length of the string.
 * @param {boolean} [param1.lowerCase] Whether a lower case string.
 * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
 * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
 * @param {boolean} [param1.singleLine] Whether a single line string.
 * @param {boolean} [param1.upperCase] Whether an upper case string.
 * @returns {boolean} Determine result.
 */
export function isString(item: unknown, { allowEmpty, ascii, length, lengthMaximum, lengthMinimum, lowerCase, multipleLine, pattern, preTrim, singleLine, upperCase, ...aliases }?: {
    allowEmpty?: boolean;
    ascii?: boolean;
    length?: number;
    lengthMaximum?: number;
    lengthMinimum?: number;
    lowerCase?: boolean;
    multipleLine?: boolean;
    pattern?: RegExp;
    preTrim?: boolean;
    singleLine?: boolean;
    upperCase?: boolean;
}): boolean;
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
export class StringItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty string.
     * @param {boolean} [param1.ascii] Whether an ASCII string.
     * @param {number} [param1.length] Length of the string.
     * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the string.
     * @param {number} [param1.lengthMinimum=1] Minimum length of the string.
     * @param {boolean} [param1.lowerCase] Whether a lower case string.
     * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
     * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
     * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
     * @param {boolean} [param1.singleLine] Whether a single line string.
     * @param {boolean} [param1.upperCase] Whether an upper case string.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, ascii, length, lengthMaximum, lengthMinimum, lowerCase, multipleLine, pattern, preTrim, singleLine, upperCase, ...aliases }?: {
        allowEmpty?: boolean;
        ascii?: boolean;
        length?: number;
        lengthMaximum?: number;
        lengthMinimum?: number;
        lowerCase?: boolean;
        multipleLine?: boolean;
        pattern?: RegExp;
        preTrim?: boolean;
        singleLine?: boolean;
        upperCase?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of string to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty string.
     * @param {boolean} [param0.ascii] Whether an ASCII string.
     * @param {number} [param0.length] Length of the string.
     * @param {number} [param0.lengthMaximum=Infinity] Maximum length of the string.
     * @param {number} [param0.lengthMinimum=1] Minimum length of the string.
     * @param {boolean} [param0.lowerCase] Whether a lower case string.
     * @param {boolean} [param0.multipleLine] Whether a multiple lines string.
     * @param {RegExp} [param0.pattern] Whether a pattern matchable string.
     * @param {boolean} [param0.preTrim=false] Whether to trim the string internally before determine.
     * @param {boolean} [param0.singleLine] Whether a single line string.
     * @param {boolean} [param0.upperCase] Whether an upper case string.
     */
    constructor({ allowEmpty, ascii, length, lengthMaximum, lengthMinimum, lowerCase, multipleLine, pattern, preTrim, singleLine, upperCase, ...aliases }?: {
        allowEmpty?: boolean;
        ascii?: boolean;
        length?: number;
        lengthMaximum?: number;
        lengthMinimum?: number;
        lowerCase?: boolean;
        multipleLine?: boolean;
        pattern?: RegExp;
        preTrim?: boolean;
        singleLine?: boolean;
        upperCase?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
