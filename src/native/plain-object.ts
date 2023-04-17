/**
 * @function isObjectPlain
 * @description Determine the object is plain.
 * @param {object} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isObjectPlain(item: object): boolean {
	if (Object.getPrototypeOf(item) !== null && Object.getPrototypeOf(item) !== Object.prototype) {
		return false;
	}
	let itemShadow: object = item;
	while (Object.getPrototypeOf(itemShadow) !== null) {
		itemShadow = Object.getPrototypeOf(itemShadow);
	}
	if (Object.getPrototypeOf(item) !== itemShadow) {
		return false;
	}
	return true;
}
export {
	isObjectPlain
};
