const isString = require("./is-string.js");
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item === item.toLowerCase());
};
module.exports = isStringLowerCase;
