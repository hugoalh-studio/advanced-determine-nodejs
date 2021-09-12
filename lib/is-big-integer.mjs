import isObjectPair from "./is-object-pair.mjs";
const maximumBigIntegerToInteger = BigInt(Number.MAX_SAFE_INTEGER);
const minimumBigIntegerToInteger = BigInt(Number.MIN_SAFE_INTEGER);
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item is type of big integer number or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {(boolean|undefined)} [option.negative] A negative big integer number.
 * @param {(boolean|undefined)} [option.positive] A positive big integer number.
 * @param {(boolean|undefined)} [option.safe] An IEEE-754 big integer number.
 * @param {(boolean|undefined)} [option.unsafe] Not an IEEE-754 big integer number.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item, option = {}) {
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
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
	if (
		typeof item !== "bigint" ||
		((option.negative === true || option.positive === false) && item >= 0n) ||
		((option.positive === true || option.negative === false) && item < 0n) ||
		((option.safe === true || option.unsafe === false) && (
			item < minimumBigIntegerToInteger ||
			item > maximumBigIntegerToInteger
		)) ||
		((option.unsafe === true || option.safe === false) && (item >= minimumBigIntegerToInteger && item <= maximumBigIntegerToInteger))
	) {
		return false;
	};
	return true;
};
export default isBigInteger;
