export default isGenerator;
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {boolean} Determine result.
 */
declare function isGenerator(item: unknown, { asynchronous, ...aliases }?: {
    asynchronous?: boolean;
}): boolean;
//# sourceMappingURL=generator.d.ts.map