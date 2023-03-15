import { ObjectItemFilter } from "../item-filter/object.js";
/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isObject(item) {
	return new ObjectItemFilter().test(item);
}
export {
	isObject
};
