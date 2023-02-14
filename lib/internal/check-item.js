/**
 * @access private
 * @function checkNumber
 * @param {unknown} item
 * @returns {boolean}
 */
function checkNumber(item) {
	return (typeof item === "number" && !Number.isNaN(item));
}
/**
 * @access private
 * @function checkNumberWithMaximum
 * @param {unknown} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberWithMaximum(item, maximum) {
	return (checkNumber(item) && item <= maximum);
}
/**
 * @access private
 * @function checkNumberIPS
 * @param {unknown} item
 * @returns {boolean}
 */
function checkNumberIPS(item) {
	return (checkNumber(item) && Number.isSafeInteger(item) && item >= 0);
}
/**
 * @access private
 * @function checkNumberIPSWithMaximum
 * @param {unknown} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberIPSWithMaximum(item, maximum) {
	return (checkNumberIPS(item) && item <= maximum);
}
export {
	checkNumber,
	checkNumberWithMaximum,
	checkNumberIPS,
	checkNumberIPSWithMaximum
};
