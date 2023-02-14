import GeneratorItemFilter from "../item-filter/generator.js";
/**
 * @function isGenerator
 * @description Determine item with the filter of type of generator.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {boolean} Determine result.
 */
function isGenerator(item, {
	asynchronous,
	...aliases
} = {}) {
	return new GeneratorItemFilter({
		asynchronous,
		...aliases
	}).test(item);
}
export default isGenerator;
