/*==================
[NodeJS] Advanced Determine - Is Actually Null
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const isArray = require("./isarray.js");
const isJSON = require("./isjson.js");
const isString = require("./isstring.js");
function isActuallyNull(item) {
	return (
		item === null ||
		isArray(item) == null ||
		isJSON(item) == null ||
		isString(item) == null
	);
};
module.exports = isActuallyNull;
