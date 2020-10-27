/*==================
[NodeJS] Advanced Determine - Is Buffer
	Language:
		NodeJS/10.0.0
==================*/
const isObjectPair = require("./isobjectpair.js"),
	isString = require("./isstring.js");
/**
 * @function isBuffer
 * @alias isBuf
 * @description Determine item is type of buffer or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.method] Method to determine.
 * @returns {boolean} Determine result.
 */
function isBuffer(item, option = {}) {
	let runtime = {
		method: process ? "node" : "classic"
	};
	if (isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] Advanced Determine - Is Buffer)`);
	};
	if (typeof option.method !== "undefined") {
		if (isString(option.method) !== true) {
			throw new TypeError(`Argument "option.method" must be type of string (non-nullable)! ([NodeJS] Advanced Determine - Is Buffer)`);
		};
		runtime.method = option.method.toLowerCase();
	};
	switch (runtime.method) {
		case "classic":
			return (item !== null && item !== undefined && item.constructor !== null && item.constructor !== undefined && typeof item.constructor.isBuffer === "function" && item.constructor.isBuffer(item));
		case "node":
			return Buffer.isBuffer(item);
		default:
			throw new RangeError(`Argument "option.method"'s value is not in the method list! Read the documentation for more information. ([NodeJS] Advanced Determine - Is Buffer)`);
	};
};
module.exports = isBuffer;
