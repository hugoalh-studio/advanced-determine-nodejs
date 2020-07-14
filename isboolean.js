/*==================
[NodeJS] Advanced Determine - Is Boolean
	Language:
		NodeJS 14
==================*/
const isJSON = require("./isjson.js");
/**
 * @function isBoolean
 * @description Determine item is type of boolean or not.
 * @param {*} item Item that need to determine.
 * @param {object} [configuration] Configuration.
 * @param {boolean} [configuration.fuzzyMode=false] Enable/Disable fuzzy mode.
 * @returns {boolean} Determine result.
 */
function isBoolean(item, configuration) {
	let runtime = {
		fuzzyMode: false
	};
	if (isJSON(configuration) == true) {
		if (configuration.fuzzyMode) {
			if (typeof configuration.fuzzyMode == "boolean") {
				runtime.fuzzyMode = configuration.fuzzyMode;
			} else {
				console.warn(`Invalid type of "configuration.fuzzyMode"! Require type of boolean. Ignored this parameter.`);
			};
		};
	};
	if (typeof item == "boolean") {
		return true;
	};
	if (runtime.fuzzyMode == true) {
		if (item === "true" || item === "false") {
			return true;
		};
	};
	return false;
};
module.exports = isBoolean;
