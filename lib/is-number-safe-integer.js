/**
 * @function isNumberSafeInteger
 * @alias isNumSInt
 * @description Determine item is type of safe integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeInteger(item) {
	return (Number.isSafeInteger(item) === true);
};
module.exports = isNumberSafeInteger;
