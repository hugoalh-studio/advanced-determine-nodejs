/**
 * Determine whether the item is an asynchronous generator. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is AsyncGenerator<unknown, unknown, unknown>} Determine result.
 */
export declare function isAsyncGenerator(item: unknown): item is AsyncGenerator<unknown, unknown, unknown>;
/**
 * Determine whether the item is a synchronous generator. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is Generator<unknown, unknown, unknown>} Determine result.
 */
export declare function isSyncGenerator(item: unknown): item is Generator<unknown, unknown, unknown>;
export { isAsyncGenerator as isAsynchronousGenerator, isSyncGenerator as isSynchronousGenerator };
//# sourceMappingURL=generator.d.ts.map