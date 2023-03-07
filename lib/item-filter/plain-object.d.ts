export default PlainObjectItemFilter;
/**
 * @class PlainObjectItemFilter
 * @alias ObjectPlainItemFilter
 * @description Determine item with the filter of type of plain object.
 */
declare class PlainObjectItemFilter {
    /**
     * @static test
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
    static test(item: unknown, { allowEmpty, configurableEntries, enumerableEntries, getterEntries, maximumEntries, minimumEntries, setterEntries, strict, symbolKeys, writableEntries, ...aliases }?: {
        allowEmpty?: boolean;
        configurableEntries?: boolean;
        enumerableEntries?: boolean;
        getterEntries?: boolean;
        maximumEntries?: number;
        minimumEntries?: number;
        setterEntries?: boolean;
        strict?: boolean;
        symbolKeys?: boolean;
        writableEntries?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty plain object.
     * @param {boolean} [param0.configurableEntries] Whether contain configurable entries in the plain object.
     * @param {boolean} [param0.enumerableEntries] Whether contain enumerable entries in the plain object.
     * @param {boolean} [param0.getterEntries] Whether contain getter entries in the plain object.
     * @param {number} [param0.maximumEntries=Infinity] Maximum entries of the plain object.
     * @param {number} [param0.minimumEntries=1] Minimum entries of the plain object.
     * @param {boolean} [param0.setterEntries] Whether contain setter entries in the plain object.
     * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
     * @param {boolean} [param0.symbolKeys] Whether contain symbols in the plain object keys.
     * @param {boolean} [param0.writableEntries] Whether contain writable entries in the plain object.
     */
    constructor({ allowEmpty, configurableEntries, enumerableEntries, getterEntries, maximumEntries, minimumEntries, setterEntries, strict, symbolKeys, writableEntries, ...aliases }?: {
        allowEmpty?: boolean;
        configurableEntries?: boolean;
        enumerableEntries?: boolean;
        getterEntries?: boolean;
        maximumEntries?: number;
        minimumEntries?: number;
        setterEntries?: boolean;
        strict?: boolean;
        symbolKeys?: boolean;
        writableEntries?: boolean;
    });
    /**
     * @method test
     * @description Determine item with the configured filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @returns {boolean} Determine result.
     */
    test(item: unknown): boolean;
    #private;
}
//# sourceMappingURL=plain-object.d.ts.map