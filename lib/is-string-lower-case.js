const checkOption = require("./internal/check-option.js");
const isString = require("./is-string.js");
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @param {(boolean|undefined)} [option.multipleLine] A multiple line string.
 * @param {(boolean|undefined)} [option.singleLine] A single line string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringLowerCase(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			lowerCase: true
		}
	);
};
module.exports = isStringLowerCase;
