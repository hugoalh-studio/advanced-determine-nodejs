/*==================
[NodeJS] Advanced Determine - Is String All Upper Case
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
function isStringAllUpperCase(item) {
	if (isString(item) == false) {
		throw new TypeError(`Invalid type of "item"! Require type of string.`);
	};
	const bin = item.toUpperCase();
	if (item !== bin) {
		return false;
	};
	return true;
};
module.exports = isStringAllUpperCase;
