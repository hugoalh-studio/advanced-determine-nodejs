export = isMap;
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.empty] An empty map.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the map.
 * @param {number} [param1.minimumSize=0] Minimum size of the map.
 * @returns {item is Map} Determine result.
 */
declare function isMap(item: unknown, { empty, maximumSize, minimumSize, ...aliases }?: {
    empty?: boolean;
    maximumSize?: number;
    minimumSize?: number;
}): item is Map<any, any>;
//# sourceMappingURL=is-map.d.ts.map