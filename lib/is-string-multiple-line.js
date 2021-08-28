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
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @param {(boolean|undefined)} [option.lowerCase] A lower case string.
 * @param {(boolean|undefined)} [option.upperCase] A upper case string.
 * @returns {(boolean|null)} Determine result.
 */
function isStringMultipleLine(item, option = {}) {
	checkOption(option);
	return isString(
		item,
		{
			...option,
			multipleLine: true
		}
	);
};
module.exports = isStringMultipleLine;
