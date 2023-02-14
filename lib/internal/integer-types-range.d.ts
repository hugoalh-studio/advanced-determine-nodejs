export default integerTypesRange;
/**
 * Whether to return result as type of number.
 */
export type AsNumber = boolean;
/**
 * @access private
 * @function integerTypesRange
 * @param {string} name Name of the integer type.
 * @param {AsNumber} [asNumber=false] Whether to return result as type of number.
 * @returns {ReturnType<typeof integerTypesRangeOutput>}
 */
declare function integerTypesRange(name: string, asNumber?: AsNumber): ReturnType<typeof integerTypesRangeOutput>;
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
declare function integerTypesRangeOutput<T extends boolean>(output: [bigint, bigint], asNumber?: T): T extends true ? [number, number] : [bigint, bigint];
//# sourceMappingURL=integer-types-range.d.ts.map