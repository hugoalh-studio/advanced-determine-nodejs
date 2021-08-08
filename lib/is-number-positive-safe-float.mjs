import isNumberPositiveFloat from "./is-number-positive-float.mjs";
/**
 * @function isNumberPositiveSafeFloat
 * @alias isNumPstSFlt
 * @description Determine item is type of safe positive float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeFloat(item) {
	return (isNumberPositiveFloat(item) === true && item < Number.MAX_SAFE_INTEGER);
};
export default isNumberPositiveSafeFloat;
