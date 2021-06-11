/**
 * @function isWeakSet
 * @description Determine item is instance of weak set or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isWeakSet(item) {
	return (item instanceof WeakSet);
};
module.exports = isWeakSet;
