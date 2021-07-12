/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item) {
	if (typeof item !== "string") {
		return false;
	};
	return ((item.length > 0) ? true : null);
};
module.exports = isString;
