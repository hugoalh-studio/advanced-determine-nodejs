import isNumber from "./is-number.mjs";
/**
 * @function isNumberPositiveInteger
 * @alias isNumPstInt
 * @description Determine item is type of positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveInteger(item) {
	return isNumber(
		item,
		{
			index: "positive",
			type: "integer"
		}
	);
};
export default isNumberPositiveInteger;
