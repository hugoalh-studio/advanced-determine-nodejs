import { type StringCaseEnumKeysType, type StringCaseEnumValuesType, type StringLineEnumKeysType, type StringLineEnumValuesType } from "./internal/enum.js";
interface StringItemFilterOptionsBase {
    /**
     * @property ascii
     * @description Whether an ASCII string.
     * @default undefined
     */
    ascii?: boolean;
    /**
     * @property case
     * @description Case of the string.
     * @default "any"
     */
    case: StringCaseEnumValuesType;
    /**
     * @property lengthMaximum
     * @description Maximum length of the string.
     * @default Infinity
     */
    lengthMaximum: number;
    /**
     * @property lengthMinimum
     * @description Minimum length of the string.
     * @default 1
     */
    lengthMinimum: number;
    /**
     * @property line
     * @description Line of the string.
     * @default "any"
     */
    line: StringLineEnumValuesType;
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
}
interface StringItemFilterOptions extends Partial<Omit<StringItemFilterOptionsBase, "case" | "line">> {
    /**
     * @property allowEmpty
     * @description Whether to allow an empty string.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * @property case
     * @description Case of the string.
     * @default "any"
     */
    case?: StringCaseEnumKeysType;
    /**
     * @property length
     * @description Length of the string.
     * @default undefined
     */
    length?: number;
    /**
     * @property line
     * @description Line of the string.
     * @default "any"
     */
    line?: StringLineEnumKeysType;
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
    /**
     * @property lowerCase
     * @description Whether a lower case string.
     * @default undefined
     * @deprecated Replaced by property `case` with value `"lower"`.
     */
    lowerCase?: boolean;
    /**
     * @property multipleLine
     * @description Whether a multiple line string.
     * @deprecated Replaced by property `line` with value `"multiple"`.
     * @default undefined
     */
    multipleLine?: boolean;
    /**
     * @property singleLine
     * @description Whether a single line string.
     * @default undefined
     * @deprecated Replaced by property `line` with value `"single"`.
     */
    singleLine?: boolean;
    /**
     * @property upperCase
     * @description Whether an upper case string.
     * @default undefined
     * @deprecated Replaced by property `case` with value `"upper"`.
     */
    upperCase?: boolean;
    /**
     * @alias multipleLine
     * @deprecated Replaced by property `line` with value `"multiple"`.
     */
    multiline?: boolean;
    /**
     * @alias multipleLine
     * @deprecated Replaced by property `line` with value `"multiple"`.
     */
    multiLine?: boolean;
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
     * @param {StringItemFilter | StringItemFilterOptions} [options] Options
     */
    constructor(options?: StringItemFilter | StringItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {StringItemFilter} Another instance of this filter.
     */
    get clone(): StringItemFilter;
    /**
     * @method status
     * @description Get the status of this filter.
     * @returns {StringItemFilterOptionsBase} Status of this filter.
     */
    get status(): StringItemFilterOptionsBase;
    /**
     * @method allowEmpty
     * @description Whether to allow an empty string.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * @method ascii
     * @description Whether an ASCII string.
     * @param {boolean | undefined} [value]
     * @returns {this}
     */
    ascii(value?: boolean | undefined): this;
    /**
     * @method case
     * @description Case of the string.
     * @param {StringCaseEnumKeysType} value
     * @returns {this}
     */
    case(value: StringCaseEnumKeysType): this;
    /**
     * @method length
     * @description Length of the string.
     * @param {number} value
     * @returns {this}
     */
    length(value: number): this;
    /**
     * @method lengthMaximum
     * @description Maximum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value: number): this;
    /**
     * @method lengthMinimum
     * @description Minimum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value: number): this;
    /**
     * @method line
     * @description Line of the string.
     * @param {StringLineEnumKeysType} value
     * @returns {this}
     */
    line(value: StringLineEnumKeysType): this;
    /**
     * @method pattern
     * @description Whether a pattern matchable string.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    pattern(value?: RegExp | undefined): this;
    /**
     * @method preTrim
     * @description Whether to trim the string internally before determine.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    preTrim(value?: boolean): this;
    /** @alias length */ characters: (value: number) => this;
    /** @alias lengthMaximum */ charactersMax: (value: number) => this;
    /** @alias lengthMaximum */ charactersMaximum: (value: number) => this;
    /** @alias lengthMaximum */ lengthMax: (value: number) => this;
    /** @alias lengthMaximum */ maxCharacters: (value: number) => this;
    /** @alias lengthMaximum */ maximumCharacters: (value: number) => this;
    /** @alias lengthMaximum */ maximumLength: (value: number) => this;
    /** @alias lengthMaximum */ maxLength: (value: number) => this;
    /** @alias lengthMinimum */ charactersMin: (value: number) => this;
    /** @alias lengthMinimum */ charactersMinimum: (value: number) => this;
    /** @alias lengthMinimum */ lengthMin: (value: number) => this;
    /** @alias lengthMinimum */ minCharacters: (value: number) => this;
    /** @alias lengthMinimum */ minimumCharacters: (value: number) => this;
    /** @alias lengthMinimum */ minimumLength: (value: number) => this;
    /** @alias lengthMinimum */ minLength: (value: number) => this;
    /**
     * @method lowerCase
     * @description Set to allow a lower case string.
     * @returns {this}
     */
    lowerCase(): this;
    /**
     * @method multipleLine
     * @description Set to allow a multiple line string.
     * @returns {this}
     */
    multipleLine(): this;
    /**
     * @method singleLine
     * @description Set to allow a single line string.
     * @returns {this}
     */
    singleLine(): this;
    /** @alias multipleLine */ multiline: () => this;
    /** @alias multipleLine */ multiLine: () => this;
    /**
     * @method upperCase
     * @description Set to allow an upper case string.
     * @returns {this}
     */
    upperCase(): this;
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
export { isString, StringItemFilter, type StringItemFilterOptions, type StringItemFilterOptionsBase };
//# sourceMappingURL=string.d.ts.map