const checkOption = require("./internal/check-option.js"),
	isJSON = require("./is-json.js"),
	isString = require("./is-string.js");
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @alias isStringifiedJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the stringify JSON.
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the stringify JSON key.
 * @param {boolean} [option.allowKeyStar=true] Allow any star character(s) (`*`) in the stringify JSON key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the stringify JSON key.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strict=false] Use strict to not allow type of array as the root of the stringify JSON; and not allow any non-letter non-digit non-underscore character(s) in the stringify JSON key.
 * @param {boolean} [option.strictKey=false] Use strict key to not allow any non-letter non-digit non-underscore character(s) in the stringify JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	checkOption(option);
	if (isString(item) !== true) {
		return false;
	};
	let itemParse;
	try {
		itemParse = JSON.parse(item);
	} catch (error) {
		return false;
	};
	return isJSON(itemParse, option);
};
module.exports = isStringifyJSON;
