/*==================
[NodeJS] Advanced Determine - Is String
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
function isString(item) {
	if (typeof item == "string") {
		if (item.length > 0) {
			return true;
		};
		return null;
	};
	return false;
};
module.exports = isString;
