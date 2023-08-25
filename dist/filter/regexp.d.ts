import { type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType } from "../internal/enum.js";
export interface RegExpFilterStatus {
    /**
     * Whether a dot-all `RegExp`.
     * @default "neutral"
     */
    dotAll: ThreePhaseConditionEnumValuesType;
    /**
     * Whether an exactly `RegExp`.
     * @default "neutral"
     */
    exactly: ThreePhaseConditionEnumValuesType;
    /**
     * Whether a global `RegExp`.
     * @default "neutral"
     */
    global: ThreePhaseConditionEnumValuesType;
    /**
     * Whether a case insensitive `RegExp`.
     * @default "neutral"
     */
    ignoreCase: ThreePhaseConditionEnumValuesType;
    /**
     * Whether a multiple line `RegExp`.
     * @default "neutral"
     */
    multipleLine: ThreePhaseConditionEnumValuesType;
    /**
     * Whether a sticky `RegExp`.
     * @default "neutral"
     */
    sticky: ThreePhaseConditionEnumValuesType;
    /**
     * Whether an unicode `RegExp`.
     * @default "neutral"
     */
    unicode: ThreePhaseConditionEnumValuesType;
}
export { type RegExpFilterStatus as RegExFilterStatus, type RegExpFilterStatus as RegularExpressionFilterStatus };
export interface RegExpFilterOptions extends Partial<Omit<RegExpFilterStatus, "dotAll" | "exactly" | "global" | "ignoreCase" | "multipleLine" | "sticky" | "unicode">> {
    /**
     * Whether a dot-all `RegExp`.
     * @default "neutral"
     */
    dotAll?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether an exactly `RegExp`.
     * @default "neutral"
     */
    exactly?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether a global `RegExp`.
     * @default "neutral"
     */
    global?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether a case insensitive `RegExp`.
     * @default "neutral"
     */
    ignoreCase?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether a multiple line `RegExp`.
     * @default "neutral"
     */
    multipleLine?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether a sticky `RegExp`.
     * @default "neutral"
     */
    sticky?: ThreePhaseConditionEnumKeysType;
    /**
     * Whether an unicode `RegExp`.
     * @default "neutral"
     */
    unicode?: ThreePhaseConditionEnumKeysType;
    /** @alias exactly */ exact?: this["exactly"];
    /** @alias ignoreCase */ caseInsensitive?: this["ignoreCase"];
    /** @alias multipleLine */ multiline?: this["multipleLine"];
    /** @alias multipleLine */ multiLine?: this["multipleLine"];
}
export { type RegExpFilterOptions as RegExFilterOptions, type RegExpFilterOptions as RegularExpressionFilterOptions };
/**
 * Filter for `RegExp`.
 */
export declare class RegExpFilter {
    #private;
    /**
     * Initialize the `RegExp` filter.
     * @param {RegExpFilter | RegExpFilterOptions} [options] Options.
     */
    constructor(options?: RegExpFilter | RegExpFilterOptions);
    /**
     * Clone this `RegExp` filter for reuse.
     * @returns {RegExpFilter} Another instance of this `RegExp` filter.
     */
    get clone(): RegExpFilter;
    /**
     * Get the status of this `RegExp` filter.
     * @returns {RegExpFilterStatus} Status of this `RegExp` filter.
     */
    get status(): RegExpFilterStatus;
    /**
     * Whether a dot-all `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    dotAll(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether an exactly `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    exactly(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether a global `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    global(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether a case insensitive `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ignoreCase(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether a multiple line `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    multipleLine(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether a sticky `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    sticky(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * Whether an unicode `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    unicode(value: ThreePhaseConditionEnumKeysType): this;
    /** @alias exactly */ exact: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias ignoreCase */ caseInsensitive: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias multipleLine */ multiline: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias multipleLine */ multiLine: (value: ThreePhaseConditionEnumKeysType) => this;
    /**
     * Determine item with the configured `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @param {RegExpFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: RegExpFilterOptions): boolean;
}
export { RegExpFilter as RegExFilter, RegExpFilter as RegularExpressionFilter };
/**
 * Determine item with the `RegExp` filter.
 * @param {unknown} item Item that need to determine.
 * @param {RegExpFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterRegExp(item: unknown, options?: RegExpFilterOptions): boolean;
export { filterRegExp as filterRegEx, filterRegExp as filterRegularExpression };
//# sourceMappingURL=regexp.d.ts.map