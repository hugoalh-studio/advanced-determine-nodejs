export default isArrayInternal;
/**
 * @access private
 * @function isArrayInternal
 * @description Determine item is type of array or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=0] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {item is Array} Determine result.
 */
declare function isArrayInternal(item: unknown, { maximumLength, minimumLength, strict, unique }?: {
    maximumLength?: number;
    minimumLength?: number;
    strict?: boolean;
    unique?: boolean;
}): item is any[];
//# sourceMappingURL=is-array.d.mts.map