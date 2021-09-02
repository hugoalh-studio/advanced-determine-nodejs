const isNumber = require("./is-number.js");
/**
 * @function isNumberNegativeInteger
 * @alias isNumNgtInt
 * @description Determine item is type of negative integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeInteger(item) {
	return isNumber(
		item,
		{
			integer: true,
			negative: true
		}
	);
};
module.exports = isNumberNegativeInteger;
