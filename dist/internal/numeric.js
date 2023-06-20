import { enumResolver, IntegralNumericTypeEnum } from "./enum.js";
/**
 * @access private
 * @function bigIntegerSquareRoot
 * @param {bigint} n
 * @param {bigint} [x0=1n]
 * @returns {bigint}
 * @note From https://stackoverflow.com/a/53684036.
 */
function bigIntegerSquareRoot(n, x0 = 1n) {
    let x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 ||
        x0 === x1 - 1n) {
        return x0;
    }
    return bigIntegerSquareRoot(n, x1);
}
/**
 * @access private
 * @function integralNumericTypeRangeIntBase
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integralNumericTypeRangeIntBase(base) {
    let gridHalf = (2n ** base) / 2n;
    return [-gridHalf, gridHalf - 1n];
}
/**
 * @access private
 * @function integralNumericTypeRangeUIntBase
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integralNumericTypeRangeUIntBase(base) {
    return [0n, (2n ** base) - 1n];
}
/**
 * @function integralNumericTypeRange
 * @param {IntegralNumericTypeEnumKeysType} name
 * @returns {[bigint, bigint]}
 */
function integralNumericTypeRange(name) {
    switch (enumResolver(IntegralNumericTypeEnum, name)) {
        case "int8":
            return integralNumericTypeRangeIntBase(8n);
        case "int16":
            return integralNumericTypeRangeIntBase(16n);
        case "int32":
            return integralNumericTypeRangeIntBase(32n);
        case "int64":
            return integralNumericTypeRangeIntBase(64n);
        case "int128":
            return integralNumericTypeRangeIntBase(128n);
        case "uint8":
            return integralNumericTypeRangeUIntBase(8n);
        case "uint16":
            return integralNumericTypeRangeUIntBase(16n);
        case "uint32":
            return integralNumericTypeRangeUIntBase(32n);
        case "uint64":
            return integralNumericTypeRangeUIntBase(64n);
        case "uint128":
            return integralNumericTypeRangeUIntBase(128n);
        default:
            throw new RangeError(`\`${name}\` is not a valid integral numeric type! Must be either of these values: "${Object.keys(IntegralNumericTypeEnum).sort().join("\", \"")}"`);
    }
}
/**
 * @function isPrimeNumeric
 * @param {bigint | number} item
 * @returns {boolean}
 */
function isPrimeNumeric(item) {
    let itemRaw = (typeof item === "bigint") ? item : BigInt(item);
    if (itemRaw === 2n ||
        itemRaw === 3n ||
        itemRaw === 5n ||
        itemRaw === 7n) {
        return true;
    }
    if (itemRaw < 2n ||
        itemRaw % 2n === 0n ||
        itemRaw % 3n === 0n ||
        itemRaw % 5n === 0n ||
        itemRaw % 7n === 0n) {
        return false;
    }
    for (let divisor = 3n; divisor <= bigIntegerSquareRoot(itemRaw) + 1n; divisor += 2n) {
        if (itemRaw % divisor === 0n) {
            return false;
        }
    }
    return true;
}
export { integralNumericTypeRange, isPrimeNumeric };
