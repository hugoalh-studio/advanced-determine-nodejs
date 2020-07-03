/*==================
[NodeJS] Advanced Determine - All Is
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
const isArray = require("./isarray.js");
function allIs(option, ...items) {
	if (isString(option) == true) {
		option = [option, undefined];
	} else if (isArray(option) == true) {
		if (isString(option[0]) != true) {
			throw new TypeError(`Invalid type of "type"! Require type of string.`);
		};
	} else {
		throw new TypeError(`Invalid type of "option"! Require type of string, or array.`);
	};
	let typeDeterminer;
	try {
		typeDeterminer = require(`./is${option[0]}.js`);
	} catch (error) {
		throw new Error(`Invalid argument "type"! Cannot find the module.`);
	};
	let resultJSON = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise((resolve, reject) => {
				resultJSON[index] = typeDeterminer(item, option[1]);
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
