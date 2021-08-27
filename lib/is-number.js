const checkOption = require("./internal/check-option.js");
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.finite=false] A finite number.
 * @param {string} [option.index="both"] A positive number, negative number, or both.
 * @param {boolean} [option.safe=false] An IEEE-754 number.
 * @param {string} [option.type="both"] A integer number, float number, or both.
 * @returns {boolean} Determine result.
 */
function isNumber(item, option = {}) {
	checkOption(option);
	let runtime = {
		finite: false,
		index: "both",
		safe: false,
		type: "both"
	};
	if (typeof option.finite !== "undefined") {
		if (typeof option.finite !== "boolean") {
			throw new TypeError(`Argument \`option.finite\` must be type of boolean!`);
		};
		runtime.finite = option.finite;
	};
	if (typeof option.index !== "undefined") {
		if (typeof option.index !== "string") {
			throw new TypeError(`Argument \`option.index\` must be type of string!`);
		};
		runtime.index = option.index;
	};
	if (typeof option.safe !== "undefined") {
		if (typeof option.safe !== "boolean") {
			throw new TypeError(`Argument \`option.safe\` must be type of boolean!`);
		};
		runtime.safe = option.safe;
	};
	if (typeof option.type !== "undefined") {
		if (typeof option.type !== "string") {
			throw new TypeError(`Argument \`option.type\` must be type of string!`);
		};
		runtime.type = option.type;
	};
	if (
		typeof item !== "number" ||
		Number.isNaN(item) === true ||
		(runtime.finite === true && Number.isFinite(item) === false) ||
		(runtime.index.search(/^p(?:osi(?:tive)?)?$/giu) === 0 && item < 0) ||
		(runtime.index.search(/^n(?:ega(?:tive)?)?$/giu) === 0 && item >= 0) ||
		(runtime.safe === true && (
			item < Number.MIN_SAFE_INTEGER ||
			item > Number.MAX_SAFE_INTEGER
		)) ||
		(runtime.type.search(/^i(?:nt(?:eger)?)?$/giu) === 0 && Number.isInteger(item) === false) ||
		(runtime.type.search(/^f(?:loat)?$/giu) === 0 && Number.isInteger(item) === true)
	) {
		return false;
	};
	return true;
};
module.exports = isNumber;
