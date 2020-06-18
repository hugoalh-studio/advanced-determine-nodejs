/*==================
[NodeJS] Advanced Determine - Is Stringify JSON
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
function isStringifyJSON(item) {
	try {
		const trashBin = JSON.parse(item);
		if (Object.keys(trashBin).length > 0) {
			return true;
		};
		return null;
	} catch (error) {
		return false;
	};
};
module.exports = isStringifyJSON;
