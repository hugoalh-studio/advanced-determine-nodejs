export default isFunction;
/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @template {boolean} TA
 * @template {boolean} TG
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {TA} [param1.asynchronous] Whether an asynchronous function.
 * @param {TG} [param1.generator] Whether a generator function.
 * @returns {item is (TG extends true ? (TA extends true ? AsyncGeneratorFunction : GeneratorFunction) : Function )} Determine result.
 */
declare function isFunction<TA extends boolean, TG extends boolean>(item: unknown, { asynchronous, generator, ...aliases }?: {
    asynchronous?: TA;
    generator?: TG;
}): item is TG extends true ? TA extends true ? AsyncGeneratorFunction : GeneratorFunction : Function;
//# sourceMappingURL=is-function.d.mts.map