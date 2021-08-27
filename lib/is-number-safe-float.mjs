import isNumber from "./is-number.mjs";
/**
 * @function isNumberSafeFloat
 * @alias isNumSFlt
 * @description Determine item is type of safe float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeFloat(item) {
	return isNumber(
		item,
		{
			safe: true,
			type: "float"
		}
	);
};
export default isNumberSafeFloat;
