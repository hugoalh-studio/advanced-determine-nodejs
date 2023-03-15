/**
 * @function isSet
 * @description Determine item with the filter of type of set.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the set.
 * @param {number} [param1.minimumSize=1] Minimum size of the set.
 * @returns {boolean} Determine result.
 */
export function isSet(item: unknown, { allowEmpty, maximumSize, minimumSize, ...aliases }?: {
    allowEmpty?: boolean;
    maximumSize?: number;
    minimumSize?: number;
}): boolean;
//# sourceMappingURL=set.d.ts.map