/**
 * @private
 * @function isArrayInternal
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isArrayInternal(item) {
	if (Array.isArray(item) === false) {
		return false;
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isArrayInternal;
