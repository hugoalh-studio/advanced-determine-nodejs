export default GeneratorItemFilter;
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
declare class GeneratorItemFilter {
    /**
     * @constructor
     * @description Initialize the filter of type of generator to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.asynchronous] Whether an asynchronous generator.
     */
    constructor({ asynchronous, ...aliases }?: {
        asynchronous?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=generator.d.ts.map