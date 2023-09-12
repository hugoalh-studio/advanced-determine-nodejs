import { resolveEnum } from "../_internal/enum.js";
export var NumericIntegralTypeEnum;
(function (NumericIntegralTypeEnum) {
    NumericIntegralTypeEnum["Byte"] = "uint8";
    NumericIntegralTypeEnum["Char"] = "int8";
    NumericIntegralTypeEnum["Int8"] = "int8";
    NumericIntegralTypeEnum["Int16"] = "int16";
    NumericIntegralTypeEnum["Int32"] = "int32";
    NumericIntegralTypeEnum["Int64"] = "int64";
    NumericIntegralTypeEnum["Int128"] = "int128";
    NumericIntegralTypeEnum["Long"] = "int64";
    NumericIntegralTypeEnum["Rune"] = "int32";
    NumericIntegralTypeEnum["Short"] = "int16";
    NumericIntegralTypeEnum["Uchar"] = "uint8";
    NumericIntegralTypeEnum["UChar"] = "uint8";
    NumericIntegralTypeEnum["Uint8"] = "uint8";
    NumericIntegralTypeEnum["UInt8"] = "uint8";
    NumericIntegralTypeEnum["Uint16"] = "uint16";
    NumericIntegralTypeEnum["UInt16"] = "uint16";
    NumericIntegralTypeEnum["Uint32"] = "uint32";
    NumericIntegralTypeEnum["UInt32"] = "uint32";
    NumericIntegralTypeEnum["Uint64"] = "uint64";
    NumericIntegralTypeEnum["UInt64"] = "uint64";
    NumericIntegralTypeEnum["Uint128"] = "uint128";
    NumericIntegralTypeEnum["UInt128"] = "uint128";
    NumericIntegralTypeEnum["Ulong"] = "uint64";
    NumericIntegralTypeEnum["ULong"] = "uint64";
    NumericIntegralTypeEnum["Ushort"] = "uint16";
    NumericIntegralTypeEnum["UShort"] = "uint16";
})(NumericIntegralTypeEnum || (NumericIntegralTypeEnum = {}));
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
    let nameResolve = undefined;
    try {
        nameResolve = resolveEnum(NumericIntegralTypeEnum, name, "");
    }
    catch {
        // Handle at below.
    }
    switch (nameResolve) {
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
            throw new RangeError(`\`${name}\` is not a valid integral numeric type! Only accept these values: "${Array.from(new Set(Object.keys(NumericIntegralTypeEnum).flatMap((value) => {
                return [value, `${value.slice(0, 1).toLowerCase()}${value.slice(1)}`, `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`];
            })).values()).sort().join("\", \"")}"`);
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
