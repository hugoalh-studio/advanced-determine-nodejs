import uniqueArray from "@hugoalh/unique-array";
const arrayIndexRegExp = /^(?:0|[1-9]\d*)$/u;
/**
 * Determine whether the array is not contain custom defined properties.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayStrict(item) {
    const itemPrototype = Object.getPrototypeOf(item);
    if ((itemPrototype !== null && itemPrototype !== Array.prototype) ||
        Object.getOwnPropertySymbols(item).length > 0) {
        return false;
    }
    const itemDescriptors = Object.getOwnPropertyDescriptors(item);
    for (const itemPropertyKey in itemDescriptors) {
        if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
            if (arrayIndexRegExp.test(itemPropertyKey) && Number(itemPropertyKey) < 4294967296) {
                const itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
                if (!itemPropertyDescriptor.configurable ||
                    !itemPropertyDescriptor.enumerable ||
                    typeof itemPropertyDescriptor.get !== "undefined" ||
                    typeof itemPropertyDescriptor.set !== "undefined" ||
                    !itemPropertyDescriptor.writable) {
                    return false;
                }
            }
            else if (itemPropertyKey === "length") {
                const itemPropertyDescriptor = itemDescriptors[itemPropertyKey];
                if (itemPropertyDescriptor.configurable ||
                    itemPropertyDescriptor.enumerable ||
                    typeof itemPropertyDescriptor.get !== "undefined" ||
                    typeof itemPropertyDescriptor.set !== "undefined" ||
                    !itemPropertyDescriptor.writable) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    return true;
}
/**
 * Determine whether the array is contain unique references.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayUniqueReference(item) {
    return (new Set(item).size === item.length);
}
/**
 * Determine whether the array is contain unique elements.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayUnique(item) {
    return (uniqueArray(item).length === item.length);
}
