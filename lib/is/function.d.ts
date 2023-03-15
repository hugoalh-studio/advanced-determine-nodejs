/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
 * @param {boolean} [param1.generator] Whether a generator function.
 * @returns {boolean} Determine result.
 */
export function isFunction(item: unknown, { asynchronous, generator, ...aliases }?: {
    asynchronous?: boolean;
    generator?: boolean;
}): boolean;
//# sourceMappingURL=function.d.ts.map