/**
 * Determine whether the item is an asynchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Promise<unknown>} Determine result.
 */
export declare function isAsyncFunction(item: unknown): item is (...parameters: unknown[]) => Promise<unknown>;
/**
 * Determine whether the item is an asynchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is AsyncGeneratorFunction} Determine result.
 */
export declare function isAsyncGeneratorFunction(item: unknown): item is AsyncGeneratorFunction;
/**
 * Determine whether the item is a synchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Exclude<unknown, Promise<unknown>>} Determine result.
 */
export declare function isSyncFunction(item: unknown): item is (...parameters: unknown[]) => Exclude<unknown, Promise<unknown>>;
/**
 * Determine whether the item is a synchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is GeneratorFunction} Determine result.
 */
export declare function isSyncGeneratorFunction(item: unknown): item is GeneratorFunction;
export { isAsyncFunction as isAsynchronousFunction, isAsyncGeneratorFunction as isAsynchronousGeneratorFunction, isSyncFunction as isSynchronousFunction, isSyncGeneratorFunction as isSynchronousGeneratorFunction };
//# sourceMappingURL=function.d.ts.map