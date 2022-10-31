import { warnConflictedArguments } from "./internal/event.mjs";
import $isNumber from "./internal/is-number.mjs";
import undefinish from "@hugoalh/undefinish";
const newLineRegExp = /[\n\r]/gu;
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty] Whether to allow an empty string.
 * @param {boolean} [param1.ascii] An ASCII string.
 * @param {boolean} [param1.lowerCase] A lower case string.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the string.
 * @param {number} [param1.minimumLength=0] Minimum length of the string.
 * @param {boolean} [param1.multipleLine] A multiple lines string.
 * @param {RegExp} [param1.pattern] A pattern match string.
 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
 * @param {boolean} [param1.singleLine] A single line string.
 * @param {boolean} [param1.upperCase] An upper case string.
 * @returns {item is string} Determine result.
 */
function isString(item, {
	allowEmpty = false,
	ascii,
	lowerCase,
	maximumLength,
	minimumLength,
	multipleLine,
	pattern,
	preTrim = false,
	singleLine,
	upperCase,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean" && typeof allowEmpty !== "undefined") {
		throw new TypeError(`Argument \`empty\` must be type of boolean or undefined!`);
	}
	if (typeof ascii !== "boolean" && typeof ascii !== "undefined") {
		throw new TypeError(`Argument \`ascii\` must be type of boolean or undefined!`);
	}
	if (typeof lowerCase !== "boolean" && typeof lowerCase !== "undefined") {
		throw new TypeError(`Argument \`lowerCase\` must be type of boolean or undefined!`);
	}
	maximumLength = undefinish(maximumLength, aliases.maxLength, aliases.maximumCharacters, aliases.maxCharacters, Infinity);
	if (maximumLength !== Infinity && !$isNumber(maximumLength, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumLength\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
	}
	minimumLength = undefinish(minimumLength, aliases.minLength, aliases.minimumCharacters, aliases.minCharacters, 0);
	if (!$isNumber(minimumLength, {
		integer: true,
		maximum: maximumLength,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumLength\` must be type of number (integer, positive, and safe) and <= ${maximumLength}!`);
	}
	multipleLine = undefinish(multipleLine, aliases.multipleLines, aliases.multiLine, aliases.multiLines, aliases.multiline, aliases.multilines);
	if (typeof multipleLine !== "boolean" && typeof multipleLine !== "undefined") {
		throw new TypeError(`Argument \`multipleLine\` must be type of boolean or undefined!`);
	}
	if (!(pattern instanceof RegExp) && typeof pattern !== "undefined") {
		throw new TypeError(`Argument \`pattern\` must be type of regular expression or undefined!`);
	}
	if (typeof preTrim !== "boolean") {
		throw new TypeError(`Argument \`preTrim\` must be type of boolean!`);
	}
	if (typeof singleLine !== "boolean" && typeof singleLine !== "undefined") {
		throw new TypeError(`Argument \`singleLine\` must be type of boolean or undefined!`);
	}
	if (typeof upperCase !== "boolean" && typeof upperCase !== "undefined") {
		throw new TypeError(`Argument \`upperCase\` must be type of boolean or undefined!`);
	}
	if (allowEmpty) {
		if (minimumLength === 1) {
			minimumLength = 0;
		} else {
			warnConflictedArguments("minimumLength", "allowEmpty");
		}
	}
	if (typeof item !== "string") {
		return false;
	}
	let itemRaw = preTrim ? item.trim() : item;
	if (typeof ascii === "boolean") {
		for (let character of itemRaw) {
			let charCode = character.charCodeAt(0);
			if (
				(ascii === false && charCode < 128) ||
				(ascii === true && charCode > 127)
			) {
				return false;
			}
		}
	}
	if (
		maximumLength < itemRaw.length ||
		itemRaw.length < minimumLength ||
		(pattern instanceof RegExp && itemRaw.search(pattern) === -1) ||
		((
			lowerCase === true ||
			upperCase === false
		) && itemRaw !== itemRaw.toLowerCase()) ||
		((
			upperCase === true ||
			lowerCase === false
		) && itemRaw !== itemRaw.toUpperCase()) ||
		((
			multipleLine === true ||
			singleLine === false
		) && itemRaw.search(newLineRegExp) === -1) ||
		((
			singleLine === true ||
			multipleLine === false
		) && itemRaw.search(newLineRegExp) !== -1)
	) {
		return false;
	}
	return true;
}
export default isString;
