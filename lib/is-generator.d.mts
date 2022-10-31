export default isGenerator;
/**
 * @function isGenerator
 * @description Determine item is type of generator or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] An asynchronous generator.
 * @returns {item is Generator} Determine result.
 */
declare function isGenerator(item: unknown, { asynchronous, ...aliases }?: {
    asynchronous?: boolean;
}): item is Generator<any, any, any>;
//# sourceMappingURL=is-generator.d.mts.map