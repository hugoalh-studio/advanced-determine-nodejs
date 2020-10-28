/*==================
[NodeJS] Advanced Determine - Is Symbol
	Language:
		NodeJS/10.13.0
==================*/
/**
 * @function isSymbol
 * @description Determine item is type of symbol or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isSymbol(item) {
	return (typeof item === "symbol");
};
module.exports = isSymbol;
