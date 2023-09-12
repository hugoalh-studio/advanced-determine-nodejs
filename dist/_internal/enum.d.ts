export type EnumCase<T extends string> = T | Capitalize<T> | Uncapitalize<T>;
/**
 * @template {unknown} O
 * @template {unknown} S
 * @param {object} enumObject
 * @param {O | S} input
 * @param {string} parameterDescription
 * @returns {O}
 */
export declare function resolveEnum<O, S>(enumObject: object, input: O | S, parameterDescription: string): O;
//# sourceMappingURL=enum.d.ts.map