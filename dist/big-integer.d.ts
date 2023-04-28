import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType } from "./internal/enum.js";
interface BigIntegerItemFilterOptionsBase {
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
interface BigIntegerItemFilterOptions extends Partial<Omit<BigIntegerItemFilterOptionsBase, "ieee754" | "parity" | "primality" | "sign">> {
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
    /**
     * @property even
     * @description Whether an even big integer.
     * @default undefined
     * @deprecated Replaced by property `parity` with value `"even"`.
     */
    even?: boolean;
    /**
     * @property negative
     * @description Whether a negative big integer.
     * @default undefined
     * @deprecated Replaced by property `sign` with value `"negative"`.
     */
    negative?: boolean;
    /**
     * @property odd
     * @description Whether an odd big integer.
     * @default undefined
     * @deprecated Replaced by property `parity` with value `"odd"`.
     */
    odd?: boolean;
    /**
     * @property positive
     * @description Whether a positive big integer.
     * @default undefined
     * @deprecated Replaced by property `sign` with value `"positive"`.
     */
    positive?: boolean;
    /**
     * @property prime
     * @description Whether a prime big integer.
     * @default undefined
     * @deprecated Replaced by property `primality`.
     */
    prime?: boolean;
    /**
     * @property safe
     * @description Whether an IEEE-754 safe big integer.
     * @default undefined
     * @deprecated Replaced by property `ieee754` with value `"safe"`.
     */
    safe?: boolean;
    /**
     * @property unsafe
     * @description Whether not an IEEE-754 safe big integer.
     * @default undefined
     * @deprecated Replaced by property `ieee754` with value `"unsafe"`.
     */
    unsafe?: boolean;
    /**
     * @alias negative
     * @deprecated Replaced by property `sign` with value `"negative"`.
     */
    nega?: boolean;
    /**
     * @alias negative
     * @deprecated Replaced by property `sign` with value `"negative"`.
     */
    ngt?: boolean;
    /**
     * @alias positive
     * @deprecated Replaced by property `sign` with value `"positive"`.
     */
    posi?: boolean;
    /**
     * @alias positive
     * @deprecated Replaced by property `sign` with value `"positive"`.
     */
    pst?: boolean;
    /**
     * @alias integralNumericType
     * @deprecated Replaced by property `integralNumericType`.
     */
    type?: IntegralNumericTypeEnumKeysType;
}
/**
 * @class BigIntegerItemFilter
 * @description Determine item with the filter of type of big integer.
 */
declare class BigIntegerItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of big integer to determine item.
     * @param {BigIntegerItemFilter | BigIntegerItemFilterOptions} [options] Options.
     */
    constructor(options?: BigIntegerItemFilter | BigIntegerItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {BigIntegerItemFilter}
     */
    get clone(): BigIntegerItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {BigIntegerItemFilterOptionsBase}
     */
    get status(): BigIntegerItemFilterOptionsBase;
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
     * @param {bigint} [value]
     * @returns {this}
     */
    maximum(value?: bigint): this;
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
     * @param {bigint} [value]
     * @returns {this}
     */
    minimum(value?: bigint): this;
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
    /** @alias maximum */ max: (value?: bigint) => this;
    /** @alias maximumExclusive */ exclusiveMax: (value?: boolean) => this;
    /** @alias maximumExclusive */ exclusiveMaximum: (value?: boolean) => this;
    /** @alias maximumExclusive */ maxExclusive: (value?: boolean) => this;
    /** @alias minimum */ min: (value?: bigint) => this;
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
     * @description Determine item with the configured filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of big integer.
     * @param {unknown} item Item that need to determine.
     * @param {BigIntegerItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: BigIntegerItemFilterOptions): boolean;
}
/**
 * @function isBigInteger
 * @description Determine item with the filter of type of big integer.
 * @param {unknown} item Item that need to determine.
 * @param {BigIntegerItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isBigInteger(item: unknown, options?: BigIntegerItemFilterOptions): boolean;
export { BigIntegerItemFilter, BigIntegerItemFilter as BigIntItemFilter, isBigInteger, isBigInteger as isBigInt, type BigIntegerItemFilterOptions, type BigIntegerItemFilterOptions as BigIntItemFilterOptions, type BigIntegerItemFilterOptionsBase, type BigIntegerItemFilterOptionsBase as BigIntItemFilterOptionsBase };
//# sourceMappingURL=big-integer.d.ts.map