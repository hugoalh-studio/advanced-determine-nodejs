const checkOption = require("./internal/check-option.js");
const isString = require("./is-string.js");
/**
 * @function isStringASCII
 * @alias isStrASCII
 * @description Determine item is type of ASCII string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @param {(boolean|undefined)} [option.lowerCase] A lower case string.
 * @param {(boolean|undefined)} [option.multipleLine] A multiple line string.
 * @param {(boolean|undefined)} [option.singleLine] A single line string.
 * @param {(boolean|undefined)} [option.upperCase] A upper case string.
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
module.exports = isStringASCII;
