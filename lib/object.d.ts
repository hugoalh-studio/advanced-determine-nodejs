/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowArray=false] Whether to allow `Array` object.
 * @param {boolean} [param1.allowNull=false] Whether to allow `null` object.
 * @param {boolean} [param1.allowRegExp=false] Whether to allow `RegExp` object.
 * @returns {boolean} Determine result.
 */
export function isObject(item: unknown, { allowArray, allowNull, allowRegExp, ...aliases }?: {
    allowArray?: boolean;
    allowNull?: boolean;
    allowRegExp?: boolean;
}): boolean;
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
export class ObjectItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of object.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowArray=false] Whether to allow `Array` object.
     * @param {boolean} [param1.allowNull=false] Whether to allow `null` object.
     * @param {boolean} [param1.allowRegExp=false] Whether to allow `RegExp` object.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowArray, allowNull, allowRegExp, ...aliases }?: {
        allowArray?: boolean;
        allowNull?: boolean;
        allowRegExp?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of object to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowArray=false] Whether to allow `Array` object.
     * @param {boolean} [param0.allowNull=false] Whether to allow `null` object.
     * @param {boolean} [param0.allowRegExp=false] Whether to allow `RegExp` object.
     */
    constructor({ allowArray, allowNull, allowRegExp, ...aliases }?: {
        allowArray?: boolean;
        allowNull?: boolean;
        allowRegExp?: boolean;
    });
    /**
     * @method test
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
