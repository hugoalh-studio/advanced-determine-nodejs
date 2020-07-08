/*==================
[NodeJS] Advanced Determine - Is Stringify JSON
	Language:
		NodeJS 14
==================*/
/**
 * @function isStringifyJSON
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isStringifyJSON(item) {
	let bin;
	try {
		bin = JSON.parse(item);
	} catch (error) {
		return false;
	};
	if (Object.keys(bin).length == 0 || item === "{}") {
		return null;
	};
	return true;
};
module.exports = isStringifyJSON;
