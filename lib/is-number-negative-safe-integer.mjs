import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeSafeInteger
 * @alias isNumNgtSInt
 * @description Determine item is type of safe negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeInteger(item) {
	return isNumber(
		item,
		{
			index: "negative",
			safe: true,
			type: "integer"
		}
	);
};
export default isNumberNegativeSafeInteger;
