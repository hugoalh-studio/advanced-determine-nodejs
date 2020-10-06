/*==================
[NodeJS] Advanced Determine - Is Weak Map
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @function isWeakMap
 * @description Determine item is instance of weak map or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isWeakMap(item) {
	return (
		item instanceof WeakMap
	);
};
module.exports = isWeakMap;
