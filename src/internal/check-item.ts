/**
 * @function checkNumber
 * @param {number} item
 * @returns {boolean}
 */
function checkNumber(item: number): boolean {
	return (typeof item === "number" && !Number.isNaN(item));
}
/**
 * @function checkNumberIPS
 * @param {number} item
 * @returns {boolean}
 */
function checkNumberIPS(item: number): boolean {
	return (checkNumber(item) && Number.isSafeInteger(item) && item >= 0);
}
/**
 * @function checkNumberIPSWithMaximum
 * @param {number} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberIPSWithMaximum(item: number, maximum: number): boolean {
	return (checkNumberIPS(item) && item <= maximum);
}
/**
 * @function checkNumberWithMaximum
 * @param {number} item
 * @param {number} maximum
 * @returns {boolean}
 */
function checkNumberWithMaximum(item: number, maximum: number): boolean {
	return (checkNumber(item) && item <= maximum);
}
export {
	checkNumber,
	checkNumberIPS,
	checkNumberIPSWithMaximum,
	checkNumberWithMaximum
};
