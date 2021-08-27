const checkOption = require("./internal/check-option.js");
const isString = require("./is-string.js");
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @description Determine item is type of multiple line string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.allowCase="both"] Allow only lower case, upper case, or both.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringMultipleLine(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			allowLine: "multiple"
		}
	);
};
module.exports = isStringMultipleLine;
