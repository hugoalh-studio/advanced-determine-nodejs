/**
 * @function isAsyncFunction
 * @description Whether the item is an asynchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Promise<unknown>} Determine result.
 */
export function isAsyncFunction(item: unknown): item is (...parameters: unknown[]) => Promise<unknown>;
/**
 * @function isAsyncGeneratorFunction
 * @description Whether the item is an asynchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is AsyncGeneratorFunction} Determine result.
 */
export function isAsyncGeneratorFunction(item: unknown): item is AsyncGeneratorFunction;
/**
 * @function isSyncFunction
 * @description Whether the item is a synchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => unknown} Determine result.
 */
export function isSyncFunction(item: unknown): item is (...parameters: unknown[]) => unknown;
/**
 * @function isSyncGeneratorFunction
 * @description Whether the item is a synchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is GeneratorFunction} Determine result.
 */
export function isSyncGeneratorFunction(item: unknown): item is GeneratorFunction;
export { isAsyncFunction as isAsynchronousFunction, isAsyncGeneratorFunction as isAsynchronousGeneratorFunction, isSyncFunction as isSynchronousFunction, isSyncGeneratorFunction as isSynchronousGeneratorFunction };
