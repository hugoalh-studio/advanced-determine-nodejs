export default isPlainObject;
/**
 * @function isPlainObject
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPlain
 * @alias isPlainObj
 * @description Determine item is type of plain object or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.configurableEntries] Configurable entries in the plain object.
 * @param {boolean} [option.empty] An empty plain object.
 * @param {boolean} [option.enumerableEntries] Enumerable entries in the plain object.
 * @param {boolean} [option.getterEntries] Getter entries in the plain object.
 * @param {number} [option.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [option.minimumEntries=0] Minimum entries of the plain object.
 * @param {boolean} [option.setterEntries] Setter entries in the plain object.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the plain object keys.
 * @param {boolean} [option.super=false] Ensure no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @param {boolean} [option.symbolKeys] Symbols in the plain object keys.
 * @param {boolean} [option.writableEntries] Writable entries in the plain object.
 * @returns {boolean} Determine result.
 */
declare function isPlainObject(item: any, option?: {
    checkEntries?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    configurableEntries?: boolean;
    empty?: boolean;
    enumerableEntries?: boolean;
    getterEntries?: boolean;
    maximumEntries?: number;
    minimumEntries?: number;
    setterEntries?: boolean;
    strictKeys?: boolean;
    super?: boolean;
    symbolKeys?: boolean;
    writableEntries?: boolean;
}): boolean;
//# sourceMappingURL=is-plain-object.d.mts.map