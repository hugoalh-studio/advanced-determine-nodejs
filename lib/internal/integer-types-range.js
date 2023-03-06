/**
 * @access private
 * @function integerTypesRangeInt
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integerTypesRangeInt(base) {
	let gridHalf = (2n ** base) / 2n;
	return [-gridHalf, gridHalf - 1n];
}
/**
 * @access private
 * @function integerTypesRangeUInt
 * @param {bigint} base
 * @returns {[bigint, bigint]}
 */
function integerTypesRangeUInt(base) {
	return [0n, (2n ** base) - 1n];
}
/**
 * @access private
 * @function integerTypesRange
 * @param {string} name Name of the integer type.
 * @returns {[bigint, bigint]}
 */
function integerTypesRange(name) {
	switch (name) {
		case "char":
		case "Char":
		case "int8":
		case "Int8":
			return integerTypesRangeInt(8n);
		case "int16":
		case "Int16":
		case "short":
		case "Short":
			return integerTypesRangeInt(16n);
		case "int32":
		case "Int32":
		case "rune":
		case "Rune":
			return integerTypesRangeInt(32n);
		case "int64":
		case "Int64":
		case "long":
		case "Long":
			return integerTypesRangeInt(64n);
		case "int128":
		case "Int128":
			return integerTypesRangeInt(128n);
		case "byte":
		case "Byte":
		case "uchar":
		case "Uchar":
		case "UChar":
		case "uint8":
		case "Uint8":
		case "UInt8":
			return integerTypesRangeUInt(8n);
		case "uint16":
		case "Uint16":
		case "UInt16":
		case "ushort":
		case "Ushort":
		case "UShort":
			return integerTypesRangeUInt(16n);
		case "uint32":
		case "Uint32":
		case "UInt32":
			return integerTypesRangeUInt(32n);
		case "uint64":
		case "Uint64":
		case "UInt64":
		case "ulong":
		case "Ulong":
		case "ULong":
			return integerTypesRangeUInt(64n);
		case "uint128":
		case "Uint128":
		case "UInt128":
			return integerTypesRangeUInt(128n);
		default:
			throw new RangeError(`\`${name}\` is not a valid interger type.`);
	}
}
export default integerTypesRange;
