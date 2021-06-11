const isArray = require("./is-array.js");
/**
 * @function isObject
 * @alias isObj
 * @description Determine item is type of object or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isObject(item) {
	return (typeof item === "object" && item !== null && isArray(item) === false);
};
module.exports = isObject;
