import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegative
 * @alias isNumNgt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of negative number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegative(item) {
	return isNumber(
		item,
		{
			negative: true
		}
	);
};
export default isNumberNegative;
