const isObject = require("../is-object.js");
const ObjectMeta = require("./object-meta.js");
/**
 * @access private
 * @function $isPlainObject
 * @description Determine item is type of plain object or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.configurableEntries] Whether contain configurable entries in the plain object.
 * @param {boolean} [param1.enumerableEntries] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.getterEntries] Whether contain getter entries in the plain object.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.minimumEntries=0] Minimum entries of the plain object.
 * @param {boolean} [param1.setterEntries] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.symbolKeys] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.writableEntries] Whether contain writable entries in the plain object.
 * @returns {item is object} Determine result.
 */
function $isPlainObject(item, {
	configurableEntries,
	enumerableEntries,
	getterEntries,
	maximumEntries = Infinity,
	minimumEntries = 0,
	setterEntries,
	symbolKeys,
	writableEntries
} = {}) {
	if (
		!isObject(item) ||
		!(item instanceof Object) ||
		item.constructor.name !== "Object" ||
		Object.prototype.toString.call(item) !== "[object Object]"
	) {
		return false;
	}
	let itemObjectMeta = new ObjectMeta(item);
	if (itemObjectMeta.prototypes !== null && itemObjectMeta.prototypes !== Object.prototype) {
		return false;
	}
	let itemShadow = item;
	while (Object.getPrototypeOf(itemShadow) !== null) {
		itemShadow = Object.getPrototypeOf(itemShadow);
	}
	if (itemObjectMeta.prototypes !== itemShadow) {
		return false;
	}
	if (
		(symbolKeys === false && itemObjectMeta.symbolKeys.length > 0) ||
		(symbolKeys === true && itemObjectMeta.symbolKeys.length === 0)
	) {
		return false;
	}
	if (
		Object.entries(item).length !== itemObjectMeta.enumerableEntries.length ||
		itemObjectMeta.configurableEntries.length + itemObjectMeta.nonConfigurableEntries.length !== itemObjectMeta.enumerableEntries.length + itemObjectMeta.nonEnumerableEntries.length ||
		itemObjectMeta.enumerableEntries.length + itemObjectMeta.nonEnumerableEntries.length !== itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length ||
		itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length !== itemObjectMeta.nonWritableEntries.length + itemObjectMeta.writableEntries.length ||
		itemObjectMeta.configurableEntries.length + itemObjectMeta.nonConfigurableEntries.length !== itemObjectMeta.nonWritableEntries.length + itemObjectMeta.writableEntries.length ||
		maximumEntries < itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length + itemObjectMeta.symbolKeys.length ||
		itemObjectMeta.getterEntries.length + itemObjectMeta.nonAccessorEntries.length + itemObjectMeta.setterEntries.length + itemObjectMeta.symbolKeys.length < minimumEntries ||
		(configurableEntries === false && itemObjectMeta.configurableEntries.length > 0) ||
		(configurableEntries === true && itemObjectMeta.nonConfigurableEntries.length > 0) ||
		(enumerableEntries === false && itemObjectMeta.enumerableEntries.length > 0) ||
		(enumerableEntries === true && itemObjectMeta.nonEnumerableEntries.length > 0) ||
		(getterEntries === false && itemObjectMeta.getterEntries.length > 0) ||
		(setterEntries === false && itemObjectMeta.setterEntries.length > 0) ||
		((
			getterEntries === true ||
			setterEntries === true
		) && itemObjectMeta.nonAccessorEntries.length > 0) ||
		(writableEntries === false && itemObjectMeta.writableEntries.length > 0) ||
		(writableEntries === true && itemObjectMeta.nonWritableEntries.length > 0)
	) {
		return false;
	}
	return true;
}
module.exports = $isPlainObject;
