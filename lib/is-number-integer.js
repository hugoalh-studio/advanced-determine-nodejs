const isNumber = require("./is-number.js");
/**
 * @function isNumberInteger
 * @alias isInt
 * @alias isInteger
 * @alias isNumInt
 * @description Determine item is type of integer number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberInteger(item) {
	return isNumber(
		item,
		{
			integer: true
		}
	);
};
module.exports = isNumberInteger;
