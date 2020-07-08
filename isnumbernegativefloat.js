/*==================
[NodeJS] Advanced Determine - Is Number Negative Float
	Language:
		NodeJS 14
==================*/
const isNumberNegative = require("./isnumbernegative.js");
/**
 * @function isNumberNegativeFloat
 * @param {*} item
 * @returns {boolean}
 */
function isNumberNegativeFloat(item) {
	return (
		isNumberNegative(item) == true && Number.isInteger(item) == false
	);
};
module.exports = isNumberNegativeFloat;
