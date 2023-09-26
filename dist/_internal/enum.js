/**
 * @template {unknown} O
 * @template {unknown} K
 * @param {object} enumObject
 * @returns {Set<K>}
 */
export function enumGetKeys(enumObject) {
    return new Set(Object.keys(enumObject).sort());
}
/**
 * @template {unknown} O
 * @template {unknown} K
 * @template {unknown} V
 * @param {object} enumObject
 * @param {O | K} input
 * @returns {V | undefined}
 */
export function enumResolve(enumObject, input) {
    if (Object.values(enumObject).includes(input)) {
        return input;
    }
    try {
        return enumObject[input];
    }
    catch {
        return undefined;
    }
}
