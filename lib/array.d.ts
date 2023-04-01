/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
export class ArrayItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
     * @param {number} [param1.length] Length of the array.
     * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the array.
     * @param {number} [param1.lengthMinimum=1] Minimum length of the array.
     * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
     * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, length, lengthMaximum, lengthMinimum, strict, unique, ...aliases }?: {
        allowEmpty?: boolean;
        length?: number;
        lengthMaximum?: number;
        lengthMinimum?: number;
        strict?: boolean;
        unique?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of array to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty array.
     * @param {number} [param0.length] Length of the array.
     * @param {number} [param0.lengthMaximum=Infinity] Maximum length of the array.
     * @param {number} [param0.lengthMinimum=1] Minimum length of the array.
     * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties in the array.
     * @param {boolean} [param0.unique=false] Whether to determine all of the elements in the array are unique.
     */
    constructor({ allowEmpty, length, lengthMaximum, lengthMinimum, strict, unique, ...aliases }?: {
        allowEmpty?: boolean;
        length?: number;
        lengthMaximum?: number;
        lengthMinimum?: number;
        strict?: boolean;
        unique?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of array.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.length] Length of the array.
 * @param {number} [param1.lengthMaximum=Infinity] Maximum length of the array.
 * @param {number} [param1.lengthMinimum=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {boolean} Determine result.
 */
export function isArray(item: unknown, { allowEmpty, length, lengthMaximum, lengthMinimum, strict, unique, ...aliases }?: {
    allowEmpty?: boolean;
    length?: number;
    lengthMaximum?: number;
    lengthMinimum?: number;
    strict?: boolean;
    unique?: boolean;
}): boolean;
//# sourceMappingURL=array.d.ts.map