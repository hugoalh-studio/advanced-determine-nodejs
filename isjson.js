/*==================
[NodeJS] Advanced Determine - Is JSON
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
function isJSON(item) {
	if (item !== null && typeof item == "object") {
		if (Object.keys(item).length > 0) {
			try {
				const trashBin = JSON.stringify(item);
			} catch (error) {
				return false;
			};
			return true;
		};
		return null;
	};
	return false;
};
module.exports = isJSON;
