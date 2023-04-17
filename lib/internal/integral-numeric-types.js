/**
 * @access private
 * @function integralNumericTypesRangeIntBase
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integralNumericTypesRangeIntBase(base) {
	let gridHalf = (2n ** base) / 2n;
	return [-gridHalf, gridHalf - 1n];
}
/**
 * @access private
 * @function integralNumericTypesRangeUIntBase
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integralNumericTypesRangeUIntBase(base) {
	return [0n, (2n ** base) - 1n];
}
/**
 * @function integralNumericTypeRange
 * @param {string} typeName
 * @returns {[bigint, bigint]}
 */
function integralNumericTypeRange(typeName) {
	switch (typeName) {
		case "char":
		case "Char":
		case "int8":
		case "Int8":
			return integralNumericTypesRangeIntBase(8n);
		case "int16":
		case "Int16":
		case "short":
		case "Short":
			return integralNumericTypesRangeIntBase(16n);
		case "int32":
		case "Int32":
		case "rune":
		case "Rune":
			return integralNumericTypesRangeIntBase(32n);
		case "int64":
		case "Int64":
		case "long":
		case "Long":
			return integralNumericTypesRangeIntBase(64n);
		case "int128":
		case "Int128":
			return integralNumericTypesRangeIntBase(128n);
		case "byte":
		case "Byte":
		case "uchar":
		case "Uchar":
		case "UChar":
		case "uint8":
		case "Uint8":
		case "UInt8":
			return integralNumericTypesRangeUIntBase(8n);
		case "uint16":
		case "Uint16":
		case "UInt16":
		case "ushort":
		case "Ushort":
		case "UShort":
			return integralNumericTypesRangeUIntBase(16n);
		case "uint32":
		case "Uint32":
		case "UInt32":
			return integralNumericTypesRangeUIntBase(32n);
		case "uint64":
		case "Uint64":
		case "UInt64":
		case "ulong":
		case "Ulong":
		case "ULong":
			return integralNumericTypesRangeUIntBase(64n);
		case "uint128":
		case "Uint128":
		case "UInt128":
			return integralNumericTypesRangeUIntBase(128n);
		default:
			throw new RangeError(`\`${typeName}\` is not a valid integral numeric type!`);
	}
}
export {
	integralNumericTypeRange
};
