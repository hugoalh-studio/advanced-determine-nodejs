const isNumber = require("./is-number.js");
/**
 * @function isNumberPositiveSafeFloat
 * @alias isNumPstSFlt
 * @description Determine item is type of safe positive float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeFloat(item) {
	return isNumber(
		item,
		{
			index: "positive",
			safe: true,
			type: "float"
		}
	);
};
module.exports = isNumberPositiveSafeFloat;
