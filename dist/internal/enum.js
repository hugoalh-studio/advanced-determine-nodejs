/**
 * @function enumResolve
 * @template {unknown} K
 * @template {unknown} V
 * @param {Readonly<{ [x: string]: string; }>} e
 * @param {K} k
 * @returns {V | undefined}
 */
function enumResolve(e, k) {
    for (let [eKey, eValue] of Object.entries(e)) {
        if (k === eKey ||
            k === `${eKey.slice(0, 1).toLowerCase()}${eKey.slice(1)}` ||
            k === `${eKey.slice(0, 1).toUpperCase()}${eKey.slice(1)}`) {
            return eValue;
        }
    }
    return undefined;
}
const IEEE754Enum = Object.freeze({
    Any: "any",
    Safe: "safe",
    Unsafe: "unsafe"
});
const IntegralNumericTypeEnum = Object.freeze({
    Byte: "uint8",
    Char: "int8",
    Int8: "int8",
    Int16: "int16",
    Int32: "int32",
    Int64: "int64",
    Int128: "int128",
    Long: "int64",
    Rune: "int32",
    Short: "int16",
    Uchar: "uint8",
    UChar: "uint8",
    Uint8: "uint8",
    UInt8: "uint8",
    Uint16: "uint16",
    UInt16: "uint16",
    Uint32: "uint32",
    UInt32: "uint32",
    Uint64: "uint64",
    UInt64: "uint64",
    Uint128: "uint128",
    UInt128: "uint128",
    Ulong: "uint64",
    ULong: "uint64",
    Ushort: "uint16",
    UShort: "uint16"
});
const JSONRootTypeEnum = Object.freeze({
    Any: "any",
    Array: "array",
    Object: "object"
});
const MathematicsFinitenessEnum = Object.freeze({
    Any: "any",
    Finite: "finite",
    Infinite: "infinite"
});
const MathematicsParityEnum = Object.freeze({
    Any: "any",
    Even: "even",
    Odd: "odd"
});
const MathematicsPrimalityEnum = Object.freeze({
    Any: "any",
    Composite: "composite",
    Prime: "prime"
});
const MathematicsSignEnum = Object.freeze({
    Any: "any",
    Negative: "negative",
    Positive: "positive"
});
const NumericTypeEnum = Object.freeze({
    Any: "any",
    Float: "float",
    Int: "integer",
    Integer: "integer"
});
const StringCaseEnum = Object.freeze({
    Any: "any",
    Lower: "lower",
    Lowercase: "lower",
    LowerCase: "lower",
    Upper: "upper",
    Uppercase: "upper",
    UpperCase: "upper"
});
const StringLineEnum = Object.freeze({
    Any: "any",
    Multiline: "multiple",
    MultiLine: "multiple",
    Multiple: "multiple",
    Multipleline: "multiple",
    MultipleLine: "multiple",
    Single: "single",
    Singleline: "single",
    SingleLine: "single"
});
export { enumResolve, IEEE754Enum, IntegralNumericTypeEnum, JSONRootTypeEnum, MathematicsFinitenessEnum, MathematicsParityEnum, MathematicsPrimalityEnum, MathematicsSignEnum, NumericTypeEnum, StringCaseEnum, StringLineEnum };
