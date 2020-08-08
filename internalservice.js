/*==================
[NodeJS] Advanced Determine - Internal Service
	Language:
		NodeJS 14
==================*/
const configuration = require("./configuration.js");
/**
 * @const {object} moduleMap
 */
const moduleMap = {
	"arr": "array",
	"array": "array",
	"boolean": "boolean",
	"buf": "buffer",
	"buffer": "buffer",
	"date": "date",
	"json": "json",
	"nul": "null",
	"null": "null",
	"num": "number",
	"number": "number",
	"numberfloat": "numberfloat",
	"numbernegative": "numbernegative",
	"numbernegativefloat": "numbernegativefloat",
	"numbernegativeinteger": "numbernegativeinteger",
	"numbernegativesafefloat": "numbernegativesafefloat",
	"numbernegativesafeinteger": "numbernegativesafeinteger",
	"numberpositive": "numberpositive",
	"numberpositivefloat": "numberpositivefloat",
	"numberpositiveinteger": "numberpositiveinteger",
	"numberpositivesafefloat": "numberpositivesafefloat",
	"numberpositivesafeinteger": "numberpositivesafeinteger",
	"numbersafefloat": "numbersafefloat",
	"numflt": "numberfloat",
	"numngt": "numbernegative",
	"numngtflt": "numbernegativefloat",
	"numngtint": "numbernegativeinteger",
	"numngtsflt": "numbernegativesafefloat",
	"numngtsint": "numbernegativesafeinteger",
	"numpst": "numberpositive",
	"numpstflt": "numberpositivefloat",
	"numpstint": "numberpositiveinteger",
	"numpstsflt": "numberpositivesafefloat",
	"numpstsint": "numberpositivesafeinteger",
	"numsflt": "numbersafefloat",
	"obj": "object",
	"object": "object",
	"objectpair": "objectpair",
	"objectplain": "objectpair",
	"objpair": "objectpair",
	"objplain": "objectpair",
	"regex": "regularexpression",
	"regexp": "regularexpression",
	"regexr": "regularexpression",
	"regularexpression": "regularexpression",
	"str": "string",
	"strascii": "stringascii",
	"string": "string",
	"stringascii": "stringascii",
	"stringifyjson": "stringifyjson",
	"stringlowercase": "stringlowercase",
	"stringuppercase": "stringuppercase",
	"strjson": "stringifyjson",
	"strl": "stringlowercase",
	"stru": "stringuppercase",
	"udf": "undefined",
	"undefined": "undefined"
};
/**
 * @function generalError
 * @param {string} message
 * @returns {undefined}
 */
function generalError(message) {
	if (configuration.ignoreGeneralError() == true) {
		console.error(message);
		return undefined;
	};
	throw new Error(message);
};
/**
 * @function rangeError
 * @param {string} message
 * @returns {undefined}
 */
function rangeError(message) {
	if (configuration.ignoreRangeError() == true) {
		console.error(message);
		return undefined;
	};
	throw new RangeError(message);
};
/**
 * @function referenceError
 * @param {string} message
 * @returns {undefined}
 */
function referenceError(message) {
	if (configuration.ignoreReferenceError() == true) {
		console.error(message);
		return undefined;
	};
	throw new ReferenceError(message);
};
/**
 * @function typeError
 * @param {string} message
 * @returns {undefined}
 */
function typeError(message) {
	if (configuration.ignoreTypeError() == true) {
		console.error(message);
		return undefined;
	};
	throw new TypeError(message);
};
module.exports.moduleMap = moduleMap;
module.exports.generalError = generalError;
module.exports.rangeError = rangeError;
module.exports.referenceError = referenceError;
module.exports.typeError = typeError;
