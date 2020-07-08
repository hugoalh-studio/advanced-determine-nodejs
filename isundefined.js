/*==================
[NodeJS] Advanced Determine - Is Undefined
	Language:
		NodeJS 14
==================*/
const fuzzyModeDefault = false;
const isJSON = require("./isjson.js");
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
			if (typeof config.fuzzyMode == "boolean") {
				fuzzyMode = config.fuzzyMode;
			} else {
				console.warn(`Invalid type of "fuzzyMode"! Require type of boolean. Ignored.`);
			};
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
