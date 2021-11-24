const isPlainObjectInno = require("./internal/is-plain-object-inno.js");
const isPrimeNumber = require("./internal/is-prime-number.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.finite] A finite number.
 * @param {boolean} [option.float] A float number.
 * @param {boolean} [option.infinite] An infinite number.
 * @param {boolean} [option.integer] An integer number.
 * @param {boolean} [option.negative] A negative number.
 * @param {boolean} [option.positive] A positive number.
 * @param {boolean} [option.prime] A prime number.
 * @param {boolean} [option.safe] An IEEE-754 number.
 * @param {boolean} [option.unsafe] Not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
function isNumber(item, option = {}) {
	if (!isPlainObjectInno(option)) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (typeof option.finite !== "boolean" && typeof option.finite !== "undefined") {
		throw new TypeError(`Argument \`option.finite\` must be type of boolean or undefined!`);
	};
	option.float = undefinish(option.float, option.flt);
	if (typeof option.float !== "boolean" && typeof option.float !== "undefined") {
		throw new TypeError(`Argument \`option.float\` must be type of boolean or undefined!`);
	};
	if (typeof option.infinite !== "boolean" && typeof option.infinite !== "undefined") {
		throw new TypeError(`Argument \`option.infinite\` must be type of boolean or undefined!`);
	};
	option.integer = undefinish(option.integer, option.int);
	if (typeof option.integer !== "boolean" && typeof option.integer !== "undefined") {
		throw new TypeError(`Argument \`option.integer\` must be type of boolean or undefined!`);
	};
	option.negative = undefinish(option.negative, option.ngt, option.nega);
	if (typeof option.negative !== "boolean" && typeof option.negative !== "undefined") {
		throw new TypeError(`Argument \`option.negative\` must be type of boolean or undefined!`);
	};
	option.positive = undefinish(option.positive, option.pst, option.posi);
	if (typeof option.positive !== "boolean" && typeof option.positive !== "undefined") {
		throw new TypeError(`Argument \`option.positive\` must be type of boolean or undefined!`);
	};
	if (typeof option.prime !== "boolean" && typeof option.prime !== "undefined") {
		throw new TypeError(`Argument \`option.prime\` must be type of boolean or undefined!`);
	};
	if (typeof option.safe !== "boolean" && typeof option.safe !== "undefined") {
		throw new TypeError(`Argument \`option.safe\` must be type of boolean or undefined!`);
	};
	if (typeof option.unsafe !== "boolean" && typeof option.unsafe !== "undefined") {
		throw new TypeError(`Argument \`option.unsafe\` must be type of boolean or undefined!`);
	};
	let itemIsFinite = Number.isFinite(item);
	let itemIsInteger = Number.isInteger(item);
	let itemIsSafeInteger = Number.isSafeInteger(item);
	if (
		typeof item !== "number" ||
		Number.isNaN(item) ||
		((
			option.finite === true ||
			option.infinite === false
		) && !itemIsFinite) ||
		((
			option.infinite === true ||
			option.finite === false
		) && itemIsFinite) ||
		((
			option.float === true ||
			option.integer === false
		) && itemIsInteger) ||
		((
			option.integer === true ||
			option.float === false
		) && !itemIsInteger) ||
		((
			option.negative === true ||
			option.positive === false
		) && item >= 0) ||
		((
			option.positive === true ||
			option.negative === false
		) && item < 0) ||
		(option.prime === false && itemIsSafeInteger && isPrimeNumber(item)) ||
		(option.prime === true && (
			!itemIsSafeInteger ||
			!isPrimeNumber(item)
		)) ||
		((
			option.safe === true ||
			option.unsafe === false
		) && (
			item < Number.MIN_SAFE_INTEGER ||
			item > Number.MAX_SAFE_INTEGER
		)) ||
		((
			option.unsafe === true ||
			option.safe === false
		) && (item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER))
	) {
		return false;
	};
	return true;
};
module.exports = isNumber;
