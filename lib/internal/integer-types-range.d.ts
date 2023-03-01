export default integerTypesRange;
/**
 * @access private
 * @function integerTypesRange
 * @param {string} name Name of the integer type.
 * @param {boolean} [asNumber=false] Whether to return result as type of number.
 * @returns {ReturnType<typeof integerTypesRangeOutput>}
 */
declare function integerTypesRange(name: string, asNumber?: boolean): ReturnType<typeof integerTypesRangeOutput>;
/**
 * @access private
 * @function integerTypesRangeOutput
 * @template {boolean} T
 * @param {[bigint, bigint]} output Output.
 * @param {T} [asNumber=false] Whether to return result as type of number.
 * @returns {T extends true ? [number, number] : [bigint, bigint]}
 */
declare function integerTypesRangeOutput<T extends boolean>(output: [bigint, bigint], asNumber?: T): T extends true ? [number, number] : [bigint, bigint];
//# sourceMappingURL=integer-types-range.d.ts.map