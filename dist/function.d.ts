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
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
declare class FunctionItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of function to determine item.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
     */
    constructor(options?: FunctionItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @param {FunctionItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
     */
    static test(item: unknown, options?: FunctionItemFilterOptions): boolean;
}
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {FunctionItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isAsyncFunction`, `native.isSyncGeneratorFunction`, and/or `native.isSyncFunction` instead.
 */
declare function isFunction(item: unknown, options?: FunctionItemFilterOptions): boolean;
export { FunctionItemFilter, isFunction, type FunctionItemFilterOptions };
//# sourceMappingURL=function.d.ts.map