const checkOption = require("./internal/check-option.js");
const isString = require("./is-string.js");
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {any} item Item that need to determine.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.allowCase="both"] Allow only lower case, upper case, or both.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringSingleLine(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			allowLine: "single"
		}
	);
};
module.exports = isStringSingleLine;
