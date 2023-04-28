interface ObjectItemFilterOptionsBase {
	/**
	 * @property allowArray
	 * @description Whether to allow `Array` object.
	 * @default false
	 */
	allowArray: boolean;
	/**
	 * @property allowNull
	 * @description Whether to allow `null` object.
	 * @default false
	 */
	allowNull: boolean;
	/**
	 * @property allowRegExp
	 * @description Whether to allow `RegExp` object.
	 * @default false
	 */
	allowRegExp: boolean;
}
interface ObjectItemFilterOptions extends Partial<ObjectItemFilterOptionsBase> {
	/** @alias allowRegExp */allowRegularExpression?: boolean;
}
/**
 * @class ObjectItemFilter
 * @description Determine item with the filter of type of object.
 */
class ObjectItemFilter {
	#allowArray = false;
	#allowNull = false;
	#allowRegExp = false;
	/**
	 * @constructor
	 * @description Initialize the filter of type of object to determine item.
	 * @param {ObjectItemFilter | ObjectItemFilterOptions} [options] Options.
	 */
	constructor(options?: ObjectItemFilter | ObjectItemFilterOptions) {
		if (options instanceof ObjectItemFilter) {
			this.#allowArray = options.#allowArray;
			this.#allowNull = options.#allowNull;
			this.#allowRegExp = options.#allowRegExp;
		} else if (typeof options !== "undefined") {
			options.allowRegExp ??= options.allowRegularExpression;
			for (let option of ["allowArray", "allowNull", "allowRegExp"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {ObjectItemFilter}
	 */
	get clone(): ObjectItemFilter {
		return new ObjectItemFilter(this);
	}
	/**
	 * @method status
	 * @description Status of this filter.
	 * @returns {ObjectItemFilterOptionsBase}
	 */
	get status(): ObjectItemFilterOptionsBase {
		return {
			allowArray: this.#allowArray,
			allowNull: this.#allowNull,
			allowRegExp: this.#allowRegExp
		};
	}
	/**
	 * @method allowArray
	 * @description Whether to allow `Array` object.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowArray(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowArray\` must be type of boolean!`);
		}
		this.#allowArray = value;
		return this;
	}
	/**
	 * @method allowNull
	 * @description Whether to allow `null` object.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowNull(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowNull\` must be type of boolean!`);
		}
		this.#allowNull = value;
		return this;
	}
	/**
	 * @method allowRegExp
	 * @description Whether to allow `RegExp` object.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowRegExp(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowRegExp\` must be type of boolean!`);
		}
		this.#allowRegExp = value;
		return this;
	}
	/** @alias allowRegExp */allowRegularExpression = this.allowRegExp;
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
	type ObjectItemFilterOptions,
	type ObjectItemFilterOptionsBase
};
