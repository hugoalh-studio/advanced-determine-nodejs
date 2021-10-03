const isPlainObject = require("./is-plain-object.js");
const utility = require("util");
const isPlainObjectWrapper = utility.deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!");
/**
 * @deprecated
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return isPlainObjectWrapper(...inputs);
};
module.exports = isObjectPair;
