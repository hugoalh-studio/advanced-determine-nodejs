import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType } from "../internal/enum.js";
export interface BigIntFilterStatus {
    /**
     * IEEE-754 safe mode of the big integer.
     * @default "any"
     */
    ieee754: IEEE754EnumValuesType;
    /**
     * Maximum of the big integer.
     * @default undefined
     */
    maximum?: bigint;
    /**
     * Whether to exclusive maximum of the big integer.
     * @default false
     */
    maximumExclusive: boolean;
    /**
     * Minimum of the big integer.
     * @default undefined
     */
    minimum?: bigint;
    /**
     * Whether to exclusive minimum of the big integer.
     * @default false
     */
    minimumExclusive: boolean;
    /**
     * Parity of the big integer.
     * @default "any"
     */
    parity: MathematicsParityEnumValuesType;
    /**
     * Primality of the big integer.
     * @default "any"
     */
    primality: MathematicsPrimalityEnumValuesType;
    /**
     * Sign of the big integer.
     * @default "any"
     */
    sign: MathematicsSignEnumValuesType;
}
export { type BigIntFilterStatus as BigIntegerFilterStatus };
export interface BigIntFilterOptions extends Partial<Omit<BigIntFilterStatus, "ieee754" | "parity" | "primality" | "sign">> {
    /**
     * IEEE-754 mode of the big integer.
     * @default "any"
     */
    ieee754?: IEEE754EnumKeysType;
    /**
     * Integral numeric type of the big integer.
     * @default undefined
     */
    integralNumericType?: IntegralNumericTypeEnumKeysType;
    /**
     * Parity of the big integer.
     * @default "any"
     */
    parity?: MathematicsParityEnumKeysType;
    /**
     * Primality of the big integer.
     * @default "any"
     */
    primality?: MathematicsPrimalityEnumKeysType;
    /**
     * Sign of the big integer.
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
export { type BigIntFilterOptions as BigIntegerFilterOptions };
/**
 * Filter for big integer.
 */
export declare class BigIntFilter {
    #private;
    /**
     * Initialize the big integer filter.
     * @param {BigIntFilter | BigIntFilterOptions} [options] Options.
     */
    constructor(options?: BigIntFilter | BigIntFilterOptions);
    /**
     * Clone this big integer filter for reuse.
     * @returns {BigIntFilter} Another instance of this big integer filter.
     */
    get clone(): BigIntFilter;
    /**
     * Get the status of this big integer filter.
     * @returns {BigIntFilterStatus} Status of this big integer filter.
     */
    get status(): BigIntFilterStatus;
    /**
     * IEEE-754 safe mode of the big integer.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value: IEEE754EnumKeysType): this;
    /**
     * Integral numeric type of the big integer.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value: IntegralNumericTypeEnumKeysType): this;
    /**
     * Maximum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    maximum(value?: bigint | undefined): this;
    /**
     * Whether to exclusive maximum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value?: boolean): this;
    /**
     * Minimum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    minimum(value?: bigint | undefined): this;
    /**
     * Whether to exclusive minimum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value?: boolean): this;
    /**
     * Parity of the big integer.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value: MathematicsParityEnumKeysType): this;
    /**
     * Primality of the big integer.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value: MathematicsPrimalityEnumKeysType): this;
    /**
     * Sign of the big integer.
     * @param {MathematicsSignEnumKeysType} value
     * @returns {this}
     */
    sign(value: MathematicsSignEnumKeysType): this;
    /** @alias maximum */ max: (value?: bigint | undefined) => this;
    /** @alias maximumExclusive */ exclusiveMax: (value?: boolean) => this;
    /** @alias maximumExclusive */ exclusiveMaximum: (value?: boolean) => this;
    /** @alias maximumExclusive */ maxExclusive: (value?: boolean) => this;
    /** @alias minimum */ min: (value?: bigint | undefined) => this;
    /** @alias minimumExclusive */ exclusiveMin: (value?: boolean) => this;
    /** @alias minimumExclusive */ exclusiveMinimum: (value?: boolean) => this;
    /** @alias minimumExclusive */ minExclusive: (value?: boolean) => this;
    /**
     * Set to allow a composite big integer.
     * @returns {this}
     */
    composite(): this;
    /**
     * Set to allow an even big integer.
     * @returns {this}
     */
    even(): this;
    /**
     * Set to allow a negative big integer.
     * @returns {this}
     */
    negative(): this;
    /**
     * Set to allow an odd big integer.
     * @returns {this}
     */
    odd(): this;
    /**
     * Set to allow a positive big integer.
     * @returns {this}
     */
    positive(): this;
    /**
     * Set to allow a prime big integer.
     * @returns {this}
     */
    prime(): this;
    /**
     * Set to allow an IEEE-754 safe big integer.
     * @returns {this}
     */
    safe(): this;
    /**
     * Set to allow an IEEE-754 unsafe big integer.
     * @returns {this}
     */
    unsafe(): this;
    /**
     * Determine item with the configured big integer filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * Determine item with the big integer filter.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: BigIntFilterOptions): boolean;
}
export { BigIntFilter as BigIntegerFilter };
/**
 * Determine item with the big integer filter.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
export declare function filterBigInt(item: unknown, options?: BigIntFilterOptions): boolean;
export { filterBigInt as filterBigInteger };
//# sourceMappingURL=bigint.d.ts.map