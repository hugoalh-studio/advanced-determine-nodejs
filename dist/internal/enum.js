/**
 * @template {unknown} I
 * @template {unknown} O
 * @param {Readonly<Record<string, string>>} enumObject
 * @param {I} input
 * @param {string} parameterDescription
 * @returns {O}
 */
export function enumResolver(enumObject, input, parameterDescription) {
    if (typeof input !== "string") {
        throw new TypeError(`${parameterDescription.slice(0, 1).toUpperCase()}${parameterDescription.slice(1)} must be type of string!`);
    }
    for (const [enumObjectKey, enumObjectValue] of Object.entries(enumObject)) {
        if (input === enumObjectKey ||
            input === `${enumObjectKey.slice(0, 1).toLowerCase()}${enumObjectKey.slice(1)}` ||
            input === `${enumObjectKey.slice(0, 1).toUpperCase()}${enumObjectKey.slice(1)}`) {
            return enumObjectValue;
        }
    }
    throw new RangeError(`\`${input}\` is not a valid value for ${parameterDescription.slice(0, 1).toLowerCase()}${parameterDescription.slice(1)}! Must be either of these values: "${Array.from(new Set(Object.keys(enumObject).flatMap((value) => {
        return [value, `${value.slice(0, 1).toLowerCase()}${value.slice(1)}`, `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`];
    })).values()).sort().join("\", \"")}"`);
}
export const IEEE754Enum = Object.freeze({
    Any: "any",
    Safe: "safe",
    Unsafe: "unsafe"
});
export const IntegralNumericTypeEnum = Object.freeze({
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
export const JSONRootTypeEnum = Object.freeze({
    Any: "any",
    Array: "array",
    Literal: "literal",
    Object: "object"
});
export const MathematicsFinitenessEnum = Object.freeze({
    Any: "any",
    Finite: "finite",
    Infinite: "infinite"
});
export const MathematicsParityEnum = Object.freeze({
    Any: "any",
    Even: "even",
    Odd: "odd"
});
export const MathematicsPrimalityEnum = Object.freeze({
    Any: "any",
    Composite: "composite",
    Prime: "prime"
});
export const MathematicsSignEnum = Object.freeze({
    Any: "any",
    Negative: "negative",
    Positive: "positive"
});
export const NumericTypeEnum = Object.freeze({
    Any: "any",
    Float: "float",
    Int: "integer",
    Integer: "integer"
});
export const StringCaseEnum = Object.freeze({
    Any: "any",
    Lower: "lower",
    Lowercase: "lower",
    LowerCase: "lower",
    Upper: "upper",
    Uppercase: "upper",
    UpperCase: "upper"
});
export const StringLineEnum = Object.freeze({
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
export const ThreePhaseConditionEnum = Object.freeze({
    Allow: "true",
    Deny: "false",
    Exclude: "false",
    Exclusive: "false",
    False: "false",
    Include: "true",
    Inclusive: "true",
    Neutral: "neutral",
    None: "neutral",
    Null: "neutral",
    True: "true",
    Undefine: "neutral",
    Undefined: "neutral"
});
