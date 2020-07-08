/*==================
[NodeJS] Advanced Determine - Is Number Positive Safe Float
	Language:
		NodeJS 14
==================*/
const isNumberPositiveFloat = require("./isnumberpositivefloat.js");
/**
 * @function isNumberPositiveSafeFloat
 * @param {*} item
 * @returns {boolean}
 */
function isNumberPositiveSafeFloat(item) {
	return (
		isNumberPositiveFloat(item) == true && item < Number.MAX_SAFE_INTEGER
	);
};
module.exports = isNumberPositiveSafeFloat;
