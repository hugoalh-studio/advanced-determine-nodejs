import checkOption from "./internal/check-option.mjs";
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.allowCase="both"] Allow only lower case, upper case, or both.
 * @param {string} [option.allowLine="both"] Allow only single line, multiple line, or both.
 * @param {boolean} [option.allowNonASCIICharacter=true] Allow non-ASCII character(s) in the string.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowCase: "both",
		allowLine: "both",
		allowNonASCIICharacter: true,
		allowWhitespace: true
	};
	if (typeof option.allowCase !== "undefined") {
		if (typeof option.allowCase !== "string") {
			throw new TypeError(`Argument \`option.allowCase\` must be type of string!`);
		};
		runtime.allowCase = option.allowCase;
	};
	if (typeof option.allowLine !== "undefined") {
		if (typeof option.allowLine !== "string") {
			throw new TypeError(`Argument \`option.allowLine\` must be type of string!`);
		};
		runtime.allowLine = option.allowLine;
	};
	if (typeof option.allowNonASCIICharacter !== "undefined") {
		if (typeof option.allowNonASCIICharacter !== "boolean") {
			throw new TypeError(`Argument \`option.allowNonASCIICharacter\` must be type of boolean!`);
		};
		runtime.allowNonASCIICharacter = option.allowNonASCIICharacter;
	};
	if (typeof option.allowWhitespace !== "undefined") {
		if (typeof option.allowWhitespace !== "boolean") {
			throw new TypeError(`Argument \`option.allowWhitespace\` must be type of boolean!`);
		};
		runtime.allowWhitespace = option.allowWhitespace;
	};
	if (
		typeof item !== "string" ||
		(runtime.allowCase.search(/^l(?:ow(?:er)?)?(?:-?c(?:ase)?)?$/giu) === 0 && item !== item.toLowerCase()) ||
		(runtime.allowCase.search(/^u(?:p(?:per)?)?(?:-?c(?:ase)?)?$/giu) === 0 && item !== item.toUpperCase()) ||
		(runtime.allowLine.search(/^s(?:ingle)?(?:-?l(?:ine)?)?$/giu) === 0 && item.search(/[\n\r]/giu) !== -1) ||
		(runtime.allowLine.search(/^m(?:ulti(?:ple)?)?(?:-?l(?:ine)?)?$/giu) === 0 && item.search(/[\n\r]/giu) === -1)
	) {
		return false;
	};
	if (runtime.allowNonASCIICharacter === false) {
		for (let index = 0; index < item.length; index++) {
			if (item.charCodeAt(index) > 127) {
				return false;
			};
		};
	};
	if (runtime.allowWhitespace === false) {
		item = item.trim();
	};
	return ((item.length > 0) ? true : null);
};
export default isString;
