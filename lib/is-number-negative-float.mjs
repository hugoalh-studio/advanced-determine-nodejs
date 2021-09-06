import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeFloat
 * @alias isNumNgtFlt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of negative float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			negative: true
		}
	);
};
export default isNumberNegativeFloat;
