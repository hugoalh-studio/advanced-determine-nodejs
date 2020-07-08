/*==================
[NodeJS] Advanced Determine - Is String
	Language:
		NodeJS 14
==================*/
const fuzzyModeDefault = false;
const isJSON = require("./isjson.js");
/**
 * @function isString
 * @alias isStr
 * @param {*} item
 * @param {object} [config]
 * @param {boolean} [config.fuzzyMode=false]
 * @returns {(boolean|null)}
 */
function isString(item, config) {
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
	if (typeof item != "string") {
		return false;
	};
	if (item.length == 0) {
		return null;
	};
	if (fuzzyMode == true) {
		if (item === "null") {
			return null;
		};
	};
	return true;
};
module.exports = isString;
