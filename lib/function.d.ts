/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isSyncGeneratorFunction`, `native.isAsyncFunction`, and/or `native.isSyncFunction` instead.
 */
export class FunctionItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
     * @param {boolean} [param1.generator] Whether a generator function.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isSyncGeneratorFunction`, `native.isAsyncFunction`, and/or `native.isSyncFunction` instead.
     */
    static test(item: unknown, { asynchronous, generator, ...aliases }?: {
        asynchronous?: boolean;
        generator?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of function to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.asynchronous] Whether an asynchronous function.
     * @param {boolean} [param0.generator] Whether a generator function.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isSyncGeneratorFunction`, `native.isAsyncFunction`, and/or `native.isSyncFunction` instead.
     */
    constructor({ asynchronous, generator, ...aliases }?: {
        asynchronous?: boolean;
        generator?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of function.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isSyncGeneratorFunction`, `native.isAsyncFunction`, and/or `native.isSyncFunction` instead.
     */
    test(item: unknown): boolean;
    #private;
}
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
 * @param {boolean} [param1.generator] Whether a generator function.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGeneratorFunction`, `native.isSyncGeneratorFunction`, `native.isAsyncFunction`, and/or `native.isSyncFunction` instead.
 */
export function isFunction(item: unknown, { asynchronous, generator, ...aliases }?: {
    asynchronous?: boolean;
    generator?: boolean;
}): boolean;
//# sourceMappingURL=function.d.ts.map