/*==================
[NodeJS] Advanced Determine - Internal Service
	Language:
		NodeJS 14
==================*/
const config = require("./config.js");
/**
 * @function customError
 * @param {string} message
 * @returns {undefined}
 */
function customError(message) {
	if (config.ignoreError() == true) {
		console.error(message);
		return undefined;
	};
	throw new Error(message);
};
/**
 * @function customTypeError
 * @param {string} message
 * @returns {undefined}
 */
function customTypeError(message) {
	if (config.ignoreError() == true) {
		console.error(message);
		return undefined;
	};
	throw new TypeError(message);
};
module.export.customError = customError;
module.export.customTypeError = customTypeError;
