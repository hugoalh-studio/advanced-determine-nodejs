const grid8 = 2n ** 8n;
const grid16 = 2n ** 16n;
const grid32 = 2n ** 32n;
const grid64 = 2n ** 64n;
/**
 * @access private
 * @function integerTypesRangeInt
 * @param {bigint} grid Grid.
 * @returns {[bigint, bigint]}
 */
function integerTypesRangeInt(grid) {
	let gridHalf = grid / 2n;
	return [-gridHalf, gridHalf - 1n];
}
/**
 * @access private
 * @function integerTypesRangeUInt
 * @param {bigint} grid Grid.
 * @returns {[bigint, bigint]}
 */
function integerTypesRangeUInt(grid) {
	return [0n, grid - 1n];
}
/**
 * @typedef {boolean} AsNumber Whether to return result as type of number.
 */
/**
 * @access private
 * @function integerTypesRangeOutput
 * @template {AsNumber} T
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
 * @param {AsNumber} [asNumber=false] Whether to return result as type of number.
 * @returns {ReturnType<typeof integerTypesRangeOutput>}
 */
function integerTypesRange(name, asNumber = false) {
	switch (name) {
		case "char":
		case "Char":
		case "int8":
		case "Int8":
			return integerTypesRangeOutput(integerTypesRangeInt(grid8), asNumber);
		case "int16":
		case "Int16":
		case "short":
		case "Short":
			return integerTypesRangeOutput(integerTypesRangeInt(grid16), asNumber);
		case "int32":
		case "Int32":
		case "rune":
		case "Rune":
			return integerTypesRangeOutput(integerTypesRangeInt(grid32), asNumber);
		case "int64":
		case "Int64":
		case "long":
		case "Long":
			return integerTypesRangeOutput(integerTypesRangeInt(grid64), asNumber);
		case "byte":
		case "Byte":
		case "uchar":
		case "Uchar":
		case "UChar":
		case "uint8":
		case "Uint8":
		case "UInt8":
			return integerTypesRangeOutput(integerTypesRangeUInt(grid8), asNumber);
		case "uint16":
		case "Uint16":
		case "UInt16":
		case "ushort":
		case "Ushort":
		case "UShort":
			return integerTypesRangeOutput(integerTypesRangeUInt(grid16), asNumber);
		case "uint32":
		case "Uint32":
		case "UInt32":
			return integerTypesRangeOutput(integerTypesRangeUInt(grid32), asNumber);
		case "uint64":
		case "Uint64":
		case "UInt64":
		case "ulong":
		case "Ulong":
		case "ULong":
			return integerTypesRangeOutput(integerTypesRangeUInt(grid64), asNumber);
		default:
			throw new RangeError(`\`${name}\` is not a valid interger type.`);
	}
}
export default integerTypesRange;
