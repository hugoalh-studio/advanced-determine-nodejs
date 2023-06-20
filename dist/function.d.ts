/**
 * @function isAsyncFunction
 * @description Whether the item is an asynchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Promise<unknown>} Determine result.
 */
declare function isAsyncFunction(item: unknown): item is (...parameters: unknown[]) => Promise<unknown>;
/**
 * @function isAsyncGeneratorFunction
 * @description Whether the item is an asynchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is AsyncGeneratorFunction} Determine result.
 */
declare function isAsyncGeneratorFunction(item: unknown): item is AsyncGeneratorFunction;
/**
 * @function isSyncFunction
 * @description Whether the item is a synchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Exclude<unknown, Promise<unknown>>} Determine result.
 */
declare function isSyncFunction(item: unknown): item is (...parameters: unknown[]) => Exclude<unknown, Promise<unknown>>;
/**
 * @function isSyncGeneratorFunction
 * @description Whether the item is a synchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is GeneratorFunction} Determine result.
 */
declare function isSyncGeneratorFunction(item: unknown): item is GeneratorFunction;
export { isAsyncFunction, isAsyncFunction as isAsynchronousFunction, isAsyncGeneratorFunction, isAsyncGeneratorFunction as isAsynchronousGeneratorFunction, isSyncFunction, isSyncFunction as isSynchronousFunction, isSyncGeneratorFunction, isSyncGeneratorFunction as isSynchronousGeneratorFunction };
//# sourceMappingURL=function.d.ts.map