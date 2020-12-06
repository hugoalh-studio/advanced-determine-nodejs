/*==================
[NodeJS] Advanced Determine - Is Stringify JSON
	Language:
		NodeJS/12.13.0
==================*/
const isArray = require("./isarray.js"),
	isString = require("./isstring.js");
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @alias isStringifiedJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item) {
	if (isString(item) !== true) {
		return false;
	};
	let bin;
	try {
		bin = JSON.parse(item);
	} catch (error) {
		return false;
	};
	if (isArray(bin) !== false) {
		return ((bin.length > 0 && item !== "[]") ? true : null);
	};
	return ((Object.keys(bin).length > 0 && item !== "{}") ? true : null);
};
module.exports = isStringifyJSON;
