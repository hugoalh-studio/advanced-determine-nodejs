/*==================
[NodeJS] Advanced Determine - Is Undefined
	Language:
		NodeJS 14
==================*/
const fuzzyModeDefault = false;
const internalService = require("./internalservice.js");
/**
 * @function isUndefined
 * @alias isUdf
 * @param {*} item
 * @param {object} [config]
 * @param {boolean} [config.fuzzyMode=false]
 * @returns {boolean}
 */
function isUndefined(item, config) {
	let fuzzyMode = fuzzyModeDefault;
	if (isJSON(config) == true) {
		if (config.fuzzyMode) {
			if (typeof config.fuzzyMode != "boolean") {
				return internalService.customTypeError(`Invalid type of "fuzzyMode"! Require type of boolean.`);
			};
			fuzzyMode = config.fuzzyMode;
		};
	};
	if (typeof item == "undefined") {
		return true;
	};
	if (fuzzyMode == true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
module.exports = isUndefined;
