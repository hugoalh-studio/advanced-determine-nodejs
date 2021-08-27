const isNumber = require("./is-number.js");
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
module.exports = isNumberPositiveInteger;
