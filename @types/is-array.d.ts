export = isArray;
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {boolean} [option.empty] An empty array.
 * @param {boolean} [option.super=false] Ensure no custom defined properties in the array.
 * @returns {boolean} Determine result.
 */
declare function isArray(item: any, option?: {
    checkElements?: Function;
    empty?: boolean;
    super?: boolean;
}): boolean;
//# sourceMappingURL=is-array.d.ts.map