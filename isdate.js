/*==================
[NodeJS] Advanced Determine - Is Date
	Language:
		NodeJS 14
==================*/
/**
 * @function isDate
 * @param {*} item
 * @returns {boolean}
 */
function isDate(item) {
	return (
		item instanceof Date
	);
};
module.exports = isDate;
