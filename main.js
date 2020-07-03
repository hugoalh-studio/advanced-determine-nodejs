/*==================
[NodeJS] Advanced Determine
	Language:
		NodeJS 14
==================*/
const isNull = require("./isnull.js");
const isNumber = require("./isnumber.js");
const isRegularExpression = require("./isregularexpression.js");
module.exports.version = "1.3.0";
module.exports.allIs = require("./allis.js");
module.exports.isArray = require("./isarray.js");
module.exports.isBuffer = require("./isbuffer.js");
module.exports.isDate = require("./isdate.js");
module.exports.isJSON = require("./isjson.js");
module.exports.isNul = isNull;
module.exports.isNull = isNull;
module.exports.isNum = isNumber;
module.exports.isNumber = isNumber;
module.exports.isNumberFloat = require("./isnumberfloat.js");
module.exports.isNumberNegative = require("./isnumbernegative.js");
module.exports.isNumberNegativeFloat = require("./isnumbernegativefloat.js");
module.exports.isNumberNegativeInteger = require("./isnumbernegativeinteger.js");
module.exports.isNumberNegativeSafeFloat = require("./isnumbernegativesafefloat.js");
module.exports.isNumberNegativeSafeInteger = require("./isnumbernegativesafeinteger.js");
module.exports.isNumberPositive = require("./isnumberpositive.js");
module.exports.isNumberPositiveFloat = require("./isnumberpositivefloat.js");
module.exports.isNumberPositiveInteger = require("./isnumberpositiveinteger.js");
module.exports.isNumberPositiveSafeFloat = require("./isnumberpositivesafefloat.js");
module.exports.isNumberPositiveSafeInteger = require("./isnumberpositivesafeinteger.js");
module.exports.isNumberSafeFloat = require("./isnumbersafefloat.js");
module.exports.isRegExp = isRegularExpression;
module.exports.isRegularExpression = isRegularExpression;
module.exports.isString = require("./isstring.js");
module.exports.isStringASCII = require("./isstringascii.js");
module.exports.isStringifyJSON = require("./isstringifyjson.js");
module.exports.isStringLowerCase = require("./isstringlowercase.js");
module.exports.isStringUpperCase = require("./isstringuppercase.js");
module.exports.isUndefined = require("./isundefined.js");
