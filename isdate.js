/*==================
[NodeJS] Advanced Determine - Is Date
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
function isDate(item) {
	return (
		item instanceof Date
	);
};
module.exports = isDate;
