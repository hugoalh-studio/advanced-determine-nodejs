export = isJSON;
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowKeysAsterisks=true] Allow asterisk characters (`*`) in the JSON keys.
 * @param {boolean} [option.allowKeysHyphens=true] Allow hyphen characters (`-`) in the JSON keys.
 * @param {boolean} [option.allowKeysWhitespaces=true] Allow whitespaces in the JSON keys.
 * @param {boolean} [option.arrayRoot] Type of array as the root of the JSON.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.strict=false] Ensure type of array is not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [option.strictKeys=false] Ensure no illegal namespace characters in the JSON keys.
 * @returns {(boolean|null)} Determine result.
 */
declare function isJSON(item: any, option?: {
    allowKeysAsterisks?: boolean;
    allowKeysHyphens?: boolean;
    allowKeysWhitespaces?: boolean;
    arrayRoot?: boolean;
    checkElements?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    strict?: boolean;
    strictKeys?: boolean;
}): (boolean | null);
