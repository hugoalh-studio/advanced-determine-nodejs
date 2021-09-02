const isNumber = require("./is-number.js");
/**
 * @function isNumberPositiveSafeInteger
 * @alias isNumPstSInt
 * @description Determine item is type of safe positive integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			positive: true,
			safe: true
		}
	);
};
module.exports = isNumberPositiveSafeInteger;
