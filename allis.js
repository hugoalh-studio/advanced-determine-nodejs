/*==================
[NodeJS] Advanced Determine - All Is
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
function allIsSmallData(type, ...items) {
	try {
		const typeDeterminer = require(`./is${type}.js`);
		let result = [];
		items.forEach((item, index) => {
			result.push(
				typeDeterminer(item)
			);
		});
		if (result.includes(false) || result.includes(null)) {
			return false;
		};
		return true;
	} catch (error) {
		throw new Error(`Invalid argument "type"! Cannot find the module.`);
	};
};
function allIsBigData(type, ...items) {
	try {
		const typeDeterminer = require(`./is${type}.js`);
		let resultJSON = {};
		Promise.allSettled(
			items.map((item, index) => {
				new Promise((resolve, reject) => {
					resultJSON[index] = typeDeterminer(item);
				}).catch((error) => { });
			})
		);
		const resultArray = Object.values(resultJSON);
		if (resultArray.includes(false) || resultArray.includes(null)) {
			return false;
		};
		return true;
	} catch (error) {
		throw new Error(`Invalid argument "type"! Cannot find the module.`);
	};
};
function allIs(type, ...items) {
	if (isString(type) != true) {
		throw new TypeError(`Invalid type of "type"! Require type of string.`);
	};
	type = type.toLowerCase();
	if (items.length <= 16) {
		return allIsSmallData(type, ...items);
	};
	return allIsBigData(type, ...items);
};
module.exports = allIs;
