import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType } from "../internal/enum.js";
interface BigIntFilterStatus {
    /**
     * @property ieee754
     * @description IEEE-754 safe mode of the big integer.
     * @default "any"
     */
    ieee754: IEEE754EnumValuesType;
    /**
     * @property maximum
     * @description Maximum of the big integer.
     * @default undefined
     */
    maximum?: bigint;
    /**
     * @property maximumExclusive
     * @description Whether to exclusive maximum of the big integer.
     * @default false
     */
    maximumExclusive: boolean;
    /**
     * @property minimum
     * @description Minimum of the big integer.
     * @default undefined
     */
    minimum?: bigint;
    /**
     * @property minimumExclusive
     * @description Whether to exclusive minimum of the big integer.
     * @default false
     */
    minimumExclusive: boolean;
    /**
     * @property parity
     * @description Parity of the big integer.
     * @default "any"
     */
    parity: MathematicsParityEnumValuesType;
    /**
     * @property primality
     * @description Primality of the big integer.
     * @default "any"
     */
    primality: MathematicsPrimalityEnumValuesType;
    /**
     * @property sign
     * @description Sign of the big integer.
     * @default "any"
     */
    sign: MathematicsSignEnumValuesType;
}
interface BigIntFilterOptions extends Partial<Omit<BigIntFilterStatus, "ieee754" | "parity" | "primality" | "sign">> {
    /**
     * @property ieee754
     * @description IEEE-754 mode of the big integer.
     * @default "any"
     */
    ieee754?: IEEE754EnumKeysType;
    /**
     * @property integralNumericType
     * @description Integral numeric type of the big integer.
     * @default undefined
     */
    integralNumericType?: IntegralNumericTypeEnumKeysType;
    /**
     * @property parity
     * @description Parity of the big integer.
     * @default "any"
     */
    parity?: MathematicsParityEnumKeysType;
    /**
     * @property primality
     * @description Primality of the big integer.
     * @default "any"
     */
    primality?: MathematicsPrimalityEnumKeysType;
    /**
     * @property sign
     * @description Sign of the big integer.
     * @default "any"
     */
    sign?: MathematicsSignEnumKeysType;
    /** @alias maximum */ max?: bigint;
    /** @alias maximumExclusive */ exclusiveMax?: boolean;
    /** @alias maximumExclusive */ exclusiveMaximum?: boolean;
    /** @alias maximumExclusive */ maxExclusive?: boolean;
    /** @alias minimum */ min?: bigint;
    /** @alias minimumExclusive */ exclusiveMin?: boolean;
    /** @alias minimumExclusive */ exclusiveMinimum?: boolean;
    /** @alias minimumExclusive */ minExclusive?: boolean;
}
/**
 * @class BigIntFilter
 * @description Filter for big integer.
 */
declare class BigIntFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the big integer filter.
     * @param {BigIntFilter | BigIntFilterOptions} [options] Options.
     */
    constructor(options?: BigIntFilter | BigIntFilterOptions);
    /**
     * @method clone
     * @description Clone this big integer filter for reuse.
     * @returns {BigIntFilter} Another instance of this big integer filter.
     */
    get clone(): BigIntFilter;
    /**
     * @method status
     * @description Get the status of this big integer filter.
     * @returns {BigIntFilterStatus} Status of this big integer filter.
     */
    get status(): BigIntFilterStatus;
    /**
     * @method ieee754
     * @description IEEE-754 safe mode of the big integer.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value: IEEE754EnumKeysType): this;
    /**
     * @method integralNumericType
     * @description Integral numeric type of the big integer.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value: IntegralNumericTypeEnumKeysType): this;
    /**
     * @method maximum
     * @description Maximum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    maximum(value?: bigint | undefined): this;
    /**
     * @method maximumExclusive
     * @description Whether to exclusive maximum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value?: boolean): this;
    /**
     * @method minimum
     * @description Minimum of the big integer.
     * @param {bigint | undefined} [value]
     * @returns {this}
     */
    minimum(value?: bigint | undefined): this;
    /**
     * @method minimumExclusive
     * @description Whether to exclusive minimum of the big integer.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value?: boolean): this;
    /**
     * @method parity
     * @description Parity of the big integer.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value: MathematicsParityEnumKeysType): this;
    /**
     * @method primality
     * @description Primality of the big integer.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value: MathematicsPrimalityEnumKeysType): this;
    /**
     * @method sign
     * @description Sign of the big integer.
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
     * @method composite
     * @description Set to allow a composite big integer.
     * @returns {this}
     */
    composite(): this;
    /**
     * @method even
     * @description Set to allow an even big integer.
     * @returns {this}
     */
    even(): this;
    /**
     * @method negative
     * @description Set to allow a negative big integer.
     * @returns {this}
     */
    negative(): this;
    /**
     * @method odd
     * @description Set to allow an odd big integer.
     * @returns {this}
     */
    odd(): this;
    /**
     * @method positive
     * @description Set to allow a positive big integer.
     * @returns {this}
     */
    positive(): this;
    /**
     * @method prime
     * @description Set to allow a prime big integer.
     * @returns {this}
     */
    prime(): this;
    /**
     * @method safe
     * @description Set to allow an IEEE-754 safe big integer.
     * @returns {this}
     */
    safe(): this;
    /**
     * @method unsafe
     * @description Set to allow an IEEE-754 unsafe big integer.
     * @returns {this}
     */
    unsafe(): this;
    /**
     * @method test
     * @description Determine item with the configured big integer filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the big integer filter.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: BigIntFilterOptions): boolean;
}
/**
 * @function filterBigInt
 * @description Determine item with the big integer filter.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function filterBigInt(item: unknown, options?: BigIntFilterOptions): boolean;
export { BigIntFilter, BigIntFilter as BigIntegerFilter, filterBigInt, filterBigInt as filterBigInteger, type BigIntFilterOptions, type BigIntFilterOptions as BigIntegerFilterOptions, type BigIntFilterStatus, type BigIntFilterStatus as BigIntegerFilterStatus };
//# sourceMappingURL=bigint.d.ts.map