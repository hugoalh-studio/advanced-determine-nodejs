export default isGenerator;
/**
 * @function isGenerator
 * @description Determine item is type of generator or not.
 * @template {boolean | undefined} T
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {T} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {item is (T extends true ? AsyncGenerator : Generator)} Determine result.
 * @throws {TypeError} Argument `asynchronous` is not type of boolean or undefined.
 */
declare function isGenerator<T extends boolean>(item: unknown, { asynchronous, ...aliases }?: {
    asynchronous?: T;
}): item is T extends true ? AsyncGenerator<any, any, any> : Generator<any, any, any>;
//# sourceMappingURL=is-generator.d.mts.map