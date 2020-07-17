/*==================
[NodeJS] Advanced Determine - Is String
	Language:
		NodeJS 14
==================*/
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item) {
	if (typeof item != "string") {
		return false;
	};
	if (item.length == 0) {
		return null;
	};
	return true;
};
module.exports = isString;
