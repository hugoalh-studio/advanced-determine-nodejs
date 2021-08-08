/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {any} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumber(item) {
	return (typeof item === "number" && Number.isNaN(item) === false);
};
export default isNumber;
