import isNumber from "./is-number.mjs";
/**
 * @function isNumberSafeInteger
 * @alias isNumSInt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of safe integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			safe: true
		}
	);
};
export default isNumberSafeInteger;
