export = $isPlainObject;
/**
 * @private
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
declare function $isPlainObject(item: unknown, { configurableEntries, enumerableEntries, getterEntries, maximumEntries, minimumEntries, setterEntries, symbolKeys, writableEntries }?: {
    configurableEntries?: boolean;
    enumerableEntries?: boolean;
    getterEntries?: boolean;
    maximumEntries?: number;
    minimumEntries?: number;
    setterEntries?: boolean;
    symbolKeys?: boolean;
    writableEntries?: boolean;
}): item is any;
//# sourceMappingURL=is-plain-object.d.ts.map