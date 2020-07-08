/*==================
[NodeJS] Advanced Determine - Is Array
	Language:
		NodeJS 14
==================*/
/**
 * @function isArray
 * @alias isArr
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isArray(item) {
	if (Array.isArray(item) == false) {
		return false;
	};
	if (item.length == 0) {
		return null;
	};
	return true;
};
module.exports = isArray;
