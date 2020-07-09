/*==================
[NodeJS] Advanced Determine - Is Regular Expression
	Language:
		NodeJS 14
==================*/
/**
 * @function isRegularExpression
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item) {
	return (
		item instanceof RegExp
	);
};
module.exports = isRegularExpression;
