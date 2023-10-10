/**
 * @template {unknown} K
 * @param {object} enumObject
 * @returns {Set<K>}
 */
export declare function enumGetKeys<K>(enumObject: object): Set<K>;
/**
 * @template {unknown} O
 * @template {unknown} K
 * @template {unknown} V
 * @param {object} enumObject
 * @param {O | K} input
 * @returns {V | undefined}
 */
export declare function enumResolve<O, K, V>(enumObject: object, input: O | K): V | undefined;
//# sourceMappingURL=enum.d.ts.map