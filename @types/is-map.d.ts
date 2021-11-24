export = isMap;
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {Function} [option.checkKeys] A function to ensure keys types.
 * @param {Function} [option.checkValues] A function to ensure values types.
 * @param {boolean} [option.empty] An empty map.
 * @returns {boolean} Determine result.
 */
declare function isMap(item: any, option?: {
    checkElements?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    empty?: boolean;
}): boolean;
//# sourceMappingURL=is-map.d.ts.map