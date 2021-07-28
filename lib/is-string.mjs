import checkOption from "./internal/check-option.mjs";
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from any ends of a string.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowWhitespace: true
	};
	if (typeof option.allowWhitespace !== "undefined") {
		if (typeof option.allowWhitespace !== "boolean") {
			throw new TypeError(`Argument \`option.allowWhitespace\` must be type of boolean!`);
		};
		runtime.allowWhitespace = option.allowWhitespace;
	};
	if (typeof item !== "string") {
		return false;
	};
	if (runtime.allowWhitespace === true) {
		item = item.trim();
	};
	return ((item.length > 0) ? true : null);
};
export default isString;
