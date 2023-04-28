interface ObjectItemFilterOptionsBase {
    /**
     * @property allowArray
     * @description Whether to allow `Array` object.
     * @default false
     */
    allowArray: boolean;
    /**
     * @property allowNull
     * @description Whether to allow `null` object.
     * @default false
     */
    allowNull: boolean;
    /**
     * @property allowRegExp
     * @description Whether to allow `RegExp` object.
     * @default false
     */
    allowRegExp: boolean;
}
interface ObjectItemFilterOptions extends Partial<ObjectItemFilterOptionsBase> {
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
     * @param {ObjectItemFilter | ObjectItemFilterOptions} [options] Options.
     */
    constructor(options?: ObjectItemFilter | ObjectItemFilterOptions);
    /**
     * @method clone
     * @description Clone this filter for reuse.
     * @returns {ObjectItemFilter}
     */
    get clone(): ObjectItemFilter;
    /**
     * @method status
     * @description Status of this filter.
     * @returns {ObjectItemFilterOptionsBase}
     */
    get status(): ObjectItemFilterOptionsBase;
    /**
     * @method allowArray
     * @description Whether to allow `Array` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowArray(value?: boolean): this;
    /**
     * @method allowNull
     * @description Whether to allow `null` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowNull(value?: boolean): this;
    /**
     * @method allowRegExp
     * @description Whether to allow `RegExp` object.
     * @param {boolean} [value=true]
     * @returns {this}
     */
    allowRegExp(value?: boolean): this;
    /** @alias allowRegExp */ allowRegularExpression: (value?: boolean) => this;
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
export { isObject, ObjectItemFilter, type ObjectItemFilterOptions, type ObjectItemFilterOptionsBase };
//# sourceMappingURL=object.d.ts.map