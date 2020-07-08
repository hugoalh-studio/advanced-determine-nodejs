/*==================
[NodeJS] Advanced Determine - Is Null
	Language:
		NodeJS 14
==================*/
const isArray = require("./isarray.js");
const isJSON = require("./isjson.js");
const isString = require("./isstring.js");
/**
 * @function isNull
 * @alias isNul
 * @param {*} item
 * @param {object} [config]
 * @returns {boolean}
 */
function isNull(item, config) {
	return (
		item === null ||
		isArray(item) == null ||
		isJSON(item) == null ||
		isString(item, config) == null
	);
};
module.exports = isNull;
