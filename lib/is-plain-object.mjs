import isNumberInternal from "./internal/is-number.mjs";
import isPlainObjectInternal from "./internal/is-plain-object.mjs";
import undefinish from "@hugoalh/undefinish";
/**
 * @function isPlainObject
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPlain
 * @alias isPlainObj
 * @description Determine item is type of plain object or not.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.configurableEntries] Whether contain configurable entries in the plain object.
 * @param {boolean} [param1.allowEmpty=false] Whether to allow an empty plain object.
 * @param {boolean} [param1.enumerableEntries] Whether contain enumerable entries in the plain object.
 * @param {boolean} [param1.getterEntries] Whether contain getter entries in the plain object.
 * @param {number} [param1.maximumEntries=Infinity] Maximum entries of the plain object.
 * @param {number} [param1.minimumEntries=1] Minimum entries of the plain object.
 * @param {boolean} [param1.setterEntries] Whether contain setter entries in the plain object.
 * @param {boolean} [param1.strict=false] Whether to determine no custom defined properties (i.e.: getters, setters, non-configurable, non-enumerable, and non-writable) in the plain object, and no symbols in the plain object keys.
 * @param {boolean} [param1.symbolKeys] Whether contain symbols in the plain object keys.
 * @param {boolean} [param1.writableEntries] Whether contain writable entries in the plain object.
 * @returns {ReturnType<typeof isPlainObjectInternal>} Determine result.
 */
function isPlainObject(item, {
	allowEmpty = false,
	configurableEntries,
	enumerableEntries,
	getterEntries,
	maximumEntries,
	minimumEntries,
	setterEntries,
	strict,
	symbolKeys,
	writableEntries,
	...aliases
} = {}) {
	if (typeof allowEmpty !== "boolean") {
		throw new TypeError(`Argument \`allowEmpty\` must be type of boolean!`);
	}
	if (typeof configurableEntries !== "boolean" && typeof configurableEntries !== "undefined") {
		throw new TypeError(`Argument \`configurableEntries\` must be type of boolean or undefined!`);
	}
	if (typeof enumerableEntries !== "boolean" && typeof enumerableEntries !== "undefined") {
		throw new TypeError(`Argument \`elementsEnumerable\` must be type of boolean or undefined!`);
	}
	if (typeof getterEntries !== "boolean" && typeof getterEntries !== "undefined") {
		throw new TypeError(`Argument \`getterEntries\` must be type of boolean or undefined!`);
	}
	maximumEntries = undefinish(maximumEntries, aliases.maxEntries, Infinity);
	if (maximumEntries !== Infinity && !isNumberInternal(maximumEntries, {
		integer: true,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`maximumEntries\` must be \`Infinity\` or type of number (integer, positive, and safe)!`);
	}
	minimumEntries = undefinish(minimumEntries, aliases.minEntries, 1);
	if (!isNumberInternal(minimumEntries, {
		integer: true,
		maximum: maximumEntries,
		positive: true,
		safe: true
	})) {
		throw new TypeError(`Argument \`minimumEntries\` must be type of number (integer, positive, and safe) and <= ${maximumEntries}!`);
	}
	if (typeof setterEntries !== "boolean" && typeof setterEntries !== "undefined") {
		throw new TypeError(`Argument \`setterEntries\` must be type of boolean or undefined!`);
	}
	strict = undefinish(strict, aliases.super, false);
	if (typeof strict !== "boolean") {
		throw new TypeError(`Argument \`strict\` must be type of boolean!`);
	}
	if (typeof symbolKeys !== "boolean" && typeof symbolKeys !== "undefined") {
		throw new TypeError(`Argument \`keysSymbols\` must be type of boolean or undefined!`);
	}
	if (typeof writableEntries !== "boolean" && typeof writableEntries !== "undefined") {
		throw new TypeError(`Argument \`elementsWritable\` must be type of boolean or undefined!`);
	}
	if (allowEmpty) {
		minimumEntries = 0;
	}
	if (strict) {
		configurableEntries = true;
		enumerableEntries = true;
		getterEntries = false;
		setterEntries = false;
		symbolKeys = false;
		writableEntries = true;
	}
	return isPlainObjectInternal(item, {
		configurableEntries,
		enumerableEntries,
		getterEntries,
		maximumEntries,
		minimumEntries,
		setterEntries,
		symbolKeys,
		writableEntries
	});
}
export default isPlainObject;
