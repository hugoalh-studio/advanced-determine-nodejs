import isObject from "../is-object.mjs";
/**
 * @private
 * @function $isPlainObject
 * @param {any} item
 * @returns {boolean}
 */
function $isPlainObject(item, { configurable, empty, enumerable, get, set, symbol, writable }) {
	if (
		!isObject(item) ||
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
	if (itemPrototype !== itemShadow) {
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
		if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
			let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
			if (itemPropertyDescriptor.configurable) {
				itemPropertiesConfigurableLength += 1;
			} else {
				itemPropertiesNonConfigurableLength += 1;
			};
			if (itemPropertyDescriptor.enumerable) {
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
			if (itemPropertyDescriptor.writable) {
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
		(empty === false && itemPropertiesGetterLength + itemPropertiesNonAccessorLength + itemPropertiesSetterLength + itemPropertiesSymbolLength === 0) ||
		(empty === true && itemPropertiesGetterLength + itemPropertiesNonAccessorLength + itemPropertiesSetterLength + itemPropertiesSymbolLength > 0) ||
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
	return true;
};
export default $isPlainObject;
