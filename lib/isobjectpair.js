/*==================
[NodeJS] Advanced Determine - Is Object Pair
	Language:
		NodeJS/10.0.0
==================*/
const isObject = require("./isobject.js");
/**
 * @function isObjectPair
 * @alias isObjectPlain
 * @alias isObjPair
 * @alias isObjPlain
 * @description Determine item is type of object pair or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item) {
	if (isObject(item) !== true) {
		return false;
	};
	if (Object.entries(item).length > 0 && Object.keys(item).length === Object.values(item).length) {
		return (item.constructor.name === "Object");
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	return ((Object.keys(item).length > 0) ? true : null);
};
module.exports = isObjectPair;
