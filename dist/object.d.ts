interface ObjectItemFilterOptions {
    /**
     * @property allowArray
     * @description Whether to allow `Array` object.
     * @default false
     */
    allowArray?: boolean;
    /**
     * @property allowNull
     * @description Whether to allow `null` object.
     * @default false
     */
    allowNull?: boolean;
    /**
     * @property allowRegExp
     * @description Whether to allow `RegExp` object.
     * @default false
     */
    allowRegExp?: boolean;
    /** @alias allowRegExp */ allowRegularExpression?: boolean;
}
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
declare class ObjectItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of object to determine item.
     * @param {ObjectItemFilterOptions} [options={}] Options.
     */
    constructor(options?: ObjectItemFilterOptions);
    /**
     * @method test
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of object.
     * @param {unknown} item Item that need to determine.
     * @param {ObjectItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: ObjectItemFilterOptions): boolean;
}
/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isObject(item: unknown, options?: ObjectItemFilterOptions): boolean;
export { isObject, ObjectItemFilter, type ObjectItemFilterOptions };
//# sourceMappingURL=object.d.ts.map