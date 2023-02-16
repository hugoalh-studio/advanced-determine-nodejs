export default ArrayItemFilter;
/**
 * @class ArrayItemFilter
 * @description Determine item with the filter of type of array.
 */
declare class ArrayItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of array to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty array.
     * @param {number} [param0.maximumLength=Infinity] Maximum length of the array.
     * @param {number} [param0.minimumLength=1] Minimum length of the array.
     * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties in the array.
     * @param {boolean} [param0.unique=false] Whether to determine all of the elements in the array are unique.
     */
    constructor({ allowEmpty, maximumLength, minimumLength, strict, unique, ...aliases }?: {
        allowEmpty?: boolean;
        maximumLength?: number;
        minimumLength?: number;
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
//# sourceMappingURL=array.d.ts.map