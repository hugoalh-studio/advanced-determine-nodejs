import isObject from "./is-object.mjs";
import isObjectPairInternal from "./internal/is-object-pair.mjs";
/**
 * @function isGenerator
 * @description Determine item is type of generator or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.asynchronous] An asynchronous function.
 * @returns {boolean} Determine result.
 */
function isGenerator(item, option = {}) {
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	if (typeof option.asynchronous !== "boolean" && typeof option.asynchronous !== "undefined") {
		throw new TypeError(`Argument \`option.asynchronous\` must be type of boolean or undefined!`);
	};
	if (isObject(item) !== true) {
		return false;
	};
	if (
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${(option.asynchronous === false) ? "" : "(?:Async)"}${(typeof option.asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "gu")) !== 0 ||
		typeof item.next !== "function" ||
		typeof item.return !== "function" ||
		typeof item.throw !== "function"
	) {
		return false;
	};
	return true;
};
export default isGenerator;
