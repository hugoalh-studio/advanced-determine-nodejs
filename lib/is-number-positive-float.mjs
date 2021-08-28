import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositiveFloat
 * @alias isNumPstFlt
 * @description Determine item is type of positive float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			positive: true
		}
	);
};
export default isNumberPositiveFloat;
