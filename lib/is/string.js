import { StringItemFilter } from "../item-filter/string.js";
/**
 * @function isString
 * @description Determine item with the filter of type of string.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty string.
 * @param {boolean} [param1.ascii] Whether an ASCII string.
 * @param {boolean} [param1.lowerCase] Whether a lower case string.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the string.
 * @param {number} [param1.minimumLength=1] Minimum length of the string.
 * @param {boolean} [param1.multipleLine] Whether a multiple lines string.
 * @param {RegExp} [param1.pattern] Whether a pattern matchable string.
 * @param {boolean} [param1.preTrim=false] Whether to trim the string internally before determine.
 * @param {boolean} [param1.singleLine] Whether a single line string.
 * @param {boolean} [param1.upperCase] Whether an upper case string.
 * @returns {boolean} Determine result.
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
	return new StringItemFilter({
		allowEmpty,
		ascii,
		lowerCase,
		maximumLength,
		minimumLength,
		multipleLine,
		pattern,
		preTrim,
		singleLine,
		upperCase,
		...aliases
	}).test(item);
}
export {
	isString
};
