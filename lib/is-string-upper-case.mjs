import isString from "./is-string.mjs";
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @alias isStrUC
 * @description Determine item is type of upper case string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item, option = {}) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item === item.toUpperCase());
};
export default isStringUpperCase;
