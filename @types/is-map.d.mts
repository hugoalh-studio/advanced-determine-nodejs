export default isMap;
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkEntries] A function to check entries.
 * @param {Function} [option.checkKeys] A function to check keys.
 * @param {Function} [option.checkValues] A function to check values.
 * @param {boolean} [option.empty] An empty map.
 * @param {number} [option.maximumSize=Infinity] Maximum size of the map.
 * @param {number} [option.minimumSize=0] Minimum size of the map.
 * @returns {boolean} Determine result.
 */
declare function isMap(item: any, option?: {
    checkEntries?: Function;
    checkKeys?: Function;
    checkValues?: Function;
    empty?: boolean;
    maximumSize?: number;
    minimumSize?: number;
}): boolean;
//# sourceMappingURL=is-map.d.mts.map