import { type EnumCase } from "../_internal/enum.js";
export declare enum NumericIntegralTypeEnum {
    Byte = "uint8",
    Char = "int8",
    Int8 = "int8",
    Int16 = "int16",
    Int32 = "int32",
    Int64 = "int64",
    Int128 = "int128",
    Long = "int64",
    Rune = "int32",
    Short = "int16",
    Uchar = "uint8",
    UChar = "uint8",
    Uint8 = "uint8",
    UInt8 = "uint8",
    Uint16 = "uint16",
    UInt16 = "uint16",
    Uint32 = "uint32",
    UInt32 = "uint32",
    Uint64 = "uint64",
    UInt64 = "uint64",
    Uint128 = "uint128",
    UInt128 = "uint128",
    Ulong = "uint64",
    ULong = "uint64",
    Ushort = "uint16",
    UShort = "uint16"
}
export type NumericIntegralTypeEnumStringify = EnumCase<keyof typeof NumericIntegralTypeEnum>;
/**
 * Determine whether the numeric is in the range of the specified integral type.
 * @param {NumericIntegralTypeEnum | NumericIntegralTypeEnumStringify} typeName Name of the integral numeric type.
 * @param {bigint | number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export declare function isNumericIntegralType(typeName: NumericIntegralTypeEnum | NumericIntegralTypeEnumStringify, item: bigint | number): boolean;
export default isNumericIntegralType;
//# sourceMappingURL=is-integral-type.d.ts.map