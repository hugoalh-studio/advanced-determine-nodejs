/*==================
[NodeJS] Advanced Determine - Is Number Positive Float
	Language:
		NodeJS 14
==================*/
const isNumberPositive = require("./isnumberpositive.js");
function isNumberPositiveFloat(item) {
	return (
		isNumberPositive(item) == true && Number.isInteger(item) == false
	);
};
module.exports = isNumberPositiveFloat;
