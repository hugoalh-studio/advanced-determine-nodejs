import $isPlainObject from "./internal/is-plain-object.mjs";
import isPrimeNumber from "./internal/is-prime-number.mjs";
import undefinish from "@hugoalh/undefinish";
const maximumBigIntegerToInteger = BigInt(Number.MAX_SAFE_INTEGER);
const minimumBigIntegerToInteger = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item is type of big integer number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.negative] A negative big integer number.
 * @param {boolean} [option.positive] A positive big integer number.
 * @param {boolean} [option.prime] A prime number.
 * @param {boolean} [option.safe] An IEEE-754 big integer number.
 * @param {boolean} [option.unsafe] Not an IEEE-754 big integer number.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
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
	if (
		typeof item !== "bigint" ||
		((
			option.negative === true ||
			option.positive === false
		) && item >= 0n) ||
		((
			option.positive === true ||
			option.negative === false
		) && item < 0n) ||
		(option.prime === false && isPrimeNumber(item) === true) ||
		(option.prime === true && isPrimeNumber(item) === false) ||
		((
			option.safe === true ||
			option.unsafe === false
		) && (
			item < minimumBigIntegerToInteger ||
			item > maximumBigIntegerToInteger
		)) ||
		((
			option.unsafe === true ||
			option.safe === false
		) && (item >= minimumBigIntegerToInteger && item <= maximumBigIntegerToInteger))
	) {
		return false;
	};
	return true;
};
export default isBigInteger;
