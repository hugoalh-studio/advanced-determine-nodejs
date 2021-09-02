import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeSafeFloat
 * @alias isNumNgtSFlt
 * @description Determine item is type of safe negative float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			negative: true,
			safe: true
		}
	);
};
export default isNumberNegativeSafeFloat;
