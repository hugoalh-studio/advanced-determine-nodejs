import isNumber from "./is-number.mjs";
/**
 * @function isNumberFloat
 * @alias isFloat
 * @alias isFlt
 * @alias isNumFlt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberFloat(item) {
	return isNumber(
		item,
		{
			float: true
		}
	);
};
export default isNumberFloat;
