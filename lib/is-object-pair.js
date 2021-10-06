const deprecate = require("util").deprecate;
const isPlainObject = require("./is-plain-object.js");
const isPlainObjectWrapper = deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!");
/**
 * @deprecated Replaced by `isPlainObject`.
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return isPlainObjectWrapper(...inputs);
};
module.exports = isObjectPair;
