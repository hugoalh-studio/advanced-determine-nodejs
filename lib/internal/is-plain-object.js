const isObject = require("../is-object.js");
/**
 * @private
 * @function $isPlainObject
 * @param {any} item
 * @returns {(boolean|null)}
 */
function $isPlainObject(item, { configurable, enumerable, get, set, symbol, writable }) {
	if (
		isObject(item) !== true ||
		(item instanceof Object) !== true ||
		item.constructor.name !== "Object" ||
		Object.getPrototypeOf(item) !== Object.prototype ||
		Object.prototype.toString.call(item) !== "[object Object]"
	) {
		return false;
	};
	let itemEntriesLength = Object.entries(item).length;
	if (
		(enumerable === false && itemEntriesLength > 0) ||
		(enumerable === true && Object.getOwnPropertyNames(item).length !== itemEntriesLength) ||
		(symbol === false && Object.getOwnPropertySymbols(item).length > 0) ||
		(symbol === true && Object.getOwnPropertySymbols(item).length === 0)
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
		typeof configurable === "boolean" ||
		typeof get === "boolean" ||
		typeof set === "boolean" ||
		typeof writable === "boolean"
	) {
		let itemDescriptors = Object.getOwnPropertyDescriptors(item);
		for (let propertyKey in itemDescriptors) {
			let itemPropertyDescriptor = itemDescriptors[propertyKey];
			if (
				(configurable === false && itemPropertyDescriptor.configurable === true) ||
				(configurable === true && itemPropertyDescriptor.configurable === false) ||
				(get === false && typeof itemPropertyDescriptor.get !== "undefined") ||
				(get === true && typeof itemPropertyDescriptor.get === "undefined") ||
				(set === false && typeof itemPropertyDescriptor.set !== "undefined") ||
				(set === true && typeof itemPropertyDescriptor.set === "undefined") ||
				(writable === false && itemPropertyDescriptor.writable === true) ||
				(writable === true && itemPropertyDescriptor.writable === false)
			) {
				return false;
			};
		};
	};
	if (
		itemEntriesLength === 0 ||
		itemKeysLength === 0
	) {
		return null;
	};
	return true;
};
module.exports = $isPlainObject;
