import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeInteger
 * @alias isNumNgtInt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			negative: true
		}
	);
};
export default isNumberNegativeInteger;
