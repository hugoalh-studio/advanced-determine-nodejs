import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositiveSafeFloat
 * @alias isNumPstSFlt
 * @description Determine item is type of safe positive float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			positive: true,
			safe: true
		}
	);
};
export default isNumberPositiveSafeFloat;
