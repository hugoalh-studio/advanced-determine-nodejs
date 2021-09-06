import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositiveInteger
 * @alias isNumPstInt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			positive: true
		}
	);
};
export default isNumberPositiveInteger;
