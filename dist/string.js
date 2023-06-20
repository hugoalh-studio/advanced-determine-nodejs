const newLineRegExp = /[\n\r]/u;
/**
 * @function isStringASCII
 * @description Whether the string is ASCII.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringASCII(item) {
    for (let character of item.split("")) {
        if (character.charCodeAt(0) >= 128) {
            return false;
        }
    }
    return true;
}
/**
 * @function isStringLowerCase
 * @description Whether the string is lower case.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item) {
    return (item === item.toLowerCase());
}
/**
 * @function isStringMultipleLine
 * @description Whether the string is multiple line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item) {
    return newLineRegExp.test(item);
}
/**
 * @function isStringSingleLine
 * @description Whether the string is single line.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item) {
    return !newLineRegExp.test(item);
}
/**
 * @function isStringUpperCase
 * @description Whether the string is upper case.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item) {
    return (item === item.toUpperCase());
}
export { isStringASCII, isStringLowerCase, isStringMultipleLine, isStringSingleLine, isStringUpperCase };
