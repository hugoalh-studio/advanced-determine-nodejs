/*==================
[NodeJS] Advanced Determine - Is JSON
	Language:
		NodeJS 14
==================*/
function isJSON(item) {
	if (item !== null && typeof item == "object") {
		try {
			const bin = JSON.stringify(item);
			if (Object.keys(item).length > 0 && bin.length > 2) {
				return true;
			};
			return null;
		} catch (error) {
			return false;
		};
	};
	return false;
};
module.exports = isJSON;
