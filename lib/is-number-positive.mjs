import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositive
 * @alias isNumPst
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of positive number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositive(item) {
	return isNumber(
		item,
		{
			positive: true
		}
	);
};
export default isNumberPositive;
