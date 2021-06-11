/**
 * @function isWeakMap
 * @alias isMapWeak
 * @description Determine item is instance of weak map or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isWeakMap(item) {
	return (item instanceof WeakMap);
};
module.exports = isWeakMap;
