import checkOption from "./internal/check-option.mjs";
import isStringifyJSON from "./is-stringify-json.mjs";
/**
 * @function stringParse
 * @description Parse a string.
 * @param {string} item Item that need to parse.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.extendNull=false] Allow to extend determine type of null.
 * @returns {*} Parse result.
 */
function stringParse(item, option = {}) {
	checkOption(option);
	let runtime = {
		extendNull: false
	};
	if (typeof item !== "string") {
		throw new TypeError(`Argument \`item\` must be type of string!`);
	};
	if (typeof option.extendNull !== "undefined") {
		if (typeof option.extendNull !== "boolean") {
			throw new TypeError(`Argument \`option.extendNull\` must be type of boolean!`);
		};
		runtime.extendNull = option.extendNull;
	};
	if (isStringifyJSON(item) !== false) {
		return JSON.parse(item);
	};
	if (item.search(/^(?:\d|[1-9]\d+)n$/gu) === 0) {
		return BigInt(item.replace(/n$/gu, ""));
	};
	if (item.search(/^false$/gu) === 0) {
		return false;
	};
	if (item.search(/^true$/gu) === 0) {
		return true;
	};
	if (item.search(/^NaN$/gu) === 0) {
		return NaN;
	};
	if (
		item.search(/^null$/gu) === 0 ||
		(runtime.extendNull === true && item.search(/^n(?:i|ul?)l$/gu) === 0)
	) {
		return null;
	};
	if (item.search(/^undefined$/gu) === 0) {
		return undefined;
	};
	return item;
};
export default stringParse;
