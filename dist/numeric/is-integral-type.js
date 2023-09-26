import { enumGetKeys, enumResolve } from "../_internal/enum.js";
export var NumericIntegralTypeEnum;
(function (NumericIntegralTypeEnum) {
    NumericIntegralTypeEnum["bigint"] = "int64";
    NumericIntegralTypeEnum["bigInt"] = "int64";
    NumericIntegralTypeEnum["Bigint"] = "int64";
    NumericIntegralTypeEnum["BigInt"] = "int64";
    NumericIntegralTypeEnum["biguint"] = "uint64";
    NumericIntegralTypeEnum["bigUint"] = "uint64";
    NumericIntegralTypeEnum["bigUInt"] = "uint64";
    NumericIntegralTypeEnum["BigUint"] = "uint64";
    NumericIntegralTypeEnum["BigUInt"] = "uint64";
    NumericIntegralTypeEnum["byte"] = "uint8";
    NumericIntegralTypeEnum["Byte"] = "uint8";
    NumericIntegralTypeEnum["char"] = "int8";
    NumericIntegralTypeEnum["Char"] = "int8";
    NumericIntegralTypeEnum["int8"] = "int8";
    NumericIntegralTypeEnum["Int8"] = "int8";
    NumericIntegralTypeEnum["int16"] = "int16";
    NumericIntegralTypeEnum["Int16"] = "int16";
    NumericIntegralTypeEnum["int32"] = "int32";
    NumericIntegralTypeEnum["Int32"] = "int32";
    NumericIntegralTypeEnum["int64"] = "int64";
    NumericIntegralTypeEnum["Int64"] = "int64";
    NumericIntegralTypeEnum["int128"] = "int128";
    NumericIntegralTypeEnum["Int128"] = "int128";
    NumericIntegralTypeEnum["integer"] = "int32";
    NumericIntegralTypeEnum["Integer"] = "int32";
    NumericIntegralTypeEnum["long"] = "int64";
    NumericIntegralTypeEnum["Long"] = "int64";
    NumericIntegralTypeEnum["rune"] = "int32";
    NumericIntegralTypeEnum["Rune"] = "int32";
    NumericIntegralTypeEnum["short"] = "int16";
    NumericIntegralTypeEnum["Short"] = "int16";
    NumericIntegralTypeEnum["smallint"] = "int16";
    NumericIntegralTypeEnum["smallInt"] = "int16";
    NumericIntegralTypeEnum["SmallInt"] = "int16";
    NumericIntegralTypeEnum["smalluint"] = "uint16";
    NumericIntegralTypeEnum["smallUint"] = "uint16";
    NumericIntegralTypeEnum["smallUInt"] = "uint16";
    NumericIntegralTypeEnum["SmallUint"] = "uint16";
    NumericIntegralTypeEnum["SmallUInt"] = "uint16";
    NumericIntegralTypeEnum["tinyint"] = "int8";
    NumericIntegralTypeEnum["tinyInt"] = "int8";
    NumericIntegralTypeEnum["TinyInt"] = "int8";
    NumericIntegralTypeEnum["tinyuint"] = "uint8";
    NumericIntegralTypeEnum["tinyUint"] = "uint8";
    NumericIntegralTypeEnum["tinyUInt"] = "uint8";
    NumericIntegralTypeEnum["TinyUint"] = "uint8";
    NumericIntegralTypeEnum["TinyUInt"] = "uint8";
    NumericIntegralTypeEnum["uchar"] = "uint8";
    NumericIntegralTypeEnum["uChar"] = "uint8";
    NumericIntegralTypeEnum["Uchar"] = "uint8";
    NumericIntegralTypeEnum["UChar"] = "uint8";
    NumericIntegralTypeEnum["uint8"] = "uint8";
    NumericIntegralTypeEnum["uInt8"] = "uint8";
    NumericIntegralTypeEnum["Uint8"] = "uint8";
    NumericIntegralTypeEnum["UInt8"] = "uint8";
    NumericIntegralTypeEnum["uint16"] = "uint16";
    NumericIntegralTypeEnum["uInt16"] = "uint16";
    NumericIntegralTypeEnum["Uint16"] = "uint16";
    NumericIntegralTypeEnum["UInt16"] = "uint16";
    NumericIntegralTypeEnum["uint32"] = "uint32";
    NumericIntegralTypeEnum["uInt32"] = "uint32";
    NumericIntegralTypeEnum["Uint32"] = "uint32";
    NumericIntegralTypeEnum["UInt32"] = "uint32";
    NumericIntegralTypeEnum["uint64"] = "uint64";
    NumericIntegralTypeEnum["uInt64"] = "uint64";
    NumericIntegralTypeEnum["Uint64"] = "uint64";
    NumericIntegralTypeEnum["UInt64"] = "uint64";
    NumericIntegralTypeEnum["uint128"] = "uint128";
    NumericIntegralTypeEnum["uInt128"] = "uint128";
    NumericIntegralTypeEnum["Uint128"] = "uint128";
    NumericIntegralTypeEnum["UInt128"] = "uint128";
    NumericIntegralTypeEnum["uinteger"] = "uint32";
    NumericIntegralTypeEnum["uInteger"] = "uint32";
    NumericIntegralTypeEnum["Uinteger"] = "uint32";
    NumericIntegralTypeEnum["UInteger"] = "uint32";
    NumericIntegralTypeEnum["ulong"] = "uint64";
    NumericIntegralTypeEnum["uLong"] = "uint64";
    NumericIntegralTypeEnum["Ulong"] = "uint64";
    NumericIntegralTypeEnum["ULong"] = "uint64";
    NumericIntegralTypeEnum["ushort"] = "uint16";
    NumericIntegralTypeEnum["uShort"] = "uint16";
    NumericIntegralTypeEnum["Ushort"] = "uint16";
    NumericIntegralTypeEnum["UShort"] = "uint16";
})(NumericIntegralTypeEnum || (NumericIntegralTypeEnum = {}));
const enumNumericIntegralTypeKeys = enumGetKeys(NumericIntegralTypeEnum);
/**
 * @access private
 * @param {bigint} base
 * @returns {NumericIntegralTypeRange}
 */
function resolveNumericIntegralTypeRangeIntBase(base) {
    const gridHalf = (2n ** base) / 2n;
    return [-gridHalf, gridHalf - 1n];
}
/**
 * @access private
 * @param {bigint} base
 * @returns {NumericIntegralTypeRange}
 */
function resolveNumericIntegralTypeRangeUIntBase(base) {
    return [0n, (2n ** base) - 1n];
}
/**
 * @access private
 * @param {NumericIntegralTypeEnum | NumericIntegralTypeEnumStringify} name
 * @returns {NumericIntegralTypeRange}
 */
function resolveNumericIntegralTypeRange(name) {
    switch (enumResolve(NumericIntegralTypeEnum, name)) {
        case "int8":
            return resolveNumericIntegralTypeRangeIntBase(8n);
        case "int16":
            return resolveNumericIntegralTypeRangeIntBase(16n);
        case "int32":
            return resolveNumericIntegralTypeRangeIntBase(32n);
        case "int64":
            return resolveNumericIntegralTypeRangeIntBase(64n);
        case "int128":
            return resolveNumericIntegralTypeRangeIntBase(128n);
        case "uint8":
            return resolveNumericIntegralTypeRangeUIntBase(8n);
        case "uint16":
            return resolveNumericIntegralTypeRangeUIntBase(16n);
        case "uint32":
            return resolveNumericIntegralTypeRangeUIntBase(32n);
        case "uint64":
            return resolveNumericIntegralTypeRangeUIntBase(64n);
        case "uint128":
            return resolveNumericIntegralTypeRangeUIntBase(128n);
        default:
            throw new RangeError(`\`${name}\` is not a valid integral numeric type! Only accept these values: ${Array.from(enumNumericIntegralTypeKeys.values()).join(", ")}`);
    }
}
/**
 * Determine whether the numeric is in the range of the specified integral type.
 * @param {NumericIntegralTypeEnum | NumericIntegralTypeEnumStringify} typeName Name of the integral numeric type.
 * @param {bigint | number} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isNumericIntegralType(typeName, item) {
    const [minimum, maximum] = resolveNumericIntegralTypeRange(typeName);
    if (typeof item === "bigint") {
        return (minimum <= item && item <= maximum);
    }
    return (Number.isInteger(item) && Number(minimum) <= item && item <= Number(maximum));
}
export default isNumericIntegralType;
