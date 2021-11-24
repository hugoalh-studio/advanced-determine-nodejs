export = isStringifyJSON;
/**
 * @function isStringifyJSON
 * @alias isJSONStr
 * @alias isJSONStringified
 * @alias isJSONStringify
 * @alias isStringifiedJSON
 * @alias isStrJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowKeysAsterisks=true] Allow asterisk characters (`*`) in the stringify JSON keys.
 * @param {boolean} [option.allowKeysHyphens=true] Allow hyphen characters (`-`) in the stringify JSON keys.
 * @param {boolean} [option.allowKeysWhitespaces=true] Allow whitespaces in the stringify JSON keys.
 * @param {boolean} [option.arrayRoot] Type of array as the root of the stringify JSON.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.empty] An empty stringify JSON.
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the stringify JSON keys.
 * @returns {boolean} Determine result.
 */
declare function isStringifyJSON(item: any, option?: {
    allowKeysAsterisks?: boolean;
    allowKeysHyphens?: boolean;
    allowKeysWhitespaces?: boolean;
    arrayRoot?: boolean;
    checkElements?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    empty?: boolean;
    strict?: boolean;
    strictKeys?: boolean;
}): boolean;
//# sourceMappingURL=is-stringify-json.d.ts.map