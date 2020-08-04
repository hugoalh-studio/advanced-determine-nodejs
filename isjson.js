/*==================
[NodeJS] Advanced Determine - Is JSON
	Language:
		NodeJS 14
==================*/
const isObject = require("./isobject.js");
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item) {
	if (isObject(item) == false) {
		return false;
	};
	let binValue = Object.values(item);
	for (let index = 0; index < binValue.length; index++) {
		let element = item[index];
		if (typeof element != "boolean" && typeof element != "number" && typeof element != "object" && typeof element != "string" && Array.isArray(element) == false) {
			return false;
		};
	};
	let binStringify;
	try {
		binStringify = JSON.stringify(item);
	} catch (error) {
		return false;
	};
	if (
		Object.keys(item).length == 0 ||
		binStringify === "{}"
	) {
		return null;
	};
	return true;
};
module.exports = isJSON;
