/*==================
[NodeJS] Advanced Determine - Is Number
	Language:
		NodeJS 14
==================*/
/**
 * @function isNumber
 * @alias isNum
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumber(item) {
	return (
		typeof item == "number" && Number.isNaN(item) == false
	);
};
module.exports = isNumber;
