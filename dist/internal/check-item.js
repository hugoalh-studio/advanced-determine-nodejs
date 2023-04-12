/**
 * @function checkNumber
 * @param {number} item
 * @returns {boolean}
 */
function checkNumber(item) {
    return (typeof item === "number" && !Number.isNaN(item));
}
/**
 * @function checkNumberIPS
 * @param {number} item
 * @returns {boolean}
 */
function checkNumberIPS(item) {
    return (checkNumber(item) && Number.isSafeInteger(item) && item >= 0);
}
/**
 * @function checkNumberIPSWithMaximum
 * @param {number} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberIPSWithMaximum(item, maximum) {
    return (checkNumberIPS(item) && item <= maximum);
}
/**
 * @function checkNumberWithMaximum
 * @param {number} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberWithMaximum(item, maximum) {
    return (checkNumber(item) && item <= maximum);
}
export { checkNumber, checkNumberIPS, checkNumberIPSWithMaximum, checkNumberWithMaximum };
