/*==================
[NodeJS] Advanced Determine - Batch Determine
	Language:
		NodeJS/10.0.0
==================*/
const isArray = require("./isarray.js"),
	isString = require("./isstring.js");
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
	"dataview": "dataview",
	"date": "date",
	"json": "json",
	"map": "map",
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
	"set": "set",
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
	"symbol": "symbol",
	"udf": "undefined",
	"undefined": "undefined",
	"weakmap": "weakmap",
	"weakset": "weakset"
};
/**
 * @private
 * @function batchInternal
 * @param {(string|[string,object])} condition Condition.
 * @param {...*} items
 * @returns {(boolean|null)[]}
 */
function batchInternal(condition, ...items) {
	let typeDeterminerOption,
		typeDeterminerName;
	if (isString(condition) === true) {
		if (condition.search(/[^a-z]/giu) !== -1) {
			throw new SyntaxError(`Argument "typeDeterminerName" contains non-letter character(s)! ([NodeJS] Advanced Determine - Batch Determine)`);
		}
		typeDeterminerName = condition;
	} else if (isArray(condition) === true) {
		if (isString(condition[0]) !== true) {
			throw new TypeError(`Argument "typeDeterminerName" must be type of string (non-nullable)! ([NodeJS] Advanced Determine - Batch Determine)`);
		}
		if (condition[0].search(/[^a-z]/giu) !== -1) {
			throw new SyntaxError(`Argument "typeDeterminerName" contains non-letter character(s)! ([NodeJS] Advanced Determine - Batch Determine)`);
		}
		if (condition.length > 2) {
			throw new SyntaxError(`Argument "condition" do not match any pattern! ([NodeJS] Advanced Determine - Batch Determine)`);
		}
		[typeDeterminerName, typeDeterminerOption] = condition;
	} else {
		throw new TypeError(`Argument "condition" must be type of string (non-nullable) or array! ([NodeJS] Advanced Determine - Batch Determine)`);
	}
	if (items.length === 0) {
		throw new Error(`No input at argument "items"! ([NodeJS] Advanced Determine - Batch Determine)`);
	}
	let typeDeterminerFile = typeListMap[typeDeterminerName.toLowerCase()];
	if (typeof typeDeterminerFile !== "string") {
		throw new RangeError(`Argument "typeDeterminerName"'s value is not in the type list! Read the documentation for more information. ([NodeJS] Advanced Determine - Batch Determine)`);
	}
	let typeDeterminerFunction;
	try {
		typeDeterminerFunction = require(`./is${typeDeterminerFile}.js`);
	} catch (error) {
		throw new Error(`Cannot find the module "is${typeDeterminerFile}.js"! Seems missing file(s). ([NodeJS] Advanced Determine - Batch Determine)`);
	}
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			items.map((item, index) => {
				new Promise(() => {
					resultObject[index] = typeDeterminerFunction(item, typeDeterminerOption);
				}).catch();
			})
		);
		return Object.values(resultObject);
	}
	let resultArray = [];
	items.forEach((item) => {
		resultArray.push(typeDeterminerFunction(item, typeDeterminerOption));
	});
	return resultArray;
}
/**
 * @function allIs
 * @description Determine items are match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(false) === true ||
		resultArray.includes(null) === true
	);
}
/**
 * @function allIsNot
 * @description Determine items are not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
}
/**
 * @function eitherIs
 * @description Determine any item is match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
}
/**
 * @function eitherIsNot
 * @description Determine any item is not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (
		resultArray.includes(false) === true
	);
}
module.exports = {
	allIs: allIs,
	allIsNot: allIsNot,
	eitherIs: eitherIs,
	eitherIsNot: eitherIsNot
};
