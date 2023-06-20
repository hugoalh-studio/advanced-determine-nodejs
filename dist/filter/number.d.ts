import { type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type MathematicsFinitenessEnumKeysType, type MathematicsFinitenessEnumValuesType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType, type NumericTypeEnumKeysType, type NumericTypeEnumValuesType } from "../internal/enum.js";
interface NumberFilterStatus {
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
interface NumberFilterOptions extends Partial<Omit<NumberFilterStatus, "finiteness" | "ieee754" | "numericType" | "parity" | "primality" | "sign">> {
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
}
/**
 * @class NumberFilter
 * @description Filter for number.
 */
declare class NumberFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the number filter.
     * @param {NumberFilter | NumberFilterOptions} [options] Options.
     */
    constructor(options?: NumberFilter | NumberFilterOptions);
    /**
     * @method clone
     * @description Clone this number filter for reuse.
     * @returns {NumberFilter} Another instance of this number filter.
     */
    get clone(): NumberFilter;
    /**
     * @method status
     * @description Get the status of this number filter.
     * @returns {NumberFilterStatus} Status of this number filter.
     */
    get status(): NumberFilterStatus;
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
     * @description Determine item with the configured number filter.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the number filter.
     * @param {unknown} item Item that need to determine.
     * @param {NumberFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: NumberFilterOptions): boolean;
}
/**
 * @function filterNumber
 * @description Determine item with the number filter.
 * @param {unknown} item Item that need to determine.
 * @param {NumberFilterOptions} [options={}] Options
 * @returns {boolean} Determine result.
 */
declare function filterNumber(item: unknown, options?: NumberFilterOptions): boolean;
export { filterNumber, NumberFilter, type NumberFilterOptions, type NumberFilterStatus };
//# sourceMappingURL=number.d.ts.map