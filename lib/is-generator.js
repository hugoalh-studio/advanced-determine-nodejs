const $isPlainObject = require("./internal/is-plain-object.js");
const isObject = require("./is-object.js");
const utility = require("util");
/**
 * @function isGenerator
 * @description Determine item is type of generator or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.asynchronous] An asynchronous generator.
 * @returns {boolean} Determine result.
 */
function isGenerator(item, option = {}) {
	if ($isPlainObject(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	if (typeof option.asynchronous !== "boolean" && typeof option.asynchronous !== "undefined") {
		throw new TypeError(`Argument \`option.asynchronous\` must be type of boolean or undefined!`);
	};
	if (
		isObject(item) !== true ||
		utility.types.isGeneratorObject(item) === false ||
		Object.prototype.toString.call(item).search(new RegExp(`^\\[object ${(option.asynchronous === false) ? "" : "(?:Async)"}${(typeof option.asynchronous === "undefined") ? "?" : ""}Generator\\]$`, "gu")) !== 0 ||
		typeof item.next !== "function" ||
		typeof item.return !== "function" ||
		typeof item.throw !== "function"
	) {
		return false;
	};
	return true;
};
module.exports = isGenerator;
