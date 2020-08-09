/*==================
[NodeJS] Advanced Determine - Batch Determine
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isString = require("./isstring.js");
/**
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
			return internalService.referenceError(`Invalid reference of "type"! (Read the documentation for more information.)`);
		};
		typeDeterminerName = condition;
	} else if (isArray(condition) == true) {
		if (isString(condition[0]) != true) {
			return internalService.typeError(`Invalid type of "type"! Require type of string.`);
		};
		if (condition[0].search(/[^a-z]/giu) != -1) {
			return internalService.referenceError(`Invalid reference of "type"! (Read the documentation for more information.)`);
		};
		[typeDeterminerName, option] = condition;
	} else {
		return internalService.typeError(`Invalid type of "condition"! Require type of string, or array.`);
	};
	if (items.length == 0) {
		return internalService.generalError(`No input of "items"!`);
	};
	let typeDeterminerFile = internalService.moduleMap[typeDeterminerName.toLowerCase()];
	if (typeof typeDeterminerFile != "string") {
		return internalService.referenceError(`Invalid reference of "type"! (Read the documentation for more information.)`);
	};
	let typeDeterminerFunction;
	try {
		typeDeterminerFunction = require(`./is${typeDeterminerFile}.js`);
	} catch (error) {
		return internalService.generalError(`Cannot find the module "${typeDeterminerFile}"! Seems missing file(s).`);
	};
	let resultJSON = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise(() => {
				resultJSON[index] = typeDeterminerFunction(item, option);
			}).catch();
		})
	);
	return Object.values(resultJSON);
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
	if (
		resultArray.includes(false) == true ||
		resultArray.includes(null) == true
	) {
		return false;
	};
	return true;
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
	if (
		resultArray.includes(true) == true ||
		resultArray.includes(null) == true
	) {
		return false;
	};
	return true;
};
module.exports.allIs = allIs;
module.exports.allIsNot = allIsNot;
