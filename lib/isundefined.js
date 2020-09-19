/*==================
[NodeJS] Advanced Determine - Is Undefined
	Language:
		NodeJS 14
==================*/
const isObjectPair = require("./isobjectpair.js");
/**
 * @function isUndefined
 * @alias isUdf
 * @description Determine item is type of undefined or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @returns {boolean} Determine result.
 */
function isUndefined(item, option) {
	let runtime = {
		allowStringify: false
	};
	if (isObjectPair(option) === true) {
		if (typeof option.allowStringify !== "undefined") {
			if (typeof option.allowStringify !== "boolean") {
				throw new TypeError(`Argument "option.allowStringify" must be type of boolean! ([NodeJS] Advanced Determine - Is Undefined)`);
			};
			runtime.allowStringify = option.allowStringify;
		};
	};
	if (typeof item === "undefined") {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
module.exports = isUndefined;
