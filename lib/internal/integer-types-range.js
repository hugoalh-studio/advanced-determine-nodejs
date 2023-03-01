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
 * @function integerTypesRangeOutput
 * @template {boolean} T
 * @param {[bigint, bigint]} output Output.
 * @param {T} [asNumber=false] Whether to return result as type of number.
 * @returns {T extends true ? [number, number] : [bigint, bigint]}
 */
function integerTypesRangeOutput(output, asNumber = false) {
	if (asNumber) {
		return output.map((value) => {
			return Number(value);
		});
	}
	return output;
}
/**
 * @access private
 * @function integerTypesRange
 * @param {string} name Name of the integer type.
 * @param {boolean} [asNumber=false] Whether to return result as type of number.
 * @returns {ReturnType<typeof integerTypesRangeOutput>}
 */
function integerTypesRange(name, asNumber = false) {
	switch (name) {
		case "char":
		case "Char":
		case "int8":
		case "Int8":
			return integerTypesRangeOutput(integerTypesRangeInt(8n), asNumber);
		case "int16":
		case "Int16":
		case "short":
		case "Short":
			return integerTypesRangeOutput(integerTypesRangeInt(16n), asNumber);
		case "int32":
		case "Int32":
		case "rune":
		case "Rune":
			return integerTypesRangeOutput(integerTypesRangeInt(32n), asNumber);
		case "int64":
		case "Int64":
		case "long":
		case "Long":
			return integerTypesRangeOutput(integerTypesRangeInt(64n), asNumber);
		case "int128":
		case "Int128":
			return integerTypesRangeOutput(integerTypesRangeInt(128n), asNumber);
		case "byte":
		case "Byte":
		case "uchar":
		case "Uchar":
		case "UChar":
		case "uint8":
		case "Uint8":
		case "UInt8":
			return integerTypesRangeOutput(integerTypesRangeUInt(8n), asNumber);
		case "uint16":
		case "Uint16":
		case "UInt16":
		case "ushort":
		case "Ushort":
		case "UShort":
			return integerTypesRangeOutput(integerTypesRangeUInt(16n), asNumber);
		case "uint32":
		case "Uint32":
		case "UInt32":
			return integerTypesRangeOutput(integerTypesRangeUInt(32n), asNumber);
		case "uint64":
		case "Uint64":
		case "UInt64":
		case "ulong":
		case "Ulong":
		case "ULong":
			return integerTypesRangeOutput(integerTypesRangeUInt(64n), asNumber);
		case "uint128":
		case "Uint128":
		case "UInt128":
			return integerTypesRangeOutput(integerTypesRangeUInt(128n), asNumber);
		default:
			throw new RangeError(`\`${name}\` is not a valid interger type.`);
	}
}
export default integerTypesRange;
