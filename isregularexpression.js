/*==================
[NodeJS] Advanced Determine - Is Regular Expression
	Language:
		NodeJS 14
==================*/
/**
 * @function isRegularExpression
 * @param {*} item
 * @returns {boolean}
 */
function isRegularExpression(item) {
	return (
		item instanceof RegExp
	);
};
module.exports = isRegularExpression;
