interface GeneratorItemFilterOptions {
    /**
     * @property asynchronous
     * @description Whether an asynchronous generator.
     * @default undefined
     */
    asynchronous?: boolean;
    /** @alias asynchronous */ async?: boolean;
}
/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
declare class GeneratorItemFilter {
    #private;
    /**
     * @constructor
     * @description Initialize the filter of type of generator to determine item.
     * @param {GeneratorItemFilterOptions} [options={}] Options.
     */
    constructor(options?: GeneratorItemFilterOptions);
    /**
     * @method test
     * @description Determine item with the configured filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    /**
     * @static test
     * @description Determine item with the filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @param {GeneratorItemFilterOptions} [options={}] Options.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, options?: GeneratorItemFilterOptions): boolean;
}
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {GeneratorItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
declare function isGenerator(item: unknown, options?: GeneratorItemFilterOptions): boolean;
export { GeneratorItemFilter, isGenerator, type GeneratorItemFilterOptions };
//# sourceMappingURL=generator.d.ts.map