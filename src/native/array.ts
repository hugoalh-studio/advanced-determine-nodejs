const arrayIndexRegExp = /^(?:0|[1-9]\d*)$/u;
/**
 * @function isArrayStrict
 * @description Determine the array is not contain custom defined properties.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isArrayStrict(item: unknown[]): boolean {
	let itemPrototype: any = Object.getPrototypeOf(item);
	if (
		(itemPrototype !== null && itemPrototype !== Array.prototype) ||
		Object.getOwnPropertySymbols(item).length > 0
	) {
		return false;
	}
	let itemDescriptors = Object.getOwnPropertyDescriptors(item);
	for (let itemPropertyKey in itemDescriptors) {
		if (Object.prototype.hasOwnProperty.call(itemDescriptors, itemPropertyKey)) {
			if (arrayIndexRegExp.test(itemPropertyKey) && Number(itemPropertyKey) < 4294967296) {
				let itemPropertyDescriptor: PropertyDescriptor = itemDescriptors[itemPropertyKey];
				if (
					!itemPropertyDescriptor.configurable ||
					!itemPropertyDescriptor.enumerable ||
					typeof itemPropertyDescriptor.get !== "undefined" ||
					typeof itemPropertyDescriptor.set !== "undefined" ||
					!itemPropertyDescriptor.writable
				) {
					return false;
				}
			} else if (itemPropertyKey === "length") {
				let itemPropertyDescriptor: PropertyDescriptor = itemDescriptors[itemPropertyKey] as PropertyDescriptor;
				if (
					itemPropertyDescriptor.configurable ||
					itemPropertyDescriptor.enumerable ||
					typeof itemPropertyDescriptor.get !== "undefined" ||
					typeof itemPropertyDescriptor.set !== "undefined" ||
					!itemPropertyDescriptor.writable
				) {
					return false;
				}
			} else {
				return false;
			}
		}
	}
	return true;
}
/**
 * @function isArrayUnique
 * @description Determine the array is contain unique elements.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isArrayUnique(item: unknown[]): boolean {
	return (new Set<unknown>(item).size === item.length);
}
export {
	isArrayStrict,
	isArrayUnique
};
