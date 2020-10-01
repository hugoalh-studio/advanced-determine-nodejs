/*==================
[NodeJS] Advanced Determine - Batch Determine
	Language:
		NodeJS/10.0.0
==================*/
const isArray = require("./isarray.js");
const isString = require("./isstring.js");
const typeListMap = {
	"arr": "array",
	"array": "array",
	"bigint": "biginteger",
	"biginteger": "biginteger",
	"bigintegernegative": "bigintegernegative",
	"bigintegerpositive": "bigintegerpositive",
	"bigintngt": "bigintegernegative",
	"bigintpst": "bigintegerpositive",
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
	"numberinteger": "numberinteger",
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
	"numbersafeinteger": "numbersafeinteger",
	"numflt": "numberfloat",
	"numint": "numberinteger",
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
	"numsint": "numbersafeinteger",
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
 * @function batchInternal
 * @param {(string|[string, object])} condition
 * @param {...*} items
 * @returns {(boolean|null)[]}
 */
function batchInternal(condition, ...items) {
	let typeDeterminerName,
		option;
	if (isString(condition) === true) {
		if (condition.search(/[^a-z]/giu) !== -1) {
			throw new SyntaxError(`Argument "type" contains non-letter character(s)! ([NodeJS] Advanced Determine - Batch Determine)`);
		};
		typeDeterminerName = condition;
	} else if (isArray(condition) === true) {
		if (isString(condition[0]) !== true) {
			throw new TypeError(`Argument "type" must be type of string (non-nullable)! ([NodeJS] Advanced Determine - Batch Determine)`);
		};
		if (condition[0].search(/[^a-z]/giu) !== -1) {
			throw new SyntaxError(`Argument "type" contains non-letter character(s)! ([NodeJS] Advanced Determine - Batch Determine)`);
		};
		[typeDeterminerName, option] = condition;
	} else {
		throw new TypeError(`Argument "condition" must be type of string (non-nullable) or array! ([NodeJS] Advanced Determine - Batch Determine)`);
	};
	if (items.length === 0) {
		throw new Error(`No input at argument "items"! ([NodeJS] Advanced Determine - Batch Determine)`);
	};
	let typeDeterminerFile = typeListMap[typeDeterminerName.toLowerCase()];
	if (typeof typeDeterminerFile !== "string") {
		throw new RangeError(`Argument "type"'s value is not in the type list! Read the documentation for more information. ([NodeJS] Advanced Determine - Batch Determine)`);
	};
	let typeDeterminerFunction;
	try {
		typeDeterminerFunction = require(`./is${typeDeterminerFile}.js`);
	} catch (error) {
		throw new Error(`Cannot find the module "is${typeDeterminerFile}.js"! Seems missing file(s). ([NodeJS] Advanced Determine - Batch Determine)`);
	};
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			items.map((item, index) => {
				new Promise(() => {
					resultObject[index] = typeDeterminerFunction(item, option);
				}).catch();
			})
		);
		return Object.values(resultObject);
	};
	let resultArray = [];
	items.forEach((item) => {
		resultArray.push(typeDeterminerFunction(item, option));
	});
	return resultArray;
};
/**
 * @function allIs
 * @description Determine items are the same type or not.
 * @param {(string|[string, object])} condition Type to determine; or with type determiner option.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIs(condition, ...items) {
	const resultArray = batchInternal(condition, ...items);
	return (!(
		resultArray.includes(false) === true ||
		resultArray.includes(null) === true
	));
};
/**
 * @function allIsNot
 * @description Determine items are not the same type or not.
 * @param {(string|[string, object])} condition Type to determine; or with type determiner option.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	const resultArray = batchInternal(condition, ...items);
	return (!(
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	));
};
module.exports = {
	allIs: allIs,
	allIsNot: allIsNot
};
