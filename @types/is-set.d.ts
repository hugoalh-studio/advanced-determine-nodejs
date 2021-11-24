export = isSet;
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {Function} [option.checkElements] A function to ensure elements types.
 * @param {boolean} [option.empty] An empty set.
 * @returns {boolean} Determine result.
 */
declare function isSet(item: any, option?: {
    checkElements?: Function;
    empty?: boolean;
}): boolean;
//# sourceMappingURL=is-set.d.ts.map