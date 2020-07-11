/*==================
[NodeJS] Advanced Determine - Is Undefined
	Language:
		NodeJS 14
==================*/
const isJSON = require("./isjson.js");
/**
 * @function isUndefined
 * @alias isUdf
 * @description Determine item is type of undefined or not.
 * @param {*} item Item that need to determine.
 * @param {object} [configuration] Configuration.
 * @param {boolean} [configuration.fuzzyMode=false] Enable/Disable fuzzy mode.
 * @returns {boolean} Determine result.
 */
function isUndefined(item, configuration) {
	let modeFuzzy = false;
	if (isJSON(configuration) == true) {
		if (configuration.fuzzyMode) {
			if (typeof configuration.fuzzyMode == "boolean") {
				modeFuzzy = configuration.fuzzyMode;
			} else {
				console.warn(`Invalid type of "configuration.fuzzyMode"! Require type of boolean. Ignored this parameter.`);
			};
		};
	};
	if (typeof item == "undefined") {
		return true;
	};
	if (modeFuzzy == true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
module.exports = isUndefined;
