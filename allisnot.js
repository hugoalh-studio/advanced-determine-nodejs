/*==================
[NodeJS] Advanced Determine - All Is Not
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isString = require("./isstring.js");
/**
 * @function allIsNot
 * @description Determine items are not the same type or not.
 * @param {(string|[string, object])} condition Type to determine; or with type determiner option.
 * @param  {...*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	if (isString(condition) == true) {
		if (condition.search(/[^a-z]/giu) != -1) {
			return internalService.referenceError(`Invalid reference of "type"! (Read the documentation for more information.)`);
		};
		condition = [condition, undefined];
	} else if (isArray(condition) == true) {
		if (isString(condition[0]) != true) {
			return internalService.typeError(`Invalid type of "type"! Require type of string.`);
		};
		if (condition[0].search(/[^a-z]/giu) != -1) {
			return internalService.referenceError(`Invalid reference of "type"! (Read the documentation for more information.)`);
		};
	} else {
		return internalService.typeError(`Invalid type of "condition"! Require type of string, or array.`);
	};
	let typeDeterminer;
	try {
		typeDeterminer = require(`./is${condition[0].toLowerCase()}.js`);
	} catch (error) {
		return internalService.referenceError(`Invalid reference of "type"! Cannot find the module. (Read the documentation for more information.)`);
	};
	let resultJSON = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise(() => {
				resultJSON[index] = typeDeterminer(item, condition[1]);
			}).catch();
		})
	);
	const resultArray = Object.values(resultJSON);
	if (
		resultArray.includes(true) == true ||
		resultArray.includes(null) == true
	) {
		return false;
	};
	return true;
};
module.exports = allIsNot;
