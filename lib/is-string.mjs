import isObjectPairInternal from "./internal/is-object-pair.mjs";
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
 * @param {RegExp} [option.pattern] Pattern.
 * @param {boolean} [option.singleLine] A single line string.
 * @param {boolean} [option.upperCase] A upper case string.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	if (isObjectPairInternal(option) === false) {
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
	if (typeof option.lowerCase !== "boolean" && typeof option.lowerCase !== "undefined") {
		throw new TypeError(`Argument \`option.lowerCase\` must be type of boolean or undefined!`);
	};
	if (typeof option.multipleLine !== "boolean" && typeof option.multipleLine !== "undefined") {
		throw new TypeError(`Argument \`option.multipleLine\` must be type of boolean or undefined!`);
	};
	if (!(option.pattern instanceof RegExp && option.pattern.global === true && option.pattern.source.startsWith("^") === true && option.pattern.source.endsWith("$") === true) && typeof option.pattern !== "undefined") {
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
	if (option.allowNonASCIICharacter === false) {
		let itemLength = item.length;
		for (let index = 0; index < itemLength; index++) {
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
