import checkOption from "./internal/check-option.mjs";
import isString from "./is-string.mjs";
/**
 * @function isStringASCII
 * @alias isStrASCII
 * @description Determine item is type of ASCII string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.allowCase="both"] Allow only lower case, upper case, or both.
 * @param {string} [option.allowLine="both"] Allow only single line, multiple line, or both.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringASCII(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			allowNonASCIICharacter: false
		}
	);
};
export default isStringASCII;
