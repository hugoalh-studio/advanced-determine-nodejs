/*==================
[NodeJS] Advanced Determine - Is Stringify JSON
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {string} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item) {
	if (isString(item) != true) {
		return false;
	};
	let bin;
	try {
		bin = JSON.parse(item);
	} catch (error) {
		return false;
	};
	if (
		Object.keys(bin).length == 0 ||
		item === "{}"
	) {
		return null;
	};
	return true;
};
module.exports = isStringifyJSON;
