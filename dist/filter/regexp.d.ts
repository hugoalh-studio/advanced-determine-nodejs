import { type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType } from "../internal/enum.js";
interface RegExpFilterStatus {
    /**
     * @property dotAll
     * @description Whether a dot-all `RegExp`.
     * @default "neutral"
     */
    dotAll: ThreePhaseConditionEnumValuesType;
    /**
     * @property exactly
     * @description Whether an exactly `RegExp`.
     * @default "neutral"
     */
    exactly: ThreePhaseConditionEnumValuesType;
    /**
     * @property global
     * @description Whether a global `RegExp`.
     * @default "neutral"
     */
    global: ThreePhaseConditionEnumValuesType;
    /**
     * @property ignoreCase
     * @description Whether a case insensitive `RegExp`.
     * @default "neutral"
     */
    ignoreCase: ThreePhaseConditionEnumValuesType;
    /**
     * @property multipleLine
     * @description Whether a multiple line `RegExp`.
     * @default "neutral"
     */
    multipleLine: ThreePhaseConditionEnumValuesType;
    /**
     * @property sticky
     * @description Whether a sticky `RegExp`.
     * @default "neutral"
     */
    sticky: ThreePhaseConditionEnumValuesType;
    /**
     * @property unicode
     * @description Whether an unicode `RegExp`.
     * @default "neutral"
     */
    unicode: ThreePhaseConditionEnumValuesType;
}
interface RegExpFilterOptions extends Partial<Omit<RegExpFilterStatus, "dotAll" | "exactly" | "global" | "ignoreCase" | "multipleLine" | "sticky" | "unicode">> {
    /**
     * @property dotAll
     * @description Whether a dot-all `RegExp`.
     * @default "neutral"
     */
    dotAll?: ThreePhaseConditionEnumKeysType;
    /**
     * @property exactly
     * @description Whether an exactly `RegExp`.
     * @default "neutral"
     */
    exactly?: ThreePhaseConditionEnumKeysType;
    /**
     * @property global
     * @description Whether a global `RegExp`.
     * @default "neutral"
     */
    global?: ThreePhaseConditionEnumKeysType;
    /**
     * @property ignoreCase
     * @description Whether a case insensitive `RegExp`.
     * @default "neutral"
     */
    ignoreCase?: ThreePhaseConditionEnumKeysType;
    /**
     * @property multipleLine
     * @description Whether a multiple line `RegExp`.
     * @default "neutral"
     */
    multipleLine?: ThreePhaseConditionEnumKeysType;
    /**
     * @property sticky
     * @description Whether a sticky `RegExp`.
     * @default "neutral"
     */
    sticky?: ThreePhaseConditionEnumKeysType;
    /**
     * @property unicode
     * @description Whether an unicode `RegExp`.
     * @default "neutral"
     */
    unicode?: ThreePhaseConditionEnumKeysType;
    /** @alias exactly */ exact?: ThreePhaseConditionEnumKeysType;
    /** @alias ignoreCase */ caseInsensitive?: ThreePhaseConditionEnumKeysType;
    /** @alias multipleLine */ multiline?: ThreePhaseConditionEnumKeysType;
    /** @alias multipleLine */ multiLine?: ThreePhaseConditionEnumKeysType;
}
/**
 * @class RegExpFilter
 * @description Filter for `RegExp`.
 */
declare class RegExpFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the `RegExp` filter.
     * @param {RegExpFilter | RegExpFilterOptions} [options] Options.
     */
    constructor(options?: RegExpFilter | RegExpFilterOptions);
    /**
     * @method clone
     * @description Clone this `RegExp` filter for reuse.
     * @returns {RegExpFilter} Another instance of this `RegExp` filter.
     */
    get clone(): RegExpFilter;
    /**
     * @method status
     * @description Get the status of this `RegExp` filter.
     * @returns {RegExpFilterStatus} Status of this `RegExp` filter.
     */
    get status(): RegExpFilterStatus;
    /**
     * @method dotAll
     * @description Whether a dot-all `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    dotAll(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method exactly
     * @description Whether an exactly `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    exactly(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method global
     * @description Whether a global `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    global(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method ignoreCase
     * @description Whether a case insensitive `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    ignoreCase(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method multipleLine
     * @description Whether a multiple line `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    multipleLine(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method sticky
     * @description Whether a sticky `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    sticky(value: ThreePhaseConditionEnumKeysType): this;
    /**
     * @method unicode
     * @description Whether an unicode `RegExp`.
     * @param {ThreePhaseConditionEnumKeysType} value
     * @returns {this}
     */
    unicode(value: ThreePhaseConditionEnumKeysType): this;
    /** @alias exactly */ exact: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias ignoreCase */ caseInsensitive: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias multipleLine */ multiline: (value: ThreePhaseConditionEnumKeysType) => this;
    /** @alias multipleLine */ multiLine: (value: ThreePhaseConditionEnumKeysType) => this;
    /**
     * @method test
     * @description Determine item with the configured `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the `RegExp` filter.
     * @param {unknown} item Item that need to determine.
     * @param {RegExpFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: RegExpFilterOptions): boolean;
}
/**
 * @function filterRegExp
 * @description Determine item with the `RegExp` filter.
 * @param {unknown} item Item that need to determine.
 * @param {RegExpFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterRegExp(item: unknown, options?: RegExpFilterOptions): boolean;
export { filterRegExp, filterRegExp as filterRegEx, filterRegExp as filterRegularExpression, RegExpFilter, RegExpFilter as RegExFilter, RegExpFilter as RegularExpressionFilter, type RegExpFilterOptions, type RegExpFilterOptions as RegExFilterOptions, type RegExpFilterOptions as RegularExpressionFilterOptions, type RegExpFilterStatus, type RegExpFilterStatus as RegExFilterStatus, type RegExpFilterStatus as RegularExpressionFilterStatus };
//# sourceMappingURL=regexp.d.ts.map