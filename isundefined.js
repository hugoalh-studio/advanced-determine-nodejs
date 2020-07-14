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
 * @param {object} [option] Option.
 * @param {boolean} [option.fuzzyMode=false] Enable/Disable fuzzy mode.
 * @returns {boolean} Determine result.
 */
function isUndefined(item, option) {
	let runtime = {
		fuzzyMode: false
	};
	if (isJSON(option) == true) {
		if (option.fuzzyMode) {
			if (typeof option.fuzzyMode == "boolean") {
				runtime.fuzzyMode = option.fuzzyMode;
			} else {
				console.warn(`Invalid type of "option.fuzzyMode"! Require type of boolean. Ignored this parameter.`);
			};
		};
	};
	if (typeof item == "undefined") {
		return true;
	};
	if (runtime.fuzzyMode == true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
module.exports = isUndefined;
