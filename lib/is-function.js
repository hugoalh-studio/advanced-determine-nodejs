/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isFunction(item) {
	return (typeof item === "function");
};
module.exports = isFunction;
