/*==================
[NodeJS] Advanced Determine - Is String
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isJSON = require("./isjson.js");
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item, option) {
	let runtime = {
		allowWhitespace: true
	};
	if (isJSON(option) == true) {
		if (option.allowWhitespace) {
			if (typeof option.allowWhitespace != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowWhitespace"! Require type of boolean.`);
			};
			runtime.allowWhitespace = option.allowWhitespace;
		};
	};
	if (typeof item != "string") {
		return false;
	};
	if (runtime.allowWhitespace == false) {
		item = item.replace(/[\s\t\r\n]/gu, "");
	};
	if (item.length == 0) {
		return null;
	};
	return true;
};
module.exports = isString;
