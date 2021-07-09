const allIs = require("./batch-determine.js").allIs,
	checkOption = require("./internal/check-option.js"),
	isObject = require("./is-object.js"),
	isString = require("./is-string.js");
/**
 * @function isObjectPair
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPair
 * @alias isObjPlain
 * @description Determine item is type of object pair or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {string} [option.typeOfValue] Determine value type.
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.typeOfValue !== "undefined");
	if (dispatch === true) {
		if (isString(option.typeOfValue) !== true) {
			throw new TypeError(`Argument \`option.typeOfValue\` must be type of string (non-nullable)!`);
		};
	};
	if (
		isObject(item) !== true ||
		Object.keys(item).length !== Object.values(item).length ||
		item.constructor.name !== "Object"
	) {
		return false;
	};
	let bin = item;
	while (Object.getPrototypeOf(bin) !== null) {
		bin = Object.getPrototypeOf(bin);
	};
	if (Object.getPrototypeOf(item) !== bin) {
		return false;
	};
	if (
		Object.entries(item).length === 0 ||
		Object.keys(item).length === 0
	) {
		return null;
	};
	if (dispatch === false) {
		return true;
	};
	return allIs([option.typeOfValue, option], ...Object.values(item));
};
module.exports = isObjectPair;
