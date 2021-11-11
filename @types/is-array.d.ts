export = isArray;
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {boolean} [option.super=false] Ensure no custom defined properties in the array.
 * @returns {(boolean|null)} Determine result.
 */
declare function isArray(item: any, option?: {
    checkElements?: Function;
    super?: boolean;
}): (boolean | null);
//# sourceMappingURL=is-array.d.ts.map