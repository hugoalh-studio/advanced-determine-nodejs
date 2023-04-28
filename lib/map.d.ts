/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty map.
 * @param {number} [param1.size] Size of the map.
 * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the map.
 * @param {number} [param1.sizeMinimum=1] Minimum size of the map.
 * @returns {boolean} Determine result.
 */
export function isMap(item: unknown, { allowEmpty, size, sizeMaximum, sizeMinimum, ...aliases }?: {
    allowEmpty?: boolean;
    size?: number;
    sizeMaximum?: number;
    sizeMinimum?: number;
}): boolean;
/**
 * @class MapItemFilter
 * @description Determine item with the filter of type of map.
 */
export class MapItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of map.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty map.
     * @param {number} [param1.size] Size of the map.
     * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the map.
     * @param {number} [param1.sizeMinimum=1] Minimum size of the map.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, size, sizeMaximum, sizeMinimum, ...aliases }?: {
        allowEmpty?: boolean;
        size?: number;
        sizeMaximum?: number;
        sizeMinimum?: number;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of map to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty map.
     * @param {number} [param0.size] Size of the map.
     * @param {number} [param0.sizeMaximum=Infinity] Maximum size of the map.
     * @param {number} [param0.sizeMinimum=1] Minimum size of the map.
     */
    constructor({ allowEmpty, size, sizeMaximum, sizeMinimum, ...aliases }?: {
        allowEmpty?: boolean;
        size?: number;
        sizeMaximum?: number;
        sizeMinimum?: number;
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
