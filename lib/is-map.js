const isNumberInternal = require("./internal/is-number.js");
const undefinish = require("@hugoalh/undefinish");
/**
 * @function isMap
 * @description Determine item is type of map or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty map.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the map.
 * @param {number} [param1.minimumSize=1] Minimum size of the map.
 * @returns {item is Map} Determine result.
 */
function isMap(item, {
	allowEmpty = false,
	maximumSize,
	minimumSize,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean") {
		throw new TypeError(`Argument \`allowEmpty\` must be type of boolean.`);
	}
	maximumSize = undefinish(maximumSize, aliases.maxSize, aliases.maximumSizes, aliases.maxSizes, aliases.maximumEntries, aliases.maxEntries, Infinity);
	if (maximumSize !== Infinity && !isNumberInternal(maximumSize, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumSize\` must be \`Infinity\` or type of number (integer, positive, and safe).`);
	}
	minimumSize = undefinish(minimumSize, aliases.minSize, aliases.minimumSizes, aliases.minSizes, aliases.minimumEntries, aliases.minEntries, 1);
	if (!isNumberInternal(minimumSize, {
		integer: true,
		maximum: maximumSize,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumSize\` must be type of number (integer, positive, and safe) and <= ${maximumSize}.`);
	}
	if (allowEmpty) {
		minimumSize = 0;
	}
	if (
		!(item instanceof Map) ||
		maximumSize < item.size ||
		item.size < minimumSize
	) {
		return false;
	}
	return true;
}
module.exports = isMap;
