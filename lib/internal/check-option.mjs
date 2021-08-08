import isObject from "../is-object.mjs";
/**
 * @private
 * @function isObjectPairInternal
 * @param {any} item
 * @returns {(boolean|null)}
 */
function isObjectPairInternal(item) {
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
	return true;
};
/**
 * @private
 * @function checkOption
 * @param {any} option
 * @returns {void}
 */
function checkOption(option) {
	if (isObjectPairInternal(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
};
export default checkOption;
