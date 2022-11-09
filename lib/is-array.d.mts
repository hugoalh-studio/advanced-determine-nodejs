export default isArray;
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty array.
 * @param {number} [param1.maximumLength=Infinity] Maximum length of the array.
 * @param {number} [param1.minimumLength=1] Minimum length of the array.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties in the array.
 * @param {boolean} [param1.unique=false] Whether to determine all of the elements in the array are unique.
 * @returns {ReturnType<typeof isArrayInternal>} Determine result.
 * @throws {TypeError} Argument `allowEmpty` is not type of boolean.
 * @throws {TypeError} Argument `maximumLength` is not a valid number.
 * @throws {TypeError} Argument `minimumLength` is not a valid number.
 * @throws {TypeError} Argument `strict` is not type of boolean.
 * @throws {TypeError} Argument `unique` is not type of boolean.
 */
declare function isArray(item: unknown, { allowEmpty, maximumLength, minimumLength, strict, unique, ...aliases }?: {
    allowEmpty?: boolean;
    maximumLength?: number;
    minimumLength?: number;
    strict?: boolean;
    unique?: boolean;
}): ReturnType<typeof isArrayInternal>;
import isArrayInternal from "./internal/is-array.mjs";
//# sourceMappingURL=is-array.d.mts.map