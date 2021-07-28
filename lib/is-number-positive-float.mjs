import isNumberPositive from "./is-number-positive.mjs";
/**
 * @function isNumberPositiveFloat
 * @alias isNumPstFlt
 * @description Determine item is type of positive float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveFloat(item) {
	return (isNumberPositive(item) === true && Number.isInteger(item) === false);
};
export default isNumberPositiveFloat;
