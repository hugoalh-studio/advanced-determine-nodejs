const isObject = require("../is-object.js");
/**
 * @private
 * @function isObjectPairStrictInternal
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isObjectPairStrictInternal(item) {
	if (
		isObject(item) !== true ||
		Object.keys(item).length !== Object.values(item).length ||
		item.constructor.name !== "Object"
	) {
		return false;
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	for (let element in item) {
		if (
			element === "__proto__" ||
			item.hasOwnProperty(element) === false
		) {
			return false;
		};
	};
	if (
		Object.entries(item).length === 0 ||
		Object.keys(item).length === 0
	) {
		return null;
	};
	return true;
};
module.exports = isObjectPairStrictInternal;
