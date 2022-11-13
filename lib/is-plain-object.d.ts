export = isPlainObject;
/**
 * @function isPlainObject
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPlain
 * @alias isPlainObj
 * @description Determine item is type of plain object or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.configurableEntries] Whether contain configurable entries in the plain object.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
 * @param {boolean} [param1.enumerableEntries] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.getterEntries] Whether contain getter entries in the plain object.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the plain object.
 * @param {boolean} [param1.setterEntries] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @param {boolean} [param1.symbolKeys] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.writableEntries] Whether contain writable entries in the plain object.
 * @returns {ReturnType<typeof isPlainObjectInternal>} Determine result.
 */
declare function isPlainObject(item: unknown, { allowEmpty, configurableEntries, enumerableEntries, getterEntries, maximumEntries, minimumEntries, setterEntries, strict, symbolKeys, writableEntries, ...aliases }?: {
    configurableEntries?: boolean;
    allowEmpty?: boolean;
    enumerableEntries?: boolean;
    getterEntries?: boolean;
    maximumEntries?: number;
    minimumEntries?: number;
    setterEntries?: boolean;
    strict?: boolean;
    symbolKeys?: boolean;
    writableEntries?: boolean;
}): ReturnType<typeof isPlainObjectInternal>;
import isPlainObjectInternal = require("./internal/is-plain-object.js");
//# sourceMappingURL=is-plain-object.d.ts.map