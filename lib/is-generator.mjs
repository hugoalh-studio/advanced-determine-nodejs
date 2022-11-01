import { types as utilTypes } from "util";
import isObject from "./is-object.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isGenerator
 * @description Determine item is type of generator or not.
 * @template {boolean|undefined} T
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {T} [param1.asynchronous] Whether an asynchronous generator.
 * @returns {item is (T extends true ? AsyncGenerator : Generator)} Determine result.
 */
function isGenerator(item, {
	asynchronous,
	...aliases
} = {}) {
	asynchronous = undefinish(asynchronous, aliases.async);
	if (typeof asynchronous !== "boolean" && typeof asynchronous !== "undefined") {
		throw new TypeError(`Argument \`asynchronous\` must be type of boolean or undefined!`);
	}
	if (
		!isObject(item) ||
		!utilTypes.isGeneratorObject(item) ||
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${(asynchronous === false) ? "" : "(?:Async)"}${(typeof asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "u")) !== 0 ||
		typeof item.next !== "function" ||
		typeof item.return !== "function" ||
		typeof item.throw !== "function"
	) {
		return false;
	}
	return true;
}
export default isGenerator;
