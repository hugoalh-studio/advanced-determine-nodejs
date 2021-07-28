import isNumberNegative from "./is-number-negative.mjs";
/**
 * @function isNumberNegativeInteger
 * @alias isNumNgtInt
 * @description Determine item is type of negative integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeInteger(item) {
	return (isNumberNegative(item) === true && Number.isInteger(item) === true);
};
export default isNumberNegativeInteger;
