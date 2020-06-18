/*==================
[NodeJS] Advanced Determine - All Is
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
function allIs(type, ...items) {
	if (isString(type) == true) {
		type = type.toLowerCase();
		try {
			const typeDetermine = require(`./is${type}.js`);
			let result = [];
			items.forEach((item, index) => {
				result.push(
					typeDetermine(item)
				);
			});
			if (result.includes(false) || result.includes(null)) {
				return false;
			};
			return true;
		} catch (error) {
			throw new Error(`Invalid argument "type"! Cannot find the module.`);
		};
	} else {
		throw new TypeError(`Invalid type of "type"! Require type of string.`);
	};
};
module.exports = allIs;
