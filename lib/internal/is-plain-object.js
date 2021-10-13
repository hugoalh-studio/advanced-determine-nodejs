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
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	let itemDescriptors = Object.getOwnPropertyDescriptors(item);
	let itemPropertiesConfigurable = [];
	let itemPropertiesEnumerable = [];
	let itemPropertiesGetter = [];
	let itemPropertiesNotConfigurable = [];
	let itemPropertiesNotEnumerable = [];
	let itemPropertiesNotGetter = [];
	let itemPropertiesNotSetter = [];
	let itemPropertiesNotWritable = [];
	let itemPropertiesSetter = [];
	let itemPropertiesWritable = [];
	for (let propertyKey in itemDescriptors) {
		let itemPropertyDescriptor = itemDescriptors[propertyKey];
		if (itemPropertyDescriptor.configurable === true) {
			itemPropertiesConfigurable.push(propertyKey);
		} else {
			itemPropertiesNotConfigurable.push(propertyKey);
		};
		if (itemPropertyDescriptor.enumerable === true) {
			itemPropertiesEnumerable.push(propertyKey);
		} else {
			itemPropertiesNotEnumerable.push(propertyKey);
		};
		if (typeof itemPropertyDescriptor.get === "undefined") {
			itemPropertiesNotGetter.push(propertyKey);
		} else {
			itemPropertiesGetter.push(propertyKey);
		};
		if (typeof itemPropertyDescriptor.set === "undefined") {
			itemPropertiesNotSetter.push(propertyKey);
		} else {
			itemPropertiesSetter.push(propertyKey);
		};
		if (itemPropertyDescriptor.writable === true) {
			itemPropertiesWritable.push(propertyKey);
		} else {
			itemPropertiesNotWritable.push(propertyKey);
		};
	};
	let itemEntriesLength = Object.entries(item).length;
	let itemPropertiesConfigurableLength = itemPropertiesConfigurable.length;
	let itemPropertiesEnumerableLength = itemPropertiesEnumerable.length;
	let itemPropertiesGetterLength = itemPropertiesGetter.length;
	let itemPropertiesNotConfigurableLength = itemPropertiesNotConfigurable.length;
	let itemPropertiesNotEnumerableLength = itemPropertiesNotEnumerable.length;
	let itemPropertiesNotGetterLength = itemPropertiesNotGetter.length;
	let itemPropertiesNotSetterLength = itemPropertiesNotSetter.length;
	let itemPropertiesNotWritableLength = itemPropertiesNotWritable.length;
	let itemPropertiesSetterLength = itemPropertiesSetter.length;
	let itemPropertiesSymbolLength = Object.getOwnPropertySymbols(item).length;
	let itemPropertiesWritableLength = itemPropertiesWritable.length;
	if (
		itemEntriesLength !== itemPropertiesEnumerableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNotConfigurableLength !== itemPropertiesEnumerableLength + itemPropertiesNotEnumerableLength ||
		itemPropertiesEnumerableLength + itemPropertiesNotEnumerableLength !== itemPropertiesGetterLength + itemPropertiesNotGetterLength ||
		itemPropertiesGetterLength + itemPropertiesNotGetterLength !== itemPropertiesNotSetterLength + itemPropertiesSetterLength ||
		itemPropertiesNotSetterLength + itemPropertiesSetterLength !== itemPropertiesNotWritableLength + itemPropertiesWritableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNotConfigurableLength !== itemPropertiesNotWritableLength + itemPropertiesWritableLength ||
		(configurable === false && itemPropertiesConfigurableLength > 0) ||
		(configurable === true && itemPropertiesNotConfigurableLength > 0) ||
		(enumerable === false && itemPropertiesEnumerableLength > 0) ||
		(enumerable === true && itemPropertiesNotEnumerableLength > 0) ||
		(get === false && itemPropertiesGetterLength > 0) ||
		(get === true && itemPropertiesNotGetterLength > 0) ||
		(set === false && itemPropertiesSetterLength > 0) ||
		(set === true && itemPropertiesNotSetterLength > 0) ||
		(symbol === false && itemPropertiesSymbolLength > 0) ||
		(symbol === true && itemPropertiesSymbolLength === 0) ||
		(writable === false && itemPropertiesWritableLength > 0) ||
		(writable === true && itemPropertiesNotWritableLength > 0)
	) {
		return false;
	};
	return ((itemPropertiesEnumerableLength + itemPropertiesNotEnumerableLength + itemPropertiesSymbolLength > 0) ? true : null);
};
module.exports = $isPlainObject;
