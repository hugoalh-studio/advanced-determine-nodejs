import isObjectPair from "./is-object-pair.mjs";
import isString from "./is-string.mjs";
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @deprecated Replaced by `isString`.
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
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	return isString(
		item,
		{
			...option,
			multipleLine: true
		}
	);
};
export default isStringMultipleLine;
