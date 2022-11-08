export default integerTypes;
/**
 * @access private
 * @function integerTypes
 * @template {boolean} T
 * @param {string} name Name of the integer type.
 * @param {T} [asNumber=false] Whether to return result as type of number.
 * @returns {T extends true ? [number, number] : [bigint, bigint]}
 */
declare function integerTypes<T extends boolean>(name: string, asNumber?: T): T extends true ? [number, number] : [bigint, bigint];
//# sourceMappingURL=integer-types.d.mts.map