const $isPlainObject = require("./internal/is-plain-object.js");
const isJSON = require("./is-json.js");
const isString = require("./is-string.js");
/**
 * @function isStringifyJSON
 * @alias isJSONStr
 * @alias isJSONStringified
 * @alias isJSONStringify
 * @alias isStringifiedJSON
 * @alias isStrJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the stringify JSON.
 * @param {boolean} [option.allowKeyAsterisk=true] Allow any asterisk character(s) (`*`) in the stringify JSON key.
 * @param {boolean} [option.allowKeyHyphen=true] Allow any hyphen character(s) (`-`) in the stringify JSON key.
 * @param {boolean} [option.allowKeyWhitespace=true] Allow any whitespace character(s) in the stringify JSON key.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the stringify JSON, and no any illegal namespace character(s) in the stringify JSON key.
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the stringify JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (isString(item) !== true) {
		return false;
	};
	let itemParse;
	try {
		itemParse = JSON.parse(item);
	} catch {
		return false;
	};
	return isJSON(itemParse, option);
};
module.exports = isStringifyJSON;
