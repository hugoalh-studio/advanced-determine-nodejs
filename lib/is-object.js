/**
 * @function isObject
 * @alias isObj
 * @description Determine item is type of object or not.
 * @param {unknown} item Item that need to determine.
 * @returns {item is object} Determine result.
 */
function isObject(item) {
	return (typeof item === "object" && !Array.isArray(item) && item !== null && !(item instanceof RegExp));
}
module.exports = isObject;
