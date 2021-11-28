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
 * @param {boolean} [option.arrayRoot] Type of array as the root of the stringify JSON.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.empty] An empty stringify JSON.
 * @param {number} [option.maximumEntries=Infinity] Maximum entries of the stringify JSON.
 * @param {number} [option.minimumEntries=0] Minimum entries of the stringify JSON.
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the stringify JSON, and no illegal namespace characters in the stringify JSON keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the stringify JSON keys.
 * @returns {boolean} Determine result.
 */
declare function isStringifyJSON(item: any, option?: {
    arrayRoot?: boolean;
    checkEntries?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    empty?: boolean;
    maximumEntries?: number;
    minimumEntries?: number;
    strict?: boolean;
    strictKeys?: boolean;
}): boolean;
//# sourceMappingURL=is-stringify-json.d.ts.map