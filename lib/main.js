const isArray = require("./is-array.js");
const isBigInteger = require("./is-big-integer.js");
const isFunction = require("./is-function.js");
const isNumber = require("./is-number.js");
const isObject = require("./is-object.js");
const isObjectPair = require("./is-object-pair.js");
const isPlainObject = require("./is-plain-object.js");
const isRegularExpression = require("./is-regular-expression.js");
const isString = require("./is-string.js");
const isStringifyJSON = require("./is-stringify-json.js");
const $isNaN = Number.isNaN;
const version = 4;
module.exports = {
	areEqual: require("./are-equal.js"),
	isArr: isArray,
	isArray: isArray,
	isBigInt: isBigInteger,
	isBigInteger: isBigInteger,
	isDict: isPlainObject,
	isDictionary: isPlainObject,
	isFn: isFunction,
	isFunction: isFunction,
	isGenerator: require("./is-generator.js"),
	isJSON: require("./is-json.js"),
	isJSONStr: isStringifyJSON,
	isJSONStringified: isStringifyJSON,
	isJSONStringify: isStringifyJSON,
	isList: isArray,
	isNaN: $isNaN,
	isNotANumber: $isNaN,
	isNum: isNumber,
	isNumber: isNumber,
	isObj: isObject,
	isObject: isObject,
	isObjectPair: isObjectPair,
	isObjectPlain: isPlainObject,
	isObjPair: isObjectPair,
	isObjPlain: isPlainObject,
	isPlainObj: isPlainObject,
	isPlainObject: isPlainObject,
	isRegEx: isRegularExpression,
	isRegExp: isRegularExpression,
	isRegularExpression: isRegularExpression,
	isStr: isString,
	isString: isString,
	isStringifiedJSON: isStringifyJSON,
	isStringifyJSON: isStringifyJSON,
	isStrJSON: isStringifyJSON,
	typeOf: require("./type-of.js"),
	v: version,
	ver: version,
	version: version
};
