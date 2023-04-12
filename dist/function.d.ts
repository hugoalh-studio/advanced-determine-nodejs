interface FunctionItemFilterOptions {
    /**
     * @property asynchronous
     * @description Whether an asynchronous function.
     * @default undefined
     */
    asynchronous?: boolean;
    /**
     * @property generator
     * @description Whether a generator function.
     * @default undefined
     */
    generator?: boolean;
    /** @alias asynchronous */ async?: boolean;
}
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 */
declare class FunctionItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of function to determine item.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     */
    constructor(options?: FunctionItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: FunctionItemFilterOptions): boolean;
}
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {FunctionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isFunction(item: unknown, options?: FunctionItemFilterOptions): boolean;
export { FunctionItemFilter, isFunction, type FunctionItemFilterOptions };
//# sourceMappingURL=function.d.ts.map