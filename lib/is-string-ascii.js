const isString = require("./is-string.js");
/**
 * @function isStringASCII
 * @alias isStrASCII
 * @description Determine item is type of ASCII string or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowWhitespace=true] Allow whitespace from both ends of a string.
 * @returns {boolean} Determine result.
 */
function isStringASCII(item, option = {}) {
	if (isString(item, option) !== true) {
		return false;
	};
	for (let index = 0; index < item.length; index++) {
		if (item.charCodeAt(index) > 127) {
			return false;
		};
	};
	return true;
};
module.exports = isStringASCII;
