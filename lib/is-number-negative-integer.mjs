import isNumber from "./is-number.mjs";
/**
 * @function isNumberNegativeInteger
 * @alias isNumNgtInt
 * @description Determine item is type of negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeInteger(item) {
	return isNumber(
		item,
		{
			index: "negative",
			type: "integer"
		}
	);
};
export default isNumberNegativeInteger;
