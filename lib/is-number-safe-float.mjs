import isNumberFloat from "./is-number-float.mjs";
/**
 * @function isNumberSafeFloat
 * @alias isNumSFlt
 * @description Determine item is type of safe float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeFloat(item) {
	return (isNumberFloat(item) === true && item > Number.MIN_SAFE_INTEGER && item < Number.MAX_SAFE_INTEGER);
};
export default isNumberSafeFloat;
