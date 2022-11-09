export default isJSON;
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty JSON.
 * @param {boolean} [param1.arrayRoot] Whether type of array as the root of the JSON.
 * @param {RegExp} [param1.keysPattern] Whether a pattern matchable JSON keys.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the JSON.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the JSON.
 * @param {boolean} [param1.strict=false] Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
 * @param {boolean} [param1.strictKeys=false] Whether to determine no illegal namespace characters in the JSON keys.
 * @returns {item is object} Determine result.
 * @throws {TypeError} Argument `allowEmpty` is not type of boolean.
 * @throws {TypeError} Argument `arrayRoot` is not type of boolean or undefined.
 * @throws {TypeError} Argument `keysPattern` is not type of regular expression or undefined.
 * @throws {TypeError} Argument `maximumEntries` is not a valid number.
 * @throws {TypeError} Argument `minimumEntries` is not a valid number.
 * @throws {TypeError} Argument `strict` is not type of boolean.
 * @throws {TypeError} Argument `strictKeys` is not type of boolean.
 */
declare function isJSON(item: unknown, { allowEmpty, arrayRoot, keysPattern, maximumEntries, minimumEntries, strict, strictKeys, ...aliases }?: {
    allowEmpty?: boolean;
    arrayRoot?: boolean;
    keysPattern?: RegExp;
    maximumEntries?: number;
    minimumEntries?: number;
    strict?: boolean;
    strictKeys?: boolean;
}): item is any;
//# sourceMappingURL=is-json.d.mts.map