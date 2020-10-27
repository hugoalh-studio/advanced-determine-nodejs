/*==================
[NodeJS] Advanced Determine - Is Array
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @function isArray
 * @alias isArr
 * @description Determine item is type of array or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item) {
	if (Array.isArray(item) === false) {
		return false;
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isArray;
