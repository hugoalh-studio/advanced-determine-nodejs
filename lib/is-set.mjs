import isNumberInternal from "./internal/is-number.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isSet
 * @description Determine item is type of set or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty set.
 * @param {number} [param1.maximumSize=Infinity] Maximum size of the set.
 * @param {number} [param1.minimumSize=0] Minimum size of the set.
 * @returns {item is Set} Determine result.
 */
function isSet(item, {
	allowEmpty = false,
	maximumSize,
	minimumSize,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean") {
		throw new TypeError(`Argument \`empty\` must be type of boolean!`);
	}
	maximumSize = undefinish(maximumSize, aliases.maximumSizes, aliases.maxSize, aliases.maxSizes, Infinity);
	if (maximumSize !== Infinity && !isNumberInternal(maximumSize, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumSize\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
	}
	minimumSize = undefinish(minimumSize, aliases.minimumSizes, aliases.minSize, aliases.minSizes, 0);
	if (!isNumberInternal(minimumSize, {
		integer: true,
		maximum: maximumSize,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumSize\` must be type of number (integer, positive, and safe) and <= ${maximumSize}!`);
	}
	if (allowEmpty) {
		minimumSize = 0;
	}
	if (
		!(item instanceof Set) ||
		maximumSize < item.size ||
		item.size < minimumSize
	) {
		return false;
	}
	return true;
}
export default isSet;
