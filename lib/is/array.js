import ArrayItemFilter from "../item-filter/array.js";
/**
 * @function isArray
 * @description Determine item with the filter of type of array.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {boolean} Determine result.
 */
function isArray(item, {
	allowEmpty = false,
	maximumLength,
	minimumLength,
	strict = false,
	unique = false,
	...aliases
} = {}) {
	return new ArrayItemFilter({
		allowEmpty,
		maximumLength,
		minimumLength,
		strict,
		unique,
		...aliases
	}).test(item);
}
export default isArray;
