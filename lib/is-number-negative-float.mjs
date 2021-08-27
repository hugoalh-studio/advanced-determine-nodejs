import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeFloat
 * @alias isNumNgtFlt
 * @description Determine item is type of negative float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeFloat(item) {
	return isNumber(
		item,
		{
			index: "negative",
			type: "float"
		}
	);
};
export default isNumberNegativeFloat;
