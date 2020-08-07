/*==================
[NodeJS] Advanced Determine - Is Buffer
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isObject = require("./isobject.js");
const isString = require("./isstring.js");
/**
 * @function isBuffer
 * @alias isBuf
 * @description Determine item is type of buffer or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {string} [option.method="node"] Method to determine.
 * @returns {boolean} Determine result.
 */
function isBuffer(item, option) {
	let runtime = {
		method: "node"
	};
	if (isObject(option) == true) {
		if (typeof option.method != "undefined") {
			if (isString(option.method) != true) {
				return internalService.typeError(`Invalid type of "option.method"! Require type of string.`);
			};
			runtime.method = option.method.toLowerCase();
		};
	};
	switch (runtime.method) {
		case "classic":
			return (
				item !== null && item !== undefined && item.constructor !== null && item.constructor !== undefined && typeof item.constructor.isBuffer == "function" && item.constructor.isBuffer(item)
			);
			break;
		case "node":
			return (
				Buffer.isBuffer(item)
			);
			break;
		default:
			return internalService.referenceError(`Invalid reference of "option.method"! (Read the documentation for more information.)`);
			break;
	};
};
module.exports = isBuffer;
