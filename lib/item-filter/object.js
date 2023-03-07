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
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		return (typeof item === "object" && !Array.isArray(item) && item !== null && !(item instanceof RegExp));
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of object.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	static test(item) {
		return new this().test(item);
	}
}
export default ObjectItemFilter;
