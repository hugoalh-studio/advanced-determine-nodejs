/**
 * @function isPlainObject
 * @description Determine item with the filter of type of plain object.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
 * @param {boolean} [param1.entriesConfigurable] Whether contain configurable entries in the plain object.
 * @param {number} [param1.entriesCount] Entries of the plain object.
 * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the plain object.
 * @param {boolean} [param1.entriesEnumerable] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.entriesGetter] Whether contain getter entries in the plain object.
 * @param {boolean} [param1.entriesSetter] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.entriesWritable] Whether contain writable entries in the plain object.
 * @param {boolean} [param1.keysSymbol] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @returns {boolean} Determine result.
 */
export function isPlainObject(item: unknown, { allowEmpty, entriesConfigurable, entriesCount, entriesCountMaximum, entriesCountMinimum, entriesEnumerable, entriesGetter, entriesSetter, entriesWritable, keysSymbol, strict, ...aliases }?: {
    allowEmpty?: boolean;
    entriesConfigurable?: boolean;
    entriesCount?: number;
    entriesCountMaximum?: number;
    entriesCountMinimum?: number;
    entriesEnumerable?: boolean;
    entriesGetter?: boolean;
    entriesSetter?: boolean;
    entriesWritable?: boolean;
    keysSymbol?: boolean;
    strict?: boolean;
}): boolean;
/**
 * @class PlainObjectItemFilter
 * @description Determine item with the filter of type of plain object.
 */
export class PlainObjectItemFilter {
    /**
     * @static test
     * @description Determine item with the filter of type of plain object.
     * @param {unknown} item Item that need to determine.
     * @param {object} [param1={}] Options.
     * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
     * @param {boolean} [param1.entriesConfigurable] Whether contain configurable entries in the plain object.
     * @param {number} [param1.entriesCount] Entries of the plain object.
     * @param {number} [param1.entriesCountMaximum=Infinity] Maximum entries of the plain object.
     * @param {number} [param1.entriesCountMinimum=1] Minimum entries of the plain object.
     * @param {boolean} [param1.entriesEnumerable] Whether contain enumerable entries in the plain object.
     * @param {boolean} [param1.entriesGetter] Whether contain getter entries in the plain object.
     * @param {boolean} [param1.entriesSetter] Whether contain setter entries in the plain object.
     * @param {boolean} [param1.entriesWritable] Whether contain writable entries in the plain object.
     * @param {boolean} [param1.keysSymbol] Whether contain symbols in the plain object keys.
     * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
     * @returns {boolean} Determine result.
     */
    static test(item: unknown, { allowEmpty, entriesConfigurable, entriesCount, entriesCountMaximum, entriesCountMinimum, entriesEnumerable, entriesGetter, entriesSetter, entriesWritable, keysSymbol, strict, ...aliases }?: {
        allowEmpty?: boolean;
        entriesConfigurable?: boolean;
        entriesCount?: number;
        entriesCountMaximum?: number;
        entriesCountMinimum?: number;
        entriesEnumerable?: boolean;
        entriesGetter?: boolean;
        entriesSetter?: boolean;
        entriesWritable?: boolean;
        keysSymbol?: boolean;
        strict?: boolean;
    }): boolean;
    /**
     * @constructor
     * @description Initialize the filter of type of plain object to determine item.
     * @param {object} [param0={}] Options.
     * @param {boolean} [param0.allowEmpty=false] Whether to allow an empty plain object.
     * @param {boolean} [param0.entriesConfigurable] Whether contain configurable entries in the plain object.
     * @param {number} [param0.entriesCount] Entries of the plain object.
     * @param {number} [param0.entriesCountMaximum=Infinity] Maximum entries of the plain object.
     * @param {number} [param0.entriesCountMinimum=1] Minimum entries of the plain object.
     * @param {boolean} [param0.entriesEnumerable] Whether contain enumerable entries in the plain object.
     * @param {boolean} [param0.entriesGetter] Whether contain getter entries in the plain object.
     * @param {boolean} [param0.entriesSetter] Whether contain setter entries in the plain object.
     * @param {boolean} [param0.entriesWritable] Whether contain writable entries in the plain object.
     * @param {boolean} [param0.keysSymbol] Whether contain symbols in the plain object keys.
     * @param {boolean} [param0.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
    */
    constructor({ allowEmpty, entriesConfigurable, entriesCount, entriesCountMaximum, entriesCountMinimum, entriesEnumerable, entriesGetter, entriesSetter, entriesWritable, keysSymbol, strict, ...aliases }?: {
        allowEmpty?: boolean;
        entriesConfigurable?: boolean;
        entriesCount?: number;
        entriesCountMaximum?: number;
        entriesCountMinimum?: number;
        entriesEnumerable?: boolean;
        entriesGetter?: boolean;
        entriesSetter?: boolean;
        entriesWritable?: boolean;
        keysSymbol?: boolean;
        strict?: boolean;
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
export { isPlainObject as isObjectPlain, PlainObjectItemFilter as ObjectPlainItemFilter };
//# sourceMappingURL=plain-object.d.ts.map