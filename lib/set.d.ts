/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
 * @param {number} [param1.size] Size of the set.
 * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the set.
 * @param {number} [param1.sizeMinimum=1] Minimum size of the set.
 * @returns {boolean} Determine result.
 */
export function isSet(item: unknown, { allowEmpty, size, sizeMaximum, sizeMinimum, ...aliases }?: {
    allowEmpty?: boolean;
    size?: number;
    sizeMaximum?: number;
    sizeMinimum?: number;
}): boolean;
/**
 * @class SetItemFilter
 * @description Determine item with the filter of type of set.
 */
export class SetItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of set.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
     * @param {number} [param1.size] Size of the set.
     * @param {number} [param1.sizeMaximum=Infinity] Maximum size of the set.
     * @param {number} [param1.sizeMinimum=1] Minimum size of the set.
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
     * @description Initialize the filter of type of set to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty set.
     * @param {number} [param0.size] Size of the set.
     * @param {number} [param0.sizeMaximum=Infinity] Maximum size of the set.
     * @param {number} [param0.sizeMinimum=1] Minimum size of the set.
     */
    constructor({ allowEmpty, size, sizeMaximum, sizeMinimum, ...aliases }?: {
        allowEmpty?: boolean;
        size?: number;
        sizeMaximum?: number;
        sizeMinimum?: number;
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
