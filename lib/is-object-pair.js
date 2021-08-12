const checkOption = require("./internal/check-option.js"),
	isObject = require("./is-object.js");
/**
 * @function isObjectPair
 * @alias isDict
 * @alias isDictionary
 * @alias isObjectPlain
 * @alias isObjPair
 * @alias isObjPlain
 * @description Determine item is type of object pair or not.
 * @param {any} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {function} [option.checkElement] An executable function to ensure element(s) type(s).
 * @returns {(boolean|null)} Determine result.
 */
function isObjectPair(item, option = {}) {
	checkOption(option);
	let dispatch = (typeof option.checkElement !== "undefined");
	if (dispatch === true) {
		if (typeof option.checkElement !== "function") {
			throw new TypeError(`Argument \`option.checkElement\` must be type of function!`);
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
	return Object.values(item).every((element) => {
		return option.checkElement(element);
	});
};
module.exports = isObjectPair;
