/*==================
[NodeJS] Advanced Determine - Is Undefined
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isJSON = require("./isjson.js");
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
	if (isJSON(option) == true) {
		if (option.allowStringify) {
			if (typeof option.allowStringify != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowStringify"! Require type of boolean.`);
			};
			runtime.allowStringify = option.allowStringify;
		};
	};
	if (typeof item == "undefined") {
		return true;
	};
	if (runtime.allowStringify == true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
module.exports = isUndefined;
