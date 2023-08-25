import { type StringCaseEnumKeysType, type StringCaseEnumValuesType, type StringLineEnumKeysType, type StringLineEnumValuesType, type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType } from "../internal/enum.js";
export interface StringFilterStatus {
    /**
     * Whether an ASCII string.
     * @default "neutral"
     */
    ascii: ThreePhaseConditionEnumValuesType;
    /**
     * Case of the string.
     * @default "any"
     */
    case: StringCaseEnumValuesType;
    /**
     * Maximum length of the string.
     * @default Infinity
     */
    lengthMaximum: number;
    /**
     * Minimum length of the string.
     * @default 1
     */
    lengthMinimum: number;
    /**
     * Line of the string.
     * @default "any"
     */
    line: StringLineEnumValuesType;
    /**
     * Whether a pattern matchable string.
     * @default undefined
     */
    pattern?: RegExp;
    /**
     * Whether to trim the string internally before determine.
     * @default false
     */
    preTrim?: boolean;
}
export interface StringFilterOptions extends Partial<Omit<StringFilterStatus, "ascii" | "case" | "line">> {
    /**
     * Whether to allow an empty string.
     * @default false
     */
    allowEmpty?: boolean;
    /**
     * Whether an ASCII string.
     * @default "neutral"
     */
    ascii?: ThreePhaseConditionEnumKeysType;
    /**
     * Case of the string.
     * @default "any"
     */
    case?: StringCaseEnumKeysType;
    /**
     * Length of the string.
     * @default undefined
     */
    length?: number;
    /**
     * Line of the string.
     * @default "any"
     */
    line?: StringLineEnumKeysType;
    /** @alias length */ characters?: this["length"];
    /** @alias lengthMaximum */ charactersMax?: this["lengthMaximum"];
    /** @alias lengthMaximum */ charactersMaximum?: this["lengthMaximum"];
    /** @alias lengthMaximum */ lengthMax?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maxCharacters?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maximumCharacters?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maximumLength?: this["lengthMaximum"];
    /** @alias lengthMaximum */ maxLength?: this["lengthMaximum"];
    /** @alias lengthMinimum */ charactersMin?: this["lengthMinimum"];
    /** @alias lengthMinimum */ charactersMinimum?: this["lengthMinimum"];
    /** @alias lengthMinimum */ lengthMin?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minCharacters?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minimumCharacters?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minimumLength?: this["lengthMinimum"];
    /** @alias lengthMinimum */ minLength?: this["lengthMinimum"];
}
/**
 * Filter for string.
 */
export declare class StringFilter {
    #private;
    /**
     * Initialize the string filter.
     * @param {StringFilter | StringFilterOptions} [options] Options.
     */
    constructor(options?: StringFilter | StringFilterOptions);
    /**
     * Clone this string filter for reuse.
     * @returns {StringFilter} Another instance of this string filter.
     */
    get clone(): StringFilter;
    /**
     * Get the status of this string filter.
     * @returns {StringFilterStatus} Status of this string filter.
     */
    get status(): StringFilterStatus;
    /**
     * Whether to allow an empty string.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowEmpty(value?: boolean): this;
    /**
     * Whether an ASCII string.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ascii(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Case of the string.
     * @param {StringCaseEnumKeysType} value
     * @returns {this}
     */
    case(value: StringCaseEnumKeysType): this;
    /**
     * Length of the string.
     * @param {number} value
     * @returns {this}
     */
    length(value: number): this;
    /**
     * Maximum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMaximum(value: number): this;
    /**
     * Minimum length of the string.
     * @param {number} value
     * @returns {this}
     */
    lengthMinimum(value: number): this;
    /**
     * Line of the string.
     * @param {StringLineEnumKeysType} value
     * @returns {this}
     */
    line(value: StringLineEnumKeysType): this;
    /**
     * Whether a pattern matchable string.
     * @param {RegExp | undefined} [value]
     * @returns {this}
     */
    pattern(value?: RegExp | undefined): this;
    /**
     * Whether to trim the string internally before determine.
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
     * Set to allow a lower case string.
     * @returns {this}
     */
    lowerCase(): this;
    /**
     * Set to allow a multiple line string.
     * @returns {this}
     */
    multipleLine(): this;
    /**
     * Set to allow a single line string.
     * @returns {this}
     */
    singleLine(): this;
    /**
     * Set to allow an upper case string.
     * @returns {this}
     */
    upperCase(): this;
    /** @alias multipleLine */ multiline: () => this;
    /** @alias multipleLine */ multiLine: () => this;
    /**
     * Determine item with the configured string filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the string filter.
     * @param {unknown} item Item that need to determine.
     * @param {StringFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: StringFilterOptions): boolean;
}
/**
 * Determine item with the string filter.
 * @param {unknown} item Item that need to determine.
 * @param {StringFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterString(item: unknown, options?: StringFilterOptions): boolean;
//# sourceMappingURL=string.d.ts.map