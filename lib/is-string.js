const isNumber = require("./is-number.js");
const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowNonASCIICharacters=true] Allow non-ASCII characters in the string.
 * @param {boolean} [option.allowWhitespaceCharacters=true] Allow whitespace characters from both ends of a string.
 * @param {boolean} [option.empty] An empty string.
 * @param {boolean} [option.lowerCase] A lower case string.
 * @param {number} [option.maximumLength=Infinity] Maximum length of the string.
 * @param {number} [option.minimumLength=0] Minimum length of the string.
 * @param {boolean} [option.multipleLine] A multiple line string.
 * @param {RegExp} [option.pattern] Pattern.
 * @param {boolean} [option.singleLine] A single line string.
 * @param {boolean} [option.upperCase] An upper case string.
 * @returns {boolean} Determine result.
 */
function isString(item, option = {}) {
	if (isPlainObjectInno(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.allowNonASCIICharacters = undefinish(option.allowNonASCIICharacters, true);
	if (typeof option.allowNonASCIICharacters !== "boolean") {
		throw new TypeError(`Argument \`option.allowNonASCIICharacters\` must be type of boolean!`);
	};
	option.allowWhitespaceCharacters = undefinish(option.allowWhitespaceCharacters, option.allowWhitespaces, true);
	if (typeof option.allowWhitespaceCharacters !== "boolean") {
		throw new TypeError(`Argument \`option.allowWhitespaceCharacters\` must be type of boolean!`);
	};
	if (typeof option.empty !== "boolean" && typeof option.empty !== "undefined") {
		throw new TypeError(`Argument \`option.empty\` must be type of boolean or undefined!`);
	};
	if (typeof option.lowerCase !== "boolean" && typeof option.lowerCase !== "undefined") {
		throw new TypeError(`Argument \`option.lowerCase\` must be type of boolean or undefined!`);
	};
	option.maximumLength = undefinish(option.maximumLength, option.maxLength, option.maximumCharacters, option.maxCharacters, Infinity);
	if (option.maximumLength !== Infinity && !isNumber(option.maximumLength, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.maximumLength\` must be \`Infinity\` or type of number (finite, integer, positive, and safe)!`);
	};
	option.minimumLength = undefinish(option.minimumLength, option.minLength, option.minimumCharacters, option.minCharacters, 0);
	if (!isNumber(option.minimumLength, { finite: true, integer: true, positive: true, safe: true })) {
		throw new TypeError(`Argument \`option.minimumLength\` must be type of number (finite, integer, positive, and safe)!`);
	};
	if (option.minimumLength > option.maximumLength) {
		throw new RangeError(`Illogical condition, argument \`option.minimumLength\`'s value must be less than or equal to argument \`option.maximumLength\`'s value!`);
	};
	option.multipleLine = undefinish(option.multipleLine, option.multiLine, option.multiline);
	if (typeof option.multipleLine !== "boolean" && typeof option.multipleLine !== "undefined") {
		throw new TypeError(`Argument \`option.multipleLine\` must be type of boolean or undefined!`);
	};
	if (!(option.pattern instanceof RegExp) && typeof option.pattern !== "undefined") {
		throw new TypeError(`Argument \`option.pattern\` must be type of regular expression or undefined!`);
	};
	if (typeof option.singleLine !== "boolean" && typeof option.singleLine !== "undefined") {
		throw new TypeError(`Argument \`option.singleLine\` must be type of boolean or undefined!`);
	};
	if (typeof option.upperCase !== "boolean" && typeof option.upperCase !== "undefined") {
		throw new TypeError(`Argument \`option.upperCase\` must be type of boolean or undefined!`);
	};
	if (option.empty === false) {
		option.maximumLength = Infinity;
		option.minimumLength = 1;
	} else if (option.empty === true) {
		option.maximumLength = 0;
		option.minimumLength = 0;
	};
	if (typeof item !== "string") {
		return false;
	};
	if (!option.allowWhitespaceCharacters) {
		item = item.trim();
	};
	if (!option.allowNonASCIICharacters) {
		for (let character of item) {
			if (character.charCodeAt(0) > 127) {
				return false;
			};
		};
	};
	let itemLength = item.length;
	if (
		option.maximumLength < itemLength ||
		itemLength < option.minimumLength ||
		(option.pattern instanceof RegExp && item.search(option.pattern) === -1) ||
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
		) && item.search(/[\n\r]/gu) === -1) ||
		((
			option.singleLine === true ||
			option.multipleLine === false
		) && item.search(/[\n\r]/gu) !== -1)
	) {
		return false;
	};
	return true;
};
module.exports = isString;
