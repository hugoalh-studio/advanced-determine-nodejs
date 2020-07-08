/*==================
[NodeJS] Advanced Determine - Is Number Float
	Language:
		NodeJS 14
==================*/
const isNumber = require("./isnumber.js");
/**
 * @function isNumberFloat
 * @param {*} item
 * @returns {boolean}
 */
function isNumberFloat(item) {
	return (
		isNumber(item) == true && Number.isInteger(item) == false
	);
};
module.exports = isNumberFloat;
