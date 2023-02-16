export default FunctionItemFilter;
/**
 * @class FunctionItemFilter
 * @description Determine item with the filter of type of function.
 */
declare class FunctionItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of function to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.asynchronous] Whether an asynchronous function.
     * @param {boolean} [param0.generator] Whether a generator function.
     * @returns {boolean} Determine result.
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
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=function.d.ts.map