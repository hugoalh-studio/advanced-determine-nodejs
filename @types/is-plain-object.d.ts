export = isPlainObject;
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
 * @param {boolean} [option.allowKeysAsterisks=true] Allow asterisk characters (`*`) in the plain object keys.
 * @param {boolean} [option.allowKeysHyphens=true] Allow hyphen characters (`-`) in the plain object keys.
 * @param {boolean} [option.allowKeysWhitespaces=true] Allow whitespaces in the plain object keys.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.containGetters] Contain custom getters in the plain object.
 * @param {boolean} [option.containSetters] Contain custom setters in the plain object.
 * @param {boolean} [option.elementsConfigurable] Configurable elements/properties in the plain object.
 * @param {boolean} [option.elementsEnumerable] Enumerable elements/properties in the plain object.
 * @param {boolean} [option.elementsWritable] Writable elements/properties in the plain object.
 * @param {boolean} [option.keysSymbols] Symbols in the plain object keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the plain object keys.
 * @param {boolean} [option.super=false] Ensure no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @returns {(boolean|null)} Determine result.
 */
declare function isPlainObject(item: any, option?: {
    allowKeysAsterisks?: boolean;
    allowKeysHyphens?: boolean;
    allowKeysWhitespaces?: boolean;
    checkElements?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    containGetters?: boolean;
    containSetters?: boolean;
    elementsConfigurable?: boolean;
    elementsEnumerable?: boolean;
    elementsWritable?: boolean;
    keysSymbols?: boolean;
    strictKeys?: boolean;
    super?: boolean;
}): (boolean | null);
