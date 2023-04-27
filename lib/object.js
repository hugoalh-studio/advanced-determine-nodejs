import undefinish from "@hugoalh/undefinish";
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
	#allowArray;
	#allowNull;
	#allowRegExp;
	/**
	 * @constructor
	 * @description Initialize the filter of type of object to determine item.
	 * @param {object} [param0={}] Options.
	 * @param {boolean} [param0.allowArray=false] Whether to allow `Array` object.
	 * @param {boolean} [param0.allowNull=false] Whether to allow `null` object.
	 * @param {boolean} [param0.allowRegExp=false] Whether to allow `RegExp` object.
	 */
	constructor({
		allowArray = false,
		allowNull = false,
		allowRegExp,
		...aliases
	} = {}) {
		allowRegExp = undefinish(allowRegExp, aliases.allowRegularExpression, false);
		if (typeof allowArray !== "boolean") {
			throw new TypeError(`Filter argument \`allowArray\` must be type of boolean!`);
		}
		if (typeof allowNull !== "boolean") {
			throw new TypeError(`Filter argument \`allowNull\` must be type of boolean!`);
		}
		if (typeof allowRegExp !== "boolean") {
			throw new TypeError(`Filter argument \`allowRegExp\` must be type of boolean!`);
		}
		this.#allowArray = allowArray;
		this.#allowNull = allowNull;
		this.#allowRegExp = allowRegExp;
	}
	/**
	 * @method test
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item) {
		if (
			typeof item !== "object" ||
			(!this.#allowArray && Array.isArray(item)) ||
			(!this.#allowNull && item === null) ||
			(!this.#allowRegExp && item instanceof RegExp)
		) {
			return false;
		}
		return true;
	}
	/**
	 * @static test
	 * @description Determine item with the filter of type of object.
	 * @param {unknown} item Item that need to determine.
	 * @param {object} [param1={}] Options.
	 * @param {boolean} [param1.allowArray=false] Whether to allow `Array` object.
	 * @param {boolean} [param1.allowNull=false] Whether to allow `null` object.
	 * @param {boolean} [param1.allowRegExp=false] Whether to allow `RegExp` object.
	 * @returns {boolean} Determine result.
	 */
	static test(item, {
		allowArray = false,
		allowNull = false,
		allowRegExp,
		...aliases
	} = {}) {
		return new this({
			allowArray,
			allowNull,
			allowRegExp,
			...aliases
		}).test(item);
	}
}
/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @param {object} [param1={}] Options.
 * @param {boolean} [param1.allowArray=false] Whether to allow `Array` object.
 * @param {boolean} [param1.allowNull=false] Whether to allow `null` object.
 * @param {boolean} [param1.allowRegExp=false] Whether to allow `RegExp` object.
 * @returns {boolean} Determine result.
 */
function isObject(item, {
	allowArray = false,
	allowNull = false,
	allowRegExp,
	...aliases
} = {}) {
	return new ObjectItemFilter({
		allowArray,
		allowNull,
		allowRegExp,
		...aliases
	}).test(item);
}
export {
	isObject,
	ObjectItemFilter
};
