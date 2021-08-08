import isNumberNegative from "./is-number-negative.mjs";
/**
 * @function isNumberNegativeSafeInteger
 * @alias isNumNgtSInt
 * @description Determine item is type of safe negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeInteger(item) {
	return (isNumberNegative(item) === true && Number.isSafeInteger(item) === true);
};
export default isNumberNegativeSafeInteger;
