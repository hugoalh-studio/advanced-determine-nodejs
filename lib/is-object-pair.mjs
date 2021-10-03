import * as utility from "util";
import isPlainObject from "./is-plain-object.mjs";
const isPlainObjectWrapper = utility.deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!");
/**
 * @deprecated
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return isPlainObjectWrapper(...inputs);
};
export default isObjectPair;
