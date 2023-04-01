/**
 * @class GeneratorItemFilter
 * @description Determine item with the filter of type of generator.
 */
export class GeneratorItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of generator.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { asynchronous, ...aliases }?: {
        asynchronous?: boolean;
    }): boolean;
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
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {boolean} Determine result.
 */
export function isGenerator(item: unknown, { asynchronous, ...aliases }?: {
    asynchronous?: boolean;
}): boolean;
//# sourceMappingURL=generator.d.ts.map