/*==================
[NodeJS] Advanced Determine - Is Array
	Language:
		NodeJS 14
==================*/
function isArray(item) {
	if (Array.isArray(item) == true) {
		if (item.length > 0) {
			return true;
		};
		return null;
	};
	return false;
};
module.exports = isArray;
