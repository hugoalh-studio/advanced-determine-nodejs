type EnumCase<T extends string> = T | Capitalize<T> | Uncapitalize<T>;
/**
 * @function enumResolver
 * @template {unknown} K
 * @template {unknown} V
 * @param {Readonly<{ [x: string]: string; }>} e
 * @param {K} k
 * @returns {V | undefined}
 */
declare function enumResolver<K, V>(e: Readonly<{
    [x: string]: string;
}>, k: K): V | undefined;
declare const IEEE754Enum: Readonly<{
    Any: "any";
    Safe: "safe";
    Unsafe: "unsafe";
}>;
type IEEE754EnumKeysType = EnumCase<keyof typeof IEEE754Enum>;
type IEEE754EnumValuesType = (typeof IEEE754Enum)[keyof typeof IEEE754Enum];
declare const IntegralNumericTypeEnum: Readonly<{
    Byte: "uint8";
    Char: "int8";
    Int8: "int8";
    Int16: "int16";
    Int32: "int32";
    Int64: "int64";
    Int128: "int128";
    Long: "int64";
    Rune: "int32";
    Short: "int16";
    Uchar: "uint8";
    UChar: "uint8";
    Uint8: "uint8";
    UInt8: "uint8";
    Uint16: "uint16";
    UInt16: "uint16";
    Uint32: "uint32";
    UInt32: "uint32";
    Uint64: "uint64";
    UInt64: "uint64";
    Uint128: "uint128";
    UInt128: "uint128";
    Ulong: "uint64";
    ULong: "uint64";
    Ushort: "uint16";
    UShort: "uint16";
}>;
type IntegralNumericTypeEnumKeysType = EnumCase<keyof typeof IntegralNumericTypeEnum>;
type IntegralNumericTypeEnumValuesType = (typeof IntegralNumericTypeEnum)[keyof typeof IntegralNumericTypeEnum];
declare const JSONRootTypeEnum: Readonly<{
    Any: "any";
    Array: "array";
    Object: "object";
}>;
type JSONRootTypeEnumKeysType = EnumCase<keyof typeof JSONRootTypeEnum>;
type JSONRootTypeEnumValuesType = (typeof JSONRootTypeEnum)[keyof typeof JSONRootTypeEnum];
declare const MathematicsFinitenessEnum: Readonly<{
    Any: "any";
    Finite: "finite";
    Infinite: "infinite";
}>;
type MathematicsFinitenessEnumKeysType = EnumCase<keyof typeof MathematicsFinitenessEnum>;
type MathematicsFinitenessEnumValuesType = (typeof MathematicsFinitenessEnum)[keyof typeof MathematicsFinitenessEnum];
declare const MathematicsParityEnum: Readonly<{
    Any: "any";
    Even: "even";
    Odd: "odd";
}>;
type MathematicsParityEnumKeysType = EnumCase<keyof typeof MathematicsParityEnum>;
type MathematicsParityEnumValuesType = (typeof MathematicsParityEnum)[keyof typeof MathematicsParityEnum];
declare const MathematicsPrimalityEnum: Readonly<{
    Any: "any";
    Composite: "composite";
    Prime: "prime";
}>;
type MathematicsPrimalityEnumKeysType = EnumCase<keyof typeof MathematicsPrimalityEnum>;
type MathematicsPrimalityEnumValuesType = (typeof MathematicsPrimalityEnum)[keyof typeof MathematicsPrimalityEnum];
declare const MathematicsSignEnum: Readonly<{
    Any: "any";
    Negative: "negative";
    Positive: "positive";
}>;
type MathematicsSignEnumKeysType = EnumCase<keyof typeof MathematicsSignEnum>;
type MathematicsSignEnumValuesType = (typeof MathematicsSignEnum)[keyof typeof MathematicsSignEnum];
declare const NumericTypeEnum: Readonly<{
    Any: "any";
    Float: "float";
    Int: "integer";
    Integer: "integer";
}>;
type NumericTypeEnumKeysType = EnumCase<keyof typeof NumericTypeEnum>;
type NumericTypeEnumValuesType = (typeof NumericTypeEnum)[keyof typeof NumericTypeEnum];
declare const StringCaseEnum: Readonly<{
    Any: "any";
    Lower: "lower";
    Lowercase: "lower";
    LowerCase: "lower";
    Upper: "upper";
    Uppercase: "upper";
    UpperCase: "upper";
}>;
type StringCaseEnumKeysType = EnumCase<keyof typeof StringCaseEnum>;
type StringCaseEnumValuesType = (typeof StringCaseEnum)[keyof typeof StringCaseEnum];
declare const StringLineEnum: Readonly<{
    Any: "any";
    Multiline: "multiple";
    MultiLine: "multiple";
    Multiple: "multiple";
    Multipleline: "multiple";
    MultipleLine: "multiple";
    Single: "single";
    Singleline: "single";
    SingleLine: "single";
}>;
type StringLineEnumKeysType = EnumCase<keyof typeof StringLineEnum>;
type StringLineEnumValuesType = (typeof StringLineEnum)[keyof typeof StringLineEnum];
declare const ThreePhaseConditionEnum: Readonly<{
    Allow: "true";
    Deny: "false";
    Exclude: "false";
    Exclusive: "false";
    False: "false";
    Include: "true";
    Inclusive: "true";
    Neutral: "neutral";
    None: "neutral";
    Null: "neutral";
    True: "true";
    Undefine: "neutral";
    Undefined: "neutral";
}>;
type ThreePhaseConditionEnumKeysType = EnumCase<keyof typeof ThreePhaseConditionEnum>;
type ThreePhaseConditionEnumValuesType = (typeof ThreePhaseConditionEnum)[keyof typeof ThreePhaseConditionEnum];
export { enumResolver, IEEE754Enum, IntegralNumericTypeEnum, JSONRootTypeEnum, MathematicsFinitenessEnum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, NumericTypeEnum, StringCaseEnum, StringLineEnum, ThreePhaseConditionEnum, type EnumCase, type IEEE754EnumKeysType, type IEEE754EnumValuesType, type IntegralNumericTypeEnumKeysType, type IntegralNumericTypeEnumValuesType, type JSONRootTypeEnumKeysType, type JSONRootTypeEnumValuesType, type MathematicsFinitenessEnumKeysType, type MathematicsFinitenessEnumValuesType, type MathematicsParityEnumKeysType, type MathematicsParityEnumValuesType, type MathematicsPrimalityEnumKeysType, type MathematicsPrimalityEnumValuesType, type MathematicsSignEnumKeysType, type MathematicsSignEnumValuesType, type NumericTypeEnumKeysType, type NumericTypeEnumValuesType, type StringCaseEnumKeysType, type StringCaseEnumValuesType, type StringLineEnumKeysType, type StringLineEnumValuesType, type ThreePhaseConditionEnumKeysType, type ThreePhaseConditionEnumValuesType };
//# sourceMappingURL=enum.d.ts.map