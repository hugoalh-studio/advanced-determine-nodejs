import { deprecate } from "util";
import isPlainObject from "./is-plain-object.mjs";
const isPlainObjectWrapper = deprecate(isPlainObject, "Function `isObjectPair` is replaced by `isPlainObject`!");
/**
 * @deprecated Replaced by `isPlainObject`.
 * @function isObjectPair
 * @alias isObjPair
 */
function isObjectPair(...inputs) {
	return isPlainObjectWrapper(...inputs);
};
export default isObjectPair;
