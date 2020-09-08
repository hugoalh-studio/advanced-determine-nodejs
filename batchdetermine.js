/*==================
[NodeJS] Advanced Determine - Batch Determine
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isString = require("./isstring.js");
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
	if (isString(condition) == true) {
		if (condition.search(/[^a-z]/giu) != -1) {
			return internalService.prefabReferenceError("type");
		}
		typeDeterminerName = condition;
	} else if (isArray(condition) == true) {
		if (isString(condition[0]) != true) {
			return internalService.prefabTypeError("type", "string");
		}
		if (condition[0].search(/[^a-z]/giu) != -1) {
			return internalService.prefabReferenceError("type");
		}
		[typeDeterminerName, option] = condition;
	} else {
		return internalService.prefabTypeError("condition", "string, or array");
	}
	if (items.length == 0) {
		return internalService.prefabNoInputError("items");
	}
	let typeDeterminerFile = internalService.moduleMap[typeDeterminerName.toLowerCase()];
	if (typeof typeDeterminerFile != "string") {
		return internalService.prefabReferenceError("type");
	}
	let typeDeterminerFunction;
	try {
		typeDeterminerFunction = require(`./is${typeDeterminerFile}.js`);
	} catch (error) {
		throw new Error(`Cannot find the module "is${typeDeterminerFile}.js"! Seems missing file(s).`);
	}
	let resultObject = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise(() => {
				resultObject[index] = typeDeterminerFunction(item, option);
			}).catch();
		})
	);
	return Object.values(resultObject);
}
/**
 * @function allIs
 * @description Determine items are the same type or not.
 * @param {(string|[string, object])} condition Type to determine; or with type determiner option.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIs(condition, ...items) {
	const resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(false) == true ||
		resultArray.includes(null) == true
	);
}
/**
 * @function allIsNot
 * @description Determine items are not the same type or not.
 * @param {(string|[string, object])} condition Type to determine; or with type determiner option.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	const resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(true) == true ||
		resultArray.includes(null) == true
	);
}
module.exports.allIs = allIs;
module.exports.allIsNot = allIsNot;
