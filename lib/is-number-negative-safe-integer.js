const isNumber = require("./is-number.js");
/**
 * @function isNumberNegativeSafeInteger
 * @alias isNumNgtSInt
 * @description Determine item is type of safe negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			negative: true,
			safe: true
		}
	);
};
module.exports = isNumberNegativeSafeInteger;
