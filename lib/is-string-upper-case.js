const isString = require("./is-string.js");
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @alias isStrUC
 * @description Determine item is type of upper case string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item === item.toUpperCase());
};
module.exports = isStringUpperCase;
