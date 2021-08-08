const isString = require("./is-string.js");
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item, option = {}) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item === item.toLowerCase());
};
module.exports = isStringLowerCase;
