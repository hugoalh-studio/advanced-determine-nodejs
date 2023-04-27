interface ObjectItemFilterOptions {
	/**
	 * @property allowArray
	 * @description Whether to allow `Array` object.
	 * @default false
	 */
	allowArray?: boolean;
	/**
	 * @property allowNull
	 * @description Whether to allow `null` object.
	 * @default false
	 */
	allowNull?: boolean;
	/**
	 * @property allowRegExp
	 * @description Whether to allow `RegExp` object.
	 * @default false
	 */
	allowRegExp?: boolean;
	/** @alias allowRegExp */allowRegularExpression?: boolean;
}
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
	#allowArray: boolean;
	#allowNull: boolean;
	#allowRegExp: boolean;
	/**
	 * @constructor
	 * @description Initialize the filter of type of object to determine item.
	 * @param {ObjectItemFilterOptions} [options={}] Options.
	 */
	constructor(options: ObjectItemFilterOptions = {}) {
		let {
			allowArray = false,
			allowNull = false,
			allowRegExp,
			...aliases
		} = options;
		allowRegExp ??= aliases.allowRegularExpression ?? false;
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
	test(item: unknown): boolean {
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
	 * @param {ObjectItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: ObjectItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
}
/**
 * @function isObject
 * @description Determine item with the filter of type of object.
 * @param {unknown} item Item that need to determine.
 * @param {ObjectItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isObject(item: unknown, options: ObjectItemFilterOptions = {}): boolean {
	return new ObjectItemFilter(options).test(item);
}
export {
	isObject,
	ObjectItemFilter,
	type ObjectItemFilterOptions
};
