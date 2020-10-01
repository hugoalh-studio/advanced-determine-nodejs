/*==================
[NodeJS] Advanced Determine
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @const {string} version
 */
const version = "3.3.1";

const batch = require("./batchdetermine.js");
const isArray = require("./isarray.js");
const isBigInteger = require("./isbiginteger.js");
const isBigIntegerNegative = require("./isbigintegernegative.js");
const isBigIntegerPositive = require("./isbigintegerpositive.js");
const isBuffer = require("./isbuffer.js");
const isNull = require("./isnull.js");
const isNumber = require("./isnumber.js");
const isNumberFloat = require("./isnumberfloat.js");
const isNumberInteger = require("./isnumberinteger.js");
const isNumberNegative = require("./isnumbernegative.js");
const isNumberNegativeFloat = require("./isnumbernegativefloat.js");
const isNumberNegativeInteger = require("./isnumbernegativeinteger.js");
const isNumberNegativeSafeFloat = require("./isnumbernegativesafefloat.js");
const isNumberNegativeSafeInteger = require("./isnumbernegativesafeinteger.js");
const isNumberPositive = require("./isnumberpositive.js");
const isNumberPositiveFloat = require("./isnumberpositivefloat.js");
const isNumberPositiveInteger = require("./isnumberpositiveinteger.js");
const isNumberPositiveSafeFloat = require("./isnumberpositivesafefloat.js");
const isNumberPositiveSafeInteger = require("./isnumberpositivesafeinteger.js");
const isNumberSafeFloat = require("./isnumbersafefloat.js");
const isNumberSafeInteger = require("./isnumbersafeinteger.js");
const isObject = require("./isobject.js");
const isObjectPair = require("./isobjectpair.js");
const isRegularExpression = require("./isregularexpression.js");
const isString = require("./isstring.js");
const isStringASCII = require("./isstringascii.js");
const isStringifyJSON = require("./isstringifyjson.js");
const isStringLowerCase = require("./isstringlowercase.js");
const isStringUpperCase = require("./isstringuppercase.js");
const isUndefined = require("./isundefined.js");
module.exports = {
	allIs: batch.allIs,
	allIsNot: batch.allIsNot,
	isArr: isArray,
	isArray: isArray,
	isBigInt: isBigInteger,
	isBigInteger: isBigInteger,
	isBigIntegerNegative: isBigIntegerNegative,
	isBigIntegerPositive: isBigIntegerPositive,
	isBigIntNgt: isBigIntegerNegative,
	isBigIntPst: isBigIntegerPositive,
	isBoolean: require("./isboolean.js"),
	isBuf: isBuffer,
	isBuffer: isBuffer,
	isDate: require("./isdate.js"),
	isEqual: require("./isequal.js"),
	isJSON: require("./isjson.js"),
	isNil: isNull,
	isNul: isNull,
	isNull: isNull,
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
	isRegEx: isRegularExpression,
	isRegExp: isRegularExpression,
	isRegExr: isRegularExpression,
	isRegularExpression: isRegularExpression,
	isStr: isString,
	isStrASCII: isStringASCII,
	isString: isString,
	isStringASCII: isStringASCII,
	isStringifyJSON: isStringifyJSON,
	isStringLowerCase: isStringLowerCase,
	isStringUpperCase: isStringUpperCase,
	isStrJSON: isStringifyJSON,
	isStrL: isStringLowerCase,
	isStrU: isStringUpperCase,
	isUdf: isUndefined,
	isUndefined: isUndefined,
	typeOf: require("./typeof.js"),
	v: version,
	ver: version,
	version: version
};
