/**
 * @function isNumberInteger
 * @alias isInt
 * @alias isInteger
 * @alias isNumInt
 * @description Determine item is type of integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberInteger(item) {
	return (Number.isInteger(item) === true);
};
export default isNumberInteger;
