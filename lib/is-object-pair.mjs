import * as utility from "util";
import isPlainObject from "./is-plain-object.mjs";
/**
 * @deprecated
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return utility.deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!")(...inputs);
};
export default isObjectPair;
