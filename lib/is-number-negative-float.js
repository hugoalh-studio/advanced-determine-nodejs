const isNumberNegative = require("./is-number-negative.js");
/**
 * @function isNumberNegativeFloat
 * @alias isNumNgtFlt
 * @description Determine item is type of negative float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeFloat(item) {
	return (isNumberNegative(item) === true && Number.isInteger(item) === false);
};
module.exports = isNumberNegativeFloat;
