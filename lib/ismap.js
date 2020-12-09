/*==================
[NodeJS] Advanced Determine - Is Map
	Language:
		NodeJS/14.15.0
==================*/
/**
 * @function isMap
 * @description Determine item is instance of map or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isMap(item) {
	return (item instanceof Map);
};
module.exports = isMap;
