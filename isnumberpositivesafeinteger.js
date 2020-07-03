/*==================
[NodeJS] Advanced Determine - Is Number Positive Safe Integer
	Language:
		NodeJS 14
==================*/
const isNumberPositive = require("./isnumberpositive.js");
function isNumberPositiveSafeInteger(item) {
	return (
		isNumberPositive(item) == true && Number.isSafeInteger(item) == true
	);
};
module.exports = isNumberPositiveSafeInteger;
