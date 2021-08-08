import isNumberPositive from "./is-number-positive.mjs";
/**
 * @function isNumberPositiveSafeInteger
 * @alias isNumPstSInt
 * @description Determine item is type of safe positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeInteger(item) {
	return (isNumberPositive(item) === true && Number.isSafeInteger(item) === true);
};
export default isNumberPositiveSafeInteger;
