/*==================
[NodeJS] Advanced Determine - Is Number Positive Integer
	Language:
		NodeJS 14
==================*/
const isNumberPositive = require("./isnumberpositive.js");
/**
 * @function isNumberPositiveInteger
 * @param {*} item
 * @returns {boolean}
 */
function isNumberPositiveInteger(item) {
	return (
		isNumberPositive(item) == true && Number.isInteger(item) == true
	);
};
module.exports = isNumberPositiveInteger;
