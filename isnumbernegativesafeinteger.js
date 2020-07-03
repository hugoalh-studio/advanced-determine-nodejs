/*==================
[NodeJS] Advanced Determine - Is Number Negative Safe Integer
	Language:
		NodeJS 14
==================*/
const isNumberNegative = require("./isnumbernegative.js");
function isNumberNegativeSafeInteger(item) {
	return (
		isNumberNegative(item) == true && Number.isSafeInteger(item) == true
	);
};
module.exports = isNumberNegativeSafeInteger;
