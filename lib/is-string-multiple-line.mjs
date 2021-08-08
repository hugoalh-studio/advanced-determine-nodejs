import isString from "./is-string.mjs";
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @description Determine item is type of multiple line string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item, option = {}) {
	if (isString(item, option) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/giu) !== -1);
};
export default isStringMultipleLine;
