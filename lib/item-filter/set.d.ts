export default SetItemFilter;
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
declare class SetItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
     * @param {number} [param1.maximumSize=Infinity] Maximum size of the set.
     * @param {number} [param1.minimumSize=1] Minimum size of the set.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, maximumSize, minimumSize, ...aliases }?: {
        allowEmpty?: boolean;
        maximumSize?: number;
        minimumSize?: number;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of set to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty set.
     * @param {number} [param0.maximumSize=Infinity] Maximum size of the set.
     * @param {number} [param0.minimumSize=1] Minimum size of the set.
     */
    constructor({ allowEmpty, maximumSize, minimumSize, ...aliases }?: {
        allowEmpty?: boolean;
        maximumSize?: number;
        minimumSize?: number;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=set.d.ts.map