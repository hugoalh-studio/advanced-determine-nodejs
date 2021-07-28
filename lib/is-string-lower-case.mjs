import isString from "./is-string.mjs";
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {*} item Item that need to determine.
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
export default isStringLowerCase;
