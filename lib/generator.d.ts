/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
export class GeneratorItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    static test(item: unknown, { asynchronous, ...aliases }?: {
        asynchronous?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of generator to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.asynchronous] Whether an asynchronous generator.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    constructor({ asynchronous, ...aliases }?: {
        asynchronous?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
     */
    test(item: unknown): boolean;
    #private;
}
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {boolean} Determine result.
 * @deprecated This cannot return correct type on TypeScript, use functions `native.isAsyncGenerator`, and/or `native.isSyncGenerator` instead.
 */
export function isGenerator(item: unknown, { asynchronous, ...aliases }?: {
    asynchronous?: boolean;
}): boolean;
