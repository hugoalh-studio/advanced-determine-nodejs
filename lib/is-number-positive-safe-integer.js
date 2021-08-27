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
			index: "positive",
			safe: true,
			type: "integer"
		}
	);
};
module.exports = isNumberPositiveSafeInteger;
