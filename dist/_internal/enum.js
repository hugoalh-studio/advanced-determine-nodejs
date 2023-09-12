/**
 * @template {unknown} O
 * @template {unknown} S
 * @param {object} enumObject
 * @param {O | S} input
 * @param {string} parameterDescription
 * @returns {O}
 */
export function resolveEnum(enumObject, input, parameterDescription) {
    if (Object.values(enumObject).includes(input)) {
        return input;
    }
    if (typeof input !== "string") {
        throw new TypeError(`${parameterDescription.slice(0, 1).toUpperCase()}${parameterDescription.slice(1)} is not a string!`);
    }
    for (const key of Object.keys(enumObject)) {
        if (input === key ||
            input === `${key.slice(0, 1).toLowerCase()}${key.slice(1)}` ||
            input === `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`) {
            //@ts-ignore Determine error.
            return enumObject[key];
        }
    }
    throw new RangeError(`\`${input}\` is not a valid value for ${parameterDescription.slice(0, 1).toLowerCase()}${parameterDescription.slice(1)}! Only accept these values: "${Array.from(new Set(Object.keys(enumObject).flatMap((value) => {
        return [value, `${value.slice(0, 1).toLowerCase()}${value.slice(1)}`, `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`];
    })).values()).sort().join("\", \"")}"`);
}
