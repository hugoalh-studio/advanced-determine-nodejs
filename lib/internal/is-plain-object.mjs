import isObject from "../is-object.mjs";
/**
 * @private
 * @function $isPlainObject
 * @param {any} item
 * @returns {(boolean|null)}
 */
function $isPlainObject(item) {
	if (
		isObject(item) !== true ||
		item instanceof Object ||
		item.constructor.name !== "Object" ||
		Object.getPrototypeOf(item) !== Object.prototype ||
		Object.prototype.toString.call(item) !== "[object Object]"
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
	let itemKeysLength = Object.keys(item).length;
	if (itemKeysLength !== Object.values(item).length) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		itemKeysLength === 0
	) {
		return null;
	};
	return true;
};
export default $isPlainObject;
