/*==================
[NodeJS] Advanced Determine - All Is
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isString = require("./isstring.js");
/**
 * @function allIs
 * @description 
 * @param {(string|[string, object])} config
 * @param  {...*} items
 * @returns {boolean}
 */
function allIs(config, ...items) {
	if (isString(config) == true) {
		if (config.indexOf("/") != -1) {
			return internalService.customError(`Invalid path of "type"!`);
		};
		config = [config, undefined];
	} else if (isArray(config) == true) {
		if (isString(config[0]) != true) {
			return internalService.customTypeError(`Invalid type of "type"! Require type of string.`);
		};
		if (config[0].indexOf("/") != -1) {
			return internalService.customError(`Invalid path of "type"!`);
		};
	} else {
		return internalService.customTypeError(`Invalid type of "option"! Require type of string, or array.`);
	};
	let typeDeterminer;
	try {
		typeDeterminer = require(`./is${config[0]}.js`);
	} catch (error) {
		return internalService.customError(`Invalid argument "type"! Cannot find the module.`);
	};
	let resultJSON = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise((resolve, reject) => {
				resultJSON[index] = typeDeterminer(item, config[1]);
			}).catch((error) => { });
		})
	);
	const resultArray = Object.values(resultJSON);
	if (resultArray.includes(false) == true || resultArray.includes(null) == true) {
		return false;
	};
	return true;
};
module.exports = allIs;
