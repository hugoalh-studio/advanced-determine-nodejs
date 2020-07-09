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
 * @param {*} item Item that need to determine.
 * @param {object} [configuration]
 * @param {boolean} [configuration.fuzzyMode=false]
 * @returns {boolean} Determine result.
 */
function isUndefined(item, configuration) {
	let fuzzyMode = fuzzyModeDefault;
	if (isJSON(configuration) == true) {
		if (configuration.fuzzyMode) {
			if (typeof configuration.fuzzyMode == "boolean") {
				fuzzyMode = configuration.fuzzyMode;
			} else {
				console.warn(`Invalid type of "configuration.fuzzyMode"! Require type of boolean. Ignored.`);
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
