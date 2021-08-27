const isNumber = require("./is-number.js");
/**
 * @function isNumberNegativeFloat
 * @alias isNumNgtFlt
 * @description Determine item is type of negative float number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeFloat(item) {
	return isNumber(
		item,
		{
			index: "negative",
			type: "float"
		}
	);
};
module.exports = isNumberNegativeFloat;
