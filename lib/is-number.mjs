import integerTypes from "./internal/integer-types.mjs";
import isNumberInternal from "./internal/is-number.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.even] Whether an even number.
 * @param {boolean} [param1.exclusiveMaximum=false] Whether to exclusive maximum of the number.
 * @param {boolean} [param1.exclusiveMinimum=false] Whether to exclusive minimum of the number.
 * @param {boolean} [param1.finite] Whether a finite number.
 * @param {boolean} [param1.float] Whether a float number.
 * @param {boolean} [param1.infinite] Whether an infinite number.
 * @param {boolean} [param1.integer] Whether an integer number.
 * @param {number} [param1.maximum=Infinity] Maximum of the number.
 * @param {number} [param1.minimum=-Infinity] Minimum of the number.
 * @param {boolean} [param1.negative] Whether a negative number.
 * @param {boolean} [param1.odd] Whether an odd number.
 * @param {boolean} [param1.positive] Whether a positive number.
 * @param {boolean} [param1.prime] Whether a prime number.
 * @param {boolean} [param1.safe] Whether an IEEE-754 number.
 * @param {string} [param1.type] Type of the integer.
 * @param {boolean} [param1.unsafe] Whether not an IEEE-754 number.
 * @returns {ReturnType<typeof isNumberInternal>} Determine result.
 * @throws {TypeError} Argument `even` is not type of boolean or undefined.
 * @throws {TypeError} Argument `exclusiveMaximum` is not type of boolean.
 * @throws {TypeError} Argument `exclusiveMinimum` is not type of boolean.
 * @throws {TypeError} Argument `finite` is not type of boolean or undefined.
 * @throws {TypeError} Argument `float` is not type of boolean or undefined.
 * @throws {TypeError} Argument `infinite` is not type of boolean or undefined.
 * @throws {TypeError} Argument `integer` is not type of boolean or undefined.
 * @throws {TypeError} Argument `maximum` is not a valid number.
 * @throws {TypeError} Argument `minimum` is not a valid number.
 * @throws {TypeError} Argument `negative` is not type of boolean or undefined.
 * @throws {TypeError} Argument `odd` is not type of boolean or undefined.
 * @throws {TypeError} Argument `positive` is not type of boolean or undefined.
 * @throws {TypeError} Argument `prime` is not type of boolean or undefined.
 * @throws {TypeError} Argument `safe` is not type of boolean or undefined.
 * @throws {TypeError} Argument `type` is not a valid integer type or type of undefined.
 * @throws {TypeError} Argument `unsafe` is not type of boolean or undefined.
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
	type,
	unsafe,
	...aliases
} = {}) {
	if (typeof even !== "boolean" && typeof even !== "undefined") {
		throw new TypeError(`Argument \`even\` must be type of boolean or undefined!`);
	}
	exclusiveMaximum = undefinish(exclusiveMaximum, aliases.exclusiveMax, false);
	if (typeof exclusiveMaximum !== "boolean") {
		throw new TypeError(`Argument \`exclusiveMaximum\` must be type of boolean!`);
	}
	exclusiveMinimum = undefinish(exclusiveMinimum, aliases.exclusiveMin, false);
	if (typeof exclusiveMinimum !== "boolean") {
		throw new TypeError(`Argument \`exclusiveMinimum\` must be type of boolean!`);
	}
	if (typeof finite !== "boolean" && typeof finite !== "undefined") {
		throw new TypeError(`Argument \`finite\` must be type of boolean or undefined!`);
	}
	float = undefinish(float, aliases.flt);
	if (typeof float !== "boolean" && typeof float !== "undefined") {
		throw new TypeError(`Argument \`float\` must be type of boolean or undefined!`);
	}
	if (typeof infinite !== "boolean" && typeof infinite !== "undefined") {
		throw new TypeError(`Argument \`infinite\` must be type of boolean or undefined!`);
	}
	integer = undefinish(integer, aliases.int);
	if (typeof integer !== "boolean" && typeof integer !== "undefined") {
		throw new TypeError(`Argument \`integer\` must be type of boolean or undefined!`);
	}
	maximum = undefinish(maximum, aliases.max, Infinity);
	if (maximum !== Infinity && !isNumber(maximum, { safe: true })) {
		throw new TypeError(`Argument \`maximum\` must be \`Infinity\` or type of number (safe)!`);
	}
	minimum = undefinish(minimum, aliases.min, -Infinity);
	if (minimum !== -Infinity && !isNumber(minimum, {
		maximum,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimum\` must be \`-Infinity\`, or type of number (safe) and <= ${maximum}!`);
	}
	negative = undefinish(negative, aliases.ngt, aliases.nega);
	if (typeof negative !== "boolean" && typeof negative !== "undefined") {
		throw new TypeError(`Argument \`negative\` must be type of boolean or undefined!`);
	}
	if (typeof odd !== "boolean" && typeof odd !== "undefined") {
		throw new TypeError(`Argument \`odd\` must be type of boolean or undefined!`);
	}
	positive = undefinish(positive, aliases.pst, aliases.posi);
	if (typeof positive !== "boolean" && typeof positive !== "undefined") {
		throw new TypeError(`Argument \`positive\` must be type of boolean or undefined!`);
	}
	if (typeof prime !== "boolean" && typeof prime !== "undefined") {
		throw new TypeError(`Argument \`prime\` must be type of boolean or undefined!`);
	}
	if (typeof safe !== "boolean" && typeof safe !== "undefined") {
		throw new TypeError(`Argument \`safe\` must be type of boolean or undefined!`);
	}
	if (typeof unsafe !== "boolean" && typeof unsafe !== "undefined") {
		throw new TypeError(`Argument \`unsafe\` must be type of boolean or undefined!`);
	}
	if (typeof type === "string") {
		[minimum, maximum] = integerTypes(type, true);
		exclusiveMaximum = false;
		exclusiveMinimum = false;
		float = undefined;
		integer = true;
	} else if (typeof type !== "undefined") {
		throw new TypeError(`Argument \`type\` must be type of string or undefined!`);
	}
	return isNumberInternal(item, {
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
		unsafe
	});
}
export default isNumber;
