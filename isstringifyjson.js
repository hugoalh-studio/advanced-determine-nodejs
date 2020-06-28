/*==================
[NodeJS] Advanced Determine - Is Stringify JSON
	Language:
		NodeJS 14
==================*/
function isStringifyJSON(item) {
	try {
		const bin = JSON.parse(item);
		if (Object.keys(bin).length > 0) {
			return true;
		};
		return null;
	} catch (error) {
		return false;
	};
};
module.exports = isStringifyJSON;
