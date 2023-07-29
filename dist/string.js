const newLineRegExp = /[\n\r]/u;
/**
 * Determine whether the string is ASCII.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringASCII(item) {
    for (let character of item.split("")) {
        if (character.charCodeAt(0) >= 128) {
            return false;
        }
    }
    return true;
}
/**
 * Determine whether the string is lower case.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringLowerCase(item) {
    return (item === item.toLowerCase());
}
/**
 * Determine whether the string is multiple line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringMultipleLine(item) {
    return newLineRegExp.test(item);
}
/**
 * Determine whether the string is single line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringSingleLine(item) {
    return !newLineRegExp.test(item);
}
/**
 * Determine whether the string is upper case.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringUpperCase(item) {
    return (item === item.toUpperCase());
}
