/*==================
[NodeJS] Advanced Determine - Is Number Negative
	Language:
		NodeJS 14
==================*/
const isNumber = require("./isnumber.js");
function isNumberNegative(item) {
	return (
		isNumber(item) == true && item < 0
	);
};
module.exports = isNumberNegative;
