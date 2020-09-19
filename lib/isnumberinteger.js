/*==================
[NodeJS] Advanced Determine - Is Number Integer
	Language:
		NodeJS 14
==================*/
const isNumber = require("./isnumber.js");
/**
 * @function isNumberInteger
 * @alias isNumInt
 * @description Determine item is type of integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberInteger(item) {
	return (
		isNumber(item) === true && Number.isInteger(item) === true
	);
};
module.exports = isNumberInteger;
