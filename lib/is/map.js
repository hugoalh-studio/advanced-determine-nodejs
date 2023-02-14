import MapItemFilter from "../item-filter/map.js";
/**
 * @function isMap
 * @description Determine item with the filter of type of map.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty map.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the map.
 * @param {number} [param1.minimumSize=1] Minimum size of the map.
 * @returns {boolean} Determine result.
 */
function isMap(item, {
	allowEmpty = false,
	maximumSize,
	minimumSize,
	...aliases
} = {}) {
	return new MapItemFilter({
		allowEmpty,
		maximumSize,
		minimumSize,
		...aliases
	}).test(item);
}
export default isMap;
