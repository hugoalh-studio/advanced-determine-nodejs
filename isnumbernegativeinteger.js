/*==================
[NodeJS] Advanced Determine - Is Number Negative Integer
	Language:
		NodeJS 14
==================*/
const isNumberNegative = require("./isnumbernegative.js");
/**
 * @function isNumberNegativeInteger
 * @param {*} item
 * @returns {boolean}
 */
function isNumberNegativeInteger(item) {
	return (
		isNumberNegative(item) == true && Number.isInteger(item) == true
	);
};
module.exports = isNumberNegativeInteger;
