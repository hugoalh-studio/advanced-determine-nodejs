/*==================
[NodeJS] Advanced Determine - Is JSON
	Language:
		NodeJS/10.0.0
==================*/
const isObjectPair = require("./isobjectpair.js");
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item) {
	let isObjectPairResult = isObjectPair(item);
	if (isObjectPairResult !== true) {
		return isObjectPairResult;
	}
	let binValue = Object.values(item);
	for (let index = 0; index < binValue.length; index++) {
		let element = binValue[index];
		if (
			(typeof element !== "boolean" && typeof element !== "number" && typeof element !== "object" && typeof element !== "string") ||
			element === null) {
			return false;
		}
	}
	let binStringify;
	try {
		binStringify = JSON.stringify(item);
	} catch (error) {
		return false;
	}
	return (
		Object.keys(item).length > 0 && binStringify !== "{}" ? true : null
	);
}
module.exports = isJSON;
