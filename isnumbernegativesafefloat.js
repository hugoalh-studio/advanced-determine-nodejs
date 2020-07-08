/*==================
[NodeJS] Advanced Determine - Is Number Negative Safe Float
	Language:
		NodeJS 14
==================*/
const isNumberNegativeFloat = require("./isnumbernegativefloat.js");
/**
 * @function isNumberNegativeSafeFloat
 * @param {*} item
 * @returns {boolean}
 */
function isNumberNegativeSafeFloat(item) {
	return (
		isNumberNegativeFloat(item) == true && item > Number.MIN_SAFE_INTEGER
	);
};
module.exports = isNumberNegativeSafeFloat;
