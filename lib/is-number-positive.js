const isNumber = require("./is-number.js");
/**
 * @function isNumberPositive
 * @alias isNumPst
 * @description Determine item is type of positive number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositive(item) {
	return (isNumber(item) === true && item >= 0);
};
module.exports = isNumberPositive;
