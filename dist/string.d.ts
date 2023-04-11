interface StringItemFilterOptions {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty string.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property ascii
     * @description Whether an ASCII string.
     * @default undefined
     */
    ascii?: boolean;
    /**
     * @property length
     * @description Length of the string.
     * @default undefined
     */
    length?: number;
    /**
     * @property lengthMaximum
     * @description Maximum length of the string.
     * @default Infinity
     */
    lengthMaximum?: number;
    /**
     * @property lengthMinimum
     * @description Minimum length of the string.
     * @default 1
     */
    lengthMinimum?: number;
    /**
     * @property lowerCase
     * @description Whether a lower case string.
     * @default undefined
     */
    lowerCase?: boolean;
    /**
     * @property multipleLine
     * @description Whether a multiple line string.
     * @default undefined
     */
    multipleLine?: boolean;
    /**
     * @property pattern
     * @description Whether a pattern matchable string.
     * @default undefined
     */
    pattern?: RegExp;
    /**
     * @property preTrim
     * @description Whether to trim the string internally before determine.
     * @default false
     */
    preTrim?: boolean;
    /**
     * @property singleLine
     * @description Whether a single line string.
     * @default undefined
     */
    singleLine?: boolean;
    /**
     * @property upperCase
     * @description Whether an upper case string.
     * @default undefined
     */
    upperCase?: boolean;
    /** @alias length */ characters?: number;
    /** @alias lengthMaximum */ charactersMax?: number;
    /** @alias lengthMaximum */ charactersMaximum?: number;
    /** @alias lengthMaximum */ lengthMax?: number;
    /** @alias lengthMaximum */ maxCharacters?: number;
    /** @alias lengthMaximum */ maximumCharacters?: number;
    /** @alias lengthMaximum */ maximumLength?: number;
    /** @alias lengthMaximum */ maxLength?: number;
    /** @alias lengthMinimum */ charactersMin?: number;
    /** @alias lengthMinimum */ charactersMinimum?: number;
    /** @alias lengthMinimum */ lengthMin?: number;
    /** @alias lengthMinimum */ minCharacters?: number;
    /** @alias lengthMinimum */ minimumCharacters?: number;
    /** @alias lengthMinimum */ minimumLength?: number;
    /** @alias lengthMinimum */ minLength?: number;
    /** @alias multipleLine */ multiline?: boolean;
    /** @alias multipleLine */ multiLine?: boolean;
}
/**
 * @class StringItemFilter
 * @description Determine item with the filter of type of string.
 */
declare class StringItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of string to determine item.
     * @param {StringItemFilterOptions} [options={}] Options
     */
    constructor(options?: StringItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of string.
     * @param {unknown} item Item that need to determine.
     * @param {StringItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: StringItemFilterOptions): boolean;
}
/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {StringItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isString(item: unknown, options?: StringItemFilterOptions): boolean;
export { isString, StringItemFilter, type StringItemFilterOptions };
//# sourceMappingURL=string.d.ts.map