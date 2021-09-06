const isNumber = require("./is-number.js");
/**
 * @function isNumberSafeFloat
 * @alias isNumSFlt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of safe float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeFloat(item) {
	return isNumber(
		item,
		{
			float: true,
			safe: true
		}
	);
};
module.exports = isNumberSafeFloat;
