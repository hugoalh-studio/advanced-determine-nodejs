/*==================
[NodeJS] Advanced Determine - Is Boolean
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isJSON = require("./isjson.js");
/**
 * @function isBoolean
 * @description Determine item is type of boolean or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @returns {boolean} Determine result.
 */
function isBoolean(item, option) {
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
	if (typeof item == "boolean") {
		return true;
	};
	if (runtime.allowStringify == true) {
		if (
			item === "true" ||
			item === "false"
		) {
			return true;
		};
	};
	return false;
};
module.exports = isBoolean;
