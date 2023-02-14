import PlainObjectItemFilter from "../item-filter/plain-object.js";
/**
 * @function isPlainObject
 * @alias isObjectPlain
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
 * @param {boolean} [param1.configurableEntries] Whether contain configurable entries in the plain object.
 * @param {boolean} [param1.enumerableEntries] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.getterEntries] Whether contain getter entries in the plain object.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the plain object.
 * @param {boolean} [param1.setterEntries] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @param {boolean} [param1.symbolKeys] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.writableEntries] Whether contain writable entries in the plain object.
 * @returns {boolean} Determine result.
 */
function isPlainObject(item, {
	allowEmpty = false,
	configurableEntries,
	enumerableEntries,
	getterEntries,
	maximumEntries,
	minimumEntries,
	setterEntries,
	strict = false,
	symbolKeys,
	writableEntries,
	...aliases
} = {}) {
	return new PlainObjectItemFilter({
		allowEmpty,
		configurableEntries,
		enumerableEntries,
		getterEntries,
		maximumEntries,
		minimumEntries,
		setterEntries,
		strict,
		symbolKeys,
		writableEntries,
		...aliases
	}).test(item);
}
export default isPlainObject;
