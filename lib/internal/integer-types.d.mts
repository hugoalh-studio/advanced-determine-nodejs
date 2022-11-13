export default integerTypes;
/**
 * Whether to return result as type of number.
 */
export type AsNumber = boolean;
/**
 * @access private
 * @function integerTypes
 * @param {string} name Name of the integer type.
 * @param {AsNumber} [asNumber=false] Whether to return result as type of number.
 * @returns {ReturnType<typeof integerTypesOutput>}
 */
declare function integerTypes(name: string, asNumber?: AsNumber): ReturnType<typeof integerTypesOutput>;
/**
 * @access private
 * @function integerTypesOutput
 * @template {AsNumber} T
 * @param {[bigint, bigint]} output Output.
 * @param {T} [asNumber=false] Whether to return result as type of number.
 * @returns {T extends true ? [number, number] : [bigint, bigint]}
 */
declare function integerTypesOutput<T extends boolean>(output: [bigint, bigint], asNumber?: T): T extends true ? [number, number] : [bigint, bigint];
//# sourceMappingURL=integer-types.d.mts.map