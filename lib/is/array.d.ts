/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {boolean} Determine result.
 */
export function isArray(item: unknown, { allowEmpty, maximumLength, minimumLength, strict, unique, ...aliases }?: {
    allowEmpty?: boolean;
    maximumLength?: number;
    minimumLength?: number;
    strict?: boolean;
    unique?: boolean;
}): boolean;
//# sourceMappingURL=array.d.ts.map