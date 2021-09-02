import isObjectPair from "./is-object-pair.mjs";
import isString from "./is-string.mjs";
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
	if (isObjectPair(option, undefined, true) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	return isString(
		item,
		{
			...option,
			allowNonASCIICharacter: false
		}
	);
};
export default isStringASCII;
