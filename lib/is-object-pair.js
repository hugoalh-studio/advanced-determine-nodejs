const isPlainObject = require("./is-plain-object.js");
const utility = require("util");
/**
 * @deprecated
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return utility.deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!")(...inputs);
};
module.exports = isObjectPair;
