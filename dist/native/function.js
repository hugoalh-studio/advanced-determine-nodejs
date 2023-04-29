import { types } from "node:util";
/**
 * @function isAsyncFunction
 * @description Whether the item is an asynchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => Promise<unknown>} Determine result.
 */
function isAsyncFunction(item) {
    return (types.isAsyncFunction(item) && !types.isGeneratorFunction(item) && Object.prototype.toString.call(item) === "[object AsyncFunction]");
}
/**
 * @function isAsyncGeneratorFunction
 * @description Whether the item is an asynchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is AsyncGeneratorFunction} Determine result.
 */
function isAsyncGeneratorFunction(item) {
    return (types.isAsyncFunction(item) && types.isGeneratorFunction(item) && Object.prototype.toString.call(item) === "[object AsyncGeneratorFunction]");
}
/**
 * @function isSyncFunction
 * @description Whether the item is a synchronous function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is (...parameters: unknown[]) => unknown} Determine result.
 */
function isSyncFunction(item) {
    return (typeof item === "function" && !types.isAsyncFunction(item) && !types.isGeneratorFunction(item) && Object.prototype.toString.call(item) === "[object Function]");
}
/**
 * @function isSyncGeneratorFunction
 * @description Whether the item is a synchronous generator function. This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {item is GeneratorFunction} Determine result.
 */
function isSyncGeneratorFunction(item) {
    return (!types.isAsyncFunction(item) && types.isGeneratorFunction(item) && Object.prototype.toString.call(item) === "[object GeneratorFunction]");
}
export { isAsyncFunction, isAsyncFunction as isAsynchronousFunction, isAsyncGeneratorFunction, isAsyncGeneratorFunction as isAsynchronousGeneratorFunction, isSyncFunction, isSyncFunction as isSynchronousFunction, isSyncGeneratorFunction, isSyncGeneratorFunction as isSynchronousGeneratorFunction };
