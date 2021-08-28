import checkOption from "./internal/check-option.mjs";
import isString from "./is-string.mjs";
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @alias isStrUC
 * @description Determine item is type of upper case string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @param {(boolean|undefined)} [option.multipleLine] A multiple line string.
 * @param {(boolean|undefined)} [option.singleLine] A single line string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringUpperCase(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			upperCase: true
		}
	);
};
export default isStringUpperCase;
