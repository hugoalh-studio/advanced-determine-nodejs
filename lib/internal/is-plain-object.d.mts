export default $isPlainObject;
/**
 * @private
 * @function $isPlainObject
 * @param {unknown} item
 * @param {object} [param1={}]
 * @param {boolean} [param1.configurableEntries]
 * @param {boolean} [param1.enumerableEntries]
 * @param {boolean} [param1.getterEntries]
 * @param {number} [param1.maximumEntries=Infinity]
 * @param {number} [param1.minimumEntries=0]
 * @param {boolean} [param1.setterEntries]
 * @param {boolean} [param1.symbolKeys]
 * @param {boolean} [param1.writableEntries]
 * @returns {item is object}
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
//# sourceMappingURL=is-plain-object.d.mts.map