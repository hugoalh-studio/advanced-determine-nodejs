/*==================
[NodeJS] Advanced Determine - Is Object
	Language:
		NodeJS 14
==================*/
/**
 * @function isObject
 * @alias isObj
 * @description Determine item is type of object or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isObject(item) {
	if (
		typeof item != "object" ||
		item === null
	) {
		return false;
	};
	return true;
};
module.exports = isObject;
