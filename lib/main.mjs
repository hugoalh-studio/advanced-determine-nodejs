// $<Note>$ Mono script is required in order to make function `batchDetermine` work at ModuleJS!
import * as assert from "assert";
const typeMapList = {
	"Array": /^(?:arr(?:ay)?|list)$/giu,
	"BigIntegerNegative": /^big-?int(?:eger)?-?n(?:egative|gt)$/giu,
	"BigIntegerPositive": /^big-?int(?:eger)?-?p(?:ositive|st)$/giu,
	"BigInteger": /^big-?int(?:eger)?$/giu,
	"Boolean": /^bool(?:ean)?$/giu,
	"Buffer": /^buf(?:fer)?$/giu,
	"DataView": /^data-?view$/giu,
	"Date": /^date$/giu,
	"Function": /^f(?:unctio)?n$/giu,
	"JSON": /^json$/giu,
	"Map": /^map$/giu,
	"Null": /^n(?:i|ul?)l$/giu,
	"NumberFloat": /^(?:num(?:ber)?-?)?fl(?:oa)?t$/giu,
	"NumberInteger": /^(?:num(?:ber)?-?)?int(?:eger)?$/giu,
	"NumberNegativeFloat": /^num(?:ber)?-?n(?:egative|gt)-?fl(?:oa)?t$/giu,
	"NumberNegativeInteger": /^num(?:ber)?-?n(?:egative|gt)-?int(?:eger)?$/giu,
	"NumberNegativeSafeFloat": /^num(?:ber)?-?n(?:egative|gt)-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"NumberNegativeSafeInteger": /^num(?:ber)?-?n(?:egative|gt)-?s(?:afe)?-?int(?:eger)?$/giu,
	"NumberNegative": /^num(?:ber)?-?n(?:egative|gt)$/giu,
	"NumberPositiveFloat": /^num(?:ber)?-?p(?:ositive|st)-?fl(?:oa)?t$/giu,
	"NumberPositiveInteger": /^num(?:ber)?-?p(?:ositive|st)-?int(?:eger)?$/giu,
	"NumberPositiveSafeFloat": /^num(?:ber)?-?p(?:ositive|st)-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"NumberPositiveSafeInteger": /^num(?:ber)?-?p(?:ositive|st)-?s(?:afe)?-?int(?:eger)?$/giu,
	"NumberPositive": /^num(?:ber)?-?p(?:ositive|st)$/giu,
	"NumberSafeFloat": /^num(?:ber)?-?s(?:afe)?-?fl(?:oa)?t$/giu,
	"NumberSafeInteger": /^num(?:ber)?-?s(?:afe)?-?int(?:eger)?$/giu,
	"Number": /^num(?:ber)?$/giu,
	"ObjectPair": /^(?:dict(?:ionary)?|obj(?:ect)?-?p(?:air|lain))$/giu,
	"Object": /^obj(?:ect)?$/giu,
	"RegularExpression": /^reg(?:ex(?:p|r)?|ular-?expression)$/giu,
	"Set": /^set$/giu,
	"StringASCII": /^str(?:ing)?-?ascii$/giu,
	"StringLowerCase": /^str(?:ing)?-?l(?:ower)?(?:-?c(?:ase)?)?$/giu,
	"StringMultipleLine": /^str(?:ing)?-?m(?:ulti(?:ple)?)?-?l(?:ine)?$/giu,
	"StringSingleLine": /^str(?:ing)?-?s(?:ingle)?-?l(?:ine)?$/giu,
	"StringUpperCase": /^str(?:ing)?-?u(?:pper)?(?:-?c(?:ase)?)?$/giu,
	"String": /^str(?:ing)?$/giu,
	"StringifyJSON": /^str(?:ingif(?:ied|y))?-?json$/giu,
	"Symbol": /^symbol$/giu,
	"Undefined": /^u(?:df|ndefined)$/giu,
	"WeakMap": /^(?:map-?weak|weak-?map)$/giu,
	"WeakSet": /^(?:set-?weak|weak-?set)$/giu
},
	version = 1;
const typeMapKey = Object.values(typeMapList),
	typeMapValue = Object.keys(typeMapList);
/**
 * @private
 * @function checkOption
 * @param {*} option
 * @returns {void}
 */
function checkOption(option) {
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
};
/**
 * @private
 * @function isArrayInternal
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isArrayInternal(item) {
	if (Array.isArray(item) === false) {
		return false;
	};
	return ((item.length > 0) ? true : null);
};
/**
 * @private
 * @function isObjectPairInternal
 * @param {*} item
 * @returns {(boolean|null)}
 */
function isObjectPairInternal(item) {
	if (
		isObject(item) !== true ||
		Object.keys(item).length !== Object.values(item).length ||
		item.constructor.name !== "Object"
	) {
		return false;
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		Object.keys(item).length === 0
	) {
		return null;
	};
	return true;
};
/**
 * @private
 * @function typeMap
 * @param {string} input
 * @returns {(string|undefined)}
 */
function typeMap(input) {
	for (let index = 0; index < typeMapKey.length; index++) {
		if (input.search(typeMapKey[index]) === 0) {
			return typeMapValue[index];
		};
	};
	return undefined;
};
/**
 * @function areEqual
 * @description Determine 2 items are equal or not.
 * @param {*} item1 Item 1 that need to determine.
 * @param {*} item2 Item 2 that need to determine.
 * @returns {boolean} Determine result.
 */
function areEqual(item1, item2) {
	if (item1 === item2) {
		return true;
	};
	let item1TypeOf = typeOf(item1),
		item2TypeOf = typeOf(item2);
	if (
		item1TypeOf !== item2TypeOf ||
		item1TypeOf === "nan" ||
		(item1TypeOf !== "array" && item1TypeOf !== "object")
	) {
		return false;
	};
	if (item1TypeOf === "array") {
		if (item1.length !== item2.length) {
			return false;
		};
		for (let index = 0; index < item1.length; index++) {
			if (areEqual(item1[index], item2[index]) === false) {
				return false;
			};
		};
		return true;
	};
	let item1IsObjectPair = isObjectPairInternal(item1),
		item2IsObjectPair = isObjectPairInternal(item2);
	if (item1IsObjectPair !== false && item2IsObjectPair !== false) {
		if (item1IsObjectPair !== item2IsObjectPair) {
			return false;
		};
		if (item1IsObjectPair === null && item2IsObjectPair === null) {
			return true;
		};
		let item1Key = Object.keys(item1),
			item2Key = Object.keys(item2);
		if (item1Key.length !== item2Key.length) {
			return false;
		};
		for (let index = 0; index < item1Key.length; index++) {
			let key = item1Key[index];
			if (item2Key.includes(key) === false) {
				return false;
			};
			if (areEqual(item1[key], item2[key]) === false) {
				return false;
			};
		};
		return true;
	};
	try {
		assert.notDeepStrictEqual(item1, item2);
	} catch (error) {
		return true;
	};
	return false;
};
/**
 * @private
 * @function batchInternal
 * @param {([string,object]|string)} condition
 * @param {*} items
 * @returns {(boolean|null)[]}
 */
function batchInternal(condition, ...items) {
	let typeDeterminerName,
		typeDeterminerOption;
	if (isString(condition) === true) {
		typeDeterminerName = condition;
	} else if (isArrayInternal(condition) === true) {
		if (isString(condition[0]) !== true) {
			throw new TypeError(`Argument \`typeDeterminerName\` must be type of string (non-nullable)!`);
		};
		if (condition.length > 2) {
			throw new SyntaxError(`Argument \`condition\` is not match the required pattern!`);
		};
		[typeDeterminerName, typeDeterminerOption] = condition;
	} else {
		throw new TypeError(`Argument \`condition\` must be type of array or string (non-nullable)!`);
	};
	if (items.length === 0) {
		throw new Error(`Argument \`items\` is not defined!`);
	};
	let typeDeterminerFile = typeMap(typeDeterminerName);
	if (typeof typeDeterminerFile === "undefined") {
		throw new SyntaxError(`Argument \`typeDeterminerName\`'s value is not in the list!`);
	};
	let resultObject = {};
	try {
		const typeDeterminerFunction = eval(`is${typeDeterminerFile}`);
		Promise.allSettled(
			items.map((item, index) => {
				new Promise(() => {
					resultObject[index] = typeDeterminerFunction(item, typeDeterminerOption);
				}).catch();
			})
		);
	} catch (error) {
		throw new Error(`Cannot find the module file \`is-${typeDeterminerFile}.js\`! Please reverify package.`);
	};
	return Object.values(resultObject);
};
/**
 * @function allIs
 * @description Determine items are match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(resultArray.includes(false) === true);
};
/**
 * @function allIsNot
 * @description Determine items are not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
};
/**
 * @function eitherIs
 * @description Determine any item is match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
};
/**
 * @function eitherIsNot
 * @description Determine any item is not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (resultArray.includes(false) === true);
};
/**
 * @function isArray
 * @alias isArr
 * @alias isList
 * @description Determine item is type of array or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.typeOfElement] Determine element type.
 * @returns {(boolean|null)} Determine result.
 */
function isArray(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfElement !== "undefined");
	if (dispatch === true) {
		if (isString(option.typeOfElement) !== true) {
			throw new TypeError(`Argument \`option.typeOfElement\` must be type of string (non-nullable)!`);
		};
	};
	if (Array.isArray(item) === false) {
		return false;
	};
	if (item.length === 0) {
		return null;
	};
	if (dispatch === false) {
		return true;
	};
	return allIs([option.typeOfElement, option], ...item);
};
/**
 * @function isBigIntegerNegative
 * @alias isBigIntNgt
 * @description Determine item is type of negative big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerNegative(item) {
	return (typeof item === "bigint" && item < 0n);
};
/**
 * @function isBigIntegerPositive
 * @alias isBigIntPst
 * @description Determine item is type of positive big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigIntegerPositive(item) {
	return (typeof item === "bigint" && item >= 0n);
};
/**
 * @function isBigInteger
 * @alias isBigInt
 * @description Determine item is type of big integer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBigInteger(item) {
	return (typeof item === "bigint");
};
/**
 * @function isBoolean
 * @alias isBool
 * @description Determine item is type of boolean or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @returns {boolean} Determine result.
 */
function isBoolean(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowStringify: false
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument \`option.allowStringify\` must be type of boolean!`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof item === "boolean") {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (
			item === "true" ||
			item === "false"
		) {
			return true;
		};
	};
	return false;
};
/**
 * @function isBuffer
 * @alias isBuf
 * @description Determine item is type of buffer or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isBuffer(item) {
	return Buffer.isBuffer(item);
};
/**
 * @function isDataView
 * @description Determine item is instance of data view or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isDataView(item) {
	return (item instanceof DataView);
};
/**
 * @function isDate
 * @description Determine item is instance of date or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isDate(item) {
	return (item instanceof Date);
};
/**
 * @function isFunction
 * @alias isFn
 * @description Determine item is type of function or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isFunction(item) {
	return (typeof item === "function");
};
/**
 * @function isJSON
 * @description Determine item is type of JSON or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the JSON.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isJSON(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined"),
		runtime = {
			allowArrayRoot: true
		};
	if (typeof option.allowArrayRoot !== "undefined") {
		if (typeof option.allowArrayRoot !== "boolean") {
			throw new TypeError(`Argument \`option.allowArrayRoot\` must be type of boolean!`);
		};
		runtime.allowArrayRoot = option.allowArrayRoot;
	};
	if (dispatch === true) {
		if (isString(option.typeOfValue) !== true) {
			throw new TypeError(`Argument \`option.typeOfValue\` must be type of string (non-nullable)!`);
		};
	};
	let isArrayResult = isArrayInternal(item),
		isObjectPairResult = isObjectPairInternal(item);
	if (runtime.allowArrayRoot === true && isArrayResult === true) {
		for (let index = 0; index < item.length; index++) {
			let element = item[index];
			if (!(
				typeof element === "boolean" ||
				isJSON(element) !== false ||
				element === null ||
				isNumber(element) !== false ||
				typeof element === "string"
			)) {
				return false;
			};
		};
		if (dispatch === false) {
			return true;
		};
		return allIs([option.typeOfValue, option], ...item);
	};
	if (isObjectPairResult === true) {
		let binValue = Object.values(item);
		for (let index = 0; index < binValue.length; index++) {
			let element = binValue[index];
			if (!(
				typeof element === "boolean" ||
				isJSON(element) !== false ||
				element === null ||
				isNumber(element) !== false ||
				typeof element === "string"
			)) {
				return false;
			};
		};
		let binStringify;
		try {
			binStringify = JSON.stringify(item);
		} catch (error) {
			return false;
		};
		if (
			Object.keys(item).length === 0 ||
			binStringify === "{}"
		) {
			return null;
		};
		if (dispatch === false) {
			return true;
		};
		return allIs([option.typeOfValue, option], ...Object.values(item));
	};
	if (
		(runtime.allowArrayRoot === true && isArrayResult === null) ||
		isObjectPairResult === null
	) {
		return null;
	};
	return false;
};
/**
 * @function isMap
 * @description Determine item is instance of map or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isMap(item) {
	return (item instanceof Map);
};
/**
 * @function isNull
 * @alias isNil
 * @alias isNul
 * @description Determine item is type of null or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.allowStringifyAlias=false] Allow alias stringify type.
 * @returns {boolean} Determine result.
 */
function isNull(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowStringify: false,
		allowStringifyAlias: false,
		allowExtend: false
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument \`option.allowStringify\` must be type of boolean!`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof option.allowStringifyAlias !== "undefined") {
		if (typeof option.allowStringifyAlias !== "boolean") {
			throw new TypeError(`Argument \`option.allowStringifyAlias\` must be type of boolean!`);
		};
		runtime.allowStringifyAlias = option.allowStringifyAlias;
	};
	if (typeof option.allowExtend !== "undefined") {
		if (typeof option.allowExtend !== "boolean") {
			throw new TypeError(`Argument \`option.allowExtend\` must be type of boolean!`);
		};
		runtime.allowExtend = option.allowExtend;
	};
	if (item === null) {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (item === "null") {
			return true;
		};
		if (runtime.allowStringifyAlias === true) {
			if (
				item === "nil" ||
				item === "nul"
			) {
				return true;
			};
		};
	};
	if (runtime.allowExtend === true) {
		if (
			isArrayInternal(item) === null ||
			isObjectPairInternal(item) === null ||
			isString(item) === null
		) {
			return true;
		};
	};
	return false;
};
/**
 * @function isNumberFloat
 * @alias isFloat
 * @alias isFlt
 * @alias isNumFlt
 * @description Determine item is type of float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberFloat(item) {
	return (isNumber(item) === true && Number.isInteger(item) === false);
};
/**
 * @function isNumberInteger
 * @alias isInt
 * @alias isInteger
 * @alias isNumInt
 * @description Determine item is type of integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberInteger(item) {
	return (Number.isInteger(item) === true);
};
/**
 * @function isNumberNegativeFloat
 * @alias isNumNgtFlt
 * @description Determine item is type of negative float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeFloat(item) {
	return (isNumberNegative(item) === true && Number.isInteger(item) === false);
};
/**
 * @function isNumberNegativeInteger
 * @alias isNumNgtInt
 * @description Determine item is type of negative integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeInteger(item) {
	return (isNumberNegative(item) === true && Number.isInteger(item) === true);
};
/**
 * @function isNumberNegativeSafeFloat
 * @alias isNumNgtSFlt
 * @description Determine item is type of safe negative float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeFloat(item) {
	return (isNumberNegativeFloat(item) === true && item > Number.MIN_SAFE_INTEGER);
};
/**
 * @function isNumberNegativeSafeInteger
 * @alias isNumNgtSInt
 * @description Determine item is type of safe negative integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegativeSafeInteger(item) {
	return (isNumberNegative(item) === true && Number.isSafeInteger(item) === true);
};
/**
 * @function isNumberNegative
 * @alias isNumNgt
 * @description Determine item is type of negative number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberNegative(item) {
	return (isNumber(item) === true && item < 0);
};
/**
 * @function isNumberPositiveFloat
 * @alias isNumPstFlt
 * @description Determine item is type of positive float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveFloat(item) {
	return (isNumberPositive(item) === true && Number.isInteger(item) === false);
};
/**
 * @function isNumberPositiveInteger
 * @alias isNumPstInt
 * @description Determine item is type of positive integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveInteger(item) {
	return (isNumberPositive(item) === true && Number.isInteger(item) === true);
};
/**
 * @function isNumberPositiveSafeFloat
 * @alias isNumPstSFlt
 * @description Determine item is type of safe positive float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeFloat(item) {
	return (isNumberPositiveFloat(item) === true && item < Number.MAX_SAFE_INTEGER);
};
/**
 * @function isNumberPositiveSafeInteger
 * @alias isNumPstSInt
 * @description Determine item is type of safe positive integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositiveSafeInteger(item) {
	return (isNumberPositive(item) === true && Number.isSafeInteger(item) === true);
};
/**
 * @function isNumberPositive
 * @alias isNumPst
 * @description Determine item is type of positive number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberPositive(item) {
	return (isNumber(item) === true && item >= 0);
};
/**
 * @function isNumberSafeFloat
 * @alias isNumSFlt
 * @description Determine item is type of safe float number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeFloat(item) {
	return (isNumberFloat(item) === true && item > Number.MIN_SAFE_INTEGER && item < Number.MAX_SAFE_INTEGER);
};
/**
 * @function isNumberSafeInteger
 * @alias isNumSInt
 * @description Determine item is type of safe integer number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumberSafeInteger(item) {
	return (Number.isSafeInteger(item) === true);
};
/**
 * @function isNumber
 * @alias isNum
 * @description Determine item is type of number or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isNumber(item) {
	return (typeof item === "number" && Number.isNaN(item) === false);
};
/**
 * @function isObjectPair
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPair
 * @alias isObjPlain
 * @description Determine item is type of object pair or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined");
	if (dispatch === true) {
		if (isString(option.typeOfValue) !== true) {
			throw new TypeError(`Argument \`option.typeOfValue\` must be type of string (non-nullable)!`);
		};
	};
	if (
		isObject(item) !== true ||
		Object.keys(item).length !== Object.values(item).length ||
		item.constructor.name !== "Object"
	) {
		return false;
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		Object.keys(item).length === 0
	) {
		return null;
	};
	if (dispatch === false) {
		return true;
	};
	return allIs([option.typeOfValue, option], ...Object.values(item));
};
/**
 * @function isObject
 * @alias isObj
 * @description Determine item is type of object or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isObject(item) {
	return (typeof item === "object" && item !== null && Array.isArray(item) === false);
};
/**
 * @function isRegularExpression
 * @alias isRegEx
 * @alias isRegExp
 * @alias isRegExr
 * @description Determine item is instance of regular expression or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isRegularExpression(item) {
	return (item instanceof RegExp);
};
/**
 * @function isSet
 * @description Determine item is instance of set or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isSet(item) {
	return (item instanceof Set);
};
/**
 * @function isStringASCII
 * @alias isStrASCII
 * @description Determine item is type of ASCII string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringASCII(item) {
	if (isString(item) !== true) {
		return false;
	};
	for (let index = 0; index < item.length; index++) {
		if (item.charCodeAt(index) > 127) {
			return false;
		};
	};
	return true;
};
/**
 * @function isStringLowerCase
 * @alias isStrL
 * @alias isStrLC
 * @description Determine item is type of lower case string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringLowerCase(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item === item.toLowerCase());
};
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @description Determine item is type of multiple line string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/giu) !== -1);
};
/**
 * @function isStringSingleLine
 * @alias isStringSL
 * @alias isStrSL
 * @description Determine item is type of single line string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringSingleLine(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/giu) === -1);
};
/**
 * @function isStringUpperCase
 * @alias isStrU
 * @alias isStrUC
 * @description Determine item is type of upper case string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringUpperCase(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item === item.toUpperCase());
};
/**
 * @function isString
 * @alias isStr
 * @description Determine item is type of string or not.
 * @param {*} item Item that need to determine.
 * @returns {(boolean|null)} Determine result.
 */
function isString(item) {
	if (typeof item !== "string") {
		return false;
	};
	return ((item.length > 0) ? true : null);
};
/**
 * @function isStringifyJSON
 * @alias isStrJSON
 * @alias isStringifiedJSON
 * @description Determine item is type of stringify JSON or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowArrayRoot=true] Allow type of array as the root of the stringify JSON.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isStringifyJSON(item, option = {}) {
	checkOption(option);
	if (isString(item) !== true) {
		return false;
	};
	let bin;
	try {
		bin = JSON.parse(item);
	} catch (error) {
		return false;
	};
	return isJSON(bin, option);
};
/**
 * @function isSymbol
 * @description Determine item is type of symbol or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isSymbol(item) {
	return (typeof item === "symbol");
};
/**
 * @function isUndefined
 * @alias isUdf
 * @description Determine item is type of undefined or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @returns {boolean} Determine result.
 */
function isUndefined(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowStringify: false
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument \`option.allowStringify\` must be type of boolean!`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof item === "undefined") {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (item === "undefined") {
			return true;
		};
	};
	return false;
};
/**
 * @function isWeakMap
 * @alias isMapWeak
 * @description Determine item is instance of weak map or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isWeakMap(item) {
	return (item instanceof WeakMap);
};
/**
 * @function isWeakSet
 * @alias isSetWeak
 * @description Determine item is instance of weak set or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isWeakSet(item) {
	return (item instanceof WeakSet);
};
/**
 * @function typeOf
 * @description Determine item type of the unevaluated operand.
 * @param {*} item Item that need to determine.
 * @returns {("array"|"bigint"|"boolean"|"dataview"|"date"|"function"|"map"|"nan"|"null"|"number"|"object"|"regexp"|"set"|"string"|"symbol"|"undefined"|"weakmap"|"weakset"|undefined)} Determine result.
 */
function typeOf(item) {
	let initialResult = typeof item;
	switch (initialResult) {
		case "bigint":
		case "boolean":
		case "function":
		case "string":
		case "symbol":
		case "undefined":
			return initialResult;
		case "number":
			return ((Number.isNaN(item) === true) ? "nan" : "number");
		case "object":
			if (Array.isArray(item) === true) {
				return "array";
			};
			if (item instanceof DataView) {
				return "dataview";
			};
			if (item instanceof Date) {
				return "date";
			};
			if (item instanceof Map) {
				return "map";
			};
			if (item === null) {
				return "null";
			};
			if (item instanceof RegExp) {
				return "regexp";
			};
			if (item instanceof Set) {
				return "set";
			};
			if (item instanceof WeakMap) {
				return "weakmap";
			};
			if (item instanceof WeakSet) {
				return "weakset";
			};
			return "object";
		default:
			return undefined;
	};
};
export {
	allIs,
	allIsNot,
	areEqual,
	eitherIs,
	eitherIsNot,
	isArray as isArr,
	isArray as isList,
	isArray,
	isBigInteger as isBigInt,
	isBigInteger,
	isBigIntegerNegative as isBigIntNgt,
	isBigIntegerNegative,
	isBigIntegerPositive as isBigIntPst,
	isBigIntegerPositive,
	isBoolean as isBool,
	isBoolean,
	isBuffer as isBuf,
	isBuffer,
	isDataView,
	isDate,
	isFunction as isFn,
	isFunction,
	isJSON,
	isMap,
	isNull as isNil,
	isNull as isNul,
	isNull,
	isNumber as isNum,
	isNumber,
	isNumberFloat as isFloat,
	isNumberFloat as isFlt,
	isNumberFloat as isNumFlt,
	isNumberFloat,
	isNumberInteger as isInt,
	isNumberInteger as isInteger,
	isNumberInteger as isNumInt,
	isNumberInteger,
	isNumberNegative as isNumNgt,
	isNumberNegative,
	isNumberNegativeFloat as isNumNgtFlt,
	isNumberNegativeFloat,
	isNumberNegativeInteger as isNumNgtInt,
	isNumberNegativeInteger,
	isNumberNegativeSafeFloat as isNumNgtSFlt,
	isNumberNegativeSafeFloat,
	isNumberNegativeSafeInteger as isNumNgtSInt,
	isNumberNegativeSafeInteger,
	isNumberPositive as isNumPst,
	isNumberPositive,
	isNumberPositiveFloat as isNumPstFlt,
	isNumberPositiveFloat,
	isNumberPositiveInteger as isNumPstInt,
	isNumberPositiveInteger,
	isNumberPositiveSafeFloat as isNumPstSFlt,
	isNumberPositiveSafeFloat,
	isNumberPositiveSafeInteger as isNumPstSInt,
	isNumberPositiveSafeInteger,
	isNumberSafeFloat as isNumSFlt,
	isNumberSafeFloat,
	isNumberSafeInteger as isNumSInt,
	isNumberSafeInteger,
	isObject as isObj,
	isObject,
	isObjectPair as isDict,
	isObjectPair as isDictionary,
	isObjectPair as isObjectPlain,
	isObjectPair as isObjPair,
	isObjectPair as isObjPlain,
	isObjectPair,
	isRegularExpression as isRegEx,
	isRegularExpression as isRegExp,
	isRegularExpression as isRegExr,
	isRegularExpression,
	isSet,
	isString as isStr,
	isString,
	isStringASCII as isStrASCII,
	isStringASCII,
	isStringifyJSON as isStringifiedJSON,
	isStringifyJSON as isStrJSON,
	isStringifyJSON,
	isStringLowerCase as isStrL,
	isStringLowerCase as isStrLC,
	isStringLowerCase,
	isStringMultipleLine as isStringML,
	isStringMultipleLine as isStringMultiLine,
	isStringMultipleLine as isStrML,
	isStringMultipleLine,
	isStringSingleLine as isStringSL,
	isStringSingleLine as isStrSL,
	isStringSingleLine,
	isStringUpperCase as isStrU,
	isStringUpperCase as isStrUC,
	isStringUpperCase,
	isSymbol,
	isUndefined as isUdf,
	isUndefined,
	isWeakMap as isMapWeak,
	isWeakMap,
	isWeakSet as isSetWeak,
	isWeakSet,
	typeOf,
	version as v,
	version as ver,
	version
};
