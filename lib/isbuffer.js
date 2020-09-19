/*==================
[NodeJS] Advanced Determine - Is Buffer
	Language:
		NodeJS 14
==================*/
const isObjectPair = require("./isobjectpair.js");
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
	if (isObjectPair(option) === true) {
		if (typeof option.method !== "undefined") {
			if (isString(option.method) !== true) {
				throw new TypeError(`Argument "option.method" must be type of string (non-nullable)! ([NodeJS] Advanced Determine - Is Buffer)`);
			};
			runtime.method = option.method.toLowerCase();
		};
	};
	switch (runtime.method) {
		case "classic":
			return (
				item !== null && item !== undefined && item.constructor !== null && item.constructor !== undefined && typeof item.constructor.isBuffer === "function" && item.constructor.isBuffer(item)
			);
			break;
		case "node":
			return Buffer.isBuffer(item);
			break;
		default:
			throw new RangeError(`Argument "option.method"'s value is not in the method list! Read the documentation for more information. ([NodeJS] Advanced Determine - Is Buffer)`);
			break;
	};
};
module.exports = isBuffer;
