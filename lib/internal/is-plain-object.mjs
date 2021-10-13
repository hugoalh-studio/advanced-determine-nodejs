import isObject from "../is-object.mjs";
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
	let itemPropertiesSymbolLength = Object.getOwnPropertySymbols(item).length;
	if (
		(symbol === false && itemPropertiesSymbolLength > 0) ||
		(symbol === true && itemPropertiesSymbolLength === 0)
	) {
		return false;
	};
	let itemDescriptors = Object.getOwnPropertyDescriptors(item);
	let itemPropertiesConfigurable = [];
	let itemPropertiesEnumerable = [];
	let itemPropertiesGetter = [];
	let itemPropertiesNonConfigurable = [];
	let itemPropertiesNonEnumerable = [];
	let itemPropertiesNonGetter = [];
	let itemPropertiesNonSetter = [];
	let itemPropertiesNonWritable = [];
	let itemPropertiesSetter = [];
	let itemPropertiesWritable = [];
	for (let itemPropertyKey in itemDescriptors) {
		let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
		if (itemPropertyDescriptor.configurable === true) {
			itemPropertiesConfigurable.push(itemPropertyKey);
		} else {
			itemPropertiesNonConfigurable.push(itemPropertyKey);
		};
		if (itemPropertyDescriptor.enumerable === true) {
			itemPropertiesEnumerable.push(itemPropertyKey);
		} else {
			itemPropertiesNonEnumerable.push(itemPropertyKey);
		};
		if (typeof itemPropertyDescriptor.get === "undefined") {
			itemPropertiesNonGetter.push(itemPropertyKey);
		} else {
			itemPropertiesGetter.push(itemPropertyKey);
		};
		if (typeof itemPropertyDescriptor.set === "undefined") {
			itemPropertiesNonSetter.push(itemPropertyKey);
		} else {
			itemPropertiesSetter.push(itemPropertyKey);
		};
		if (itemPropertyDescriptor.writable === true) {
			itemPropertiesWritable.push(itemPropertyKey);
		} else {
			itemPropertiesNonWritable.push(itemPropertyKey);
		};
	};
	let itemEntriesLength = Object.entries(item).length;
	let itemPropertiesConfigurableLength = itemPropertiesConfigurable.length;
	let itemPropertiesEnumerableLength = itemPropertiesEnumerable.length;
	let itemPropertiesGetterLength = itemPropertiesGetter.length;
	let itemPropertiesNonConfigurableLength = itemPropertiesNonConfigurable.length;
	let itemPropertiesNonEnumerableLength = itemPropertiesNonEnumerable.length;
	let itemPropertiesNonGetterLength = itemPropertiesNonGetter.length;
	let itemPropertiesNonSetterLength = itemPropertiesNonSetter.length;
	let itemPropertiesNonWritableLength = itemPropertiesNonWritable.length;
	let itemPropertiesSetterLength = itemPropertiesSetter.length;
	let itemPropertiesWritableLength = itemPropertiesWritable.length;
	if (
		itemEntriesLength !== itemPropertiesEnumerableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNonConfigurableLength !== itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength ||
		itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength !== itemPropertiesGetterLength + itemPropertiesNonGetterLength ||
		itemPropertiesGetterLength + itemPropertiesNonGetterLength !== itemPropertiesNonSetterLength + itemPropertiesSetterLength ||
		itemPropertiesNonSetterLength + itemPropertiesSetterLength !== itemPropertiesNonWritableLength + itemPropertiesWritableLength ||
		itemPropertiesConfigurableLength + itemPropertiesNonConfigurableLength !== itemPropertiesNonWritableLength + itemPropertiesWritableLength ||
		(configurable === false && itemPropertiesConfigurableLength > 0) ||
		(configurable === true && itemPropertiesNonConfigurableLength > 0) ||
		(enumerable === false && itemPropertiesEnumerableLength > 0) ||
		(enumerable === true && itemPropertiesNonEnumerableLength > 0) ||
		(get === false && itemPropertiesGetterLength > 0) ||
		(get === true && itemPropertiesNonGetterLength > 0) ||
		(set === false && itemPropertiesSetterLength > 0) ||
		(set === true && itemPropertiesNonSetterLength > 0) ||
		(writable === false && itemPropertiesWritableLength > 0) ||
		(writable === true && itemPropertiesNonWritableLength > 0)
	) {
		return false;
	};
	return ((itemPropertiesEnumerableLength + itemPropertiesNonEnumerableLength + itemPropertiesSymbolLength > 0) ? true : null);
};
export default $isPlainObject;
