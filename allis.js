/*==================
[NodeJS] Advanced Determine - All Is
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
function allIs(type, ...items) {
	if (isString(type) != true) {
		throw new TypeError(`Invalid type of "type"! Require type of string.`);
	};
	type = type.toLowerCase();
	try {
		const typeDetermine = require(`./is${type}.js`);
		let resultJSON = {};
		Promise.allSettled(
			items.map((item, index) => {
				new Promise((resolve, reject) => {
					resultJSON[index] = typeDetermine(item);
				}).catch((error) => { });
			})
		);
		if (resultJSON.includes(false) || resultJSON.includes(null)) {
			return false;
		};
		return true;
	} catch (error) {
		throw new Error(`Invalid argument "type"! Cannot find the module.`);
	};
};
module.exports = allIs;
