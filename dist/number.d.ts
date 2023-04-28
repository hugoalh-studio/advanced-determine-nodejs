import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsFinitenessEnumKeysType, type MathematicsFinitenessEnumValuesType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType, type NumericTypeEnumKeysType, type NumericTypeEnumValuesType } from "./internal/enum.js";
interface NumberItemFilterOptionsBase {
    /**
     * @property finiteness
     * @description Finiteness of the number.
     * @default "any"
     */
    finiteness: MathematicsFinitenessEnumValuesType;
    /**
     * @property ieee754
     * @description IEEE-754 safe mode of the number.
     * @default "any"
     */
    ieee754: IEEE754EnumValuesType;
    /**
     * @property maximum
     * @description Maximum of the number.
     * @default undefined
     */
    maximum?: number;
    /**
     * @property maximumExclusive
     * @description Whether to exclusive maximum of the number.
     * @default false
     */
    maximumExclusive: boolean;
    /**
     * @property minimum
     * @description Minimum of the number.
     * @default undefined
     */
    minimum?: number;
    /**
     * @property minimumExclusive
     * @description Whether to exclusive minimum of the number.
     * @default false
     */
    minimumExclusive: boolean;
    /**
     * @property numericType
     * @description Numeric type of the number.
     * @default "any"
     */
    numericType: NumericTypeEnumValuesType;
    /**
     * @property parity
     * @description Parity of the number.
     * @default "any"
     */
    parity: MathematicsParityEnumValuesType;
    /**
     * @property primality
     * @description Primality of the number.
     * @default "any"
     */
    primality: MathematicsPrimalityEnumValuesType;
    /**
     * @property sign
     * @description Sign of the number.
     * @default "any"
     */
    sign: MathematicsSignEnumValuesType;
}
interface NumberItemFilterOptions extends Partial<Omit<NumberItemFilterOptionsBase, "finiteness" | "ieee754" | "numericType" | "parity" | "primality" | "sign">> {
    /**
     * @property finiteness
     * @description Finiteness of the number.
     * @default "any"
     */
    finiteness?: MathematicsFinitenessEnumKeysType;
    /**
     * @property ieee754
     * @description IEEE-754 mode of the number.
     * @default "any"
     */
    ieee754?: IEEE754EnumKeysType;
    /**
     * @property integralNumericType
     * @description Integral numeric type of the number.
     * @default undefined
     */
    integralNumericType?: IntegralNumericTypeEnumKeysType;
    /**
     * @property numericType
     * @description Numeric type of the number.
     * @default "any"
     */
    numericType?: NumericTypeEnumKeysType;
    /**
     * @property parity
     * @description Parity of the number.
     * @default "any"
     */
    parity?: MathematicsParityEnumKeysType;
    /**
     * @property primality
     * @description Primality of the number.
     * @default "any"
     */
    primality?: MathematicsPrimalityEnumKeysType;
    /**
     * @property sign
     * @description Sign of the number.
     * @default "any"
     */
    sign?: MathematicsSignEnumKeysType;
    /** @alias maximum */ max?: number;
    /** @alias maximumExclusive */ exclusiveMax?: boolean;
    /** @alias maximumExclusive */ exclusiveMaximum?: boolean;
    /** @alias maximumExclusive */ maxExclusive?: boolean;
    /** @alias minimum */ min?: number;
    /** @alias minimumExclusive */ exclusiveMin?: boolean;
    /** @alias minimumExclusive */ exclusiveMinimum?: boolean;
    /** @alias minimumExclusive */ minExclusive?: boolean;
    /**
     * @property even
     * @description Whether an even number.
     * @default undefined
     * @deprecated Replaced by property `parity` with value `"even"`.
     */
    even?: boolean;
    /**
     * @property finite
     * @description Whether a finite number.
     * @default undefined
     * @deprecated Replaced by property `finiteness` with value `"finite"`.
     */
    finite?: boolean;
    /**
     * @property float
     * @description Whether a float number.
     * @default undefined
     * @deprecated Replaced by property `numericType` with value `"float"`.
     */
    float?: boolean;
    /**
     * @property infinite
     * @description Whether an infinite number.
     * @default undefined
     * @deprecated Replaced by property `finiteness` with value `"infinite"`.
     */
    infinite?: boolean;
    /**
     * @property integer
     * @description Whether an integer number.
     * @default undefined
     * @deprecated Replaced by property `numericType` with value `"integer"`.
     */
    integer?: boolean;
    /**
     * @property negative
     * @description Whether a negative number.
     * @default undefined
     * @deprecated Replaced by property `sign` with value `"negative"`.
     */
    negative?: boolean;
    /**
     * @property odd
     * @description Whether an odd number.
     * @default undefined
     * @deprecated Replaced by property `parity` with value `"odd"`.
     */
    odd?: boolean;
    /**
     * @property positive
     * @description Whether a positive number.
     * @default undefined
     * @deprecated Replaced by property `sign` with value `"positive"`.
     */
    positive?: boolean;
    /**
     * @property prime
     * @description Whether a prime number.
     * @default undefined
     * @deprecated Replaced by property `primality`.
     */
    prime?: boolean;
    /**
     * @property safe
     * @description Whether an IEEE-754 safe number.
     * @default undefined
     * @deprecated Replaced by property `ieee754` with value `"safe"`.
     */
    safe?: boolean;
    /**
     * @property unsafe
     * @description Whether not an IEEE-754 safe number.
     * @deprecated Replaced by property `ieee754` with value `"unsafe"`.
     * @default undefined
     */
    unsafe?: boolean;
    /**
     * @alias float
     * @deprecated Replaced by property `numericType` with value `"float"`.
     */
    flt?: boolean;
    /**
     * @alias integer
     * @deprecated Replaced by property `numericType` with value `"integer"`.
     */
    int?: boolean;
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
 * @class NumberItemFilter
 * @description Determine item with the filter of type of number.
 */
declare class NumberItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of number to determine item.
     * @param {NumberItemFilter | NumberItemFilterOptions} [options] Options.
     */
    constructor(options?: NumberItemFilter | NumberItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {NumberItemFilter}
     */
    get clone(): NumberItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {NumberItemFilterOptionsBase}
     */
    get status(): NumberItemFilterOptionsBase;
    /**
     * @method finiteness
     * @description Finiteness of the number.
     * @param {MathematicsFinitenessEnumKeysType} value
     * @returns {this}
     */
    finiteness(value: MathematicsFinitenessEnumKeysType): this;
    /**
     * @method ieee754
     * @description IEEE-754 safe mode of the number.
     * @param {IEEE754EnumKeysType} value
     * @returns {this}
     */
    ieee754(value: IEEE754EnumKeysType): this;
    /**
     * @method integralNumericType
     * @description Integral numeric type of the number.
     * @param {IntegralNumericTypeEnumKeysType} value
     * @returns {this}
     */
    integralNumericType(value: IntegralNumericTypeEnumKeysType): this;
    /**
     * @method maximum
     * @description Maximum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    maximum(value?: number | undefined): this;
    /**
     * @method maximumExclusive
     * @description Whether to exclusive maximum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    maximumExclusive(value?: boolean): this;
    /**
     * @method minimum
     * @description Minimum of the number.
     * @param {number | undefined} [value]
     * @returns {this}
     */
    minimum(value?: number | undefined): this;
    /**
     * @method minimumExclusive
     * @description Whether to exclusive minimum of the number.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    minimumExclusive(value?: boolean): this;
    /**
     * @method numericType
     * @description Numeric type of the number.
     * @param {NumericTypeEnumKeysType} value
     * @returns {this}
     */
    numericType(value: NumericTypeEnumKeysType): this;
    /**
     * @method parity
     * @description Parity of the number.
     * @param {MathematicsParityEnumKeysType} value
     * @returns {this}
     */
    parity(value: MathematicsParityEnumKeysType): this;
    /**
     * @method primality
     * @description Primality of the number.
     * @param {MathematicsPrimalityEnumKeysType} value
     * @returns {this}
     */
    primality(value: MathematicsPrimalityEnumKeysType): this;
    /**
     * @method sign
     * @description Sign of the number.
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
     * @method composite
     * @description Set to allow a composite number.
     * @returns {this}
     */
    composite(): this;
    /**
     * @method even
     * @description Set to allow an even number.
     * @returns {this}
     */
    even(): this;
    /**
     * @method finite
     * @description Set to allow a finite number.
     * @returns {this}
     */
    finite(): this;
    /**
     * @method float
     * @description Set to allow a float number.
     * @returns {this}
     */
    float(): this;
    /**
     * @method infinite
     * @description Set to allow an infinite number.
     * @returns {this}
     */
    infinite(): this;
    /**
     * @method integer
     * @description Set to allow an integer number.
     * @returns {this}
     */
    integer(): this;
    /**
     * @method negative
     * @description Set to allow a negative number.
     * @returns {this}
     */
    negative(): this;
    /**
     * @method odd
     * @description Set to allow an odd number.
     * @returns {this}
     */
    odd(): this;
    /**
     * @method positive
     * @description Set to allow a positive number.
     * @returns {this}
     */
    positive(): this;
    /**
     * @method prime
     * @description Set to allow a prime number.
     * @returns {this}
     */
    prime(): this;
    /**
     * @method safe
     * @description Set to allow an IEEE-754 safe number.
     * @returns {this}
     */
    safe(): this;
    /**
     * @method unsafe
     * @description Set to allow an IEEE-754 unsafe number.
     * @returns {this}
     */
    unsafe(): this;
    /**
     * @method test
     * @description Determine item with the configured filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of number.
     * @param {unknown} item Item that need to determine.
     * @param {NumberItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: NumberItemFilterOptions): boolean;
}
/**
 * @function isNumber
 * @description Determine item with the filter of type of number.
 * @param {unknown} item Item that need to determine.
 * @param {NumberItemFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
declare function isNumber(item: unknown, options?: NumberItemFilterOptions): boolean;
export { isNumber, NumberItemFilter, type NumberItemFilterOptions, type NumberItemFilterOptionsBase };
//# sourceMappingURL=number.d.ts.map