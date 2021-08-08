import isNumberPositive from "./is-number-positive.mjs";
/**
 * @function isNumberPositiveInteger
 * @alias isNumPstInt
 * @description Determine item is type of positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveInteger(item) {
	return (isNumberPositive(item) === true && Number.isInteger(item) === true);
};
export default isNumberPositiveInteger;
