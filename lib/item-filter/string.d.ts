export default StringItemFilter;
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
declare class StringItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of string to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty string.
     * @param {boolean} [param0.ascii] Whether an ASCII string.
     * @param {boolean} [param0.lowerCase] Whether a lower case string.
     * @param {number} [param0.maximumLength=Infinity] Maximum length of the string.
     * @param {number} [param0.minimumLength=1] Minimum length of the string.
     * @param {boolean} [param0.multipleLine] Whether a multiple lines string.
     * @param {RegExp} [param0.pattern] Whether a pattern matchable string.
     * @param {boolean} [param0.preTrim=false] Whether to trim the string internally before determine.
     * @param {boolean} [param0.singleLine] Whether a single line string.
     * @param {boolean} [param0.upperCase] Whether an upper case string.
     */
    constructor({ allowEmpty, ascii, lowerCase, maximumLength, minimumLength, multipleLine, pattern, preTrim, singleLine, upperCase, ...aliases }?: {
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
//# sourceMappingURL=string.d.ts.map