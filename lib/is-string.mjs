import isPlainObjectInno from "./internal/is-plain-object-inno.mjs";
import isRegularExpression from "./is-regular-expression.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowNonASCIICharacters=true] Allow non-ASCII characters in the string.
 * @param {boolean} [option.allowWhitespaces=true] Allow whitespaces from both ends of a string.
 * @param {boolean} [option.lowerCase] A lower case string.
 * @param {boolean} [option.multipleLine] A multiple line string.
 * @param {RegExp} [option.pattern] Pattern.
 * @param {boolean} [option.singleLine] A single line string.
 * @param {boolean} [option.upperCase] An upper case string.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowNonASCIICharacters = undefinish(option.allowNonASCIICharacters, option.allowNonASCIICharacter, true);
	if (typeof option.allowNonASCIICharacters !== "boolean") {
		throw new TypeError(`Argument \`option.allowNonASCIICharacters\` must be type of boolean!`);
	};
	option.allowWhitespaces = undefinish(option.allowWhitespaces, option.allowWhitespace, true);
	if (typeof option.allowWhitespaces !== "boolean") {
		throw new TypeError(`Argument \`option.allowWhitespaces\` must be type of boolean!`);
	};
	if (typeof option.lowerCase !== "boolean" && typeof option.lowerCase !== "undefined") {
		throw new TypeError(`Argument \`option.lowerCase\` must be type of boolean or undefined!`);
	};
	option.multipleLine = undefinish(option.multipleLine, option.multiLine);
	if (typeof option.multipleLine !== "boolean" && typeof option.multipleLine !== "undefined") {
		throw new TypeError(`Argument \`option.multipleLine\` must be type of boolean or undefined!`);
	};
	if (isRegularExpression(option.pattern, { exactly: true, global: true }) !== true && typeof option.pattern !== "undefined") {
		throw new TypeError(`Argument \`option.pattern\` must be type of regular expression (exact(ly) and global) or undefined!`);
	};
	if (typeof option.singleLine !== "boolean" && typeof option.singleLine !== "undefined") {
		throw new TypeError(`Argument \`option.singleLine\` must be type of boolean or undefined!`);
	};
	if (typeof option.upperCase !== "boolean" && typeof option.upperCase !== "undefined") {
		throw new TypeError(`Argument \`option.upperCase\` must be type of boolean or undefined!`);
	};
	if (typeof item !== "string") {
		return false;
	};
	if (option.pattern instanceof RegExp) {
		return ((
			item.match(option.pattern) ||
			[]
		).length === 1);
	};
	if (
		((
			option.lowerCase === true ||
			option.upperCase === false
		) && item !== item.toLowerCase()) ||
		((
			option.upperCase === true ||
			option.lowerCase === false
		) && item !== item.toUpperCase()) ||
		((
			option.multipleLine === true ||
			option.singleLine === false
		) && item.search(/[\n\r]/giu) === -1) ||
		((
			option.singleLine === true ||
			option.multipleLine === false
		) && item.search(/[\n\r]/giu) !== -1)
	) {
		return false;
	};
	if (option.allowNonASCIICharacters === false) {
		for (let character of item) {
			if (character.charCodeAt(0) > 127) {
				return false;
			};
		};
	};
	if (option.allowWhitespaces === false) {
		item = item.trim();
	};
	return ((item.length > 0) ? true : null);
};
export default isString;
