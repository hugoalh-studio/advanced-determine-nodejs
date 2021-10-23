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
		!(item instanceof Object) ||
		item.constructor.name !== "Object" ||
		Object.prototype.toString.call(item) !== "[object Object]"
	) {
		return false;
	};
	let itemPrototype = Object.getPrototypeOf(item);
	if (itemPrototype !== null && itemPrototype !== Object.prototype) {
		return false;
	};
	let itemShadow = item;
	while (Object.getPrototypeOf(itemShadow) !== null) {
		itemShadow = Object.getPrototypeOf(itemShadow);
	};
	if (Object.getPrototypeOf(item) !== itemShadow) {
		return false;
	};
	let itemPropertiesSymbolLength = Object.getOwnPropertySymbols(item).length;
	if (
		(symbol === false && itemPropertiesSymbolLength > 0) ||
		(symbol === true && itemPropertiesSymbolLength === 0)
	) {
		return false;
	};
	let itemDescriptors = Object.getOwnPropertyDescriptors(item);
	let itemPropertiesConfigurableLength = 0;
	let itemPropertiesEnumerableLength = 0;
	let itemPropertiesGetterLength = 0;
	let itemPropertiesNonAccessorLength = 0;
	let itemPropertiesNonConfigurableLength = 0;
	let itemPropertiesNonEnumerableLength = 0;
	let itemPropertiesNonWritableLength = 0;
	let itemPropertiesSetterLength = 0;
	let itemPropertiesWritableLength = 0;
	for (let itemPropertyKey in itemDescriptors) {
		if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey) === true) {
			let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
			if (itemPropertyDescriptor.configurable === true) {
				itemPropertiesConfigurableLength += 1;
			} else {
				itemPropertiesNonConfigurableLength += 1;
			};
			if (itemPropertyDescriptor.enumerable === true) {
				itemPropertiesEnumerableLength += 1;
			} else {
				itemPropertiesNonEnumerableLength += 1;
			};
			if (typeof itemPropertyDescriptor.get !== "undefined") {
				itemPropertiesGetterLength += 1;
			} else if (typeof itemPropertyDescriptor.set !== "undefined") {
				itemPropertiesSetterLength += 1;
			} else {
				itemPropertiesNonAccessorLength += 1;
			};
			if (itemPropertyDescriptor.writable === true) {
				itemPropertiesWritableLength += 1;
			} else {
				itemPropertiesNonWritableLength += 1;
			};
		};
	};
	if (
		Object.entries(item).length !== itemPropertiesEnumerableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNonConfigurableLength !== itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength ||
		itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength !== itemPropertiesGetterLength + itemPropertiesNonAccessorLength + itemPropertiesSetterLength ||
		itemPropertiesGetterLength + itemPropertiesNonAccessorLength + itemPropertiesSetterLength !== itemPropertiesNonWritableLength + itemPropertiesWritableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNonConfigurableLength !== itemPropertiesNonWritableLength + itemPropertiesWritableLength ||
		(configurable === false && itemPropertiesConfigurableLength > 0) ||
		(configurable === true && itemPropertiesNonConfigurableLength > 0) ||
		(enumerable === false && itemPropertiesEnumerableLength > 0) ||
		(enumerable === true && itemPropertiesNonEnumerableLength > 0) ||
		(get === false && itemPropertiesGetterLength > 0) ||
		(set === false && itemPropertiesSetterLength > 0) ||
		((
			get === true ||
			set === true
		) && itemPropertiesNonAccessorLength > 0) ||
		(writable === false && itemPropertiesWritableLength > 0) ||
		(writable === true && itemPropertiesNonWritableLength > 0)
	) {
		return false;
	};
	return ((itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength + itemPropertiesSymbolLength > 0) ? true : null);
};
module.exports = $isPlainObject;
