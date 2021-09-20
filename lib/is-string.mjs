import isObjectPair from "./is-object-pair.mjs";
import repattern from "@hugoalh/repattern";
/**
 * @private
 * @function isStringPattern
 * @param {string} name
 * @param {string} item
 * @returns {boolean}
 */
function isStringPattern(name, item) {
	try {
		return (item.search(repattern(name, "eg")) === 0);
	} catch {
		throw new Error(`Argument \`option.pattern\`'s value is not in the list!`);
	};
};
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @param {boolean} [option.lowerCase] A lower case string.
 * @param {boolean} [option.multipleLine] A multiple line string.
 * @param {string} [option.pattern] Pattern.
 * @param {boolean} [option.singleLine] A single line string.
 * @param {boolean} [option.upperCase] A upper case string.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	option.allowNonASCIICharacter = ((typeof option.allowNonASCIICharacter === "undefined") ? true : option.allowNonASCIICharacter);
	if (typeof option.allowNonASCIICharacter !== "boolean") {
		throw new TypeError(`Argument \`option.allowNonASCIICharacter\` must be type of boolean!`);
	};
	option.allowWhitespace = ((typeof option.allowWhitespace === "undefined") ? true : option.allowWhitespace);
	if (typeof option.allowWhitespace !== "boolean") {
		throw new TypeError(`Argument \`option.allowWhitespace\` must be type of boolean!`);
	};
	if (typeof option.lowerCase !== "undefined" && typeof option.lowerCase !== "boolean") {
		throw new TypeError(`Argument \`option.lowerCase\` must be type of boolean or undefined!`);
	};
	if (typeof option.multipleLine !== "undefined" && typeof option.multipleLine !== "boolean") {
		throw new TypeError(`Argument \`option.multipleLine\` must be type of boolean or undefined!`);
	};
	if (typeof option.pattern !== "undefined" && typeof option.pattern !== "string") {
		throw new TypeError(`Argument \`option.pattern\` must be type of string or undefined!`);
	};
	if (typeof option.singleLine !== "undefined" && typeof option.singleLine !== "boolean") {
		throw new TypeError(`Argument \`option.singleLine\` must be type of boolean or undefined!`);
	};
	if (typeof option.upperCase !== "undefined" && typeof option.upperCase !== "boolean") {
		throw new TypeError(`Argument \`option.upperCase\` must be type of boolean or undefined!`);
	};
	if (typeof item !== "string") {
		return false;
	};
	if (typeof option.pattern === "string") {
		return isStringPattern(option.pattern, item);
	};
	if (
		((option.lowerCase === true || option.upperCase === false) && item !== item.toLowerCase()) ||
		((option.upperCase === true || option.lowerCase === false) && item !== item.toUpperCase()) ||
		((option.multipleLine === true || option.singleLine === false) && item.search(/[\n\r]/giu) === -1) ||
		((option.singleLine === true || option.multipleLine === false) && item.search(/[\n\r]/giu) !== -1)
	) {
		return false;
	};
	if (option.allowNonASCIICharacter === false) {
		for (let index = 0; index < item.length; index++) {
			if (item.charCodeAt(index) > 127) {
				return false;
			};
		};
	};
	if (option.allowWhitespace === false) {
		item = item.trim();
	};
	return ((item.length > 0) ? true : null);
};
export default isString;
