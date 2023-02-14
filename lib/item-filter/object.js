/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
	/**
	 * @constructor
	 * @description Initialize the filter of type of object to determine item.
	 */
	constructor() { }// Use to add description during create instance.
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of object.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		return (typeof item === "object" && !Array.isArray(item) && item !== null && !(item instanceof RegExp));
	}
}
export default ObjectItemFilter;
