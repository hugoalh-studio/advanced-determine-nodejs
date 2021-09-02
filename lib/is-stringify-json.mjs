import isJSON from "./is-json.mjs";
import isObjectPair from "./is-object-pair.mjs";
import isString from "./is-string.mjs";
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
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the stringify JSON, and no any illegal namespace character(s) in the stringify JSON key.
 * @param {boolean} [option.strictKey=false] Ensure no any illegal namespace character(s) in the stringify JSON key.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	if (isObjectPair(option, undefined, true) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
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
export default isStringifyJSON;
