import areEqual from "./are-equal.mjs";
import isArray from "./is-array.mjs";
import isBigInteger from "./is-big-integer.mjs";
import isFunction from "./is-function.mjs";
import isGenerator from "./is-generator.mjs";
import isJSON from "./is-json.mjs";
import isMap from "./is-map.mjs";
import isNumber from "./is-number.mjs";
import isObject from "./is-object.mjs";
import isObjectPair from "./is-object-pair.mjs";
import isPlainObject from "./is-plain-object.mjs";
import isRegularExpression from "./is-regular-expression.mjs";
import isSet from "./is-set.mjs";
import isString from "./is-string.mjs";
import isStringifyJSON from "./is-stringify-json.mjs";
import typeOf from "./type-of.mjs";
const $isNaN = Number.isNaN;
const version = 5;
export {
	$isNaN as isNaN,
	$isNaN as isNotANumber,
	areEqual,
	isArray as isArr,
	isArray as isList,
	isArray,
	isBigInteger as isBigInt,
	isBigInteger,
	isFunction as isFn,
	isFunction,
	isGenerator,
	isJSON,
	isMap,
	isNumber as isNum,
	isNumber,
	isObject as isObj,
	isObject,
	isObjectPair as isObjPair,
	isObjectPair,
	isPlainObject as isDict,
	isPlainObject as isDictionary,
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
	isStringifyJSON as isJSONStr,
	isStringifyJSON as isJSONStringified,
	isStringifyJSON as isJSONStringify,
	isStringifyJSON as isStringifiedJSON,
	isStringifyJSON as isStrJSON,
	isStringifyJSON,
	typeOf,
	version as v,
	version as ver,
	version
};
