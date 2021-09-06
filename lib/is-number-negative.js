const isNumber = require("./is-number.js");
/**
 * @function isNumberNegative
 * @alias isNumNgt
 * @deprecated Replaced by `isNumber`.
 * @description Determine item is type of negative number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegative(item) {
	return isNumber(
		item,
		{
			negative: true
		}
	);
};
module.exports = isNumberNegative;
