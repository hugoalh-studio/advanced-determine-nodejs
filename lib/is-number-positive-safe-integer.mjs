import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositiveSafeInteger
 * @alias isNumPstSInt
 * @description Determine item is type of safe positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			positive: true,
			safe: true
		}
	);
};
export default isNumberPositiveSafeInteger;
