export default MapItemFilter;
/**
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
declare class MapItemFilter {
    /**
     * @static test
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty map.
     * @param {number} [param1.maximumSize=Infinity] Maximum size of the map.
     * @param {number} [param1.minimumSize=1] Minimum size of the map.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, maximumSize, minimumSize, ...aliases }?: {
        allowEmpty?: boolean;
        maximumSize?: number;
        minimumSize?: number;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of map to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty map.
     * @param {number} [param0.maximumSize=Infinity] Maximum size of the map.
     * @param {number} [param0.minimumSize=1] Minimum size of the map.
     */
    constructor({ allowEmpty, maximumSize, minimumSize, ...aliases }?: {
        allowEmpty?: boolean;
        maximumSize?: number;
        minimumSize?: number;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=map.d.ts.map