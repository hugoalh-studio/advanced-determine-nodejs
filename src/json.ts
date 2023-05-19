import { ArrayItemFilter } from "./array.js";
import { enumResolver, JSONRootTypeEnum, type JSONRootTypeEnumKeysType, type JSONRootTypeEnumValuesType } from "./internal/enum.js";
import { PlainObjectItemFilter } from "./plain-object.js";
const jsonArrayFilter: ArrayItemFilter = new ArrayItemFilter().allowEmpty().strict();
const jsonObjectFilter: PlainObjectItemFilter = new PlainObjectItemFilter().allowEmpty().strict();
const jsonLegalKeysPatternRegExp = /^[$_A-Za-z][$\d_A-Za-z]*$/u;
interface JSONItemFilterOptionsBase {
	/**
	 * @property entriesCountMaximum
	 * @description Maximum entries count of the JSON.
	 * @default Infinity
	 */
	entriesCountMaximum: number;
	/**
	 * @property entriesCountMinimum
	 * @description Minimum entries count of the JSON.
	 * @default 1
	 */
	entriesCountMinimum: number;
	/**
	 * @property keysPattern
	 * @description Whether a pattern matchable JSON keys.
	 * @default undefined
	 */
	keysPattern?: RegExp;
	/**
	 * @property rootType
	 * @description Root type of the JSON.
	 * @default "any"
	 */
	rootType: JSONRootTypeEnumValuesType;
}
interface JSONItemFilterOptions extends Partial<Omit<JSONItemFilterOptionsBase, "rootType">> {
	/**
	 * @property allowEmpty
	 * @description Whether to allow an empty JSON.
	 * @default false
	 */
	allowEmpty?: boolean;
	/**
	 * @property entriesCount
	 * @description Entries count of the JSON.
	 * @default undefined
	 */
	entriesCount?: number;
	/**
	 * @property rootType
	 * @description Root type of the JSON.
	 * @default "any"
	 */
	rootType?: JSONRootTypeEnumKeysType;
	/**
	 * @property strict
	 * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @default false
	 */
	strict?: boolean;
	/**
	 * @property strictKeys
	 * @description Whether to determine no illegal namespace characters in the JSON keys.
	 * @default false
	 */
	strictKeys?: boolean;
	/** @alias entriesCountMaximum */entriesCountMax?: number;
	/** @alias entriesCountMaximum */maxEntries?: number;
	/** @alias entriesCountMaximum */maximumEntries?: number;
	/** @alias entriesCountMinimum */entriesCountMin?: number;
	/** @alias entriesCountMinimum */minEntries?: number;
	/** @alias entriesCountMinimum */minimumEntries?: number;
	/** @alias strictKeys */keysStrict?: boolean;
	/**
	 * @property arrayRoot
	 * @description Whether type of array as the root of the JSON.
	 * @default undefined
	 * @deprecated Replaced by property `rootType`.
	 */
	arrayRoot?: boolean;
	/**
	 * @alias entries
	 * @deprecated Replaced by property `entriesCount`.
	 */
	entries?: number;
	/**
	 * @alias entriesMax
	 * @deprecated Replaced by property `entriesCountMaximum`.
	 */
	entriesMax?: number;
	/**
	 * @alias entriesMax
	 * @deprecated Replaced by property `entriesCountMaximum`.
	 */
	entriesMaximum?: number;
	/**
	 * @alias entriesMin
	 * @deprecated Replaced by property `entriesCountMinimum`.
	 */
	entriesMin?: number;
	/**
	 * @alias entriesMin
	 * @deprecated Replaced by property `entriesCountMinimum`.
	 */
	entriesMinimum?: number;
}
/**
 * @access private
 * @function isJSONValue
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONValue(item: unknown, keysPattern?: RegExp): boolean {
	return (
		typeof item === "boolean" ||
		isJSONInternal(item, keysPattern) ||
		item === null ||
		(typeof item === "number" && !Number.isNaN(item)) ||
		typeof item === "string"
	);
}
/**
 * @access private
 * @function isJSONInternal
 * @param {unknown} item Item that need to determine.
 * @param {RegExp} [keysPattern] Whether a pattern matchable JSON keys.
 * @returns {boolean}
 */
function isJSONInternal(item: unknown, keysPattern?: RegExp): boolean {
	if (jsonArrayFilter.test(item)) {
		for (let itemElement of (item as unknown[])) {
			if (!isJSONValue(itemElement, keysPattern)) {
				return false;
			}
		}
		return true;
	}
	if (jsonObjectFilter.test(item)) {
		try {
			JSON.stringify(item);
		} catch {
			return false;
		}
		for (let itemKey of Object.keys(item)) {
			if (
				(keysPattern instanceof RegExp && !keysPattern.test(itemKey)) ||
				!isJSONValue(item[itemKey], keysPattern)
			) {
				return false;
			}
		}
		return true;
	}
	return false;
}
/**
 * @class JSONItemFilter
 * @description Determine item with the filter of type of JSON.
 */
class JSONItemFilter {
	#entriesCountMaximum = Infinity;
	#entriesCountMinimum = 1;
	#keysPattern?: RegExp;
	#rootType: JSONRootTypeEnumValuesType = "any";
	/**
	 * @constructor
	 * @description Initialize the filter of type of JSON to determine item.
	 * @param {JSONItemFilter | JSONItemFilterOptions} [options] Options.
	 */
	constructor(options?: JSONItemFilter | JSONItemFilterOptions) {
		if (options instanceof JSONItemFilter) {
			this.#entriesCountMaximum = options.#entriesCountMaximum;
			this.#entriesCountMinimum = options.#entriesCountMinimum;
			this.#keysPattern = options.#keysPattern;
			this.#rootType = options.#rootType;
		} else if (typeof options !== "undefined") {
			options.entriesCount ??= options.entries;
			options.entriesCountMaximum ??= options.entriesCountMax ?? options.entriesMaximum ?? options.entriesMax ?? options.maximumEntries ?? options.maxEntries;
			options.entriesCountMinimum ??= options.entriesCountMin ?? options.entriesMinimum ?? options.entriesMin ?? options.minimumEntries ?? options.minEntries;
			options.strictKeys ??= options.keysStrict ?? false;
			if (options.arrayRoot === false) {
				this.rootType("object");
			}
			if (options.arrayRoot === true) {
				this.rootType("array");
			}
			for (let option of ["entriesCountMaximum", "entriesCountMinimum", "keysPattern", "rootType", "strictKeys", "allowEmpty", "entriesCount", "strict"]) {
				if (typeof options[option] !== "undefined") {
					this[option](options[option]);
				}
			}
		}
	}
	/**
	 * @method clone
	 * @description Clone this filter for reuse.
	 * @returns {JSONItemFilter} Another instance of this filter.
	 */
	get clone(): JSONItemFilter {
		return new JSONItemFilter(this);
	}
	/**
	 * @method status
	 * @description Get the status of this filter.
	 * @returns {JSONItemFilterOptionsBase} Status of this filter.
	 */
	get status(): JSONItemFilterOptionsBase {
		return {
			entriesCountMaximum: this.#entriesCountMaximum,
			entriesCountMinimum: this.#entriesCountMinimum,
			keysPattern: this.#keysPattern,
			rootType: this.#rootType
		};
	}
	/**
	 * @method allowEmpty
	 * @description Whether to allow an empty JSON.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	allowEmpty(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`allowEmpty\` must be type of boolean!`);
		}
		this.#entriesCountMinimum = value ? 0 : 1;
		return this;
	}
	/**
	 * @method entriesCount
	 * @description Entries count of the JSON.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCount(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCount\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0)) {
			throw new RangeError(`Filter argument \`entriesCount\` must be a number which is integer, positive, and safe!`);
		}
		this.#entriesCountMaximum = value;
		this.#entriesCountMinimum = value;
		return this;
	}
	/**
	 * @method entriesCountMaximum
	 * @description Maximum entries count of the JSON.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCountMaximum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCountMaximum\` must be type of number!`);
		}
		if (value !== Infinity && !(Number.isSafeInteger(value) && value >= 0 && value >= this.#entriesCountMinimum)) {
			throw new RangeError(`Filter argument \`entriesCountMaximum\` must be \`Infinity\`, or a number which is integer, positive, safe, and >= ${this.#entriesCountMinimum}!`);
		}
		this.#entriesCountMaximum = value;
		return this;
	}
	/**
	 * @method entriesCountMinimum
	 * @description Minimum entries count of the JSON.
	 * @param {number} value
	 * @returns {this}
	 */
	entriesCountMinimum(value: number): this {
		if (!(typeof value === "number" && !Number.isNaN(value))) {
			throw new TypeError(`Filter argument \`entriesCountMinimum\` must be type of number!`);
		}
		if (!(Number.isSafeInteger(value) && value >= 0 && value <= this.#entriesCountMaximum)) {
			throw new RangeError(`Filter argument \`entriesCountMinimum\` must be a number which is integer, positive, safe, and <= ${this.#entriesCountMaximum}!`);
		}
		this.#entriesCountMinimum = value;
		return this;
	}
	/**
	 * @method keysPattern
	 * @description Whether a pattern matchable JSON keys.
	 * @param {RegExp | undefined} [value]
	 * @returns {this}
	 */
	keysPattern(value?: RegExp | undefined): this {
		if (!(value instanceof RegExp) && typeof value !== "undefined") {
			throw new TypeError(`Filter argument \`keysPattern\` must be instance of regular expression, or type of undefined!`);
		}
		this.#keysPattern = value;
		return this;
	}
	/**
	 * @method rootType
	 * @description Root type of the JSON.
	 * @param {JSONRootTypeEnumKeysType} value
	 * @returns {this}
	 */
	rootType(value: JSONRootTypeEnumKeysType): this {
		if (typeof value !== "string") {
			throw new TypeError(`Filter argument \`rootType\` must be type of string!`);
		}
		let valueResolve: JSONRootTypeEnumValuesType | undefined = enumResolver<JSONRootTypeEnumKeysType, JSONRootTypeEnumValuesType>(JSONRootTypeEnum, value);
		if (typeof valueResolve !== "string") {
			throw new RangeError(`Filter argument \`rootType\` must be match either of these values: "${Object.keys(JSONRootTypeEnum).sort().join("\", \"")}"`);
		}
		this.#rootType = valueResolve;
		return this;
	}
	/**
	 * @method strict
	 * @description Whether to determine type of array not as the root of the JSON, and no illegal namespace characters in the JSON keys.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	strict(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`strict\` must be type of boolean!`);
		}
		if (value) {
			this.#keysPattern = jsonLegalKeysPatternRegExp;
			this.#rootType = "object";
		} else {
			this.#keysPattern = undefined;
			this.#rootType = "any";
		}
		return this;
	}
	/**
	 * @method strictKeys
	 * @description Whether to determine no illegal namespace characters in the JSON keys.
	 * @param {boolean} [value=true]
	 * @returns {this}
	 */
	strictKeys(value = true): this {
		if (typeof value !== "boolean") {
			throw new TypeError(`Filter argument \`strictKeys\` must be type of boolean!`);
		}
		this.#keysPattern = value ? jsonLegalKeysPatternRegExp : undefined;
		return this;
	}
	/** @alias entriesCountMaximum */entriesCountMax = this.entriesCountMaximum;
	/** @alias entriesCountMaximum */maxEntries = this.entriesCountMaximum;
	/** @alias entriesCountMaximum */maximumEntries = this.entriesCountMaximum;
	/** @alias entriesCountMinimum */entriesCountMin = this.entriesCountMinimum;
	/** @alias entriesCountMinimum */minEntries = this.entriesCountMinimum;
	/** @alias entriesCountMinimum */minimumEntries = this.entriesCountMinimum;
	/** @alias strictKeys */keysStrict = this.strictKeys;
	/**
	 * @method test
	 * @description Determine item with the configured filter of type of JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	test(item: unknown): boolean {
		let itemEntriesCount: number = Object.entries(item).length;
		if (
			!isJSONInternal(item, this.#keysPattern) ||
			(this.#rootType === "array" && !Array.isArray(item)) ||
			(this.#rootType === "object" && Array.isArray(item)) ||
			this.#entriesCountMaximum < itemEntriesCount ||
			itemEntriesCount < this.#entriesCountMinimum
		) {
			return false;
		}
		return true;
	}
	/**
	 * @method testStringify
	 * @description Determine item with the configured filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @returns {boolean} Determine result.
	 */
	testStringify(item: unknown): boolean {
		if (typeof item !== "string") {
			return false;
		}
		let itemParse: object;
		try {
			itemParse = JSON.parse(item);
		} catch {
			return false;
		}
		return this.test(itemParse);
	}
	/** @alias testStringify */stringifiedTest = this.testStringify;
	/** @alias testStringify */stringifyTest = this.testStringify;
	/** @alias testStringify */testStringified = this.testStringify;
	/**
	 * @static test
	 * @description Determine item with the filter of type of JSON.
	 * @param {unknown} item Item that need to determine.
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static test(item: unknown, options: JSONItemFilterOptions = {}): boolean {
		return new this(options).test(item);
	}
	/**
	 * @static testStringify
	 * @description Determine item with the filter of type of stringify JSON.
	 * @param {unknown} item Item that need to determine.
	 * @param {JSONItemFilterOptions} [options={}] Options.
	 * @returns {boolean} Determine result.
	 */
	static testStringify(item: unknown, options: JSONItemFilterOptions = {}): boolean {
		return new this(options).testStringify(item);
	}
	/** @alias testStringify */static stringifiedTest = this.testStringify;
	/** @alias testStringify */static stringifyTest = this.testStringify;
	/** @alias testStringify */static testStringified = this.testStringify;
}
/**
 * @function isJSON
 * @description Determine item with the filter of type of JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isJSON(item: unknown, options: JSONItemFilterOptions = {}): boolean {
	return new JSONItemFilter(options).test(item);
}
/**
 * @function isStringifyJSON
 * @description Determine item with the filter of type of stringify JSON.
 * @param {unknown} item Item that need to determine.
 * @param {JSONItemFilterOptions} [options={}] Options.
 * @returns {boolean} Determine result.
 */
function isStringifyJSON(item: unknown, options: JSONItemFilterOptions = {}): boolean {
	return new JSONItemFilter(options).testStringify(item);
}
export {
	isJSON,
	isStringifyJSON,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isStringifyJSON as isStringifiedJSON,
	JSONItemFilter,
	type JSONItemFilterOptions,
	type JSONItemFilterOptionsBase
};
