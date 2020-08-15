/*==================
[NodeJS] Advanced Determine - Internal Service
	Language:
		NodeJS 14
==================*/
/**
 * @private
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
 * @private
 * @function prefabReferenceError
 * @param {string} argumentName
 * @param {string} [description="(Read the documentation for more information.)"]
 * @returns {ReferenceError}
 */
function prefabReferenceError(argumentName, description = "(Read the documentation for more information.)") {
	throw new ReferenceError(`Invalid reference of "${argumentName}"! ${description}`);
};
/**
 * @private
 * @function prefabTypeError
 * @param {string} argumentName
 * @param {string} typeCondition
 * @returns {TypeError}
 */
function prefabTypeError(argumentName, typeCondition) {
	throw new TypeError(`Invalid type of "${argumentName}"! Require type of ${typeCondition}.`);
};
module.exports.moduleMap = moduleMap;
module.exports.prefabReferenceError = prefabReferenceError;
module.exports.prefabTypeError = prefabTypeError;
