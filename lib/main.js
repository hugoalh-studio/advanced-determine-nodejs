import areEqual from "./are-equal.js";
import isArray from "./is-array.js";
import isBigInteger from "./is-big-integer.js";
import isFunction from "./is-function.js";
import isGenerator from "./is-generator.js";
import isJSON from "./is-json.js";
import isMap from "./is-map.js";
import isNumber from "./is-number.js";
import isObject from "./is-object.js";
import isPlainObject from "./is-plain-object.js";
import isRegularExpression from "./is-regular-expression.js";
import isSet from "./is-set.js";
import isString from "./is-string.js";
import isStringifyJSON from "./is-stringify-json.js";
import typeOf from "./type-of.js";
const $isNaN = Number.isNaN;
export {
	areEqual,
	isArray as isArr,
	isArray,
	isBigInteger as isBigInt,
	isBigInteger,
	isPlainObject as isDict,
	isPlainObject as isDictionary,
	isFunction as isFn,
	isFunction,
	isGenerator,
	isJSON,
	isStringifyJSON as isJSONStr,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isArray as isList,
	isMap,
	$isNaN as isNaN,
	$isNaN as isNotANumber,
	isNumber as isNum,
	isNumber,
	isObject as isObj,
	isObject,
	isPlainObject as isObjectPlain,
	isPlainObject as isObjPlain,
	isPlainObject as isPlainObj,
	isPlainObject,
	isRegularExpression as isRegEx,
	isRegularExpression as isRegExp,
	isRegularExpression,
	isSet,
	isString as isStr,
	isString,
	isStringifyJSON as isStringifiedJSON,
	isStringifyJSON,
	isStringifyJSON as isStrJSON,
	typeOf
};
export default {
	areEqual,
	isArr: isArray,
	isArray,
	isBigInt: isBigInteger,
	isBigInteger,
	isDict: isPlainObject,
	isDictionary: isPlainObject,
	isFn: isFunction,
	isFunction,
	isGenerator,
	isJSON,
	isJSONStr: isStringifyJSON,
	isJSONStringified: isStringifyJSON,
	isJSONStringify: isStringifyJSON,
	isList: isArray,
	isMap,
	isNaN: $isNaN,
	isNotANumber: $isNaN,
	isNum: isNumber,
	isNumber,
	isObj: isObject,
	isObject,
	isObjectPlain: isPlainObject,
	isObjPlain: isPlainObject,
	isPlainObj: isPlainObject,
	isPlainObject,
	isRegEx: isRegularExpression,
	isRegExp: isRegularExpression,
	isRegularExpression,
	isSet,
	isStr: isString,
	isString,
	isStringifiedJSON: isStringifyJSON,
	isStringifyJSON,
	isStrJSON: isStringifyJSON,
	typeOf
};
