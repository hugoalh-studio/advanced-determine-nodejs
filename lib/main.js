const isArray = require("./is-array.js");
const isBigIntegerNegative = require("./is-big-integer-negative.js");
const isBigIntegerPositive = require("./is-big-integer-positive.js");
const isNumber = require("./is-number.js");
const isObject = require("./is-object.js");
const isObjectPair = require("./is-object-pair.js");
const isString = require("./is-string.js");
const isStringifyJSON = require("./is-stringify-json.js");
const version = 3;
module.exports = {
	areEqual: require("./are-equal.js"),
	isArr: isArray,
	isArray: isArray,
	isBigIntegerNegative: isBigIntegerNegative,
	isBigIntegerPositive: isBigIntegerPositive,
	isBigIntNgt: isBigIntegerNegative,
	isBigIntPst: isBigIntegerPositive,
	isDict: isObjectPair,
	isDictionary: isObjectPair,
	isJSON: require("./is-json.js"),
	isList: isArray,
	isNum: isNumber,
	isNumber: isNumber,
	isObj: isObject,
	isObject: isObject,
	isObjectPair: isObjectPair,
	isObjectPlain: isObjectPair,
	isObjPair: isObjectPair,
	isObjPlain: isObjectPair,
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
