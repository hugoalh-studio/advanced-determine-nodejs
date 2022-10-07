const isPrimeNumber = require("./internal/is-prime-number.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] An even number.
 * @param {boolean} [param1.exclusiveMaximum=false] Exclusive maximum of the number.
 * @param {boolean} [param1.exclusiveMinimum=false] Exclusive minimum of the number.
 * @param {boolean} [param1.finite] A finite number.
 * @param {boolean} [param1.float] A float number.
 * @param {boolean} [param1.infinite] An infinite number.
 * @param {boolean} [param1.integer] An integer number.
 * @param {number} [param1.maximum=Infinity] Maximum of the number.
 * @param {number} [param1.minimum=-Infinity] Minimum of the number.
 * @param {boolean} [param1.negative] A negative number.
 * @param {boolean} [param1.odd] An odd number.
 * @param {boolean} [param1.positive] A positive number.
 * @param {boolean} [param1.prime] A prime number.
 * @param {boolean} [param1.safe] An IEEE-754 number.
 * @param {boolean} [param1.unsafe] Not an IEEE-754 number.
 * @returns {boolean} Determine result.
 */
function isNumber(item, {
	even,
	exclusiveMaximum,
	exclusiveMinimum,
	finite,
	float,
	infinite,
	integer,
	maximum,
	minimum,
	negative,
	odd,
	positive,
	prime,
	safe,
	unsafe,
	...aliases
} = {}) {
	if (typeof even !== "boolean" && typeof even !== "undefined") {
		throw new TypeError(`Argument \`even\` must be type of boolean or undefined!`);
	};
	exclusiveMaximum = undefinish(exclusiveMaximum, aliases.exclusiveMax, false);
	if (typeof exclusiveMaximum !== "boolean") {
		throw new TypeError(`Argument \`exclusiveMaximum\` must be type of boolean!`);
	};
	exclusiveMinimum = undefinish(exclusiveMinimum, aliases.exclusiveMin, false);
	if (typeof exclusiveMinimum !== "boolean") {
		throw new TypeError(`Argument \`exclusiveMinimum\` must be type of boolean!`);
	};
	if (typeof finite !== "boolean" && typeof finite !== "undefined") {
		throw new TypeError(`Argument \`finite\` must be type of boolean or undefined!`);
	};
	float = undefinish(float, aliases.flt);
	if (typeof float !== "boolean" && typeof float !== "undefined") {
		throw new TypeError(`Argument \`float\` must be type of boolean or undefined!`);
	};
	if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
		throw new TypeError(`Argument \`infinite\` must be type of boolean or undefined!`);
	};
	integer = undefinish(integer, aliases.int);
	if (typeof integer !== "boolean" && typeof integer !== "undefined") {
		throw new TypeError(`Argument \`integer\` must be type of boolean or undefined!`);
	};
	maximum = undefinish(maximum, aliases.max, Infinity);
	if (maximum !== Infinity && !isNumber(maximum, { safe: true })) {
		throw new TypeError(`Argument \`maximum\` must be \`Infinity\` or type of number (safe)!`);
	};
	minimum = undefinish(minimum, aliases.min, -Infinity);
	if (minimum !== -Infinity && !isNumber(minimum, {
		maximum,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimum\` must be \`-Infinity\`, or type of number (safe) and <= ${maximum}!`);
	};
	negative = undefinish(negative, aliases.ngt, aliases.nega);
	if (typeof negative !== "boolean" && typeof negative !== "undefined") {
		throw new TypeError(`Argument \`negative\` must be type of boolean or undefined!`);
	};
	if (typeof odd !== "boolean" && typeof odd !== "undefined") {
		throw new TypeError(`Argument \`odd\` must be type of boolean or undefined!`);
	};
	positive = undefinish(positive, aliases.pst, aliases.posi);
	if (typeof positive !== "boolean" && typeof positive !== "undefined") {
		throw new TypeError(`Argument \`positive\` must be type of boolean or undefined!`);
	};
	if (typeof prime !== "boolean" && typeof prime !== "undefined") {
		throw new TypeError(`Argument \`prime\` must be type of boolean or undefined!`);
	};
	if (typeof safe !== "boolean" && typeof safe !== "undefined") {
		throw new TypeError(`Argument \`safe\` must be type of boolean or undefined!`);
	};
	if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
		throw new TypeError(`Argument \`unsafe\` must be type of boolean or undefined!`);
	};
	let itemIsFinite = Number.isFinite(item);
	let itemIsInteger = Number.isInteger(item);
	let itemIsSafeInteger = Number.isSafeInteger(item);
	if (
		typeof item !== "number" ||
		Number.isNaN(item) ||
		(even === false && itemIsSafeInteger && item % 2 === 0) ||
		(even === true && (
			!itemIsSafeInteger ||
			item % 2 !== 0
		)) ||
		(exclusiveMaximum && maximum <= item) ||
		(!exclusiveMaximum && maximum < item) ||
		(exclusiveMinimum && item <= minimum) ||
		(!exclusiveMinimum && item < minimum) ||
		((
			finite === true ||
			infinite === false
		) && !itemIsFinite) ||
		((
			infinite === true ||
			finite === false
		) && itemIsFinite) ||
		((
			float === true ||
			integer === false
		) && itemIsInteger) ||
		((
			integer === true ||
			float === false
		) && !itemIsInteger) ||
		((
			negative === true ||
			positive === false
		) && item >= 0) ||
		((
			positive === true ||
			negative === false
		) && item < 0) ||
		(odd === false && itemIsSafeInteger && item % 2 !== 0) ||
		(odd === true && (
			!itemIsSafeInteger ||
			item % 2 === 0
		)) ||
		(prime === false && itemIsSafeInteger && isPrimeNumber(item)) ||
		(prime === true && (
			!itemIsSafeInteger ||
			!isPrimeNumber(item)
		)) ||
		((
			safe === true ||
			unsafe === false
		) && (
			item < Number.MIN_SAFE_INTEGER ||
			item > Number.MAX_SAFE_INTEGER
		)) ||
		((
			unsafe === true ||
			safe === false
		) && item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER)
	) {
		return false;
	};
	return true;
};
module.exports = isNumber;
