import isString from "./is-string.mjs";
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from any ends of a string.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item, option = {}) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/giu) === -1);
};
export default isStringSingleLine;
