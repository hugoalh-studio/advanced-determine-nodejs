export default isSet;
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the set.
 * @param {number} [param1.minimumSize=1] Minimum size of the set.
 * @returns {item is Set} Determine result.
 * @throws {TypeError} Argument `allowEmpty` is not type of boolean.
 * @throws {TypeError} Argument `maximumSize` is not a valid number.
 * @throws {TypeError} Argument `minimumSize` is not a valid number.
 */
declare function isSet(item: unknown, { allowEmpty, maximumSize, minimumSize, ...aliases }?: {
    allowEmpty?: boolean;
    maximumSize?: number;
    minimumSize?: number;
}): item is Set<any>;
//# sourceMappingURL=is-set.d.mts.map