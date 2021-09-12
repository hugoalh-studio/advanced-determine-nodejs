const isObjectPair = require("./is-object-pair.js");
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {(boolean|undefined)} [option.finite] A finite number.
 * @param {(boolean|undefined)} [option.float] A float number.
 * @param {(boolean|undefined)} [option.infinite] A infinite number.
 * @param {(boolean|undefined)} [option.integer] A integer number.
 * @param {(boolean|undefined)} [option.negative] A negative number.
 * @param {(boolean|undefined)} [option.positive] A positive number.
 * @param {(boolean|undefined)} [option.safe] An IEEE-754 number.
 * @param {(boolean|undefined)} [option.unsafe] Not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
function isNumber(item, option = {}) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	if (typeof option.finite !== "undefined" && typeof option.finite !== "boolean") {
		throw new TypeError(`Argument \`option.finite\` must be type of boolean!`);
	};
	if (typeof option.float !== "undefined" && typeof option.float !== "boolean") {
		throw new TypeError(`Argument \`option.float\` must be type of boolean!`);
	};
	if (typeof option.infinite !== "undefined" && typeof option.infinite !== "boolean") {
		throw new TypeError(`Argument \`option.infinite\` must be type of boolean!`);
	};
	if (typeof option.integer !== "undefined" && typeof option.integer !== "boolean") {
		throw new TypeError(`Argument \`option.integer\` must be type of boolean!`);
	};
	if (typeof option.negative !== "undefined" && typeof option.negative !== "boolean") {
		throw new TypeError(`Argument \`option.negative\` must be type of boolean!`);
	};
	if (typeof option.positive !== "undefined" && typeof option.positive !== "boolean") {
		throw new TypeError(`Argument \`option.positive\` must be type of boolean!`);
	};
	if (typeof option.safe !== "undefined" && typeof option.safe !== "boolean") {
		throw new TypeError(`Argument \`option.safe\` must be type of boolean!`);
	};
	if (typeof option.unsafe !== "undefined" && typeof option.unsafe !== "boolean") {
		throw new TypeError(`Argument \`option.unsafe\` must be type of boolean!`);
	};
	let itemIsFinite = Number.isFinite(item);
	let itemIsInteger = Number.isInteger(item);
	if (
		typeof item !== "number" ||
		Number.isNaN(item) === true ||
		((option.finite === true || option.infinite === false) && itemIsFinite === false) ||
		((option.infinite === true || option.finite === false) && itemIsFinite === true) ||
		((option.float === true || option.integer === false) && itemIsInteger === true) ||
		((option.integer === true || option.float === false) && itemIsInteger === false) ||
		((option.negative === true || option.positive === false) && item >= 0) ||
		((option.positive === true || option.negative === false) && item < 0) ||
		((option.safe === true || option.unsafe === false) && (
			item < Number.MIN_SAFE_INTEGER ||
			item > Number.MAX_SAFE_INTEGER
		)) ||
		((option.unsafe === true || option.safe === false) && (item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER))
	) {
		return false;
	};
	return true;
};
module.exports = isNumber;
