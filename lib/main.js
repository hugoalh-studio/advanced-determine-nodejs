const isArray = require("./is-array.js");
const isBigIntegerNegative = require("./is-big-integer-negative.js");
const isBigIntegerPositive = require("./is-big-integer-positive.js");
const isNumber = require("./is-number.js");
const isNumberFloat = require("./is-number-float.js");
const isNumberInteger = require("./is-number-integer.js");
const isNumberNegative = require("./is-number-negative.js");
const isNumberNegativeFloat = require("./is-number-negative-float.js");
const isNumberNegativeInteger = require("./is-number-negative-integer.js");
const isNumberNegativeSafeFloat = require("./is-number-negative-safe-float.js");
const isNumberNegativeSafeInteger = require("./is-number-negative-safe-integer.js");
const isNumberPositive = require("./is-number-positive.js");
const isNumberPositiveFloat = require("./is-number-positive-float.js");
const isNumberPositiveInteger = require("./is-number-positive-integer.js");
const isNumberPositiveSafeFloat = require("./is-number-positive-safe-float.js");
const isNumberPositiveSafeInteger = require("./is-number-positive-safe-integer.js");
const isNumberSafeFloat = require("./is-number-safe-float.js");
const isNumberSafeInteger = require("./is-number-safe-integer.js");
const isObject = require("./is-object.js");
const isObjectPair = require("./is-object-pair.js");
const isString = require("./is-string.js");
const isStringASCII = require("./is-string-ascii.js");
const isStringifyJSON = require("./is-stringify-json.js");
const isStringLowerCase = require("./is-string-lower-case.js");
const isStringMultipleLine = require("./is-string-multiple-line.js");
const isStringSingleLine = require("./is-string-single-line.js");
const isStringUpperCase = require("./is-string-upper-case.js");
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
	isFloat: isNumberFloat,
	isFlt: isNumberFloat,
	isInt: isNumberInteger,
	isInteger: isNumberInteger,
	isJSON: require("./is-json.js"),
	isList: isArray,
	isNum: isNumber,
	isNumber: isNumber,
	isNumberFloat: isNumberFloat,
	isNumberInteger: isNumberInteger,
	isNumberNegative: isNumberNegative,
	isNumberNegativeFloat: isNumberNegativeFloat,
	isNumberNegativeInteger: isNumberNegativeInteger,
	isNumberNegativeSafeFloat: isNumberNegativeSafeFloat,
	isNumberNegativeSafeInteger: isNumberNegativeSafeInteger,
	isNumberPositive: isNumberPositive,
	isNumberPositiveFloat: isNumberPositiveFloat,
	isNumberPositiveInteger: isNumberPositiveInteger,
	isNumberPositiveSafeFloat: isNumberPositiveSafeFloat,
	isNumberPositiveSafeInteger: isNumberPositiveSafeInteger,
	isNumberSafeFloat: isNumberSafeFloat,
	isNumberSafeInteger: isNumberSafeInteger,
	isNumFlt: isNumberFloat,
	isNumInt: isNumberInteger,
	isNumNgt: isNumberNegative,
	isNumNgtFlt: isNumberNegativeFloat,
	isNumNgtInt: isNumberNegativeInteger,
	isNumNgtSFlt: isNumberNegativeSafeFloat,
	isNumNgtSInt: isNumberNegativeSafeInteger,
	isNumPst: isNumberPositive,
	isNumPstFlt: isNumberPositiveFloat,
	isNumPstInt: isNumberPositiveInteger,
	isNumPstSFlt: isNumberPositiveSafeFloat,
	isNumPstSInt: isNumberPositiveSafeInteger,
	isNumSFlt: isNumberSafeFloat,
	isNumSInt: isNumberSafeInteger,
	isObj: isObject,
	isObject: isObject,
	isObjectPair: isObjectPair,
	isObjectPlain: isObjectPair,
	isObjPair: isObjectPair,
	isObjPlain: isObjectPair,
	isStr: isString,
	isStrASCII: isStringASCII,
	isString: isString,
	isStringASCII: isStringASCII,
	isStringifiedJSON: isStringifyJSON,
	isStringifyJSON: isStringifyJSON,
	isStringLowerCase: isStringLowerCase,
	isStringML: isStringMultipleLine,
	isStringMultiLine: isStringMultipleLine,
	isStringMultipleLine: isStringMultipleLine,
	isStringSingleLine: isStringSingleLine,
	isStringSL: isStringSingleLine,
	isStringUpperCase: isStringUpperCase,
	isStrJSON: isStringifyJSON,
	isStrL: isStringLowerCase,
	isStrLC: isStringLowerCase,
	isStrML: isStringMultipleLine,
	isStrSL: isStringSingleLine,
	isStrU: isStringUpperCase,
	isStrUC: isStringUpperCase,
	typeOf: require("./type-of.js"),
	v: version,
	ver: version,
	version: version
};
