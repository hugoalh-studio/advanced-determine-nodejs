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
