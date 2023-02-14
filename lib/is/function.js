import FunctionItemFilter from "../item-filter/function.js";
/**
 * @function isFunction
 * @description Determine item with the filter of type of function.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous function.
 * @param {boolean} [param1.generator] Whether a generator function.
 * @returns {boolean} Determine result.
 */
function isFunction(item, {
	asynchronous,
	generator,
	...aliases
} = {}) {
	return new FunctionItemFilter({
		asynchronous,
		generator,
		...aliases
	}).test(item);
}
export default isFunction;
