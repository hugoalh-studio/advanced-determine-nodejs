export = isSet;
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to check elements.
 * @param {boolean} [option.empty] An empty set.
 * @param {number} [option.maximumSize=Infinity] Maximum size of the set.
 * @param {number} [option.minimumSize=0] Minimum size of the set.
 * @returns {boolean} Determine result.
 */
declare function isSet(item: any, option?: {
    checkElements?: Function;
    empty?: boolean;
    maximumSize?: number;
    minimumSize?: number;
}): boolean;
//# sourceMappingURL=is-set.d.ts.map