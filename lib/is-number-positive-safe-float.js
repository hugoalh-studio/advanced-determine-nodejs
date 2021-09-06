const isNumber = require("./is-number.js");
/**
 * @function isNumberPositiveSafeFloat
 * @alias isNumPstSFlt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of safe positive float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			positive: true,
			safe: true
		}
	);
};
module.exports = isNumberPositiveSafeFloat;
