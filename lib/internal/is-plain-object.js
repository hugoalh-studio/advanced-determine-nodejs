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
	let itemPropertiesConfigurable = 0;
	let itemPropertiesEnumerable = 0;
	let itemPropertiesGetter = 0;
	let itemPropertiesNonAccessor = 0;
	let itemPropertiesNonConfigurable = 0;
	let itemPropertiesNonEnumerable = 0;
	let itemPropertiesNonWritable = 0;
	let itemPropertiesSetter = 0;
	let itemPropertiesWritable = 0;
	for (let itemPropertyKey in itemDescriptors) {
		if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey) === true) {
			let itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
			if (itemPropertyDescriptor.configurable === true) {
				itemPropertiesConfigurable += 1;
			} else {
				itemPropertiesNonConfigurable += 1;
			};
			if (itemPropertyDescriptor.enumerable === true) {
				itemPropertiesEnumerable += 1;
			} else {
				itemPropertiesNonEnumerable += 1;
			};
			if (typeof itemPropertyDescriptor.get !== "undefined") {
				itemPropertiesGetter += 1;
			} else if (typeof itemPropertyDescriptor.set !== "undefined") {
				itemPropertiesSetter += 1;
			} else {
				itemPropertiesNonAccessor += 1;
			};
			if (itemPropertyDescriptor.writable === true) {
				itemPropertiesWritable += 1;
			} else {
				itemPropertiesNonWritable += 1;
			};
		};
	};
	if (
		Object.entries(item).length !== itemPropertiesEnumerable ||
		itemPropertiesConfigurable + itemPropertiesNonConfigurable !== itemPropertiesEnumerable + itemPropertiesNonEnumerable ||
		itemPropertiesEnumerable + itemPropertiesNonEnumerable !== itemPropertiesGetter + itemPropertiesNonAccessor + itemPropertiesSetter ||
		itemPropertiesGetter + itemPropertiesNonAccessor + itemPropertiesSetter !== itemPropertiesNonWritable + itemPropertiesWritable ||
		itemPropertiesConfigurable + itemPropertiesNonConfigurable !== itemPropertiesNonWritable + itemPropertiesWritable ||
		(configurable === false && itemPropertiesConfigurable > 0) ||
		(configurable === true && itemPropertiesNonConfigurable > 0) ||
		(enumerable === false && itemPropertiesEnumerable > 0) ||
		(enumerable === true && itemPropertiesNonEnumerable > 0) ||
		(get === false && itemPropertiesGetter > 0) ||
		(set === false && itemPropertiesSetter > 0) ||
		((
			get === true ||
			set === true
		) && itemPropertiesNonAccessor > 0) ||
		(writable === false && itemPropertiesWritable > 0) ||
		(writable === true && itemPropertiesNonWritable > 0)
	) {
		return false;
	};
	return ((itemPropertiesEnumerable + itemPropertiesNonEnumerable + itemPropertiesSymbolLength > 0) ? true : null);
};
module.exports = $isPlainObject;
