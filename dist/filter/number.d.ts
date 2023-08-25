import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsFinitenessEnumKeysType, type MathematicsFinitenessEnumValuesType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType, type NumericTypeEnumKeysType, type NumericTypeEnumValuesType } from "../internal/enum.js";
export interface NumberFilterStatus {
    /**
     * Finiteness of the number.
     * @default "any"
     */
    finiteness: MathematicsFinitenessEnumValuesType;
    /**
     * IEEE-754 safe mode of the number.
     * @default "any"
     */
    ieee754: IEEE754EnumValuesType;
    /**
     * Maximum of the number.
     * @default undefined
     */
    maximum?: number;
    /**
     * Whether to exclusive maximum of the number.
     * @default false
     */
    maximumExclusive: boolean;
    /**
     * Minimum of the number.
     * @default undefined
     */
    minimum?: number;
    /**
     * Whether to exclusive minimum of the number.
     * @default false
     */
    minimumExclusive: boolean;
    /**
     * Numeric type of the number.
     * @default "any"
     */
    numericType: NumericTypeEnumValuesType;
    /**
     * Parity of the number.
     * @default "any"
     */
    parity: MathematicsParityEnumValuesType;
    /**
     * Primality of the number.
     * @default "any"
     */
    primality: MathematicsPrimalityEnumValuesType;
    /**
     * Sign of the number.
     * @default "any"
     */
    sign: MathematicsSignEnumValuesType;
}
export interface NumberFilterOptions extends Partial<Omit<NumberFilterStatus, "finiteness" | "ieee754" | "numericType" | "parity" | "primality" | "sign">> {
    /**
     * Finiteness of the number.
     * @default "any"
     */
    finiteness?: MathematicsFinitenessEnumKeysType;
    /**
     * IEEE-754 mode of the number.
     * @default "any"
     */
    ieee754?: IEEE754EnumKeysType;
    /**
     * Integral numeric type of the number.
     * @default undefined
     */
    integralNumericType?: IntegralNumericTypeEnumKeysType;
    /**
     * Numeric type of the number.
     * @default "any"
     */
    numericType?: NumericTypeEnumKeysType;
    /**
     * Parity of the number.
     * @default "any"
     */
    parity?: MathematicsParityEnumKeysType;
    /**
     * Primality of the number.
     * @default "any"
     */
    primality?: MathematicsPrimalityEnumKeysType;
    /**
     * Sign of the number.
     * @default "any"
     */
    sign?: MathematicsSignEnumKeysType;
    /** @alias maximum */ max?: this["maximum"];
    /** @alias maximumExclusive */ exclusiveMax?: this["maximumExclusive"];
    /** @alias maximumExclusive */ exclusiveMaximum?: this["maximumExclusive"];
    /** @alias maximumExclusive */ maxExclusive?: this["maximumExclusive"];
    /** @alias minimum */ min?: this["minimum"];
    /** @alias minimumExclusive */ exclusiveMin?: this["minimumExclusive"];
    /** @alias minimumExclusive */ exclusiveMinimum?: this["minimumExclusive"];
    /** @alias minimumExclusive */ minExclusive?: this["minimumExclusive"];
}
/**
 * Filter for number.
 */
export declare class NumberFilter {
    #private;
    /**
     * Initialize the number filter.
     * @param {NumberFilter | NumberFilterOptions} [options] Options.
     */
    constructor(options?: NumberFilter | NumberFilterOptions);
    /**
     * Clone this number filter for reuse.
     * @returns {NumberFilter} Another instance of this number filter.
     */
    get clone(): NumberFilter;
    /**
     * Get the status of this number filter.
     * @returns {NumberFilterStatus} Status of this number filter.
     */
    get status(): NumberFilterStatus;
    /**
     * Finiteness of the number.
     * @param {MathematicsFinitenessEnumKeysType} value
     * @returns {this}
     */
    finiteness(value: MathematicsFinitenessEnumKeysType): this;
    /**
     * IEEE-754 safe mode of the number.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value: IEEE754EnumKeysType): this;
    /**
     * Integral numeric type of the number.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value: IntegralNumericTypeEnumKeysType): this;
    /**
     * Maximum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    maximum(value?: number | undefined): this;
    /**
     * Whether to exclusive maximum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value?: boolean): this;
    /**
     * Minimum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    minimum(value?: number | undefined): this;
    /**
     * Whether to exclusive minimum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value?: boolean): this;
    /**
     * Numeric type of the number.
     * @param {NumericTypeEnumKeysType} value
     * @returns {this}
     */
    numericType(value: NumericTypeEnumKeysType): this;
    /**
     * Parity of the number.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value: MathematicsParityEnumKeysType): this;
    /**
     * Primality of the number.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value: MathematicsPrimalityEnumKeysType): this;
    /**
     * Sign of the number.
     * @param {MathematicsSignEnumKeysType} value
     * @returns {this}
     */
    sign(value: MathematicsSignEnumKeysType): this;
    /** @alias maximum */ max: (value?: number | undefined) => this;
    /** @alias maximumExclusive */ exclusiveMax: (value?: boolean) => this;
    /** @alias maximumExclusive */ exclusiveMaximum: (value?: boolean) => this;
    /** @alias maximumExclusive */ maxExclusive: (value?: boolean) => this;
    /** @alias minimum */ min: (value?: number | undefined) => this;
    /** @alias minimumExclusive */ exclusiveMin: (value?: boolean) => this;
    /** @alias minimumExclusive */ exclusiveMinimum: (value?: boolean) => this;
    /** @alias minimumExclusive */ minExclusive: (value?: boolean) => this;
    /**
     * Set to allow a composite number.
     * @returns {this}
     */
    composite(): this;
    /**
     * Set to allow an even number.
     * @returns {this}
     */
    even(): this;
    /**
     * Set to allow a finite number.
     * @returns {this}
     */
    finite(): this;
    /**
     * Set to allow a float number.
     * @returns {this}
     */
    float(): this;
    /**
     * Set to allow an infinite number.
     * @returns {this}
     */
    infinite(): this;
    /**
     * Set to allow an integer number.
     * @returns {this}
     */
    integer(): this;
    /**
     * Set to allow a negative number.
     * @returns {this}
     */
    negative(): this;
    /**
     * Set to allow an odd number.
     * @returns {this}
     */
    odd(): this;
    /**
     * Set to allow a positive number.
     * @returns {this}
     */
    positive(): this;
    /**
     * Set to allow a prime number.
     * @returns {this}
     */
    prime(): this;
    /**
     * Set to allow an IEEE-754 safe number.
     * @returns {this}
     */
    safe(): this;
    /**
     * Set to allow an IEEE-754 unsafe number.
     * @returns {this}
     */
    unsafe(): this;
    /**
     * Determine item with the configured number filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the number filter.
     * @param {unknown} item Item that need to determine.
     * @param {NumberFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: NumberFilterOptions): boolean;
}
/**
 * Determine item with the number filter.
 * @param {unknown} item Item that need to determine.
 * @param {NumberFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
export declare function filterNumber(item: unknown, options?: NumberFilterOptions): boolean;
//# sourceMappingURL=number.d.ts.map